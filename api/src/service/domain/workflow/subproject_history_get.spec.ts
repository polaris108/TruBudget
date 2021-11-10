import { assert } from "chai";

import { Ctx } from "lib/ctx";
import * as Result from "../../../result";
import { BusinessEvent } from "../business_event";
import { NotAuthorized } from "../errors/not_authorized";
import { NotFound } from "../errors/not_found";
import { ServiceUser } from "../organization/service_user";
import { Permissions } from "../permissions";
import { Filter } from "./historyFilter";
import { Subproject } from "./subproject";
import { getHistory } from "./subproject_history_get";
import { SubprojectTraceEvent } from "./subproject_trace_event";

const ctx: Ctx = { requestId: "", source: "test" };
const address = "address";
const root: ServiceUser = { id: "root", groups: [], address };
const alice: ServiceUser = { id: "alice", groups: [], address };
const projectId = "dummy-project";
const subprojectId = "dummy-subproject";
const subprojectName = "dummy-Name";
const date = new Date().toISOString();

const filter: Filter = {
  publisher: alice.id,
  startAt: date,
  endAt: date,
  eventType: "subproject_created",
};

const permissions: Permissions = {
  "subproject.viewDetails": ["alice"],
  "subproject.viewHistory": ["alice"],
};

const event: SubprojectTraceEvent = {
  entityId: alice.id,
  entityType: "subproject",
  businessEvent: {
    type: "subproject_created",
    source: "",
    time: date,
    publisher: alice.id,
    projectId,
    subproject: {
      id: subprojectId,
      status: "open",
      assignee: alice.id,
      displayName: "subproject",
      description: "some description",
      currency: "",
      projectedBudgets: [],
      permissions: {},
      additionalData: {},
    },
  },
  snapshot: {
    displayName: "",
  },
};

const baseSubproject: Subproject = {
  id: subprojectId,
  projectId: subprojectId,
  createdAt: new Date().toISOString(),
  status: "open",
  displayName: subprojectName,
  description: subprojectName,
  assignee: alice.id,
  currency: "EUR",
  projectedBudgets: [],
  permissions,
  log: [event],
  workflowitemOrdering: [],
  additionalData: {},
};

const baseRepository = {
  getSubproject: async () => baseSubproject,
};

describe("get subproject history: authorization", () => {
  it("Without the required permissions, a user cannot get a subproject's history.", async () => {
    const notPermittedSubproject: Subproject = {
      ...baseSubproject,
      permissions: {},
    };
    const result = await getHistory(ctx, alice, projectId, subprojectId, {
      ...baseRepository,
      getSubproject: async () => notPermittedSubproject,
    });
    assert.instanceOf(result, NotAuthorized);
  });

  it("With the required permissions, a user can get a subproject's history.", async () => {
    const result = await getHistory(ctx, alice, projectId, subprojectId, baseRepository);
    assert.isTrue(Result.isOk(result), (result as Error).message);
  });

  it("With only viewDetials permissions, a user can still get a subproject's history.", async () => {
    const modifiedSubproject: Subproject = {
      ...baseSubproject,
      permissions: { "subproject.viewDetails": ["alice"] },
    };
    const result = await getHistory(ctx, alice, projectId, subprojectId, {
      ...baseRepository,
      getSubproject: async () => modifiedSubproject,
    });
    assert.isTrue(Result.isOk(result), (result as Error).message);
  });

  it("With only viewHistory permissions, a user can still get a subproject's history.", async () => {
    const modifiedSubproject: Subproject = {
      ...baseSubproject,
      permissions: { "subproject.viewHistory": ["alice"] },
    };
    const result = await getHistory(ctx, alice, projectId, subprojectId, {
      ...baseRepository,
      getSubproject: async () => modifiedSubproject,
    });
    assert.isTrue(Result.isOk(result), (result as Error).message);
  });

  it("The root user doesn't need permission to get a subproject's history.", async () => {
    const result = await getHistory(ctx, alice, projectId, subprojectId, baseRepository);
    assert.isTrue(Result.isOk(result), (result as Error).message);
  });
});

describe("get subproject history: preconditions", () => {
  it("Getting a subproject's history fails if the subproject cannot be found", async () => {
    const result = await getHistory(ctx, alice, projectId, subprojectId, {
      ...baseRepository,
      getSubproject: async () => new Error("some error"),
    });
    assert.isTrue(Result.isErr(result));
    assert.instanceOf(result, NotFound);
  });

  it("the properties of the filter must match the resulted properties exactly", async () => {
    const result = await getHistory(ctx, root, projectId, subprojectId, baseRepository, filter);
    assert.equal(result[0].businessEvent.publisher, alice.id);
    assert.isTrue(filter.startAt && result[0].businessEvent.time >= filter.startAt);
    assert.isTrue(filter.endAt && result[0].businessEvent.time <= filter.endAt);
    assert.equal(result[0].businessEvent.type, filter.eventType);
  });

  it("if one property of the result doesn't match the filter the event is not returned", async () => {
    const editedFilter: Filter = {
      ...filter,
      publisher: root.id,
    };
    const result = await getHistory(
      ctx,
      root,
      projectId,
      subprojectId,
      baseRepository,
      editedFilter,
    );
    assert.isTrue(Result.isOk(result), (result as Error).message);
    assert.isEmpty(result);
  });
  it("if there are more events in a subproject's history only the one matching the filter is returned", async () => {
    const anotherBusinessEvent: BusinessEvent = {
      type: "subproject_closed",
      source: "",
      time: date,
      publisher: alice.id,
      projectId,
      subprojectId,
    };
    const newEvent: SubprojectTraceEvent = {
      ...event,
      businessEvent: anotherBusinessEvent,
    };
    const updatedSubproject: Subproject = {
      ...baseSubproject,
      log: [event, newEvent],
    };

    const result = await getHistory(
      ctx,
      root,
      projectId,
      subprojectId,
      {
        getSubproject: async () => updatedSubproject,
      },
      filter,
    );
    assert.equal(Result.unwrap(result).length, 1);
    assert.equal(result[0].businessEvent.publisher, alice.id);
    assert.isTrue(filter.startAt && result[0].businessEvent.time >= filter.startAt);
    assert.isTrue(filter.endAt && result[0].businessEvent.time <= filter.endAt);
    assert.equal(result[0].businessEvent.type, filter.eventType);
  });
});
