// global
import { config } from '~/src/global'
// libs
import { promise } from '~/src/libs/helpers'
import { cast } from '~/src/libs/functions'
import { z } from '~/src/libs/helpers/schema'
// app
import { ctrl, E } from '~/src'
import { bcrypt, Token, crypt, formats } from '~/src/security'
import { auth } from '~/src/libs/helpers'
// local
import type { Schema } from '.'
import { defs, services } from '.'

// prettier-ignore
export async function _ctrl(
  req: ctrl.Req<Schema['params'], Schema['query'], Schema['body']>,
  res: ctrl.Res
) {
  const { params, query, body } = req
  const {} = req.params
  const {} = req.query
  const {} = req.body
  
  const { validation } = req
  const { locals } = res

  let resp = ctrl.newForm({
    res_version: 1,
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
  const { credentials } = auth.Basic.getCredentials(req)
  
  if (credentials.missingAny) {
    locals.errors.push(E.create("INVALID_CREDENTIALS"))
  }


  // ========================== //
  // ======== database ======== //
  // ========================== //
  const call = await promise.v3.props({
    user: services.getUserById({ pk: credentials.user })
  })

  const user = call.user?.itemFirst



  if (call.user.isError) {
    resp.errors_inDatabase = true
    locals.errors.push(call.user.error)
  }

  if (!call.user.isUnique) locals.errors.push(E.create('INVALID_USER'))
  
  resp.valid_user = call.user.isUnique



  
  // ========================== //
  // ======== password ======== //
  // ========================== //
  const check_pass = bcrypt.hash_match(
    cast.string(credentials.pass),
    cast.string(call.user.itemFirst?.passHash)
  )


  if (!check_pass.isValid) locals.errors.push(E.create('INVALID_PASS'))
  
  resp.valid_pass = check_pass.isValid




  // ======================= //
  // ======== token ======== //
  // ======================= //
  if (call.user.isUnique && check_pass.isValid) {

    
    const { subject, zSchema } = formats.USER_ACCESS
    type Payload = z.infer<typeof zSchema>


    const { ciphered } = crypt.cipher<Payload>({
      user_isStaff: user?.isStaff, 
      user_id:      user?.pk_user,
      user_level:   user?.level_user
    })

    const { token } = Token.create({ 
      payload: ciphered, 
      options: { subject } 
    })

    resp.token_server = token
  }


  
  resp = ctrl.newForm({
    ...resp, 
    user_isStaff: user?.isStaff,
    user_level:   user?.level_user,
    staff_level:  user?.level_staff,
    errors: resp.errors.concat(locals.errors),
  })

  return res.json(resp)
}
