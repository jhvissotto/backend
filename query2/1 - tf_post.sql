-- tv_post,

tf_post AS (
	SELECT td_post.* 
	FROM   td_post
	
	-- JOIN tv_post  ON  tv_post.pk_post  =  td_post.pk_post

	WHERE 
		pk_post   = :pk_post 
		prop_post = :prop_post
)