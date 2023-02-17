import { Args } from '~/src/database/query/builder'
import { __, replacer } from '~/src/database/query/builder/a.fns'
import { ORDER_BY, PARTITION_BY } from '~/src/database/query/builder/b.commands'

// prettier-ignore
export function tj_(
    tables: [Args.Table, Args.Table, Args.Table?], 
    opts?: {
        withTableVisible?:      boolean,
        withTablePagination?:   boolean,
    },
) {


    // ========================================================== //
    // ======================== 2 TABLES ======================== //
    // ========================================================== //
    if (tables.length == 2) {

        const [post, tag] = tables

        
        let qs = `-- sql
            -- # optional 
            -- tp_post,
            -- tv_post,
            -- tv_tag,
    

            tj_post_tag AS (
                SELECT
                -- /*withTP*/ tp_post.sr_post,
                    td_post.*,
                    td_tag.*
                    
                FROM td_post
                -- /*withTP*/ JOIN tp_post        ON  td_post.pk_post  =  tp_post.pk_post  
    
                JOIN tr_post_tag    ON  td_post.pk_post  =  tr_post_tag.fk_post 
                JOIN td_tag         ON  td_tag.pk_tag    =  tr_post_tag.fk_tag
    
                -- /*withTV*/ JOIN tv_post        ON  td_post.pk_post  =  tv_post.pk_post
                -- /*withTV*/ JOIN tv_tag         ON  td_tag.pk_tag    =  tv_tag.pk_tag
            )
        `
    
    
        qs = replacer(qs, {
            comments: {
                withTV: opts?.withTableVisible,
                withTP: opts?.withTablePagination,
            },
            names: {
                post,
                tag,
            },
        })


        // console.log('qs', qs)
        return qs
    }

    


    // ========================================================== //
    // ======================== 3 TABLES ======================== //
    // ========================================================== //
    if (tables.length == 3) {

        const [post, tag, user] = tables


        let qs = `-- sql
        
            -- # optional 
            -- tp_post,
            -- tv_post
            -- tv_tag
            -- tv_user


            tj_post_tag_user AS (
                SELECT 
                -- /*withTP*/ tp_post.sr_post,
                    td_post.*,
                    td_tag.*,
                    td_user.*
            
                FROM td_post
                -- /*withTP*/ JOIN tp_post        ON  td_post.pk_post  =  tp_post.pk_post  
            
                JOIN tr_post_tag	ON  td_post.pk_post  =  tr_post_tag.fk_post
                JOIN td_tag			ON  td_tag.pk_tag    =  tr_post_tag.fk_tag
            
                JOIN tr_user_post 	ON  td_post.pk_post  =  tr_user_post.fk_post
                JOIN td_user       	ON  td_user.pk_user  =  tr_user_post.fk_user


                -- /*withTV*/ JOIN tv_post        ON  td_post.pk_post  =  tv_post.pk_post
                -- /*withTV*/ JOIN tv_tag         ON  td_tag.pk_tag    =  tv_tag.pk_tag
                -- /*withTV*/ JOIN tv_user        ON  td_user.pk_user  =  tv_user.pk_user
            )
        `



        qs = replacer(qs, {
            comments: {
                withTV: opts?.withTableVisible,
                withTP: opts?.withTablePagination,
            },
            names: {
                post,
                tag,
                user,
            },
        })



        // console.log('qs', qs)
        return qs
    }
 
}
