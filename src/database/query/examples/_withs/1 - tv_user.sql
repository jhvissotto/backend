tv_user AS (
    SELECT * 
    FROM td_user
    
    WHERE (
            isVisible_user
        -- AND launchDate <= CURRENT_TIMESTAMP
    )
)