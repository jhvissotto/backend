import { env } from '~/src/global'
import { client } from '.'

export function prepare() {
  client.setApiKey(env().SGM_KEY_TOKEN)
}
