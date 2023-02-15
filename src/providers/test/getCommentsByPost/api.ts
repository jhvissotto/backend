// libs
import { resolvers } from '~/src/libs/helpers/operators'
// app
import { Api } from '~/src'
import { endpoints } from '~/src/providers/test'
// local
import { Response } from '.'

// select endpoint
type Schema = endpoints.getCommentsByPost.Schema
const defs = endpoints.getCommentsByPost.defs

// prettier-ignore
export async function api(
  req:   Schema, 
  opts?: Parameters<typeof Api.test.axios>[1]
) {
  
  
  const call = await resolvers.obj.d<Response>(Api.test.axios({
    method: defs.method,
    url:    defs.url(req?.params, req?.query),
    data:   req?.body,
    ...opts
  }))


  // console.log('>> call:', call)
  return call
}
