import { SetOptional } from 'type-fest'
import { Args } from '../../Args'
import { tbl } from '../../_fns/tbl'
import { valueOrBind } from '../../_fns/valueOrBind'
import { WHERE } from '../../commands/WHERE'
import { WITH } from '../../commands/WITH'
import { tv_ } from '../../parts/tv_'
import { ORDER_BY } from '../../commands/ORDER_BY'

// type Join = Parameters<typeof JOIN>[2]
// type RowNum = Parameters<typeof RN>
// type Where = Omit<SetOptional<Parameters<typeof WHERE>[0], 'field'>, 'rn'>
type OrderBy = Parameters<typeof ORDER_BY>

// prettier-ignore
export function GET_ONE_X_RAND(
    X: {
        tableX:       Args.Table,
        withVisible?: boolean,
        tv_Opts?:     Parameters<typeof tv_>[1],
    }, 
    props?: {
        // ======== opts ======== //
        // join?:      Join,
        // rowNum?:    RowNum[1] & RowNum[2],
        // ======== props ======== //
        langs?:   Args.Langs[],
        // sort:     OrderBy[0],
        order?:   OrderBy[1],
        stream?:  { items?: number, page?: number },
    }
) {
    
    // args tables
    const { tableX } = X
    // const { tableY } = Y

    // args opts
    // const {} = props 

    // args props
    const { order } = props
        
    // const langs = props?.langs
    // const items = props?.stream?.items
    // const page  = props?.stream?.page  || 0

    

    // define
    const fr = X.withVisible ? 'tv' : 'td'


    
    // name
    const name = `GET_ONE_${tableX}_RAND`
    
    // query
    const qs = `
        ${WITH([
            [tv_(tableX, X?.tv_Opts), { disable: !X.withVisible }]
        ])}
        
        SELECT *
        FROM ${tbl(fr, tableX)}

        
        ${ORDER_BY('WEIGHT_RAND', order)}
        -- LIMIT 1
    `
    

    // console.log('qs', qs)
    return { name, qs }
}
