import { SetOptional } from 'type-fest'
import { Args } from '../../Args'
import { tbl } from '../../_fns/tbl'
import { valueOrBind } from '../../_fns/valueOrBind'
import { WHERE } from '../../commands/WHERE'
import { WITH } from '../../commands/WITH'
import { tv_ } from '../../parts/tv_'
import { ORDER_BY } from '../../commands/ORDER_BY'

type OrderBy = Parameters<typeof ORDER_BY>[1]

// prettier-ignore
export function GET_ONE_X_RAND(
    _tableX: {
        tableX:       Args.Table,
        withVisible?: boolean,
        tv_Opts?:     Parameters<typeof tv_>[1],
    }, 
    props?: OrderBy & {
        // langs?: Args.Langs[],
        // items?: number,
        // page?:  number, 
    }
) {
    
    // args
    const { tableX } = _tableX

    // const langs = props?.langs
    // const items = props?.items
    // const page  = props?.page  || 0
    

    
    
    // name
    const name = `GET_ONE_${tableX}_RAND`
    
    // query
    const qs = `
        ${WITH([
            { cte: tv_(tableX, _tableX?.tv_Opts), disable: !_tableX.withVisible }
        ])}
        
        SELECT *
        FROM ${tbl(_tableX.withVisible ? 'tv' : 'td', tableX)}

        
        ${ORDER_BY('WEIGHT_RAND', props)}
        -- LIMIT 1
    `
    

    // return
    console.log('qs', qs)
    return { name, qs }
}
