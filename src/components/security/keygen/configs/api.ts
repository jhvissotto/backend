// libs
import { resolvers } from '~/src/libs/helpers/operators'
// app
import { Api } from '~/src'
// local
import type { Schema } from '..'
import { defs } from '..'

// prettier-ignore
export async function api(
  req:   Schema,
  opts?: Parameters<typeof Api.self.axios>[1]
) {


  const call = await resolvers.obj.d(Api.self.axios({
    method: defs.method,
    url:    defs.url(req?.params, req?.query),
    data:   req?.body,
    ...opts
  }))

  
  // console.log('>> call:', call)
  return call
}
