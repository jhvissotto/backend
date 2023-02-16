import { cache } from '~/src'
import { Cache } from '~/src/libs/extensions/express'

export function v1(...args: Parameters<typeof Cache.clear>) {
  cache.initialize()
  Cache.clear(...args)
}
