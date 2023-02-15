import { Args } from '~/query/builder'

// prettier-ignore
export function tbls(
  tk: Args.TblKey, 
  list: [Args.Table, Args.Table?, Args.Table?]
) {

  const [tableX, tableY, tableZ] = list
  
  let qs = ''

  if (list.length == 3) qs = `${tk}_${tableX}_${tableY}_${tableZ}`
  if (list.length == 2) qs = `${tk}_${tableX}_${tableY}`
  if (list.length == 1) qs = `${tk}_${tableX}`


  // console.log('qs', qs)
  return qs
}
