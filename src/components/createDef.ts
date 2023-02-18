import type { Methods } from '~/src/navigation/router'

// prettier-ignore
export function createDef<Params = {}, Query = {}>(props: {
  // controller
  name:     string
  active:   boolean
  method:   Methods
  pattern:  string
  url:      (params: Params, query: Query) => string
  // middlewares
  canSanitize:    boolean
  withAuth:       boolean
  user_levelReq:  number
  staff_levelReq: number
  canCache:       boolean
}) {
  return props
}
