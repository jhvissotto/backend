import { ctrl } from '~/src'
import { schema } from '.'

export async function _ctrl(
  req: ctrl.Req<schema.Req['params'], schema.Req['query'], schema.Req['body']>,
  res: ctrl.Res<schema.Res>
) {
  const { params, query, body } = req
  const {} = req.params
  const {} = req.query
  const {} = req.body

  const { validation } = req
  const { locals } = res

  return res.json({ welcome: 'Hello World' })
}
