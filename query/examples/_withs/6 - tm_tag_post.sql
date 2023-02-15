-- # optional 
-- tp_tag,
-- tv_tag,
-- tv_post,


tn_tag_post AS (
	SELECT
		-- tp_tag.sr_tag, 
		ROW_NUMBER() OVER(PARTITION BY fk_tag ORDER BY RAND()) AS rn_tag, -- post by tag
		td_tag.*,
		td_post.*

	FROM tr_post_tag
	-- JOIN tp_tag     ON  tp_tag.pk_tag    =  tr_post_tag.fk_tag

	JOIN td_tag     ON  td_tag.pk_tag    =  tr_post_tag.fk_tag
	JOIN td_post    ON  td_post.pk_post  =  tr_post_tag.fk_post

    -- JOIN tv_tag     ON  td_tag.pk_tag    =  tv_tag.pk_tag
    -- JOIN tv_post    ON  td_post.pk_post  =  tv_post.pk_post
)
,
tm_tag_post AS (
	SELECT *
	FROM tn_tag_post
	WHERE rn_tag <= :many_post
)

