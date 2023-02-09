export const SELECT = ({
  from = '',
  as = '',
  field = '',
  equal = '',
  value = '',
  limit = '',
  offset = '',
  F1 = '',
  S1 = '',
  rand = '',
}) => `
      SELECT ${as}.*
      FROM   ${from} AS ${as}
      WHERE  ${field} ${equal} ${value}
      ORDER BY ${F1} ${S1}, RAND(${rand})
      LIMIT  ${limit}
      OFFSET ${offset}
  `
