WITH
tj_post_user_tag,
tf_user,
tf_tag,


tq_getPostByUserTag AS (
    SELECT tj_post_user_tag.*
    FROM   tj_post_user_tag

    JOIN tf_user  ON  tj_post_user_tag.pk_user  =  tf_user.pk_user
    JOIN tf_tag   ON  tj_post_user_tag.pk_tag   =  tf_tag.pk_tag
)


SELECT *
FROM tq_getPostByUserTag

LIMIT  :items
OFFSET :items * :page
