import { is } from '../'

export function vs(input) {
  const isTrue = is.true.vs(input)
  const isFalse = is.false.vs(input)
  const isAssign = is.assign.vs(input)
  const isVirgin = is.virgin.vs(input)

  return {
    isTrue,
    isFalse,
    isAssign,
    isVirgin,
  }
}
