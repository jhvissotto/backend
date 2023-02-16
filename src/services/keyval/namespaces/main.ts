// global
import { env, config } from '~/src/global'
// libs
import { link } from '~/src/libs/helpers'
// local
import * as keyval from '../'

const baseUrl = env().REDIS_BASE_URL
const db = config().redisClientsDb.keyvalMain

export const main = keyval.create({
  namespace: 'main',
  uri: link.redis.stringify(baseUrl, db),
})
