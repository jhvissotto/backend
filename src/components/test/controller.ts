import type { SchemaReq } from ".";
import { ctrl } from "~/src";

export async function _ctrl(
  req: ctrl.Req<SchemaReq.Params, SchemaReq.Query, SchemaReq.Body>,
  res: ctrl.Res
) {
  const { params, query, body } = req;
  const {} = req.params;
  const {} = req.query;
  const {} = req.body;

  return res.status(200).json({
    welcome: "Hello World",
    errors: []
  });
}
