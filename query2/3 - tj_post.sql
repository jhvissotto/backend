-- tv_post,
-- tf_post,

-- tu_post,
-- ts_post,
-- tp_post,


tj_post AS (
	SELECT 	
		tp_post.sr_post,	
		td_post.*

	FROM tp_post

	JOIN td_post  ON td_post.pk_post  = tp_post.fk_post
)