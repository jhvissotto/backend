// libs
import { resolvers } from "~/src/libs/helpers";
// app
import { self } from "~/src/api";
// local
import * as comp from "../";

// prettier-ignore
export async function api({ params, query, body }: {
  params: comp.SchemaReq.Params;
  query: comp.SchemaReq.Query;
  body: comp.SchemaReq.Body;
},
  opts: Parameters<typeof self.axios>[1]
) {
  return await resolvers.obj.d(self.axios({
    method: comp.defs.method,
    url: comp.defs.url(params, query),
    data: body,
    ...opts
  }));
}
