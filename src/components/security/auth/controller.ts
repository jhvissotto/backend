// global
import { config } from '~/src/global'
// libs
import { promise } from '~/src/libs/helpers'
import { cast } from '~/src/libs/functions'
import { z } from '~/src/libs/helpers/schema'
// app
import { ctrl, E } from '~/src'
import { bcrypt, Token, crypt, formats } from '~/src/security'
import { getCredentials } from '~/src/libs/helpers/parse'
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
    locals.errors.push(E.create("INVALID_CREDENTIALS"))
  }



  // ========================== //
  // ======== database ======== //
  // ========================== //
  const { check_user, check_staff } = await promise.v3.props({
    check_user:   services.getUserInfoById({ id_user: credentials.user }),
    check_staff:  services.getStaffById({ id_user: credentials.user }),
  })



  
  if (check_user.isError) {
    resp.errors_inDatabase = true
    locals.errors.push(check_user.error)
  }

  if (!check_user.isUnique) locals.errors.push(E.create('INVALID_USER'))
  
  resp.valid_user = check_user.isUnique






  if (check_staff.isError) {
    resp.errors_inDatabase = true
    locals.errors.push(check_staff.error)
  }

  if (!check_staff.isUnique) locals.errors.push(E.create('INVALID_USER'))
  
  resp.valid_user = check_staff.isUnique





  
  // ========================== //
  // ======== password ======== //
  // ========================== //
  const check_pass = bcrypt.hash_match(
    cast.string(credentials.pass),
    cast.string(check_user.itemFirst?.passHash)
  )


  if (!check_pass.isValid) locals.errors.push(E.create('INVALID_PASS'))
  
  resp.valid_pass = check_pass.isValid


  // ======================= //
  // ======== token ======== //
  // ======================= //
  if (check_user.isUnique && check_pass.isValid) {

    
    const { subject, zSchema } = formats.USER_ACCESS
    type Payload = z.infer<typeof zSchema>


    const { ciphered } = crypt.cipher<Payload>({
      // user_isStaff: 
      user_id: credentials.user,
      user_level: check_user.itemFirst.pk_level
    })

    const { token } = Token.create({ 
      payload: ciphered, 
      options: { subject } 
    })

    resp.token_server = token
  }



  
  resp = ctrl.newForm({
    ...resp, 
    errors: resp.errors.concat(locals.errors),
  })

  return res.json(resp)
}
