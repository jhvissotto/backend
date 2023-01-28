import { env } from '~/src/global'
import { initialize } from './initialize'

export const { knex } = initialize({
  client: 'mysql2',
  connection: {
    user: env().DATABASE_USER,
    password: env().DATABASE_PASS,
    host: env().DATABASE_HOST,
    port: env().DATABASE_PORT,
    database: env().DATABASE_NAME,
  },
  debug: env().DATABASE_DEBUG,
  // useNullAsDefault: false,
})
