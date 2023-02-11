-- tp_tag,

tn_tag_post AS (
	SELECT
		tp_tag.sr_tag, 
		ROW_NUMBER() OVER(PARTITION BY fk_tag ORDER BY RAND()) AS rn_tag, -- post by tag
		td_tag.*,
		td_post.*

	FROM tr_post_tag
	JOIN tp_tag   ON  tp_tag.pk_tag    =  tr_post_tag.fk_tag

	JOIN td_tag   ON  td_tag.pk_tag    =  tr_post_tag.fk_tag
	JOIN td_post  ON  td_post.pk_post  =  tr_post_tag.fk_post
)
,
tq_tag_post AS (
	SELECT *
	FROM tn_tag_post
	WHERE rn_tag <= :many_post
)

