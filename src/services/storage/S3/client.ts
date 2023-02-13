import { AWS } from '~/src/libs/packs'
import { configs } from '.'

// prettier-ignore
export const client = new AWS.S3.Connect({
  accessKeyId:      configs.accessKeyId,
  secretAccessKey:  configs.secretAccessKey,
})
