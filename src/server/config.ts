// global
import { env } from '~/src/global'
// libs
import { environment, cors } from '~/src/libs/helpers'

// prettier-ignore
export const config = {
  port:         env().PORT || 3000,
  cors_origin:  cors.parseAllowedOrigins(env().CORS_ORIGIN) || '*',
  logger_mode:  environment.check().isDev ? 'dev' : null
}
