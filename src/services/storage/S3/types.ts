import { AWS } from '~/src/libs/packs'

export type ObjectCannedACL = AWS.S3.ObjectCannedACL
export type ACL =
  | 'private'
  | 'public-read'
  | 'public-read-write'
  | 'authenticated-read'
  | 'aws-exec-read'
  | 'bucket-owner-read'
  | 'bucket-owner-full-control'
