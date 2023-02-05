import { is } from '~/src/libs/functions/func'

export function anonymous(input) {
  const isFunc = is.func(input)

  let isFuncAnonymous = null

  if (isFunc) {
    if (input?.name == '') {
      isFuncAnonymous = true
    } else {
      isFuncAnonymous = false
    }
  }

  return {
    isFunc,
    isFuncAnonymous,
  }
}
