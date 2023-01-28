// libs
import { cast } from '~/src/libs/functions'
import { z } from '~/src/libs/utils/validator'
// app
import { ctrl, E } from '~/src'
import { config } from '~/src/global'
import { crypt, Token } from '~/src/security'
import { getCredentials } from '~/src/libs/helpers/parse'
// local
import type { SchemaReq } from '.'
import { defs, services } from '.'

// prettier-ignore
export async function _ctrl(
  req: ctrl.Req<SchemaReq.Params, SchemaReq.Query, SchemaReq.Body>,
  res: ctrl.Res
) {
  const { params, query, body } = req
  const {} = req.params
  const {} = req.query
  const {} = req.body
  
  const { validation } = req
  const { locals } = res

  let resp = ctrl.newForm({
    cache_enable: defs.canCache,
    cache_duration: defs.canCache ? config().cacheDuration : "",
    validation_params: req.params,
    validation_query: req.query,
    validation_body: req.body,
    validation_isSanitized: validation.isSanitized,
    user_levelReq: defs.user_levelReq,
    token_user: req.token,
    errors: validation.errors
  })


  // ============================= //
  // ======== credentials ======== //
  // ============================= //
  const { credentials } = getCredentials(req)
  
  if (credentials.missingAny) {
    locals.errors.push(E.create("MISSING_CREDENTIALS"))
  }


  // ========================== //
  // ======== database ======== //
  // ========================== //
  const check_user = await services.getUserInfoById({
    id_user: credentials.user
  })


  if (check_user.isError) {
    resp.errors_inDatabase = true
    locals.errors.push(E.catcher(check_user.error))
  }

  if (!check_user.isUnique) locals.errors.push(E.create('INVALID_USER'))
  
  resp.valid_user = check_user.isUnique


  
  // ========================== //
  // ======== password ======== //
  // ========================== //
  const check_pass = crypt.hash_match(
    cast.string(credentials.pass),
    cast.string(check_user.itemFirst?.passHash)
  )


  if (!check_pass.isValid) locals.errors.push(E.create('INVALID_PASS'))
  
  resp.valid_pass = check_pass.isValid


  // ======================= //
  // ======== token ======== //
  // ======================= //
  if (check_user.isUnique && check_pass.isValid) {

    const { subject, payload } = Token.defs.USER_ACCESS
    const { token } = Token.create<z.infer<typeof payload>>({ 
      payload: {
        user_id: credentials.user,
        user_level: check_user.itemFirst.pk_level
      }  
    }, null, { subject })

    resp.token_server = token
  }



  resp = ctrl.newForm({
    ...resp, 
    errors: locals.errors 
  })

  return res.json(resp)
}
