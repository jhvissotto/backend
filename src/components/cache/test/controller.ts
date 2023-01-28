import { ctrl } from '~/src'
import type { SchemaReq } from '.'

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

  const now = Date.now()
  const datetime = Date()

  return res.json({ now, datetime })
}
