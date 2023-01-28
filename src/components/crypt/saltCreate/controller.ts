import { config } from '~/src/global'
import { ctrl } from '~/src'
import { crypt } from '~/src/security'
import type { SchemaReq } from '.'
import { defs } from '.'

export async function _ctrl(
  req: ctrl.Req<SchemaReq.Params, SchemaReq.Query, SchemaReq.Body>,
  res: ctrl.Res
) {
  const { params, query, body } = req
  const {} = req.params
  const { rounds } = req.query
  const {} = req.body

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

  const { salt } = crypt.salt_create(rounds)

  resp = ctrl.newForm({
    ...resp,
    props: {
      salt,
    },
  })

  return res.json(resp)
}
