import { SetOptional } from 'type-fest'
import { Args } from '../../Args'
import { tbl } from '../../_fns/tbl'
import { valueOrBind } from '../../_fns/valueOrBind'
import { WHERE } from '../../commands/WHERE'
import { WITH } from '../../commands/WITH'
import { tv_ } from '../../parts/tv_'

type Where = Omit<SetOptional<Parameters<typeof WHERE>[0], 'field'>, 'rn'>

// prettier-ignore
export function GET_ONE_X_BY_ID(
    _tableX: Where & {
        tableX:       Args.Table,
        withVisible?: boolean,
        tv_Opts?:     Parameters<typeof tv_>[1],
    }, 
    props?: {
        langs?: Args.Langs[],
        // items?: number,
        // page?:  number, 
    }
) {
    
    // args
    const { tableX } = _tableX

    const langs = props?.langs
    // const items = props?.items
    // const page  = props?.page  || 0
    

    
    
    // name
    const name = `GET_ONE_${tableX}_BY_ID`
    
    // query
    const qs = `
        ${WITH([
            { cte: tv_(tableX, _tableX?.tv_Opts), disable: !_tableX.withVisible }
        ])}
        
        SELECT *
        FROM ${tbl(_tableX.withVisible ? 'tv' : 'td', tableX)}

        ${WHERE({ field: tableX, ..._tableX }, langs)}
    `
    

    // return
    console.log('qs', qs)
    return { name, qs }
}
