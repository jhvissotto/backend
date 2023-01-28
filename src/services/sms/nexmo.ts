import { Nexmo } from '~/src/libs/packs'
import { env } from '~/src/global'

export const nexmo = new Nexmo({
  apiKey: env().NEXMO_KEY_PUBLIC,
  apiSecret: env().NEXMO_KEY_PRIVATE,
})
