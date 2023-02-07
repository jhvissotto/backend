tv_table AS (
    SELECT * 
    FROM td_table
    
    WHERE (
            isVisible_field
        AND launchDate <= CURRENT_TIMESTAMP
    )
)