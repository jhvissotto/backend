-- tp_post,

tj_post_tag_user AS (
	SELECT 
        -- tp_post.sr_post,
		td_post.*,
		td_tag.*,
		td_user.*

	FROM td_post
    -- JOIN tp_post        ON  td_post.pk_post  =  tp_post.pk_post  

	JOIN tr_post_tag	ON  td_post.pk_post  =  tr_post_tag.fk_post
	JOIN td_tag			ON  td_tag.pk_tag    =  tr_post_tag.fk_tag

	JOIN tr_user_post 	ON  td_post.pk_post  =  tr_user_post.fk_post
	JOIN td_user       	ON  td_user.pk_user  =  tr_user_post.fk_user
)

