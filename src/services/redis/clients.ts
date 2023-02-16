// global
import { config } from '~/src/global'
// local
import { createClient } from '.'

export type Clients = 'express' | 'apollo'

export const clients = {
  express: createClient({ db: config().redisClientsDb.serverExpress }),
  apollo: createClient({ db: config().redisClientsDb.serverApollo }),
}
