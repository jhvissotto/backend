import { env } from '~/src/global'
import * as keyval from '../'

export const main = keyval.create({
  namespace: 'main',
  uri: env().REDIS_URL,
})
