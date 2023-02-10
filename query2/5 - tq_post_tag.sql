-- tv_post,
-- tf_post,

-- tu_post,
-- ts_post,
-- tp_post,

-- tj_post,


-- tv_tag,
-- tf_tag,

-- tu_tag,
-- ts_tag,
-- tp_tag,

-- tj_tag,


-- tj_post_tag


tn_post_tag AS (
	SELECT 
		ROW_NUMBER() OVER(PARTITION BY pk_tag ORDER BY RAND()) AS rn_tag, -- post by tag 
		tj_post_tag.*

	FROM tj_post_tag
),
tq_post_tag AS (
	SELECT *
	FROM tn_post_tag
	WHERE rn_tag <= :many_post
)

