import { Args } from '../../Args'
import { tbl } from '../../_fns/tbl'
import { WITH } from '../../commands/WITH'
import { tv_ } from '../../parts/tv_'

// prettier-ignore
export function GET_ALL_X(_tableX: {
    tableX:      Args.Table,
    withVisible: boolean,
    tv_Opts?:    Parameters<typeof tv_>[1]
}) {
    
    // args
    const { tableX } = _tableX


    
    
    // name
    const name = `GET_ALL_${tableX[1]}`
    
    // query
    const qs = `
        ${WITH([
            { cte: tv_(tableX, _tableX?.tv_Opts), disable: !_tableX.withVisible }
        ])}
        
        SELECT *
        FROM ${tbl(_tableX.withVisible ? 'tv' : 'td', tableX)}
    `

    // return
    console.log('qs', qs)
    return { name, qs }
}
