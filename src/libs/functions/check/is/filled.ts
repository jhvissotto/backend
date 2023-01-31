import { is } from '~/src/libs/functions/check'

export function filled(input: any) {
  return !is.empty(input)
}
