import { env, config as global_config } from '~/src/global'

export const config = {
  secret: env().APP_KEY_PRIVATE || 'secret',
  issuer: global_config().appName || 'Backend',
  expiresIn: global_config().tokenExpiration || '3 hours',
}
