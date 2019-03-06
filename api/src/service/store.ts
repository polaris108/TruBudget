import { VError } from "verror";

import { Ctx } from "../lib/ctx";
import logger from "../lib/logger";
import { ConnToken } from "./conn";
import { BusinessEvent } from "./domain/business_event";
import { randomString } from "./hash";

export async function store(conn: ConnToken, ctx: Ctx, event: BusinessEvent): Promise<void> {
  switch (event.type) {
    case "global_permissions_granted":
    case "global_permissions_revoked":
      await ensureStreamExists(conn, ctx, "global", "global");
      return writeTo(conn, ctx, { stream: "global", keys: ["permissions"], event });

    case "user_created":
      await ensureStreamExists(conn, ctx, "users", "users");
      return writeTo(conn, ctx, { stream: "users", keys: [event.user.id], event });

    case "project_created":
      const streamName = event.project.id;
      await ensureStreamExists(conn, ctx, streamName, "project");
      return writeTo(conn, ctx, { stream: streamName, keys: ["self"], event });

    case "project_updated":
    case "project_permission_granted":
      return writeTo(conn, ctx, { stream: event.projectId, keys: ["self"], event });

    case "subproject_created":
      return writeTo(conn, ctx, {
        stream: event.projectId,
        keys: ["subprojects", event.subproject.id],
        event,
      });

    case "workflowitem_created":
      return writeTo(conn, ctx, {
        stream: event.projectId,
        keys: [`${event.subprojectId}_workflows`, event.workflowitem.id],
        event,
      });

    default:
      return Promise.reject(Error(`Not implemented: store(${JSON.stringify(event)})`));
  }
}

async function ensureStreamExists(conn: ConnToken, ctx: Ctx, name: string, kind: string) {
  const isPublic = true; // in multichain terms: isOpen
  const customFields = { kind };
  await conn.multichainClient
    .getRpcClient()
    .invoke("create", "stream", name, isPublic, customFields)
    .then(() => logger.debug({ ctx }, `New ${kind} stream created: ${name}`))
    .catch(err => {
      if (err && err.code === -705) {
        // Code -705 means the stream already exists - that's fine.
        return;
      }
      throw new VError(err, `could not create ${kind} stream "${name}"`);
    });
}

async function writeTo(
  conn: ConnToken,
  ctx: Ctx,
  { stream, keys, event }: { stream: string; keys: string[]; event: BusinessEvent },
) {
  const streamitem = { json: event };
  logger.debug({ ctx }, `Publishing ${event.type} to ${stream}/${keys}`);
  // TODO publishfrom address
  await conn.multichainClient.getRpcClient().invoke("publish", stream, keys, streamitem);
}