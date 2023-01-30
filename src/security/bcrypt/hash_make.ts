import { crypt } from '~/src/libs/utils'
import { config } from '.'

type Password = Parameters<typeof crypt.v1.hash_make>[0]
type SaltOrRounds = Parameters<typeof crypt.v1.hash_make>[1]

// prettier-ignore
export function hash_make(...[password, saltOrRounds = config.salt]: [Password, SaltOrRounds?]) {
  // foo
  const result = crypt.v2.hash_make(password, saltOrRounds)
  return result
}
