import { crypt } from '~/src/libs/helpers'

export function generate() {
  const key = crypt.randomBytes(32).toString('hex')
  const iv = crypt.randomBytes(16).toString('hex')
  return { key, iv }
}
