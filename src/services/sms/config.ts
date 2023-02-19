// global
import { env } from '~/src/global'

// prettier-ignore
export const config = {
  apiKey:    env().NEXMO_KEY_PUBLIC,
  apiSecret: env().NEXMO_KEY_PRIVATE,
}
