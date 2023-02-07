SELECT *
FROM td_post

JOIN tr_post_tag    ON td_post.pk_post  = tr_post_tag.fk_post
JOIN td_tag         ON td_tag.pk_tag    = tr_post_tag.fk_tag

WHERE pk_tag = :pk_tag

ORDER BY RAND()
LIMIT 1

