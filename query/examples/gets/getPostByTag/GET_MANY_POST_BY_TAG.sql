WITH 
-- tv_post,
-- tv_tag,


tq_getPostByTag AS (
    SELECT *
    FROM td_post

    JOIN tr_post_tag    ON td_post.pk_post  = tr_post_tag.fk_post
    JOIN td_tag         ON td_tag.pk_tag    = tr_post_tag.fk_tag

    -- JOIN tv_post        ON  td_post.pk_post = tv_post.pk_post
    -- JOIN tv_tag         ON  td_tag.pk_tag   = tv_tag.pk_tag
    
    WHERE (
            pk_tag      = :pk_tag
            -- slug_en_tag = :slug_tag
        -- OR  slug_pt_tag = :slug_tag
    )
)


SELECT *
FROM tq_getPostByTag

LIMIT  :items
OFFSET :items * :page
