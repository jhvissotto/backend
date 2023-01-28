import { mids } from '~/src'

export function middleware(req: mids.Req, res: mids.Res, next: mids.Next) {
  // install
  res.locals.errors = []

  return next()
}
