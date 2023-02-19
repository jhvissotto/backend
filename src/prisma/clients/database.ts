// libs
// import { Initialize } from '~/src/libs/packs/Prisma'
// local
import { config, generated } from '../'

export const database = new generated.database.PrismaClient({
  datasources: { db: { url: config.uri_database } },
})
