import { has } from '~/src/libs/functions/check'
import { Args } from '~/src/database/query/builder'

// foo
export function RAND(key?: Args.RandKey) {
  // body
  return has.value(key) ? `RAND(${key})` : `RAND()`
}
