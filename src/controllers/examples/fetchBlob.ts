import axios from 'axios'

export async function fetchBlob(req, res) {
  const { url } = req.query
  const blob = (await axios(url, { responseType: 'blob' })).data
  return res.send(blob)
}
