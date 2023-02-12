-- tp_tag,
-- tv_tag,
-- tv_post,


tj_tag_post AS (
	SELECT
        -- tp_tag.sr_tag,
        td_tag.*,
        td_post.*
        
	FROM td_tag
	-- JOIN tp_tag         ON  td_tag.pk_tag    =  tp_tag.pk_tag  

	JOIN tr_post_tag    ON  td_tag.pk_tag    =  tr_post_tag.fk_tag  
	JOIN td_post        ON  td_post.pk_post  =  tr_post_tag.fk_post

    -- JOIN tv_tag         ON  td_tag.pk_tag    =  tv_tag.pk_tag
    -- JOIN tv_post        ON  td_post.pk_post  =  tv_post.pk_post
)

