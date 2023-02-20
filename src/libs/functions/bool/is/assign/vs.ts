import { is } from '../../'

export function vs(input) {
  return is.True.vs(input) || is.False.vs(input)
}
