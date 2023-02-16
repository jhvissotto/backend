import type { Args } from '..'

// prettier-ignore
export function namer(props: {
  COMMAND:  Args.COMMAND, 
  COUNT:    Args.COUNT, 
  table:    Args.Table
  KEY?:     Args.KEY
}) {
  // props
  const { COMMAND, COUNT, table, KEY } = props


  // prepare
  const str = {
    COMMAND:              `${COMMAND}`,
    COUNT:    `${COUNT  ? `_${COUNT}`               : ''}`,
    table:    table     ? `_${table.toUpperCase()}` : '', 
    BY_KEY:   KEY       ? `_BY_${KEY}`              : ''
  }
  
  // mount
  const name = `${str.COMMAND}${str.COUNT}${str.table}${str.BY_KEY}`
  

  
  return { 
    namer_props: props, 
    name
  }
}
