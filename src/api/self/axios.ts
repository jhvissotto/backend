import { env } from '~/src/global'
import { create } from '~/src/api/axios'
import { dt } from '~/src/libs/functions'

// prettier-ignore
export const axios = create({
  baseURL: env().API_SELF_BASE_URL,
}, {
  adapters: {
    cache: {
      enabledByDefault: env().API_SELF_CACHE_ENABLE,
    },
    cache_LRU: {
      ttl: dt.conv({ hr: env().API_SELF_CACHE_HOURS }).ms,
    }
  }
})
