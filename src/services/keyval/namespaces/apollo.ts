import { env } from '~/src/global'
import * as keyval from '../'

export const apollo = keyval.create({
  namespace: 'apollo',
  uri: env().REDIS_URL,
})
