import type { Ctrl } from "~/src/libs/packs/Express";
import type { Validation } from "~/src/middlewares/validator";

export type { Handler, Res, Next } from "~/src/libs/packs/Express/Controller";

export type Req<
  Params,
  Query,
  Body
  // Other
> = Ctrl.Req<Params, never, Body, Query> & {
  validation: Validation;
};
