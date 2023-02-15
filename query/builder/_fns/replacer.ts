// prettier-ignore
export function replacer(qs: string, val: {
    // ============ comments ============ //
    comments?: {
        hasLaunchDate?: boolean,
        withTV?:        boolean,
        withTF?:        boolean,
        withTP?:        boolean,
        
        PK?:        boolean,
        SLUG?:      boolean,
        
        paginated?: boolean,
    }
    // ============ names ============ //
    names?: {
        post?:  string, 
        tag?:   string, 
        user?:  string,
    },
    // ============ values ============ //
    values?: {
        pk_post?:       string | number,
        pk_tag?:        string | number,
        pk_user?:       string | number,
        
        slug_post?:     string, 
        slug_tag?:      string, 
        slug_user?:     string,
        

        many_post?:     number,
        many_tag?:      number,
        many_user?:     number,


        items?:         number,
        page?:          number,
        
        items_post?:    number, 
        items_tag?:     number, 
        items_user?:    number,
        
        page_post?:     number, 
        page_tag?:      number, 
        page_user?:     number,
        
    }, 
}) {

    // props
    const c = val?.comments
    const n = val?.names
    const v = val?.values



    // ========================================================== //
    // ======================== comments ======================== //
    // ========================================================== //
    if (c?.withTV)              qs = qs.replace('-- /*withTV*/',    '/*withTV*/')
    if (c?.withTF)              qs = qs.replace('-- /*withTF*/',    '/*withTF*/')
    if (c?.withTP)              qs = qs.replace('-- /*withTP*/',    '/*withTP*/')
    
    if (c?.PK)                  qs = qs.replace('-- /*PK*/',        '/*PK*/')
    if (c?.SLUG)                qs = qs.replace('-- /*SLUG*/',      '/*SLUG*/')
    
    if (c?.paginated)           qs = qs.replace('-- /*paginated*/', '/*paginated*/')
    
    

    
    // ======================================================= //
    // ======================== names ======================== //
    // ======================================================= //
    if (n?.post)                qs = qs.replace('post',         n.post)
    if (n?.tag)                 qs = qs.replace('tag',          n.tag)
    if (n?.user)                qs = qs.replace('user',         n.user)
    

    

    // ======================================================== //
    // ======================== values ======================== //
    // ======================================================== //
    
    if (v?.pk_post)             qs = qs.replace(':pk_post',     `'${v.pk_post}'`)
    if (v?.pk_tag)              qs = qs.replace(':pk_tag',      `'${v.pk_tag}'`)
    if (v?.pk_user)             qs = qs.replace(':pk_user',     `'${v.pk_user}'`)
    
    if (v?.slug_post)           qs = qs.replace(':slug_post',   `'${v.slug_post}'`)
    if (v?.slug_tag)            qs = qs.replace(':slug_tag',    `'${v.slug_tag}'`)
    if (v?.slug_user)           qs = qs.replace(':slug_user',   `'${v.slug_user}'`)
    


    if (v?.many_post)           qs = qs.replace(':many_post',   `${v.many_post}`)
    if (v?.many_tag)            qs = qs.replace(':many_tag',    `${v.many_tag}`)
    if (v?.many_user)           qs = qs.replace(':many_user',   `${v.many_user}`)


    
    if (v?.items)               qs = qs.replace(':items',       `${v.items}`)
    if (v?.page)                qs = qs.replace(':page',        `${v.page}`)
    
    if (v?.items_post)          qs = qs.replace(':items_post',  `${v.items_post}`)
    if (v?.items_tag)           qs = qs.replace(':items_tag',   `${v.items_tag}`)
    if (v?.items_user)          qs = qs.replace(':items_user',  `${v.items_user}`)
    
    if (v?.page_post)           qs = qs.replace(':page_post',   `${v.page_post}`)
    if (v?.page_tag)            qs = qs.replace(':page_tag',    `${v.page_tag}`)
    if (v?.page_user)           qs = qs.replace(':page_user',   `${v.page_user}`)
    

    

    // console.log('qs', qs)
    return qs
}
