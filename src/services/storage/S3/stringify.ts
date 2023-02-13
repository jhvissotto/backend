import { S3 } from '~/src/services/storage'

// prettier-ignore
export function stringify({ 
  bucket = S3.configs.Bucket, 
  region = S3.configs.region, 
  key 
}) {

  return `https://${bucket}.s3.${region}.amazonaws.com/${key}`
}
