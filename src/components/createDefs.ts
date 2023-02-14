import type { Methods } from '~/src/navigation/router'

export function createDefs<Params = {}, Query = {}>(props: {
  name: string
  active: boolean
  method: Methods
  pattern: string
  url: (params: Params, query: Query) => string
  user_levelReq: number
  staff_levelReq: number
  canSanitize: boolean | null
  canCache: boolean | null
}) {
  return props
}
