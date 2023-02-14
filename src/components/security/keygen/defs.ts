// libs
import { link } from '~/src/libs/functions'
// app
import { createDefs } from '~/src/components'
import { level } from '~/src/navigation'
// local
import type { SchemaReq } from '.'

export const defs = createDefs<SchemaReq.Params, SchemaReq.Query>({
  name: 'security_keygen',
  active: true,
  method: 'use',
  pattern: '/security/keygen',
  url: (p, q) => link.stringify(`/security/keygen`, q),
  user_levelReq: level.user.L0_Free.N,
  staff_levelReq: level.staff.L0_Dev.N,
  canSanitize: true,
  canCache: null,
})
