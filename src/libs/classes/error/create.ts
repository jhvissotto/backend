// import type { Constructor } from '.'
import { constructor, Thrower, dictionary } from '.'

// prettier-ignore
export function create(FLAG: keyof typeof dictionary) {
  const { name, message } = new Thrower(dictionary[FLAG])
  return { name, message }
}
