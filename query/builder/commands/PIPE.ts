import { Args } from '../Args'
import { __ } from '../_fns/__'
import { valueOrBind } from '../_fns/valueOrBind'

// prettier-ignore
export function PIPE(GET: Args.GET, opts: { 
    items?: Args.Items, 
    page?:  Args.Page 
}) {

    const ALL  = GET == 'ALL'
    const MANY = GET == 'MANY'
    const ONE  = GET == 'ONE'

    const items = valueOrBind('items', opts?.items)
    const page  = valueOrBind('page',  opts?.page)
    
    const qs = `
        -- ONE --
        ${__(ONE )} LIMIT 1
        
        -- MANY --
        ${__(MANY)} LIMIT  ${items}
        ${__(MANY)} OFFSET ${items} * ${page}
    `

    
    // console.log('qs', qs)
    return qs
}
