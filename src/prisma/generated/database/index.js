
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "src\\prisma\\generated\\database",
    "prisma\\generated\\database",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"td_level\",\"dbName\":null,\"fields\":[{\"name\":\"id_ainc_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pk_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title_en_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title_pt_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tr_post_level\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tr_post_level\",\"relationName\":\"td_levelTotr_post_level\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tr_user_level\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tr_user_level\",\"relationName\":\"td_levelTotr_user_level\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"td_post\",\"dbName\":null,\"fields\":[{\"name\":\"id_ainc_post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pk_post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title_en_post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text_en_post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tr_post_level\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tr_post_level\",\"relationName\":\"td_postTotr_post_level\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tr_user_post\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tr_user_post\",\"relationName\":\"td_postTotr_user_post\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"td_user\",\"dbName\":null,\"fields\":[{\"name\":\"id_ainc_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pk_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isStaff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level_staff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tr_user_level\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tr_user_level\",\"relationName\":\"td_userTotr_user_level\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tr_user_post\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tr_user_post\",\"relationName\":\"td_userTotr_user_post\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"tr_post_level\",\"dbName\":null,\"fields\":[{\"name\":\"id_ainc_post_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_post_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_post_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"td_post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"td_post\",\"relationName\":\"td_postTotr_post_level\",\"relationFromFields\":[\"fk_post\"],\"relationToFields\":[\"pk_post\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"td_level\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"td_level\",\"relationName\":\"td_levelTotr_post_level\",\"relationFromFields\":[\"fk_level\"],\"relationToFields\":[\"pk_level\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"tr_user_level\",\"dbName\":null,\"fields\":[{\"name\":\"id_ainc_user_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_user_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_user_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"td_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"td_user\",\"relationName\":\"td_userTotr_user_level\",\"relationFromFields\":[\"fk_user\"],\"relationToFields\":[\"pk_user\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"td_level\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"td_level\",\"relationName\":\"td_levelTotr_user_level\",\"relationFromFields\":[\"fk_level\"],\"relationToFields\":[\"pk_level\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"tr_user_post\",\"dbName\":null,\"fields\":[{\"name\":\"id_ainc_user_post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_user_post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_user_post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"td_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"td_user\",\"relationName\":\"td_userTotr_user_post\",\"relationFromFields\":[\"fk_user\"],\"relationToFields\":[\"pk_user\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"td_post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"td_post\",\"relationName\":\"td_postTotr_user_post\",\"relationFromFields\":[\"fk_post\"],\"relationToFields\":[\"pk_post\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"td_level\",\"plural\":\"td_levels\",\"findUnique\":\"findUniquetd_level\",\"findUniqueOrThrow\":\"findUniquetd_levelOrThrow\",\"findFirst\":\"findFirsttd_level\",\"findFirstOrThrow\":\"findFirsttd_levelOrThrow\",\"findMany\":\"findManytd_level\",\"create\":\"createOnetd_level\",\"createMany\":\"createManytd_level\",\"delete\":\"deleteOnetd_level\",\"update\":\"updateOnetd_level\",\"deleteMany\":\"deleteManytd_level\",\"updateMany\":\"updateManytd_level\",\"upsert\":\"upsertOnetd_level\",\"aggregate\":\"aggregatetd_level\",\"groupBy\":\"groupBytd_level\"},{\"model\":\"td_post\",\"plural\":\"td_posts\",\"findUnique\":\"findUniquetd_post\",\"findUniqueOrThrow\":\"findUniquetd_postOrThrow\",\"findFirst\":\"findFirsttd_post\",\"findFirstOrThrow\":\"findFirsttd_postOrThrow\",\"findMany\":\"findManytd_post\",\"create\":\"createOnetd_post\",\"createMany\":\"createManytd_post\",\"delete\":\"deleteOnetd_post\",\"update\":\"updateOnetd_post\",\"deleteMany\":\"deleteManytd_post\",\"updateMany\":\"updateManytd_post\",\"upsert\":\"upsertOnetd_post\",\"aggregate\":\"aggregatetd_post\",\"groupBy\":\"groupBytd_post\"},{\"model\":\"td_user\",\"plural\":\"td_users\",\"findUnique\":\"findUniquetd_user\",\"findUniqueOrThrow\":\"findUniquetd_userOrThrow\",\"findFirst\":\"findFirsttd_user\",\"findFirstOrThrow\":\"findFirsttd_userOrThrow\",\"findMany\":\"findManytd_user\",\"create\":\"createOnetd_user\",\"createMany\":\"createManytd_user\",\"delete\":\"deleteOnetd_user\",\"update\":\"updateOnetd_user\",\"deleteMany\":\"deleteManytd_user\",\"updateMany\":\"updateManytd_user\",\"upsert\":\"upsertOnetd_user\",\"aggregate\":\"aggregatetd_user\",\"groupBy\":\"groupBytd_user\"},{\"model\":\"tr_post_level\",\"plural\":\"tr_post_levels\",\"findUnique\":\"findUniquetr_post_level\",\"findUniqueOrThrow\":\"findUniquetr_post_levelOrThrow\",\"findFirst\":\"findFirsttr_post_level\",\"findFirstOrThrow\":\"findFirsttr_post_levelOrThrow\",\"findMany\":\"findManytr_post_level\",\"create\":\"createOnetr_post_level\",\"createMany\":\"createManytr_post_level\",\"delete\":\"deleteOnetr_post_level\",\"update\":\"updateOnetr_post_level\",\"deleteMany\":\"deleteManytr_post_level\",\"updateMany\":\"updateManytr_post_level\",\"upsert\":\"upsertOnetr_post_level\",\"aggregate\":\"aggregatetr_post_level\",\"groupBy\":\"groupBytr_post_level\"},{\"model\":\"tr_user_level\",\"plural\":\"tr_user_levels\",\"findUnique\":\"findUniquetr_user_level\",\"findUniqueOrThrow\":\"findUniquetr_user_levelOrThrow\",\"findFirst\":\"findFirsttr_user_level\",\"findFirstOrThrow\":\"findFirsttr_user_levelOrThrow\",\"findMany\":\"findManytr_user_level\",\"create\":\"createOnetr_user_level\",\"createMany\":\"createManytr_user_level\",\"delete\":\"deleteOnetr_user_level\",\"update\":\"updateOnetr_user_level\",\"deleteMany\":\"deleteManytr_user_level\",\"updateMany\":\"updateManytr_user_level\",\"upsert\":\"upsertOnetr_user_level\",\"aggregate\":\"aggregatetr_user_level\",\"groupBy\":\"groupBytr_user_level\"},{\"model\":\"tr_user_post\",\"plural\":\"tr_user_posts\",\"findUnique\":\"findUniquetr_user_post\",\"findUniqueOrThrow\":\"findUniquetr_user_postOrThrow\",\"findFirst\":\"findFirsttr_user_post\",\"findFirstOrThrow\":\"findFirsttr_user_postOrThrow\",\"findMany\":\"findManytr_user_post\",\"create\":\"createOnetr_user_post\",\"createMany\":\"createManytr_user_post\",\"delete\":\"deleteOnetr_user_post\",\"update\":\"updateOnetr_user_post\",\"deleteMany\":\"deleteManytr_user_post\",\"updateMany\":\"updateManytr_user_post\",\"upsert\":\"upsertOnetr_user_post\",\"aggregate\":\"aggregatetr_user_post\",\"groupBy\":\"groupBytr_user_post\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Coding\\Trying\\fullstack\\backend\\src\\prisma\\generated\\database",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\..\\..\\.env",
    "schemaEnvPath": "..\\..\\..\\..\\.env"
  },
  "relativePath": "..\\..\\schemas",
  "clientVersion": "4.9.0",
  "engineVersion": "d6e67a83f971b175a593ccc12e15c4a757f93ffe",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src\\prisma\\generated\\database\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src\\prisma\\generated\\database\\schema.prisma")
