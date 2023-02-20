import { is } from '../../'

export function v(input) {
  return is.True.v(input) || is.False.v(input)
}
