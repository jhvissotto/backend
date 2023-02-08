// prettier-ignore
function query({
      withs:  {
              W = 'w'
      },
      tables: {
              X,
              Y = ''
      },
      rand:   R = '',
      limit:  L = '',
      offset: O = '',
  }) {
  return `
      WITH (
          SELECT   td_${X}.*
          ${Y ? `, td_${Y}.*` : ''}

          FROM ${X}

          ${Y ? `JOIN tr_${X}_${Y}  ON  td_${X}.id_${X}  =  tr_${X}_${Y}.fk_${X}` : ''}
          ${Y ? `JOIN td_${Y}       ON  td_${Y}.id_${Y}  =  tr_${X}_${Y}.fk_${Y}` : ''}

          WHERE (
              td_${X}.id_${X} = :id_${X}
          )

          AND   (
              td_${Y}.id_${X} = :id_${Y}
          )
      ) AS tb_${W}

      SELECT  tb_${W}.*
      FROM    tb_${W}

      ${R      ? `ORDER BY RAND(${R})` : ''}
      ${L      ? `LIMIT         ${L}`  : ''}
      ${L && O ? `OFFSET        ${O}`  : ''}
  `
  }
