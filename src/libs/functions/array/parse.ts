// import { ArrayElement } from "type-fest/source/internal";
import { is } from "~/src/libs/functions/check";

// prettier-ignore
export function parse<Element>(arr: Array<Element>) {

  const isEmpty   = is.empty(arr)
  const isFilled  = is.filled(arr)

  const isArray   = Array.isArray(arr)
  const length    = isArray ? arr?.length     : null
  
  const isZero    = isArray ? length == 0     : null
  const isUnique  = isArray ? length == 1     : null
  const isMany    = isArray ? length >= 2     : null
  
  const itemFirst = isArray ? arr[0]          : null
  const itemLast  = isArray ? arr[length - 1] : null

  return {
    isEmpty,
    isFilled,
    
    isArray,
    length,
  
    isZero,
    isUnique,
    isMany,

    itemFirst,
    itemLast,
  };
}
