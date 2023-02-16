import { env } from '~/src/global'
import { Redis } from '~/src/libs/packs'

type Props = { db: number }
type Opts = Omit<Parameters<typeof Redis.createClient>[0], 'url' | 'db'>

export function createClient({ db }: Props, opts?: Opts) {
  //
  const client = Redis.createClient({
    url: env().REDIS_BASE_URL,
    db,
    ...opts,
  })

  client.on('error', error => {
    console.warn(`>> redisClient_${db} onError:`, error)
  })

  return client
}
