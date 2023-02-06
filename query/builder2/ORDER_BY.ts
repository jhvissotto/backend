import { Args } from './Args'
import { RAND } from './RAND'
import { priority } from './priority'

// prettier-ignore
export function ORDER_BY(Sort: Args.Sort, props?: {
  field?:     string,
  priority?:  Parameters<typeof priority>[0], 
  randKey?:   Parameters<typeof RAND>[0],
  lang?:      Args.Langs,
}) {

  // props
  const field   = props?.field
  const randKey = props?.randKey
  const lang    = props?.lang
  
  

  switch (Sort) {
    // =========================================== //
    // ================ ARBITRARY ================ //
    // =========================================== //
    case 'SORT_NUMBER':       return `ORDER BY sortNumber_${field}`
  
    
    // ======================================== //
    // ================ RANDOM ================ //
    // ======================================== //
    case 'RANDOM':            return `ORDER BY ${RAND(randKey)}` 
    case 'WEIGHT_RAND':       return `ORDER BY ${[priority(props.priority), RAND(randKey)].join(', ')}`        


    // ============================================== //
    // ================ ALPHABETICAL ================ //
    // ============================================== //
    case 'NAME_AZ':           return `ORDER BY name_${field} ASC`
    case 'NAME_ZA':           return `ORDER BY name_${field} DESC`

    case 'TITLE_AZ':          return `ORDER BY title_${lang}_${field} ASC`
    case 'TITLE_ZA':          return `ORDER BY title_${lang}_${field} DESC`

    // ====================================== //
    // ================ DATE ================ //
    // ====================================== //
    case 'LAST_UPDATE':       return `ORDER BY lastUpdate DESC`
    case 'NEWEST':            return `ORDER BY create_${field} DESC`
    case 'OLDEST':            return `ORDER BY create_${field} ASC`


    // ======================================= //
    // ================ STATS ================ //
    // ======================================= //
    case 'COUNT_VIEWS':       return `ORDER BY count_views DESC`
    case 'COUNT_POSTS':       return `ORDER BY count_posts DESC`
    case 'COUNT_SUBS':        return `ORDER BY count_subs DESC`

    case 'TOTAL_VIEWS':       return `ORDER BY total_views DESC`
    case 'TOTAL_POSTS':       return `ORDER BY total_posts DESC`
    case 'AVG_VIEWS_TO_POST': return `ORDER BY avg_viewsToPost DESC`

  }

}
