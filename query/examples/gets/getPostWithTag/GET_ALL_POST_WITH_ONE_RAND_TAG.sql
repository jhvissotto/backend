WITH
-- tv_post,
-- tv_tag,

tn_post_tag AS (
    SELECT 
        ROW_NUMBER() OVER(PARTITION BY post ORDER BY RAND()) AS rn_post
        , *

    FROM td_post

    JOIN tr_post_tag    ON td_post.pk_post  = tr_post_tag.fk_post
    JOIN td_tag         ON td_tag.pk_tag    = tr_post_tag.fk_tag

    -- JOIN tv_post        ON  td_post.pk_post = tv_post.pk_post
    -- JOIN tv_tag         ON  td_tag.pk_tag   = tv_tag.pk_tag
)
,
tq_getPostWithTag AS (
    SELECT *
    FROM tn_post_tag
    WHERE rn_post = 1 
)


SELECT *
FROM tq_getPostWithTag
