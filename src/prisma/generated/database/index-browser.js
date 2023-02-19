
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "d6e67a83f971b175a593ccc12e15c4a757f93ffe"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.Td_levelScalarFieldEnum = makeEnum({
  id_ainc_level: 'id_ainc_level',
  pk_level: 'pk_level',
  title_en_level: 'title_en_level',
  title_pt_level: 'title_pt_level'
});

exports.Prisma.Td_postScalarFieldEnum = makeEnum({
  id_ainc_post: 'id_ainc_post',
  pk_post: 'pk_post',
  title_en_post: 'title_en_post',
  text_en_post: 'text_en_post',
  create_post: 'create_post',
  update_post: 'update_post'
});

exports.Prisma.Td_userScalarFieldEnum = makeEnum({
  id_ainc_user: 'id_ainc_user',
  pk_user: 'pk_user',
  name_user: 'name_user',
  passHash: 'passHash',
  isStaff: 'isStaff',
  level_user: 'level_user',
  level_staff: 'level_staff',
  create_user: 'create_user',
  update_user: 'update_user'
});

exports.Prisma.Tr_post_levelScalarFieldEnum = makeEnum({
  id_ainc_post_level: 'id_ainc_post_level',
  fk_post: 'fk_post',
  fk_level: 'fk_level',
  create_post_level: 'create_post_level',
  update_post_level: 'update_post_level'
});

exports.Prisma.Tr_user_levelScalarFieldEnum = makeEnum({
  id_ainc_user_level: 'id_ainc_user_level',
  fk_user: 'fk_user',
  fk_level: 'fk_level',
  create_user_level: 'create_user_level',
  update_user_level: 'update_user_level'
});

exports.Prisma.Tr_user_postScalarFieldEnum = makeEnum({
  id_ainc_user_post: 'id_ainc_user_post',
  fk_user: 'fk_user',
  fk_post: 'fk_post',
  create_user_post: 'create_user_post',
  update_user_post: 'update_user_post'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  td_level: 'td_level',
  td_post: 'td_post',
  td_user: 'td_user',
  tr_post_level: 'tr_post_level',
  tr_user_level: 'tr_user_level',
  tr_user_post: 'tr_user_post'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
