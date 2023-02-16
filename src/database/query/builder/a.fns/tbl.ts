import { Args } from '~/src/database/query/builder'

// prettier-ignore
export function tbl(
  tk:       Args.TblKey, 
  tableX:   Args.Table,
  tableY?:  Args.Table,
  tableZ?:  Args.Table,
) {

  if (tableY && tableZ) return `${tk}_${tableX}_${tableY}_${tableZ}`
  if (tableY)           return `${tk}_${tableX}_${tableY}`
  else                  return `${tk}_${tableX}`
}
