// local
import { config, client } from '.'

export function prepare() {
  client.setApiKey(config.access.key_token)
}
