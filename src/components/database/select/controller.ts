import { E, ctrl } from '~/src'
import { config } from '~/src/global'
import type { SchemaReq } from '.'
import { defs, services } from '.'

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
    cache_duration: defs.canCache ? config().cacheDuration : '',
    validation_params: req.params,
    validation_query: req.query,
    validation_body: req.body,
    validation_isSanitized: validation.isSanitized,
    user_levelReq: defs.user_levelReq,
    token_user: req.token,
    errors: validation.errors,
  })

  const querySelect = await services.querySelect({
    ...params,
    ...query,
  })

  if (querySelect.isError) {
    resp.errors_inDatabase = true
    locals.errors.push(E.catcher(querySelect.error))
  }

  resp = ctrl.newForm({
    ...resp,
    list: querySelect.data,
    errors: locals.errors,
  })

  return res.json(resp)
}
