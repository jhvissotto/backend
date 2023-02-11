-- tv_post,

tf_post AS (
	SELECT td_post.* 
	FROM   td_post
	
	-- JOIN tv_post  ON  tv_post.pk_post  =  td_post.pk_post

	WHERE (
            pk_post         = :pk_post
            -- slug_en_post    = :slug_post  
        -- OR  slug_pt_post    = :slug_post
            -- prop_post       = :prop_post
    )
)