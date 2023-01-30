import { crypt } from '~/src/libs/utils'

// prettier-ignore
export function salt_generate(...[rounds, minor]: Parameters<typeof crypt.v1.salt_generate>) {
  const salt = crypt.v1.salt_generate(rounds, minor)
  return { salt }
}
