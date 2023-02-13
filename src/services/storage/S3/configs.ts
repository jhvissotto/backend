import { env } from '~/src/global'

// prettier-ignore
export const configs = {
    accessKeyId:        env().S3_KEY_PUBLIC,
    secretAccessKey:    env().S3_KEY_PRIVATE,
    region:             env().S3_REGION,
    Bucket:             env().S3_BUCKET,
}
