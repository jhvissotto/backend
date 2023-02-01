// libs
import { resolvers } from '~/src/libs/helpers/operators'
// app
import { self } from '~/src/api'
// local
import type { SchemaReq } from '..'
import { defs } from '..'

// prettier-ignore
export async function api({ params, query, body }: {
  params: SchemaReq.Params;
  query: SchemaReq.Query;
  body: SchemaReq.Body;
},
  opts: Parameters<typeof self.axios>
) {
  return await resolvers.obj.d(self.axios({
    method: defs.method,
    url: defs.url(params, query),
    data: body,
    ...opts
  }));
}
