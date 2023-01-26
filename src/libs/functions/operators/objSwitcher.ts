import _ from "lodash";
import { pipe } from "ramda";

// prettier-ignore
export const objSwitcher = (obj, defaultCase) => selectCase => {

    return pipe(
        flow => flow.some(({ k }) => k == selectCase) 
              ? flow.find(({ k }) => k == selectCase).v 
              : flow.find(({ k }) => k == defaultCase).v
    )(_.map(obj, (v, k) => ({ k, v })))
}
