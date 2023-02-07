import { has } from '~/src/libs/functions/check'
import { Args } from '../Args'

// foo
export function RAND(key?: Args.RandKey) {
  // body
  return has.value(key) ? `RAND(${key})` : `RAND()`
}
