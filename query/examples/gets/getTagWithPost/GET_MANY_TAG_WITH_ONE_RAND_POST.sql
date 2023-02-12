WITH 
tm_tag_post,


tq_getTagWithPost AS (
    SELECT *
    FROM tm_tag_post
)


SELECT *
FROM tq_getTagWithPost

LIMIT  :items
OFFSET :items * :page
