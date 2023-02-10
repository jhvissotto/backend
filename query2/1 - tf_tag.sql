-- tv_tag,

tf_tag AS (
	SELECT td_tag.* 
	FROM   td_tag
	
	-- JOIN tv_tag  ON  tv_tag.pk_tag  =  td_tag.pk_tag

	WHERE 
		pk_tag   = :pk_tag 
		prop_tag = :prop_tag
)