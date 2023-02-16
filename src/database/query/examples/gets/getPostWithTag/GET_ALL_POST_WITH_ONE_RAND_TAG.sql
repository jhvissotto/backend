WITH
-- # required 
tm_post_tag,


tq_getPostWithTag AS (
    SELECT *
    FROM tm_post_tag
)


SELECT *
FROM tq_getPostWithTag
