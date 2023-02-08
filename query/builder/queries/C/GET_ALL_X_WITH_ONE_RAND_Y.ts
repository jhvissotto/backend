// import { SetOptional } from 'type-fest'
import { tbl } from '~/query/builder/_fns/tbl'
import { JOIN, ORDER_BY, RN, WHERE, WITH } from '../../commands'
import { Args } from '../../Args'
import { tv_ } from '../../parts'
import { fld } from '../../_fns'

type Join = Parameters<typeof JOIN>[2]
type RowNum = Parameters<typeof RN>
// type Where = Omit<SetOptional<Parameters<typeof WHERE>[0], 'field'>, 'rn'>
type OrderBy = Parameters<typeof ORDER_BY>

// prettier-ignore
export function GET_ALL_X_WITH_ONE_RAND_Y(
  X: {
    tableX:       Args.Table,
    withVisible?: boolean,
    tv_Opts?:     Parameters<typeof tv_>[1],
  }, 
  Y: {
    tableY:       Args.Table,
    withVisible?: boolean,
    tv_Opts?:     Parameters<typeof tv_>[1],
  },
  props?: {
    // ======== opts ======== //
    join?:      Join,
    rowNum?:    RowNum[1] & RowNum[2],
    // ======== props ======== //
    langs?:     Args.Langs[],
    sort:       OrderBy[0],
    order?:     OrderBy[1],
    stream?:    { items?: number, page?: number },
  }
) {

  // args tables
  const { tableX } = X
  const { tableY } = Y

  // args opts
  const { join, rowNum } = props 

  // args props
  const { sort, order } = props
   
  // const langs = props?.langs
  // const items = props?.stream?.items
  // const page  = props?.stream?.page  || 0
  

  
  // define
  const tl = X.withVisible ? 'tv' : 'td'
  const tr = Y.withVisible ? 'tv' : 'td'
  


  // name
  const name = `GET_ALL_${tableX}_WITH_ONE_RAND_${tableY}`

  // query
  const qs = `
    ${WITH([
        [tv_(tableX, X?.tv_Opts), { disable: !X.withVisible }],
        [tv_(tableY, Y?.tv_Opts), { disable: !Y.withVisible }],
    ])}


    ${tbl('tj', tableX, tableY)} AS (
        SELECT *
        FROM ${tbl(tl, tableX)}

        ${JOIN([tl, tableX], [tr, tableY], join)}
    )
    ,
    ${tbl('tn', tableX, tableY)} AS (
        SELECT *
            ,   ${RN(tableX, rowNum, rowNum)} 
    
        FROM ${tbl('tj', tableX, tableY)}
    )
    ,
    ${tbl('tf', tableX, tableY)} AS (
        SELECT *
        FROM ${tbl('tn', tableX, tableY)}
    
        WHERE ${fld('rn', tableX)} = 1 
    )


    SELECT *
    FROM ${tbl('tf', tableX, tableY)}


    ${ORDER_BY(sort, order)}

  `

  // console.log('qs', qs)
  return { name, qs }
}
