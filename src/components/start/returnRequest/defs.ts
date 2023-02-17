// libs
import { link } from '~/src/libs/functions'
// app
import { createDefs } from '~/src/components'
import { level } from '~/src/navigation'
// local
import { schema } from '.'

export const defs = createDefs<schema.Req['params'], schema.Req['query']>({
  name: 'returnRequest',
  active: true,
  method: 'get',
  pattern: '/returnRequest',
  url: (p, q) => link.stringify(`/returnRequest`, q),
  user_levelReq: level.user.L0_Free.N,
  staff_levelReq: level.staff.L0_Dev.N,
  canSanitize: null,
  canCache: null,
})
