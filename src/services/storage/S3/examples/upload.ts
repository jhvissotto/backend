import { fs } from '~/src/libs/helpers/system'
import { S3 } from '~/src/services/storage'

S3.upload({
  ACL: 'public-read',
  Key: 'dir/file.ext',
  Body: fs.extra.readFileSync('__public/dir/file.ext'),
})
