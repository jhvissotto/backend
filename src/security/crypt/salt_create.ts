import { crypt } from '~/src/libs/utils'

export function salt_create(...args: Parameters<typeof crypt.v1.salt_create>) {
  const salt = crypt.v1.salt_create(...args)
  return { salt }
}
