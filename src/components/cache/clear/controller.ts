import { ctrl } from "~/src";
import type { SchemaReq } from ".";

import { cache } from "~/src";
// import { Cache } from "~/src/libs/extensions/express";

export async function _ctrl(
  req: ctrl.Req<SchemaReq.Params, SchemaReq.Query, SchemaReq.Body>,
  res: ctrl.Res
) {
  const { params, query, body } = req;
  const {} = req.params;
  const {} = req.query;
  const {} = req.body;

  await cache.clear.v2();

  return res.status(200).json({ sucess: true });
}
