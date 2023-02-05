-- ========================================= --
-- ================ VISIBLE ================ --
-- ========================================= --
tv_table AS (
    SELECT * FROM td_table
    WHERE ( 
            isVisible_field 
        AND launchDate <= CURRENT_TIMESTAMP 
    )
)


-- ====================================== --
-- ================ FROM ================ --
-- ====================================== --
WITH
tv_post,
tv_tag,

tj_post_tag AS (
    SELECT *
    FROM tv_post

    JOIN tr_post_tag    ON tv_post.pk_post  = tr_post_tag.fk_post
    JOIN tv_tag         ON tv_tag.pk_tag    = tr_post_tag.fk_tag
)
,
tn_post_tag AS (
    SELECT *
        , ROW_NUMBER() OVER(PARTITION BY post ORDER BY RAND()) AS rn_post
        , ROW_NUMBER() OVER(PARTITION BY tag  ORDER BY RAND()) AS rn_tag

    FROM tj_post_tag
)
,
tf_post_tag AS (
    SELECT *
    FROM tn_post_tag

    WHERE (
        pk_post         = :pk_post
        slug_en_post    = :slug_post OR  
        slug_pt_post    = :slug_post
        rn_post         = 1 

        pk_tag          = :pk_tag
        slug_en_tag     = :slug_tag OR  
        slug_pt_tag     = :slug_tag
        rn_tag          = 1
    )
)


-- ======================================== --
-- ================ SELECT ================ --
-- ======================================== --
SELECT * 
FROM tf_post_tag


-- SORT --
ORDER BY :sort

-- ONE --
LIMIT 1
-- MANY --
LIMIT  :items
OFFSET :items * :page


