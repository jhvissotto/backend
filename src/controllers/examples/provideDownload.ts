export function provideDownload(req, res) {
  const fs = require('fs-extra')
  const buf = fs.readFileSync('./public/dir/image.ext')
  res.end(buf)
  // strm.pipe(res)
}
