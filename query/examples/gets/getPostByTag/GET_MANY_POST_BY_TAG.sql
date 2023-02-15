WITH 
-- # required 
tj_post_tag,
tf_tag,

-- # optional 
-- tv_post,
-- tv_tag,


tq_getPostByTag AS (
    SELECT tj_post_tag.*
    FROM   tj_post_tag

    JOIN tf_tag     ON  tj_post_tag.pk_tag  =  tf_tag.pk_tag

    -- JOIN tv_post    ON  td_post.pk_post     =  tv_post.pk_post
    -- JOIN tv_tag     ON  td_tag.pk_tag       =  tv_tag.pk_tag
)


SELECT *
FROM tq_getPostByTag

LIMIT  :items
OFFSET :items * :page
