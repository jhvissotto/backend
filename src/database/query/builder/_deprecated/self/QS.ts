import { has } from '~/src/libs/functions/check'
import type { Args } from '..'
import { __ } from '..'

// prettier-ignore
export const QS = (props?: {
    COUNT?:     Args.COUNT,
    table:      Args.Table,
    KEY?:       Args.KEY,
    offset?:    number,
}) => {

    // props
    const { COUNT, table, KEY, offset } = props



    
    // SELECT
    const ONE       = COUNT == 'ONE'
    const MANY      = COUNT == 'MANY'

    // FROM
    const table_key = has.value(table) ? RegExp('!table', 'g') : ''
    const table_val = has.value(table) ?          table        : ''
    
    // BY
    const PK        = KEY   == 'PK' 
    const SLUG      = KEY   == 'SLUG' 
    
    // PAGINATION
    const OFF       = MANY && has.value(offset)

    



    // ======== text ======== // 
    let qs = `-- sql
          SELECT  td_!table.*
        
          FROM    td_!table

        ${__(KEY  )}  WHERE (
        ${__(PK  )}      td_!table.pk_!table   = :pk_!table
        ${__(SLUG)}      td_!table.slug_!table = :slug_!table
        ${__(KEY  )}  )
        
        ${__(ONE )}  LIMIT  1
        ${__(MANY)}  LIMIT  :limit

        ${__(OFF )}  OFFSET :offset
    `

    
    // ======== mount ======== // 
    qs = qs.replace(table_key, table_val)


    return { 
        QS_props: props, 
        qs 
    }
}
