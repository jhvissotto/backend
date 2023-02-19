import { is } from '../../'

export function vs(input) {
  return is.true.vs(input) || is.false.vs(input)
}
