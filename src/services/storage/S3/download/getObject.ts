import { SetOptional } from '~/src/libs/Types'
import { useCallback } from '~/src/libs/helpers'
import { AWS } from '~/src/libs/packs'
import { S3 } from '~/src/services/storage'

type Props = SetOptional<AWS.S3.GetObjectRequest, 'Bucket'>

// prettier-ignore
export async function getObject({ Bucket = S3.configs.Bucket, ...props }: Props) {

    const { cb } = useCallback.d<AWS.S3.GetObjectOutput>()

    
    const call = await S3.client.getObject({ Bucket, ...props })
    .promise()
    .then(cb.then)
    .catch(cb.catch)


    return call
}
