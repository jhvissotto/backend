-- export const query = ({ email }) => `
    SELECT 
        td_user.pk_email,
        td_user.passHash,

        td_level.pk_level,
        td_level.levelName_en

    FROM td_user

    JOIN tr_user_level 	ON tr_user_level.fk_email = td_user.pk_email
    JOIN td_level       ON td_level.pk_level = tr_user_level.fk_level

    WHERE td_user.pk_email = 'email1'
-- `
