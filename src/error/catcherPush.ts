import { is } from "~/src/libs/functions/check";
import { catcher, push } from ".";

// prettier-ignore
export function catcherPush(err: Error | Error[]) {


  // input is not error
  if (!is.error(err) || !is.errors(err))
  return null


  // foo
  const e = catcher(err);
  push(e);
  
  return e;
}
