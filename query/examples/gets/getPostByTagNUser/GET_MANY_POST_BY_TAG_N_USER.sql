WITH
-- # optional 
-- tv_post
-- tv_tag
-- tv_user

-- # required 
tj_post_tag_user,
tf_tag,
tf_user,


tq_getPostByTagNUser AS (
    SELECT tj_post_tag_user.*
    FROM   tj_post_tag_user

    JOIN tf_tag     ON  tj_post_tag_user.pk_tag     =  tf_tag.pk_tag
    JOIN tf_user    ON  tj_post_tag_user.pk_user    =  tf_user.pk_user

    -- JOIN tv_post    ON  tj_post_tag_user.pk_post    =  tv_post.pk_post
    -- JOIN tv_tag     ON  tj_post_tag_user.pk_tag     =  tv_tag.pk_tag
    -- JOIN tv_user    ON  tj_post_tag_user.pk_user    =  tv_user.pk_user
)


SELECT *
FROM tq_getPostByTagNUser

LIMIT  :items
OFFSET :items * :page
