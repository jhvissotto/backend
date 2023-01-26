import { Ctrl } from "~/src/libs/packs/Express";

export function wrapper(handler: Ctrl.Handler) {
  return async function (req: Ctrl.Req, res: Ctrl.Res, next: Ctrl.Next) {
    return Promise.resolve(handler(req, res, next)).catch((e) => next(e));
  };
}
