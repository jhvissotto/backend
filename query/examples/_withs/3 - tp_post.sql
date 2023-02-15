-- # optional 
-- tv_post,
-- tf_post,


tu_post AS (
	SELECT DISTINCT fk_post
	FROM tr_post_tag

	-- JOIN tv_post  ON  tv_post.pk_post  =  tr_post_tag.fk_post
	-- JOIN tf_post  ON  tf_post.pk_post  =  tr_post_tag.fk_post
)
,
ts_post AS (
	SELECT 
		DENSE_RANK() OVER(ORDER BY RAND()) AS sr_post
		, td_post.*
		
	FROM tu_post
    JOIN td_post  ON  td_post.pk_post  =  tu_post.fk_post
)
,
tp_post AS (
	SELECT * 
	FROM ts_post
	
	WHERE sr_post
	BETWEEN (:items_post *  :page_post + 1) 
	AND 	(:items_post * (:page_post + 1))
)

