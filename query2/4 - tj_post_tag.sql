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


tj_post_tag AS (
	SELECT
		tj_tag.*,
		tj_post.*
		 	
	FROM tj_tag
	JOIN tr_post_tag  ON  tr_post_tag.fk_tag  =  tj_tag.pk_tag
	JOIN tj_post      ON  tj_post.pk_post     =  tr_post_tag.fk_post
)

