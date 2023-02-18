import { SetOptional } from '~/src/libs/Types'
import { useCallback } from '~/src/libs/helpers'
import { AWS } from '~/src/libs/packs'
import { S3 } from '~/src/services/storage'

type Props = SetOptional<AWS.S3.GetObjectRequest, 'Bucket'>

// prettier-ignore
export async function getLink({ Bucket = S3.configs.Bucket, ...props }: Props) {
    
    
    const { cb } = useCallback.d<Awaited<ReturnType<typeof S3.client.getSignedUrlPromise>>>()


    const resp = await S3.client.getSignedUrlPromise(S3.operations.getObject, {
        Bucket,
        ...props
    })
    .then(cb.then)
    .catch(cb.catch)


    return resp
}
