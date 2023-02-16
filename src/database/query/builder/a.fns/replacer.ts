// prettier-ignore
export function replacer(qs: string, val: {
    // ============ comments ============ //
    comments?: {
        hasLaunchDate?: boolean,
        withTV?:        boolean,
        withTF?:        boolean,
        withTP?:        boolean,
        
        withTVPost?:    boolean,
        withTVTag?:     boolean,
        withTVUser?:    boolean,

        PK?:            boolean,
        SLUG?:          boolean,
        
        paginated?:     boolean,
    }
    // ============ names ============ //
    names?: {
        post?:          string, 
        tag?:           string, 
        user?:          string,
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
    if (c?.withTV)              qs = qs.replace(RegExp('-- /*withTV*/',         'g'),   '/*withTV*/')
    if (c?.withTF)              qs = qs.replace(RegExp('-- /*withTF*/',         'g'),   '/*withTF*/')
    if (c?.withTP)              qs = qs.replace(RegExp('-- /*withTP*/',         'g'),   '/*withTP*/')
    
    if (c?.withTVPost)          qs = qs.replace(RegExp('-- /*withTVPost*/',     'g'),   '/*withTVPost*/')
    if (c?.withTVTag)           qs = qs.replace(RegExp('-- /*withTVTag*/',      'g'),   '/*withTVTag*/')
    if (c?.withTVUser)          qs = qs.replace(RegExp('-- /*withTVUser*/',     'g'),   '/*withTVUser*/')

    
    if (c?.PK)                  qs = qs.replace(RegExp('-- /*PK*/',             'g'),   '/*PK*/')
    if (c?.SLUG)                qs = qs.replace(RegExp('-- /*SLUG*/',           'g'),   '/*SLUG*/')

    if (c?.paginated)           qs = qs.replace(RegExp('-- /*paginated*/',      'g'),   '/*paginated*/')
    
    

    
    // ======================================================= //
    // ======================== names ======================== //
    // ======================================================= //
    if (n?.post)                qs = qs.replace(RegExp('post',  'g'),   n.post)
    if (n?.tag)                 qs = qs.replace(RegExp('tag',   'g'),   n.tag)
    if (n?.user)                qs = qs.replace(RegExp('user',  'g'),   n.user)
    

    

    // ======================================================== //
    // ======================== values ======================== //
    // ======================================================== //
    if (v?.pk_post)             qs = qs.replace(RegExp(':pk_post',    'g'),  `'${v.pk_post}'`)
    if (v?.pk_tag)              qs = qs.replace(RegExp(':pk_tag',     'g'),  `'${v.pk_tag}'`)
    if (v?.pk_user)             qs = qs.replace(RegExp(':pk_user',    'g'),  `'${v.pk_user}'`)

    if (v?.slug_post)           qs = qs.replace(RegExp(':slug_post',  'g'),  `'${v.slug_post}'`)
    if (v?.slug_tag)            qs = qs.replace(RegExp(':slug_tag',   'g'),  `'${v.slug_tag}'`)
    if (v?.slug_user)           qs = qs.replace(RegExp(':slug_user',  'g'),  `'${v.slug_user}'`)

    if (v?.many_post)           qs = qs.replace(RegExp(':many_post',  'g'),  `${v.many_post}`)
    if (v?.many_tag)            qs = qs.replace(RegExp(':many_tag',   'g'),  `${v.many_tag}`)
    if (v?.many_user)           qs = qs.replace(RegExp(':many_user',  'g'),  `${v.many_user}`)

    
    if (v?.items)               qs = qs.replace(RegExp(':items',      'g'),  `${v.items}`)
    if (v?.page)                qs = qs.replace(RegExp(':page',       'g'),  `${v.page}`)


    if (v?.items_post)          qs = qs.replace(RegExp(':items_post', 'g'),  `${v.items_post}`)
    if (v?.items_tag)           qs = qs.replace(RegExp(':items_tag',  'g'),  `${v.items_tag}`)
    if (v?.items_user)          qs = qs.replace(RegExp(':items_user', 'g'),  `${v.items_user}`)
    
    if (v?.page_post)           qs = qs.replace(RegExp(':page_post',  'g'),  `${v.page_post}`)
    if (v?.page_tag)            qs = qs.replace(RegExp(':page_tag',   'g'),  `${v.page_tag}`)
    if (v?.page_user)           qs = qs.replace(RegExp(':page_user',  'g'),  `${v.page_user}`)
    

    

    // console.log('qs', qs)
    return qs
}
