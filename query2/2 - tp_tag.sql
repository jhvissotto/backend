-- tv_tag,
-- tf_tag,

tu_tag AS (
	SELECT DISTINCT fk_tag
	FROM tr_post_tag
	
	JOIN tv_tag  ON  tv_tag.pk_tag  =  tr_post_tag.fk_tag
	JOIN tf_tag  ON  tf_tag.pk_tag  =  tr_post_tag.fk_tag
)
,
ts_tag AS (
	SELECT 
		DENSE_RANK() OVER(ORDER BY RAND()) AS sr_tag,
		fk_tag
	FROM tu_tag
)
,
tp_tag AS (
	SELECT *
	FROM ts_tag
	
	WHERE sr_tag
	BETWEEN (:items_tag *  :page_tag + 1) 
	AND 	(:items_tag * (:page_tag + 1))
)



