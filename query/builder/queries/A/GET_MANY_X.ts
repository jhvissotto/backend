import { Args } from '../../Args'
import { tbl } from '../../_fns/tbl'
import { valueOrBind } from '../../_fns/valueOrBind'
import { WITH } from '../../commands/WITH'
import { tv_ } from '../../parts/tv_'

// prettier-ignore
export function GET_MANY_X(
    _tableX: {
        tableX:      Args.Table,
        withVisible: boolean,
        tv_Opts?:    Parameters<typeof tv_>[1]
    }, props?: {
        // langs?: Args.Langs[],
        items?: number,
        page?:  number, 
    }
) {
    
    // args
    const { tableX } = _tableX

    // const langs = props?.langs
    const items = props?.items
    const page  = props?.page  || 0
    

    
    
    // name
    const name = `GET_MANY_${tableX}`
    
    // query
    const qs = `
        ${WITH([
            { cte: tv_(tableX, _tableX?.tv_Opts), disable: !_tableX.withVisible }
        ])}
        
        SELECT *
        FROM ${tbl(_tableX.withVisible ? 'tv' : 'td', tableX)}

        LIMIT  ${valueOrBind('items', items)}
        OFFSET ${valueOrBind('items', items)} * ${valueOrBind('page', page)}
    `
    

    // return
    console.log('qs', qs)
    return { name, qs }
}
