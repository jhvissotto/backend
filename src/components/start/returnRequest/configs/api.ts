// libs
import { resolvers } from '~/src/libs/helpers/operators'
// app
import { Api } from '~/src'
// local
import type { SchemaReq } from '..'
import { defs } from '..'

// prettier-ignore
export async function api({ params, query, body }: {
  params?:  SchemaReq.Params
  query?:   SchemaReq.Query
  body?:    SchemaReq.Body
},
  opts?:    Parameters<typeof Api.self.axios>[1]
) {

  const call = await resolvers.obj.d(Api.self.axios({
    method: defs.method,
    url:    defs.url(params, query),
    data:   body,
    ...opts
  }))

  // console.log('>> call:', call)
  return call
}
