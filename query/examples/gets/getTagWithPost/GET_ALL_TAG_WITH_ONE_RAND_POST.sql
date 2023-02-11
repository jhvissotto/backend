WITH 
-- tv_tag,
-- tv_post,

tn_tag_post AS (
    SELECT 
        ROW_NUMBER() OVER(PARTITION BY tag ORDER BY RAND()) AS rn_tag
        , *

    FROM td_tag

    JOIN tr_post_tag    ON td_tag.pk_tag    = tr_post_tag.fk_tag
    JOIN td_post        ON td_post.pk_post  = tr_post_tag.fk_post

    -- JOIN tv_tag         ON  td_tag.pk_tag   = tv_tag.pk_tag
    -- JOIN tv_post        ON  td_post.pk_post = tv_post.pk_post
)
,
tq_getTagWithPost AS (
    SELECT *
    FROM tn_tag_post
    WHERE rn_tag = 1
)


SELECT *
FROM tq_getTagWithPost
