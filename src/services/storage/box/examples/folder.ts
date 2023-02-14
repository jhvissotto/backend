import { system } from '~/src/libs/helpers'
import { client } from '..'

const dirFile = system.path.v1.join('/dir/file.ext')
const stream = system.fs.extra.createReadStream(dirFile)

// ======================================== //
// ======== update folder_123 name ======== //
// ======================================== //
await client.folders
  .update('123', { name: 'New_Folder_Name' })
  .then(folderInfo => {})
  .catch(e => {})

// ========================================== //
// ======== list files of folder_123 ======== //
// ========================================== //
await client.folders.getItems('123', {
  fields: 'parent,id,name',
  offset: 0,
  limit: 100,
})

// =========================================== //
// ======== upload file to folder_123 ======== //
// =========================================== //
await client.files
  .uploadFile('123', 'file.ext', stream)
  .then(fileObject => {})
  .catch(e => {})
