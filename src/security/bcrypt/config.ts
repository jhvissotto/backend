import { config as global_cofing } from '~/src/global'

export const config = {
  salt: global_cofing().security_salt || '$2b$10$BpiAbfRC6aNum2lC6CA0oO',
}
