-- tv_tag,
-- tf_tag,

-- tu_tag,
-- ts_tag,
-- tp_tag,


tj_tag AS (
	SELECT 	
		tp_tag.sr_tag,	
		td_tag.*

	FROM tp_tag

	JOIN td_tag  ON td_tag.pk_tag  = tp_tag.fk_tag
)