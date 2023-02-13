import { env } from '~/src/global'
import { keyval } from '~/src/services'

export const main = keyval.create({
  namespace: 'main',
  uri: env().REDIS_URL,
})
