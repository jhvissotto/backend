// libs
import { link } from '~/src/libs/functions'
// app
import { createDef } from '~/src/components'
import { level } from '~/src/navigation'
// local
import { schema } from '.'

// prettier-ignore
export const defs = createDef<schema.Req['params'], schema.Req['query']>({
  // controller
  name:     'test',
  active:   true,
  method:   'get',
  pattern:  '/test',
  url:      (p, q) => link.stringify(`/test`, q),
  // middlewares
  canSanitize:    null,
  withAuth:       null,
  user_levelReq:  level.user.L0_Free.N,
  staff_levelReq: level.staff.L0_Dev.N,
  canCache:       null,
})
