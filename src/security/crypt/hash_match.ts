import { crypt } from '~/src/libs/utils'

export function hash_match(...[password, hash]: Parameters<typeof crypt.v2.hash_match>) {
  const result = crypt.v2.hash_match(password, hash)
  return result
}
