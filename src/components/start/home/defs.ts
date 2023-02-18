// libs
import { link } from '~/src/libs/functions'
// app
import { createDef } from '~/src/components'
import { level } from '~/src/navigation'
// local
import { schema } from '.'

export const defs = createDef<schema.Req['params'], schema.Req['query']>({
  name: 'home',
  active: true,
  method: 'get',
  pattern: '/',
  url: (p, q) => link.stringify(`/home`, q),
  user_levelReq: level.user.L0_Free.N,
  staff_levelReq: level.staff.L0_Dev.N,
  canSanitize: null,
  canCache: null,
})
