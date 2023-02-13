// // ====================================== //
// // ================ READ ================ //
// // ====================================== //
// import fetch from 'isomorphic-fetch'
// const Dropbox = require('dropbox').Dropbox
// const dbx = new Dropbox({ accessToken: KEY_API, fetch })

// const [{ name }] = await dbx.filesListFolder({ path: '' }).then(reply => reply.entries)

// const { link } = await dbx.filesGetTemporaryLink({ path: '/dir/file.ext' })

// //
// //
// //
// // ======================================== //
// // ================ UPLOAD ================ //
// // ======================================== //
// import Dropbox from 'dropbox-v2-api'
// import fs from 'file-system'

// const dbx = Dropbox.authenticate({ token: KEY_API })

// dbx({
//   resource: 'files/upload',
//   parameters: { path: '/dir/file.ext' },
//   readStream: fs.createReadStream(__public + '/dir/file.ext')
// }, (error, result, response) => {})

// //
// //
// //
// // ====================================== //
// // ================ CRUD ================ //
// // ====================================== //
// import dbx from '@cloudcmd/dropbox'

// await dbx.mkdir(KEY_API, '/dirname')
// await dbx.copy(KEY_API, '/file.ext', '/dir/file.ext')
// await dbx.move(KEY_API, '/file.ext', '/dir/file.ext')
// await dbx.remove(KEY_API, '/dir/file.ext')
