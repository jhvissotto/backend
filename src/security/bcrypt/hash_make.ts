import { config } from '~/src/global'
import { crypt } from '~/src/libs/utils'

type Args = Parameters<typeof crypt.v1.hash_make>

export function hash_make(password: Args[0], saltOrRounds?: Args[1]) {
  // foo
  const result = crypt.v2.hash_make(password, saltOrRounds || config().salt)
  return result
}
