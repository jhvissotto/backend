import { env } from '~/src/global'

// prettier-ignore
export const config = {
    uri_database:   env().DATABASE_URL,
    uri_db:         env().DB_URL,
}
