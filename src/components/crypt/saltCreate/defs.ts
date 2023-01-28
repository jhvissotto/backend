import type { SchemaReq } from '.'
import { createDef } from '~/src/components'
import { level } from '~/src/navigation'
import { qs } from '~/src/libs/utils/url'

export const defs = createDef<SchemaReq.Params, SchemaReq.Query>({
  name: 'crypt_saltCreate',
  active: true,
  method: 'get',
  pattern: '/crypt/saltCreate',
  url: (params, query) => qs.v2.stringifyUrl({ url: `/crypt/saltCreate`, query }),
  user_levelReq: level.user.L0_Free.N,
  staff_levelReq: level.staff.L0_Dev.N,
  canSanitize: true,
  canCache: null,
})
