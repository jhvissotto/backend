import { Args } from '../../Args'
import { tbl } from '../../_fns/tbl'
import { ORDER_BY } from '../../commands'
import { WITH } from '../../commands/WITH'
import { tv_ } from '../../parts/tv_'

// type Join = Parameters<typeof JOIN>[2]
// type RowNum = Parameters<typeof RN>
// type Where = Omit<SetOptional<Parameters<typeof WHERE>[0], 'field'>, 'rn'>
type OrderBy = Parameters<typeof ORDER_BY>

// prettier-ignore
export function GET_ALL_X(
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
        sort:     OrderBy[0],
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
    const { sort, order } = props
        
    // const langs = props?.langs
    // const items = props?.stream?.items
    // const page  = props?.stream?.page  || 0




    // define
    const fr = X.withVisible ? 'tv' : 'td'
    
    
    // name
    const name = `GET_ALL_${tableX}`
    
    // query
    const qs = `
        ${WITH([
            [tv_(tableX, X?.tv_Opts), { disable: !X.withVisible }]
        ])}
        
        SELECT *
        FROM ${tbl(fr, tableX)}

        ${ORDER_BY(sort, order)}
    `


    // console.log('qs', qs)
    return { name, qs }
}
