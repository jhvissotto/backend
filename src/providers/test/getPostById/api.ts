// libs
import { resolvers } from '~/src/libs/helpers/operators'
// app
import { Api } from '~/src'
import { endpoints } from '~/src/providers/test'
// local
import { Response } from '.'

// select endpoint
type Schema = endpoints.getPostById.Schema
const defs = endpoints.getPostById.defs

// prettier-ignore
export async function api({ params, query, body }: {
  params?:  Schema['params']
  query?:   Schema['query']
  body?:    Schema['body']
}, 
  opts?:    Parameters<typeof Api.test.axios>[1]
) {
  
  const call = await resolvers.obj.d<Response>(Api.test.axios({
    method: defs.method,
    url:    defs.url(params, query),
    data:   body,
    ...opts
  }))

  // console.log('>> call:', call)
  return call
}
