export const query = ({ email }) => `--sql
    SELECT 
        level_staff,
        pk_email,
        passHash
        
    FROM td_staff
    
    WHERE pk_email = '${email}'
`
