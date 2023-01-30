import { env, config as global_config } from '~/src/global'
import { preset, keyFrom } from '.'

export const config = {
  algo: preset.algo.AES_192_CBC,
  key: keyFrom(env().APP_KEY_PRIVATE).result,
  iv: global_config().security_iv || '5de006283df4d5b5d3d457d9b35a6cf8',
}
