import { Ctrl } from '~/src/libs/packs/Express'

//
// prettier-ignore
export function wrapper(handler: Ctrl.Handler) {

  //
  // handler
  return async (req: Ctrl.Req, res: Ctrl.Res, next: Ctrl.Next) => {

    return Promise
      .resolve(handler(req, res, next))
      .catch(next)
  }

}
