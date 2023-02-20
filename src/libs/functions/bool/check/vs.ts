import { is as check_is } from '../'

// prettier-ignore
export function vs(input) {
  
  const is = {
    True:   check_is.True.vs(input),
    False:  check_is.False.vs(input),
    Assign: check_is.Assign.vs(input),
    Virgin: check_is.Virgin.vs(input),
  }

  return {
    is,
    isTrue:   is.True,
    isFalse:  is.False,
    isAssign: is.Assign,
    isVirgin: is.Virgin,
  }
}
