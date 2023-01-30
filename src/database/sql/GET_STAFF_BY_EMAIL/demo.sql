-- Active: 1674269824654@@127.0.0.1@3306@backend
-- export const query = ({ email }) => `--sql
    SELECT 
        level_staff,
        pk_email,
        passHash
        
    FROM td_staff
    
    WHERE pk_email = 'email1'
-- `
