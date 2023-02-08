WITH
tu_post_tag AS (
	SELECT DISTINCT tag
	FROM post_tag
)
,
ts_post_tag AS (
	SELECT *
	, DENSE_RANK() OVER(ORDER BY RAND()) AS sr_tag
	FROM tu_post_tag
)
,
tj_post_tag AS (
	SELECT 
		ts_post_tag.sr_tag,
		post_tag.*
	FROM ts_post_tag
	JOIN post_tag ON post_tag.tag = ts_post_tag.tag
)
,
tn_post_tag AS (
	SELECT *
	, ROW_NUMBER() OVER(PARTITION BY tag ORDER BY RAND()) AS rn_tag
	FROM tj_post_tag
),
tf_post_tag AS (
	SELECT *
	FROM tn_post_tag
	
	WHERE rn_tag <= many_post
	AND	  sr_tag <= many_tag
)

SELECT * 
FROM tf_post_tag

