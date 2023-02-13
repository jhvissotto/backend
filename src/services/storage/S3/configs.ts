import { env } from '~/src/global'

// prettier-ignore
export const configs = {
    accessKeyId:        env().S3_KEY_PUBLIC,
    secretAccessKey:    env().S3_KEY_PRIVATE,
    Bucket:             env().S3_BUCKET,
}
