import { mids } from "~/src";
import { Z } from "~/src/libs/utils/validator";
import { getCredentials } from "~/src/libs/helpers/parse";

// prettier-ignore
export const auth = (schema: Z.AnyZodObject) => async (req: mids.Req, res: mids.Res, next: mids.Next) => {

  const { credentials } = getCredentials(req)



  return next()
}
