import { web } from '~/src'

// prettier-ignore
export function createDefs<Params = {}, Query = {}>(props: {
  name:   string
  method: web.Methods
  url:    (params: Params, query: Query) => string
}) {
  return props
}
