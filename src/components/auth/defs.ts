// libs
import { qs } from '~/src/libs/utils/url'
// app
import { createDef } from '~/src/components'
import { level } from '~/src/navigation'
// local
import { SchemaReq } from '.'

export const defs = createDef<SchemaReq.Params, SchemaReq.Query>({
  name: 'auth',
  active: true,
  method: 'get',
  pattern: '/auth',
  url: (params: SchemaReq.Params, query: SchemaReq.Query) =>
    qs.v2.stringifyUrl({ url: `/auth`, query }),
  user_levelReq: level.user.L0_Public.N,
  staff_levelReq: level.staff.L0_Dev.N,
  canSanitize: null,
  canCache: false,
})
