import axios from 'axios'

// prettier-ignore
export async function fetchBlob(req, res) {

    const { url } = req.query

    const response = (await axios(url, { responseType: 'blob' })).data

    return res.send(URL.createObjectURL(response))
}
