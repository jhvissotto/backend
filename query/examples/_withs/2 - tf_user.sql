-- tv_user,

tf_user AS (
	SELECT td_user.* 
	FROM   td_user
	
	-- JOIN tv_user  ON  td_user.pk_user  =  tv_user.pk_user

	WHERE (
            pk_user         = :pk_user
            -- slug_en_user    = :slug_user  
        -- OR  slug_pt_user    = :slug_user
            -- prop_user       = :prop_user
    )
)