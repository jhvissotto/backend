import { fetch, useCallback } from '~/src/libs/helpers'
import { headers } from '~/src/web'

export async function v2(req, res) {
  // req
  const { url } = req.query

  // hooks
  const { cb } = useCallback()

  // call
  const page = await fetch(url, {
    headers: headers({ mode: 'no-cors' }),
  })
    .then(res => res.text())
    .then(cb.then)
    .catch(cb.catch)

  // render
  return res.send(page.data)
}
