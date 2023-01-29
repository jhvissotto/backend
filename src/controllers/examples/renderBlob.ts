export function renderBlob(req, res) {
  const axios = require('axios')
  const Blob = require('blob')

  const url = 'http://localhost:3000/public/dir/file.png'

  axios.get(url, { responseType: 'arraybuffer' }).then(({ data }) => {
    let buffer = Buffer.from([data])
    res.render('pages/renderBlob', { buffer })
  })

  return res.render('pages/renderBlob')
}
