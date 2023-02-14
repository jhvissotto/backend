import { system } from '~/src/libs/helpers'
import { client } from '..'

const dirFile = system.path.v1.join('/dir/file.ext')
const stream = system.fs.extra.createReadStream(dirFile)

// ============================== //
// ======== get file_456 ======== //
// ============================== //
await client.files.get('456', {
  fields: 'parent,id,name,modified_at,download_url',
})

// ================================= //
// ======== update file_456 ======== //
// ================================= //
await client.files.uploadNewFileVersion('456', stream)
