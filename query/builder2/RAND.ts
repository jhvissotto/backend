import { has } from '~/src/libs/functions/check'

// foo
export function RAND(key?: number | string) {
  // body
  return has.value(key) ? `RAND(${key})` : `RAND()`
}
