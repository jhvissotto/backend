import { SetOptional, SetRequired } from '~/src/libs/Types'
import { AWS } from '~/src/libs/packs'
import { S3 } from '~/src/services/storage'
import { useCallback } from '~/src/libs/helpers'

// prettier-ignore
type Props = SetRequired<SetOptional<Parameters<typeof S3.client.upload>[0], 'Bucket'>, 'Body'>

// prettier-ignore
export async function upload(
    // ======== props ======== //
    props: Props & {
        ACL: S3.ACL,
    },
    // ======== options ======== //
    opts?: AWS.S3.ManagedUpload.ManagedUploadOptions,
) {

    const { cb } = useCallback.d<AWS.S3.ManagedUpload.SendData>()


    const { data, error, isSuccess, isError } = await S3.client.upload({
        // ======== props ======== // 
        Bucket: S3.configs.Bucket,
        ACL:    props.ACL,
        ...props,
    }, {
        // ======== opts ======== // 
        ...opts, 
    })
    .promise()
    .then(cb.then)
    .catch(cb.catch)



    const upload = { data, error, isSuccess, isError }
    // console.log('>> upload', upload)
    return upload
}
