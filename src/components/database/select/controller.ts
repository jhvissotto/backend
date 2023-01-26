import type { SchemaReq } from ".";

import { ctrl } from "~/src";
import { config } from "~/src/global";
import { defs, services } from ".";

export async function _ctrl(
  req: ctrl.Req<SchemaReq.Params, SchemaReq.Query, SchemaReq.Body>,
  res: ctrl.Res
) {
  // ======== inputs ======== //
  const { params, query, body } = req;
  const {} = req.params;
  const {} = req.query;
  const {} = req.body;

  // ======== middlewares ======== //
  const { validation } = req;

  // ======== response ======== //
  let resp = ctrl.newForm({
    // cache
    cache_enable: defs.canCache,
    cache_duration: defs.canCache ? config().cacheDuration : "",
    // validation
    validation_params: req.params,
    validation_query: req.query,
    validation_body: req.body,
    validation_isSanitized: validation.isSanitized,
    // security
    token_user: req.token,
    user_levelReq: defs.user_levelReq,
    // errors
    errors: [...validation.errors]
  });

  // ======================== controller ======================== //
  const { data, error, isError } = await services.querySelect({
    ...params,
    ...query
  });

  if (isError) {
    resp.errors_inDatabase = true;
    resp.errors.push(error);
    resp = ctrl.newForm(resp);
  } else {
    resp.list = data;
    resp = ctrl.newForm(resp);
  }

  return res.json(resp);
}
