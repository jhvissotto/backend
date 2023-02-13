import { S3 } from '~/src/services/storage'

const { data } = await S3.getObject({
  Key: 'dir/file.ext',
})

// const data = {
//     AcceptRanges:   'bytes',
//     LastModified:   '2020-08-21T19:51:51.000Z',
//     ContentLength:  '5394',
//     ETag:           'bae0b8850c785b5409f6810ac8f3d0f1',
//     ContentType:    'image/png',
//     Metadata:       {},
//     Body:           '<Buffer 12 34 45 78 more bytes>' <-- !important
// }
