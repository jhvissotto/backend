import { is } from '../'

export function v(input) {
  const isTrue = is.True.v(input)
  const isFalse = is.False.v(input)
  const isAssign = is.Assign.v(input)
  const isVirgin = is.Virgin.v(input)

  return {
    isTrue,
    isFalse,
    isAssign,
    isVirgin,
  }
}
