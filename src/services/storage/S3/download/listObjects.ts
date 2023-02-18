import { SetRequired, SetOptional } from '~/src/libs/Types'
import { useCallback } from '~/src/libs/helpers'
import { AWS } from '~/src/libs/packs'
import { S3 } from '~/src/services/storage'

// prettier-ignore
type Props = SetOptional<SetRequired<SetRequired<AWS.S3.ListObjectsV2Request, 'Prefix'>, 'StartAfter'>, 'Bucket'>

// prettier-ignore
export async function listObjects({ 
        Bucket  = S3.configs.Bucket, 
        MaxKeys = 1000, 
     ...props 
}: Props) {

    const { cb } = useCallback.d<AWS.S3.ListObjectsV2Output>()


    const resp = await S3.client.listObjectsV2({ Bucket, MaxKeys, ...props })
    .promise()
    .then(cb.then)
    .catch(cb.catch)


    return resp
}
