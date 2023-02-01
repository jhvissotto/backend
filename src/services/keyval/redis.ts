import { env } from '~/src/global'
import { KeyVal } from '~/src/libs/helpers'

export const redis = new KeyVal({
  // namespace: "root",
  uri: env().REDIS_URL,
})
