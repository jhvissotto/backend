import { Args } from './Args'

// prettier-ignore
export function tbl(
  tk:       Args.TblKey, 
  tableX:   string,
  tableY?:  string,
  tableZ?:  string,
) {

  if (tableY && tableZ) return `${tk}_${tableX}_${tableY}_${tableZ}`
  if (tableY)           return `${tk}_${tableX}_${tableY}`
  else                  return `${tk}_${tableX}`
}
