import { is } from '~/src/libs/functions/check'
import { cast } from '~/src/libs/functions'

// prettier-ignore
export function join(arr = [], char = ',') {
  return arr
    .filter(is.filled)
    .map(cast.string)
    .join(char)
}
