tv_post AS (
    SELECT * 
    FROM td_post
    
    WHERE (
            isVisible_post
        -- AND launchDate <= CURRENT_TIMESTAMP
    )
)