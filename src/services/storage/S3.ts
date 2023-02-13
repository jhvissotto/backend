import { env } from '~/src/global'
import { AWS } from '~/src/libs/packs'

export const S3 = new AWS.S3({
  accessKeyId: env().S3_KEY_PUBLIC,
  secretAccessKey: env().S3_KEY_PRIVATE,
})
