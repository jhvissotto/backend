-- WITH
-- # optional
-- tv_user,


WITH




tq_getPost AS (
    SELECT td_user.*
    FROM   td_user

    -- /*withTV*/ JOIN tv_user  ON  td_user.pk_user  =  tv_user.pk_user
)


SELECT *
FROM tq_getPost

WHERE pk_user = 'email1'
-- LIMIT 1
