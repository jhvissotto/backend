// global
import { config } from '~/src/global'
// libs
// import {} from '~/src/libs'
// app
import { ctrl } from '~/src'
import { crypt, bcrypt } from '~/src/security'
// local
import type { Schema } from '.'
import { defs } from '.'

// prettier-ignore
export async function _ctrl(
  req: ctrl.Req<Schema['params'], Schema['query'], Schema['body']>,
  res: ctrl.Res
) {
  const { params, query, body } = req
  const {} = req.params
  const { rounds } = req.query
  const { KEY, password } = req.body

  const { validation } = req
  const { locals } = res

  let resp = ctrl.newForm({
    cache_enable: defs.canCache,
    cache_duration: defs.canCache ? config().cacheDuration : '',
    validation_params: req.params,
    validation_query: req.query,
    validation_body: req.body,
    validation_isSanitized: validation.isSanitized,
    user_levelReq: defs.user_levelReq,
    token_user: req.token,
    errors: validation.errors,
  })


  // ======================================== //
  // ================ BCRYPT ================ //
  // ======================================== //

  // ======== salt ======== //
  const { salt } = bcrypt.salt_generate(rounds)


  // ======== hash ======== //
  const encryption = bcrypt.hash_make(password)
  
  if (encryption.error) locals.errors.push(encryption.error)

  

  // ======================================= //
  // ================ CRYPT ================ //
  // ======================================= //
  
  // ======== key & iv ======== //
  const { key, iv } = crypt.generate()
  
  
  // ======== key from app_key ======== //
  const convertion = crypt.keyFrom(KEY)

  if (convertion.isError) locals.errors.push(convertion.error)



  // ================ response ================ //
  resp = ctrl.newForm({
    ...resp,
    props: {
      // bcrypt
      bcrypt_salt: salt,
      bcrypt_passHash: encryption.hash,
      // crypt
      crypt_generated_iv: iv,
      crypt_generated_key: key,
      crypt_converted_key: convertion.result,
    },
    errors: resp.errors.concat(locals.errors),
  })

  return res.json(resp)
}
