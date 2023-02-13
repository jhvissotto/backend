export function renderBuffer(req, res) {
  const request = require('request')
  // const Buffer = require('buffer')

  const url = 'http://localhost:3000/public/dir/image.ext'

  request(url, (e, r, body) => {
    const buffer = new Buffer(body, 'base64')
    res.render('pages/renderBuffer', { buffer })
  })
}
