// libs
import { resolvers } from '~/src/libs/helpers/operators'
// app
import { Api } from '~/src'
// local
import { schema, defs } from '..'

// prettier-ignore
export async function api(
  req:   schema.Req,
  opts?: Parameters<typeof Api.self.axios>[1]
) {


  const call = await resolvers.obj.d<schema.Res>(
    Api.self.axios({
      method: defs.method,
      url:    defs.url(req?.params, req?.query),
      data:   req?.body,
      ...opts
    })
  )

  
  // console.log('call', call)
  return call
}
