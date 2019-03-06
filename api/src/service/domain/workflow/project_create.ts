import Joi = require("joi");

import Intent from "../../../authz/intents";
import { Ctx } from "../../../lib/ctx";
import * as Result from "../../../result";
import { randomString } from "../../hash";
import { BusinessEvent } from "../business_event";
import { InvalidCommand } from "../errors/invalid_command";
import { NotAuthorized } from "../errors/not_authorized";
import { PreconditionError } from "../errors/precondition_error";
import { canAssumeIdentity } from "../organization/auth_token";
import { ServiceUser } from "../organization/service_user";
import { Permissions } from "../permissions";
import { GlobalPermissions, identitiesAuthorizedFor } from "./global_permissions";
import * as Project from "./project";
import * as ProjectCreated from "./project_created";
import { sourceProjects } from "./project_eventsourcing";
import { ProjectedBudget, projectedBudgetListSchema } from "./projected_budget";

/**
 * Initial data for the new project as given in the request.
 *
 * Looks a lot like `InitialData` in the domain layer's `project_created.ts`, except
 * that there are more optional fields that get initialized using default values.
 */
export interface RequestData {
  id?: string;
  status?: "open" | "closed";
  displayName: string;
  description?: string;
  assignee?: string;
  thumbnail?: string;
  projectedBudgets?: ProjectedBudget[];
}

const requestDataSchema = Joi.object({
  id: Project.idSchema,
  status: Joi.string().valid("open", "closed"),
  displayName: Joi.string().required(),
  description: Joi.string().allow(""),
  assignee: Joi.string(),
  thumbnail: Joi.string().allow(""),
  projectedBudgets: projectedBudgetListSchema,
});

export function validate(input: any): Result.Type<RequestData> {
  const { value, error } = Joi.validate(input, requestDataSchema);
  return !error ? value : error;
}

interface Repository {
  getGlobalPermissions(): Promise<GlobalPermissions>;
  projectExists(projectId: string): Promise<boolean>;
}

export async function createProject(
  ctx: Ctx,
  creatingUser: ServiceUser,
  data: RequestData,
  repository: Repository,
): Promise<{ newEvents: BusinessEvent[]; errors: Error[] }> {
  const source = ctx.source;
  const publisher = creatingUser.id;
  const createEvent = ProjectCreated.createEvent(source, publisher, {
    id: data.id || randomString(),
    status: data.status || "open",
    displayName: data.displayName,
    description: data.description || "",
    assignee: data.assignee || creatingUser.id,
    thumbnail: data.thumbnail || "",
    projectedBudgets: data.projectedBudgets || [],
    permissions: newDefaultPermissionsFor(creatingUser),
    additionalData: {},
  });

  if (await repository.projectExists(createEvent.project.id)) {
    return {
      newEvents: [],
      errors: [new PreconditionError(ctx, createEvent, "project already exists")],
    };
  }

  // Check authorization (if not root):
  if (creatingUser.id !== "root") {
    const permissions = await repository.getGlobalPermissions();
    const isAuthorized = identitiesAuthorizedFor(permissions, "global.createProject").some(
      identity => canAssumeIdentity(creatingUser, identity),
    );
    if (!isAuthorized) {
      return { newEvents: [], errors: [new NotAuthorized(ctx, creatingUser.id, createEvent)] };
    }
  }

  // Check that the event is valid by trying to "apply" it:
  const { errors } = sourceProjects(ctx, [createEvent]);
  if (errors.length > 0) {
    return { newEvents: [], errors: [new InvalidCommand(ctx, createEvent, errors)] };
  }

  return { newEvents: [createEvent], errors: [] };
}

function newDefaultPermissionsFor(user: ServiceUser): Permissions {
  // The user can always do anything anyway:
  if (user.id === "root") return {};

  const intents: Intent[] = [
    "project.intent.listPermissions",
    "project.intent.grantPermission",
    "project.intent.revokePermission",
    "project.viewSummary",
    "project.viewDetails",
    "project.assign",
    "project.update",
    "project.close",
    "project.archive",
  ];
  return intents.reduce((obj, intent) => ({ ...obj, [intent]: [user.id] }), {});
}