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
    WHEN 'LAST_UPDATE'          THEN `ORDER BY lastUpdate DESC`
    WHEN 'NEWEST'               THEN `ORDER BY create_field DESC`
    WHEN 'OLDEST'               THEN `ORDER BY create_field ASC`


    -- ======================================= --
    -- ================ STATS ================ --
    -- ======================================= --
    WHEN 'COUNT_VIEWS'          THEN `ORDER BY count_views DESC`
    WHEN 'COUNT_POSTS'          THEN `ORDER BY count_posts DESC`
    WHEN 'COUNT_SUBS'           THEN `ORDER BY count_subs DESC`

    WHEN 'TOTAL_VIEWS'          THEN `ORDER BY total_views DESC`
    WHEN 'TOTAL_POSTS'          THEN `ORDER BY total_posts DESC`
    WHEN 'AVG_VIEWS_TO_POST'    THEN `ORDER BY avg_viewsToPost DESC`
    
) END