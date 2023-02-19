import { is } from '../'

export function v(input) {
  const isTrue = is.true.v(input)
  const isFalse = is.false.v(input)
  const isAssign = is.assign.v(input)
  const isVirgin = is.virgin.v(input)

  return {
    isTrue,
    isFalse,
    isAssign,
    isVirgin,
  }
}
