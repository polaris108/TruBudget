import { AllowedUserGroupsByIntent } from "../authz/types";
import { MultichainClient, Stream, StreamTxId, StreamBody } from "../multichain";

export interface Project {
  id: string;
  creationUnixTs: string;
  status: "open" | "done";
  displayName: string;
  description?: string;
  amount: string;
  currency: string;
  thumbnail?: string;
  permissions?: AllowedUserGroupsByIntent;
}

export interface ProjectStreamMetadata {
  displayName: string;
  creationUnixTs: string;
  status: "open" | "done";
  description?: string;
  amount: string;
  currency: string;
  thumbnail?: string;
}

const val = val => {
  if (typeof val === "undefined") {
    throw "undefined";
  } else {
    return val;
  }
};

const asProject = (streamId: string, meta: ProjectStreamMetadata): Project => {
  return {
    id: streamId,
    creationUnixTs: val(meta.creationUnixTs),
    status: val(meta.status),
    displayName: val(meta.displayName),
    description: meta.description,
    amount: val(meta.amount),
    currency: val(meta.currency),
    thumbnail: meta.thumbnail
  };
};

interface Ok<T> {
  kind: "value";
  body: T;
}
interface Err<T> {
  kind: "error";
  body: T;
  error: any;
}
type Result<U, V> = Ok<U> | Err<V>;

const isProject = (stream: Stream): boolean => stream.details.kind === "project";

const getStreamBody = (multichain: MultichainClient) => (
  stream: Stream
): Promise<Result<[Stream, StreamBody], Stream>> => {
  // Promise.all aborts on the first reject, so we convert rejects to resolves:
  return new Promise((resolve, _reject) =>
    multichain
      .streamBody(stream)
      .then((body: StreamBody) => resolve({ kind: "value", body: [stream, body] }))
      .catch(err => resolve({ kind: "error", body: stream, error: err }))
  );
};

const makeProjectFromResult = (result: Result<[Stream, StreamBody], Stream>): Project | null => {
  if (result.kind === "value") {
    const [stream, body] = result.body;
    console.log(result.body);
    try {
      return asProject(stream.name, body.metadata as ProjectStreamMetadata);
    } catch (err) {
      result = {
        kind: "error",
        body: stream,
        error: "Invalid metadata."
      };
    }
  }
  const { body: stream, error } = result;
  console.log(`Cannot parse project from stream ${stream.name || stream.createtxid}: ${error}`);
  return null;
};

export class ProjectModel {
  multichain: MultichainClient;

  constructor(multichain: MultichainClient) {
    this.multichain = multichain;
  }

  async list(authorized): Promise<Project[]> {
    const streams: Stream[] = await this.multichain.streams();
    console.log(`:streams=${JSON.stringify(streams)}`);
    const projects: Project[] = (await Promise.all<Result<[Stream, StreamBody], Stream>>(
      streams.filter(isProject).map(getStreamBody(this.multichain))
    ))
      .map(makeProjectFromResult)
      .filter((x: Project | null) => x !== null) as Project[];
    console.log(`:all projects=${JSON.stringify(projects)}`);
    const clearedProjects = (await Promise.all(
      projects.map(p =>
        authorized(p.permissions)
          .then(() => p)
          .catch(err => null)
      )
    )).filter(x => x !== null);
    console.log(`:cleared projects=${JSON.stringify(clearedProjects)}`);
    return clearedProjects;
  }

  async createProject(body, authorized): Promise<string> {
    /* TODO root permissions */
    const rootPermissions = new Map<string, string[]>();
    await authorized(rootPermissions); // throws if unauthorized

    const issuer = "alice";
    const txid: StreamTxId = await this.multichain.createStream({
      kind: "project",
      metadata: {
        displayName: "test",
        creationUnixTs: new Date().getTime().toString(),
        amount: "10",
        currency: "EUR",
        status: "open"
      },
      initialLogEntry: { issuer, action: "created_project" },
      permissions: [["subproject.create", ["alice"]]]
    });

    console.log(`${issuer} has created a new project (txid=${txid})`);
    return txid;
  }
}
