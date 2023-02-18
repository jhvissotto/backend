import { load as cheerio_load } from 'cheerio'
import { fetch, useCallback } from '~/src/libs/helpers'
import { view } from '~/src'

// prettier-ignore
export async function v1(req, res) {
  // req
  const { url } = req.query

  // hooks
  const { cb } = useCallback.d()

  // call
  const page = await fetch(url).then(res => res.text())
    .then(cb.then)
    .catch(cb.catch)

  // convert
  const $ = cheerio_load(page.data)
  const document = $.html()

  // render
  return res.render(view.html.blank, { document })
}
