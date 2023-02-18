import { Cache } from '~/src/libs/extensions/express'
import { initialize } from '~/src/cache/initialize'

// prettier-ignore
export function createMiddleware(...[duration, toggleMiddleware, localOptions]: Parameters<typeof Cache.middleware>): ReturnType<typeof Cache.middleware> {
  
  // prepare
  initialize()

  // create
  const middleware = Cache.middleware(duration, toggleMiddleware, {
    ...localOptions
  })

  return { middleware }
}
