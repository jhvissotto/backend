import { is } from '../../'

export function v(input) {
  return is.true.v(input) || is.false.v(input)
}
