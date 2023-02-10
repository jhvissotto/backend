WITH
tu_post_tag AS (
	SELECT DISTINCT fk_tag
	FROM tr_post_tag
)
,
ts_post_tag AS (
	SELECT *
	, DENSE_RANK() OVER(ORDER BY RAND()) AS sr_tag -- tag
	FROM tu_post_tag
)
,
tj_post_tag AS (
	SELECT 	ts_post_tag.sr_tag
		,	td_tag.*
		,	td_post.*

	FROM ts_post_tag

	JOIN td_tag			ON td_tag.pk_tag		= ts_post_tag.fk_tag
	JOIN tr_post_tag	ON tr_post_tag.fk_tag	= td_tag.pk_tag
	JOIN td_post		ON td_post.pk_post		= tr_post_tag.fk_post
)
,
tn_post_tag AS (
	SELECT *
	, ROW_NUMBER() OVER(PARTITION BY pk_tag ORDER BY RAND()) AS rn_tag -- post by tag
	FROM tj_post_tag
),
tf_post_tag AS (
	SELECT *
	FROM tn_post_tag
	
	WHERE rn_tag <= :many_post
	AND	  sr_tag <= :many_tag
)

SELECT * 
FROM tf_post_tag















