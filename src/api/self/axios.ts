import { env } from '~/src/global'
import { create } from '~/src/api/axios'
import { dt } from '~/src/libs/functions'

// prettier-ignore
export const axios = create({
  baseURL: env().BASE_URL,
}, {
  adapters: {
    cache: {
      enabledByDefault: env().CACHE_APISELF_ENABLE,
    },
    cache_LRU: {
      ttl: dt.conv({ hr: env().CACHE_APISELF_HOURS }).ms,
    }
  }
})
