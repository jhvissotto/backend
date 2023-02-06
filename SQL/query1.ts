// // prettier-ignore
// async function Main() {
//   const r = await knex.select('td_user.*')
//     .from('td_user')
//     // .join('tr_user_level')

//   console.log('r', r)
// }

// Main()

// export const SELECT = ({
//   from = '',
//   as = '',
//   field = '',
//   equal = '',
//   value = '',
//   limit = '',
//   offset = '',
//   F1 = '',
//   S1 = '',
//   rand = '',
// }) => `
//     SELECT ${from}.*
//     FROM   ${from} as ${as}
//     WHERE  ${field} ${equal} ${value}
//     ORDER BY ${F1} ${S1}, RAND(${rand})
//     LIMIT  ${limit}
//     OFFSET ${offset}
// `

// // prettier-ignore
// function query({
//     withs:  {
//             W = 'w'
//     },
//     tables: {
//             X,
//             Y = ''
//     },
//     rand:   R = '',
//     limit:  L = '',
//     offset: O = '',
// }) {
// return `
//     WITH (
//         SELECT   td_${X}.*
//         ${Y ? `, td_${Y}.*` : ''}

//         FROM ${X}

//         ${Y ? `JOIN tr_${X}_${Y}  ON  td_${X}.id_${X}  =  tr_${X}_${Y}.fk_${X}` : ''}
//         ${Y ? `JOIN td_${Y}       ON  td_${Y}.id_${Y}  =  tr_${X}_${Y}.fk_${Y}` : ''}

//         WHERE (
//             td_${X}.id_${X} = :id_${X}
//         )

//         AND   (
//             td_${Y}.id_${X} = :id_${Y}
//         )
//     ) AS tb_${W}

//     SELECT  tb_${W}.*
//     FROM    tb_${W}

//     ${R      ? `ORDER BY RAND(${R})` : ''}
//     ${L      ? `LIMIT         ${L}`  : ''}
//     ${L && O ? `OFFSET        ${O}`  : ''}
// `
// }

// const qr = query({
//   withs: {},
//   tables: { X: 'post' },
// })

// console.log('qr', qr)
