tv_tag AS (
    SELECT * 
    FROM td_tag
    
    WHERE (
            isVisible_tag
        -- AND launchDate <= CURRENT_TIMESTAMP
    )
)