import axios from 'axios'

export async function fetchBlob(req, res) {
  const { url } = req.query
  const arrBuf = (await axios(url, { responseType: 'arraybuffer' })).data
  return res.send(arrBuf)
}
