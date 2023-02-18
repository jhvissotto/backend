import { mids } from '~/src'
import { createMiddleware } from '~/src/cache/createMiddleware'

// prettier-ignore
export function cache({ canCache = false }, ...props: Parameters<typeof createMiddleware>) {
  
  // handler
  return (req: mids.Req, res: mids.Res, next: mids.Next) => {

    if (canCache)
    return createMiddleware(...props)

    else 
    return next()

  }

}
