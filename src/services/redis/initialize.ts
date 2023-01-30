import { env } from '~/src/global'
import { createClient } from '~/src/libs/packs/Redis'

export function initialize() {
  //
  const client = createClient({
    url: env().REDIS_URL,
  })

  client.on('error', error => {
    console.warn('>> Redis onError:', error)
  })

  return { client }
}
