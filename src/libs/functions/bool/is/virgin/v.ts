import { is } from '../../'

export function v(input) {
  return !is.Assign.v(input)
}
