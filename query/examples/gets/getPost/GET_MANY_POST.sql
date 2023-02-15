WITH 
-- # optional 
-- tv_post,


tq_getPost AS (
    SELECT td_post.*
    FROM   td_post
    
    -- JOIN tv_post  ON  td_post.pk_post  =  tv_post.pk_post
)


SELECT *
FROM tq_getPost

LIMIT  :items
OFFSET :items * :page
