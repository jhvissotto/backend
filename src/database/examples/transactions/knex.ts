import { knex } from '~/src/database'

// ============================ //
// ======== Example #1 ======== //
// ============================ //
knex
  .transaction(t => {
    knex
      .transacting(t)
      .insert({ user: 'user1', pass: 'pass1' })
      .into('table')
      .then(() => {
        knex
          .insert([
            { user: 'user2', pass: 'pass2' },
            { user: 'user3', pass: 'pass3' },
          ])
          .into('table')
          .then(t.commit)
          .catch(t.rollback)
      })
      .catch(t.rollback)
  })
  .then()
  .catch()

// ============================ //
// ======== Example #2 ======== //
// ============================ //
knex
  .transaction(trx => {
    return Promise.all([
      knex
        .raw("INSERT INTO `table` (`name`, `pass`) VALUES ('user4', 'pass4')")
        .transacting(trx),
      knex
        .raw("INSERT INTO `table` (`name`, `pass`) VALUES ('user5', 'pass5')")
        .transacting(trx),
    ])
  })
  .then()
  .catch()

// ============================ //
// ======== Example #3 ======== //
// ============================ //
knex.transaction(trx => {
  knex
    .insert({ user: 'user6', pass: 'pass6' })
    .into('table')
    .transacting(trx)
    .then(trx.commit, trx.rollback)
})
