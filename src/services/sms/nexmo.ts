// libs
import { Nexmo } from '~/src/libs/packs'
// local
import { config } from '.'

// prettier-ignore
export const nexmo = new Nexmo.Initialize({
  apiKey:    config.apiKey,
  apiSecret: config.apiSecret,
})
