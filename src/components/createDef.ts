import type { Methods } from '~/src/navigation/router'

export function createDef<Params = {}, Query = {}>({
  name,
  active,
  method,
  pattern,
  url,
  user_levelReq,
  staff_levelReq,
  canSanitize,
  canCache,
}: {
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
  return {
    name,
    active,
    method,
    pattern,
    url,
    user_levelReq,
    staff_levelReq,
    canSanitize,
    canCache,
  }
}
