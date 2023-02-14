import { env } from '~/src/global'
import { create } from '~/src/api/axios'
import { dt } from '~/src/libs/functions'

// prettier-ignore
export const axios = create({
  baseURL: env().API_TEST_BASE_URL,
}, {
  adapters: {
    cache: {
      enabledByDefault: env().API_TEST_CACHE_ENABLE,
    },
    cache_LRU: {
      ttl: dt.conv({ hr: env().API_TEST_CACHE_HOURS }).ms,
    }
  }
})
