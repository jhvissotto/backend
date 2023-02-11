-- tv_post,

tc_post AS (
    SELECT  pk_post
        -- ,   slug_en_post
        -- ,   slug_pt_post

    FROM td_post
	JOIN tv_post  ON  td_post.pk_post  =  tv_post.pk_post

	WHERE (
            pk_tag          = :pk_tag
            -- slug_en_tag     = :slug_tag  
        -- OR  slug_pt_tag     = :slug_tag
            -- prop_tag        = :prop_tag
    )
)
