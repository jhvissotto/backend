CASE (
    -- =========================================== --
    -- ================ ARBITRARY ================ --
    -- =========================================== --
    WHEN 'SORT_NUMBER'          THEN `ORDER BY sortNumber_field`


    -- ======================================== --
    -- ================ RANDOM ================ --
    -- ======================================== --
    WHEN 'RANDOM'               THEN `ORDER BY RAND(:randKey)`
    WHEN 'WEIGHT_RAND'          THEN `ORDER BY priority ASC, RAND(:randKey)`        


    -- ============================================== --
    -- ================ ALPHABETICAL ================ --
    -- ============================================== --
    WHEN 'NAME_AZ'              THEN `ORDER BY name_field ASC`
    WHEN 'NAME_ZA'              THEN `ORDER BY name_field DESC`

    WHEN 'TITLE_EN_AZ'          THEN `ORDER BY title_en_field ASC`
    WHEN 'TITLE_EN_ZA'          THEN `ORDER BY title_en_field DESC`
    
    WHEN 'TITLE_PT_AZ'          THEN `ORDER BY title_pt_field ASC`
    WHEN 'TITLE_PT_ZA'          THEN `ORDER BY title_pt_field DESC`


    -- ====================================== --
    -- ================ DATE ================ --
    -- ====================================== --
    WHEN 'LAST_UPDATE'          THEN `ORDER BY lastUpd_field DESC`
    WHEN 'NEWEST'               THEN `ORDER BY create_field DESC`
    WHEN 'OLDEST'               THEN `ORDER BY create_field ASC`


    -- ======================================= --
    -- ================ STATS ================ --
    -- ======================================= --
    -- byPost
    WHEN 'COUNT_VIEWS'          THEN `ORDER BY count_views  DESC`
    WHEN 'COUNT_LIKES'          THEN `ORDER BY count_likes  DESC`

    -- byUser, byTag
    WHEN 'COUNT_POSTS'          THEN `ORDER BY count_posts  DESC`
    WHEN 'COUNT_USERS'          THEN `ORDER BY count_users  DESC`
    
    -- byUser, byTag
    WHEN 'TOTAL_VIEWS'          THEN `ORDER BY total_views  DESC`
    WHEN 'TOTAL_LIKES'          THEN `ORDER BY total_likes  DESC`
    
    -- byUser, byTag
    WHEN 'AVG_VIEWS'            THEN `ORDER BY avg_views    DESC`
    WHEN 'AVG_LIKES'            THEN `ORDER BY avg_likes    DESC`


    -- ========================================= --
    -- ================ DEFAULT ================ --
    -- ========================================= --
    WHEN 'OMIT'                 THEN ``
    WHEN ''                     THEN ``


) END