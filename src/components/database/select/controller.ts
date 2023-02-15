import { E, ctrl } from '~/src'
import { config } from '~/src/global'
import type { Schema } from '.'
import { defs, services } from '.'

export async function _ctrl(
  req: ctrl.Req<Schema['params'], Schema['query'], Schema['body']>,
  res: ctrl.Res
) {
  const { params, query, body } = req
  const { table } = req.params
  const { wk, we, wv, items, page, randKey } = req.query
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

  // prettier-ignore
  const querySelect = await services.querySelect({
    table, wk, we, wv, items, page, randKey,
  })

  if (querySelect.isError) {
    resp.errors_inDatabase = true
    locals.errors.push(querySelect.error)
    // locals.errors.push(E.catcher(querySelect.error))
  }

  resp = ctrl.newForm({
    ...resp,
    list: querySelect.data,
    errors: resp.errors.concat(locals.errors),
  })

  return res.json(resp)
}
