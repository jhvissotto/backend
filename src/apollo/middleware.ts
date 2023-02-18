// libs
import { createMiddleware } from '~/src/libs/packs/Apollo'
import { auth } from '~/src/libs/helpers'
// app
import { apollo } from '~/src'
// local
import { Context } from '.'

// prettier-ignore
export const middleware = () => createMiddleware(apollo.server, { 
  // handler
  context: async ({ req, res }) => {

    // ============ request ============ //
    const { query, params, body } = req
    const {} = req.query
    const {} = req.params
    const {} = req.body



    // ============ parsers ============ //
    const token = req.headers?.token as string 
    // const { token } = auth.Bearer.getToken(req)



    // ============ context ============ //
    const ctx: Context = { token }
    return ctx
  },
})
