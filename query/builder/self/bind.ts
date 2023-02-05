// libs
import { pagination } from '~/src/libs/functions/calc'
import { cast } from '~/src/libs/functions'
import { has } from '~/src/libs/functions/check'
// local
import type { Args } from '..'
import { self } from '.'

// prettier-ignore
export function Bind(deps: {
  name:     string, 
  table:    Args.Table,
  QS_props: ReturnType<typeof self.QS>['QS_props']
}) {
  // deps
  let { name, table, QS_props } = deps



  return {
    // attributes (1/2)
    Bind_deps: deps,

    // methods (2/2)
    bind: function(
      props1?: { 
        pk?:      Args.PK,
        slug?:    Args.Slug,
      }, 
      props2?: {
        items?:   Args.Items,
        page?:    Args.Page,
      }
    ) {
      
      // props_1
      const pk     = props1?.pk
      const slug   = props1?.slug
      
      // props_2
      const items  = props2?.items
      const page   = props2?.page
      
      const { limit, offset } = pagination(items, page)
    
      
    
      // prepare binds
      const pk_key   = has.value(pk)   ?           `:pk_${table}`   : ''
      const pk_val   = has.value(pk)   ? cast.string(pk)            : ''

      const slug_key = has.value(slug) ?           `:slug_${table}` : ''
      const slug_val = has.value(slug) ? cast.string(slug)          : ''



      const limit_key  = has.value(limit)   ?           ':limit'    : ''
      const limit_val  = has.value(limit)   ? cast.string(limit)    : ''
 
      const offset_key = has.value(offset)  ?           ':offset'   : ''
      const offset_val = has.value(offset)  ? cast.string(offset)   : ''
    


      let { qs } = self.QS({ ...QS_props, offset })

      
      // make bindings 1
      qs = qs.replace(pk_key,     pk_val)
      qs = qs.replace(slug_key,   slug_val)
      
      // make bindings 2
      qs = qs.replace(limit_key,  limit_val)
      qs = qs.replace(offset_key, offset_val)
    


      
      return { 
        name, 
        qs
      }
    } 
  }


}
