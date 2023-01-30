// libs
import { qs } from '~/src/libs/utils/link'
// app
import { createDef } from '~/src/components'
import { level } from '~/src/navigation'
// local
import type { SchemaReq } from '.'

export const defs = createDef<SchemaReq.Params, SchemaReq.Query>({
  name: 'security_keygen',
  active: true,
  method: 'use',
  pattern: '/security/keygen',
  url: (params, query) => qs.v2.stringifyUrl({ url: `/security/keygen`, query }),
  user_levelReq: level.user.L0_Free.N,
  staff_levelReq: level.staff.L0_Dev.N,
  canSanitize: true,
  canCache: null,
})
