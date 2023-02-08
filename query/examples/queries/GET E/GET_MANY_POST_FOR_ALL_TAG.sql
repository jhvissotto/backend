WITH
rn_post_tag AS (
	SELECT *
	, 	DENSE_RANK() OVER(				   ORDER BY tag   ) AS dr_tag	 
	,	ROW_NUMBER() OVER(PARTITION BY tag ORDER BY RAND()) AS rn_tag
	FROM tr_post_tag
)

SELECT *
FROM rn_post_tag
WHERE dr_tag  rn_tag <= many_post