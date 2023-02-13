import { env } from '~/src/global'
import { keyval } from '~/src/services'

export const apollo = keyval.create({
  namespace: 'apollo',
  uri: env().REDIS_URL,
})
