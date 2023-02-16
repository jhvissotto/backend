// global
import { env, config } from '~/src/global'
// libs
import { link } from '~/src/libs/helpers'
// local
import * as keyval from '../'

const baseUrl = env().REDIS_BASE_URL
const db = config().redisClientsDb.serverApollo

export const apollo = keyval.create({
  namespace: 'apollo',
  uri: link.redis.stringify(baseUrl, db),
})
