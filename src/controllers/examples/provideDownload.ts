import { fs, path } from '~/src/libs/helpers/system'

const dirFile = path.v1.join('__public', './dir/img.ext')

export function provideDownload(req, res) {
  // ================ stream ================ //
  const stream = fs.extra.createReadStream(dirFile)
  stream.pipe(res)

  // ================ buffer ================ //
  const buffer = fs.extra.readFileSync(dirFile)
  return res.end(buffer)
}
