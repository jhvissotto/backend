
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model td_level
 * 
 */
export type td_level = {
  id_ainc_level: number
  pk_level: number | null
  title_en_level: string | null
  title_pt_level: string | null
}

/**
 * Model td_post
 * 
 */
export type td_post = {
  id_ainc_post: number
  pk_post: string
  title_en_post: string | null
  text_en_post: string | null
  create_post: Date | null
  update_post: Date | null
}

/**
 * Model td_user
 * 
 */
export type td_user = {
  id_ainc_user: number
  pk_user: string
  name_user: string | null
  passHash: string | null
  isStaff: boolean | null
  level_user: number | null
  level_staff: number | null
  create_user: Date | null
  update_user: Date | null
}

/**
 * Model tr_post_level
 * 
 */
export type tr_post_level = {
  id_ainc_post_level: number
  fk_post: string | null
  fk_level: number | null
  create_post_level: Date | null
  update_post_level: Date | null
}

/**
 * Model tr_user_level
 * 
 */
export type tr_user_level = {
  id_ainc_user_level: number
  fk_user: string | null
  fk_level: number | null
  create_user_level: Date | null
  update_user_level: Date | null
}

/**
 * Model tr_user_post
 * 
 */
export type tr_user_post = {
  id_ainc_user_post: number
  fk_user: string | null
  fk_post: string | null
  create_user_post: Date | null
  update_user_post: Date | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Td_levels
 * const td_levels = await prisma.td_level.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Td_levels
   * const td_levels = await prisma.td_level.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.td_level`: Exposes CRUD operations for the **td_level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Td_levels
    * const td_levels = await prisma.td_level.findMany()
    * ```
    */
  get td_level(): Prisma.td_levelDelegate<GlobalReject>;

  /**
   * `prisma.td_post`: Exposes CRUD operations for the **td_post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Td_posts
    * const td_posts = await prisma.td_post.findMany()
    * ```
    */
  get td_post(): Prisma.td_postDelegate<GlobalReject>;

  /**
   * `prisma.td_user`: Exposes CRUD operations for the **td_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Td_users
    * const td_users = await prisma.td_user.findMany()
    * ```
    */
  get td_user(): Prisma.td_userDelegate<GlobalReject>;

  /**
   * `prisma.tr_post_level`: Exposes CRUD operations for the **tr_post_level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_post_levels
    * const tr_post_levels = await prisma.tr_post_level.findMany()
    * ```
    */
  get tr_post_level(): Prisma.tr_post_levelDelegate<GlobalReject>;

  /**
   * `prisma.tr_user_level`: Exposes CRUD operations for the **tr_user_level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_user_levels
    * const tr_user_levels = await prisma.tr_user_level.findMany()
    * ```
    */
  get tr_user_level(): Prisma.tr_user_levelDelegate<GlobalReject>;

  /**
   * `prisma.tr_user_post`: Exposes CRUD operations for the **tr_user_post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_user_posts
    * const tr_user_posts = await prisma.tr_user_post.findMany()
    * ```
    */
  get tr_user_post(): Prisma.tr_user_postDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.9.0
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    td_level: 'td_level',
    td_post: 'td_post',
    td_user: 'td_user',
    tr_post_level: 'tr_post_level',
    tr_user_level: 'tr_user_level',
    tr_user_post: 'tr_user_post'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Td_levelCountOutputType
   */


  export type Td_levelCountOutputType = {
    tr_post_level: number
    tr_user_level: number
  }

  export type Td_levelCountOutputTypeSelect = {
    tr_post_level?: boolean
    tr_user_level?: boolean
  }

  export type Td_levelCountOutputTypeGetPayload<S extends boolean | null | undefined | Td_levelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Td_levelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Td_levelCountOutputTypeArgs)
    ? Td_levelCountOutputType 
    : S extends { select: any } & (Td_levelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Td_levelCountOutputType ? Td_levelCountOutputType[P] : never
  } 
      : Td_levelCountOutputType




  // Custom InputTypes

  /**
   * Td_levelCountOutputType without action
   */
  export type Td_levelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Td_levelCountOutputType
     */
    select?: Td_levelCountOutputTypeSelect | null
  }



  /**
   * Count Type Td_postCountOutputType
   */


  export type Td_postCountOutputType = {
    tr_post_level: number
    tr_user_post: number
  }

  export type Td_postCountOutputTypeSelect = {
    tr_post_level?: boolean
    tr_user_post?: boolean
  }

  export type Td_postCountOutputTypeGetPayload<S extends boolean | null | undefined | Td_postCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Td_postCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Td_postCountOutputTypeArgs)
    ? Td_postCountOutputType 
    : S extends { select: any } & (Td_postCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Td_postCountOutputType ? Td_postCountOutputType[P] : never
  } 
      : Td_postCountOutputType




  // Custom InputTypes

  /**
   * Td_postCountOutputType without action
   */
  export type Td_postCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Td_postCountOutputType
     */
    select?: Td_postCountOutputTypeSelect | null
  }



  /**
   * Count Type Td_userCountOutputType
   */


  export type Td_userCountOutputType = {
    tr_user_level: number
    tr_user_post: number
  }

  export type Td_userCountOutputTypeSelect = {
    tr_user_level?: boolean
    tr_user_post?: boolean
  }

  export type Td_userCountOutputTypeGetPayload<S extends boolean | null | undefined | Td_userCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Td_userCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Td_userCountOutputTypeArgs)
    ? Td_userCountOutputType 
    : S extends { select: any } & (Td_userCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Td_userCountOutputType ? Td_userCountOutputType[P] : never
  } 
      : Td_userCountOutputType




  // Custom InputTypes

  /**
   * Td_userCountOutputType without action
   */
  export type Td_userCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Td_userCountOutputType
     */
    select?: Td_userCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model td_level
   */


  export type AggregateTd_level = {
    _count: Td_levelCountAggregateOutputType | null
    _avg: Td_levelAvgAggregateOutputType | null
    _sum: Td_levelSumAggregateOutputType | null
    _min: Td_levelMinAggregateOutputType | null
    _max: Td_levelMaxAggregateOutputType | null
  }

  export type Td_levelAvgAggregateOutputType = {
    id_ainc_level: number | null
    pk_level: number | null
  }

  export type Td_levelSumAggregateOutputType = {
    id_ainc_level: number | null
    pk_level: number | null
  }

  export type Td_levelMinAggregateOutputType = {
    id_ainc_level: number | null
    pk_level: number | null
    title_en_level: string | null
    title_pt_level: string | null
  }

  export type Td_levelMaxAggregateOutputType = {
    id_ainc_level: number | null
    pk_level: number | null
    title_en_level: string | null
    title_pt_level: string | null
  }

  export type Td_levelCountAggregateOutputType = {
    id_ainc_level: number
    pk_level: number
    title_en_level: number
    title_pt_level: number
    _all: number
  }


  export type Td_levelAvgAggregateInputType = {
    id_ainc_level?: true
    pk_level?: true
  }

  export type Td_levelSumAggregateInputType = {
    id_ainc_level?: true
    pk_level?: true
  }

  export type Td_levelMinAggregateInputType = {
    id_ainc_level?: true
    pk_level?: true
    title_en_level?: true
    title_pt_level?: true
  }

  export type Td_levelMaxAggregateInputType = {
    id_ainc_level?: true
    pk_level?: true
    title_en_level?: true
    title_pt_level?: true
  }

  export type Td_levelCountAggregateInputType = {
    id_ainc_level?: true
    pk_level?: true
    title_en_level?: true
    title_pt_level?: true
    _all?: true
  }

  export type Td_levelAggregateArgs = {
    /**
     * Filter which td_level to aggregate.
     */
    where?: td_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_levels to fetch.
     */
    orderBy?: Enumerable<td_levelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: td_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned td_levels
    **/
    _count?: true | Td_levelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Td_levelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Td_levelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Td_levelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Td_levelMaxAggregateInputType
  }

  export type GetTd_levelAggregateType<T extends Td_levelAggregateArgs> = {
        [P in keyof T & keyof AggregateTd_level]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTd_level[P]>
      : GetScalarType<T[P], AggregateTd_level[P]>
  }




  export type Td_levelGroupByArgs = {
    where?: td_levelWhereInput
    orderBy?: Enumerable<td_levelOrderByWithAggregationInput>
    by: Td_levelScalarFieldEnum[]
    having?: td_levelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Td_levelCountAggregateInputType | true
    _avg?: Td_levelAvgAggregateInputType
    _sum?: Td_levelSumAggregateInputType
    _min?: Td_levelMinAggregateInputType
    _max?: Td_levelMaxAggregateInputType
  }


  export type Td_levelGroupByOutputType = {
    id_ainc_level: number
    pk_level: number | null
    title_en_level: string | null
    title_pt_level: string | null
    _count: Td_levelCountAggregateOutputType | null
    _avg: Td_levelAvgAggregateOutputType | null
    _sum: Td_levelSumAggregateOutputType | null
    _min: Td_levelMinAggregateOutputType | null
    _max: Td_levelMaxAggregateOutputType | null
  }

  type GetTd_levelGroupByPayload<T extends Td_levelGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Td_levelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Td_levelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Td_levelGroupByOutputType[P]>
            : GetScalarType<T[P], Td_levelGroupByOutputType[P]>
        }
      >
    >


  export type td_levelSelect = {
    id_ainc_level?: boolean
    pk_level?: boolean
    title_en_level?: boolean
    title_pt_level?: boolean
    tr_post_level?: boolean | td_level$tr_post_levelArgs
    tr_user_level?: boolean | td_level$tr_user_levelArgs
    _count?: boolean | Td_levelCountOutputTypeArgs
  }


  export type td_levelInclude = {
    tr_post_level?: boolean | td_level$tr_post_levelArgs
    tr_user_level?: boolean | td_level$tr_user_levelArgs
    _count?: boolean | Td_levelCountOutputTypeArgs
  }

  export type td_levelGetPayload<S extends boolean | null | undefined | td_levelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? td_level :
    S extends undefined ? never :
    S extends { include: any } & (td_levelArgs | td_levelFindManyArgs)
    ? td_level  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'tr_post_level' ? Array < tr_post_levelGetPayload<S['include'][P]>>  :
        P extends 'tr_user_level' ? Array < tr_user_levelGetPayload<S['include'][P]>>  :
        P extends '_count' ? Td_levelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (td_levelArgs | td_levelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'tr_post_level' ? Array < tr_post_levelGetPayload<S['select'][P]>>  :
        P extends 'tr_user_level' ? Array < tr_user_levelGetPayload<S['select'][P]>>  :
        P extends '_count' ? Td_levelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof td_level ? td_level[P] : never
  } 
      : td_level


  type td_levelCountArgs = 
    Omit<td_levelFindManyArgs, 'select' | 'include'> & {
      select?: Td_levelCountAggregateInputType | true
    }

  export interface td_levelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Td_level that matches the filter.
     * @param {td_levelFindUniqueArgs} args - Arguments to find a Td_level
     * @example
     * // Get one Td_level
     * const td_level = await prisma.td_level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends td_levelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, td_levelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'td_level'> extends True ? Prisma__td_levelClient<td_levelGetPayload<T>> : Prisma__td_levelClient<td_levelGetPayload<T> | null, null>

    /**
     * Find one Td_level that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {td_levelFindUniqueOrThrowArgs} args - Arguments to find a Td_level
     * @example
     * // Get one Td_level
     * const td_level = await prisma.td_level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends td_levelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, td_levelFindUniqueOrThrowArgs>
    ): Prisma__td_levelClient<td_levelGetPayload<T>>

    /**
     * Find the first Td_level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_levelFindFirstArgs} args - Arguments to find a Td_level
     * @example
     * // Get one Td_level
     * const td_level = await prisma.td_level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends td_levelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, td_levelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'td_level'> extends True ? Prisma__td_levelClient<td_levelGetPayload<T>> : Prisma__td_levelClient<td_levelGetPayload<T> | null, null>

    /**
     * Find the first Td_level that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_levelFindFirstOrThrowArgs} args - Arguments to find a Td_level
     * @example
     * // Get one Td_level
     * const td_level = await prisma.td_level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends td_levelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, td_levelFindFirstOrThrowArgs>
    ): Prisma__td_levelClient<td_levelGetPayload<T>>

    /**
     * Find zero or more Td_levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_levelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Td_levels
     * const td_levels = await prisma.td_level.findMany()
     * 
     * // Get first 10 Td_levels
     * const td_levels = await prisma.td_level.findMany({ take: 10 })
     * 
     * // Only select the `id_ainc_level`
     * const td_levelWithId_ainc_levelOnly = await prisma.td_level.findMany({ select: { id_ainc_level: true } })
     * 
    **/
    findMany<T extends td_levelFindManyArgs>(
      args?: SelectSubset<T, td_levelFindManyArgs>
    ): PrismaPromise<Array<td_levelGetPayload<T>>>

    /**
     * Create a Td_level.
     * @param {td_levelCreateArgs} args - Arguments to create a Td_level.
     * @example
     * // Create one Td_level
     * const Td_level = await prisma.td_level.create({
     *   data: {
     *     // ... data to create a Td_level
     *   }
     * })
     * 
    **/
    create<T extends td_levelCreateArgs>(
      args: SelectSubset<T, td_levelCreateArgs>
    ): Prisma__td_levelClient<td_levelGetPayload<T>>

    /**
     * Create many Td_levels.
     *     @param {td_levelCreateManyArgs} args - Arguments to create many Td_levels.
     *     @example
     *     // Create many Td_levels
     *     const td_level = await prisma.td_level.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends td_levelCreateManyArgs>(
      args?: SelectSubset<T, td_levelCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Td_level.
     * @param {td_levelDeleteArgs} args - Arguments to delete one Td_level.
     * @example
     * // Delete one Td_level
     * const Td_level = await prisma.td_level.delete({
     *   where: {
     *     // ... filter to delete one Td_level
     *   }
     * })
     * 
    **/
    delete<T extends td_levelDeleteArgs>(
      args: SelectSubset<T, td_levelDeleteArgs>
    ): Prisma__td_levelClient<td_levelGetPayload<T>>

    /**
     * Update one Td_level.
     * @param {td_levelUpdateArgs} args - Arguments to update one Td_level.
     * @example
     * // Update one Td_level
     * const td_level = await prisma.td_level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends td_levelUpdateArgs>(
      args: SelectSubset<T, td_levelUpdateArgs>
    ): Prisma__td_levelClient<td_levelGetPayload<T>>

    /**
     * Delete zero or more Td_levels.
     * @param {td_levelDeleteManyArgs} args - Arguments to filter Td_levels to delete.
     * @example
     * // Delete a few Td_levels
     * const { count } = await prisma.td_level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends td_levelDeleteManyArgs>(
      args?: SelectSubset<T, td_levelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_levelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Td_levels
     * const td_level = await prisma.td_level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends td_levelUpdateManyArgs>(
      args: SelectSubset<T, td_levelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Td_level.
     * @param {td_levelUpsertArgs} args - Arguments to update or create a Td_level.
     * @example
     * // Update or create a Td_level
     * const td_level = await prisma.td_level.upsert({
     *   create: {
     *     // ... data to create a Td_level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Td_level we want to update
     *   }
     * })
    **/
    upsert<T extends td_levelUpsertArgs>(
      args: SelectSubset<T, td_levelUpsertArgs>
    ): Prisma__td_levelClient<td_levelGetPayload<T>>

    /**
     * Count the number of Td_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_levelCountArgs} args - Arguments to filter Td_levels to count.
     * @example
     * // Count the number of Td_levels
     * const count = await prisma.td_level.count({
     *   where: {
     *     // ... the filter for the Td_levels we want to count
     *   }
     * })
    **/
    count<T extends td_levelCountArgs>(
      args?: Subset<T, td_levelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Td_levelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Td_level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Td_levelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Td_levelAggregateArgs>(args: Subset<T, Td_levelAggregateArgs>): PrismaPromise<GetTd_levelAggregateType<T>>

    /**
     * Group by Td_level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Td_levelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Td_levelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Td_levelGroupByArgs['orderBy'] }
        : { orderBy?: Td_levelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Td_levelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTd_levelGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for td_level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__td_levelClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    tr_post_level<T extends td_level$tr_post_levelArgs= {}>(args?: Subset<T, td_level$tr_post_levelArgs>): PrismaPromise<Array<tr_post_levelGetPayload<T>>| Null>;

    tr_user_level<T extends td_level$tr_user_levelArgs= {}>(args?: Subset<T, td_level$tr_user_levelArgs>): PrismaPromise<Array<tr_user_levelGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * td_level base type for findUnique actions
   */
  export type td_levelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the td_level
     */
    select?: td_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_levelInclude | null
    /**
     * Filter, which td_level to fetch.
     */
    where: td_levelWhereUniqueInput
  }

  /**
   * td_level findUnique
   */
  export interface td_levelFindUniqueArgs extends td_levelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * td_level findUniqueOrThrow
   */
  export type td_levelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the td_level
     */
    select?: td_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_levelInclude | null
    /**
     * Filter, which td_level to fetch.
     */
    where: td_levelWhereUniqueInput
  }


  /**
   * td_level base type for findFirst actions
   */
  export type td_levelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the td_level
     */
    select?: td_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_levelInclude | null
    /**
     * Filter, which td_level to fetch.
     */
    where?: td_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_levels to fetch.
     */
    orderBy?: Enumerable<td_levelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_levels.
     */
    cursor?: td_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_levels.
     */
    distinct?: Enumerable<Td_levelScalarFieldEnum>
  }

  /**
   * td_level findFirst
   */
  export interface td_levelFindFirstArgs extends td_levelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * td_level findFirstOrThrow
   */
  export type td_levelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the td_level
     */
    select?: td_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_levelInclude | null
    /**
     * Filter, which td_level to fetch.
     */
    where?: td_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_levels to fetch.
     */
    orderBy?: Enumerable<td_levelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_levels.
     */
    cursor?: td_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_levels.
     */
    distinct?: Enumerable<Td_levelScalarFieldEnum>
  }


  /**
   * td_level findMany
   */
  export type td_levelFindManyArgs = {
    /**
     * Select specific fields to fetch from the td_level
     */
    select?: td_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_levelInclude | null
    /**
     * Filter, which td_levels to fetch.
     */
    where?: td_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_levels to fetch.
     */
    orderBy?: Enumerable<td_levelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing td_levels.
     */
    cursor?: td_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_levels.
     */
    skip?: number
    distinct?: Enumerable<Td_levelScalarFieldEnum>
  }


  /**
   * td_level create
   */
  export type td_levelCreateArgs = {
    /**
     * Select specific fields to fetch from the td_level
     */
    select?: td_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_levelInclude | null
    /**
     * The data needed to create a td_level.
     */
    data: XOR<td_levelCreateInput, td_levelUncheckedCreateInput>
  }


  /**
   * td_level createMany
   */
  export type td_levelCreateManyArgs = {
    /**
     * The data used to create many td_levels.
     */
    data: Enumerable<td_levelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * td_level update
   */
  export type td_levelUpdateArgs = {
    /**
     * Select specific fields to fetch from the td_level
     */
    select?: td_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_levelInclude | null
    /**
     * The data needed to update a td_level.
     */
    data: XOR<td_levelUpdateInput, td_levelUncheckedUpdateInput>
    /**
     * Choose, which td_level to update.
     */
    where: td_levelWhereUniqueInput
  }


  /**
   * td_level updateMany
   */
  export type td_levelUpdateManyArgs = {
    /**
     * The data used to update td_levels.
     */
    data: XOR<td_levelUpdateManyMutationInput, td_levelUncheckedUpdateManyInput>
    /**
     * Filter which td_levels to update
     */
    where?: td_levelWhereInput
  }


  /**
   * td_level upsert
   */
  export type td_levelUpsertArgs = {
    /**
     * Select specific fields to fetch from the td_level
     */
    select?: td_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_levelInclude | null
    /**
     * The filter to search for the td_level to update in case it exists.
     */
    where: td_levelWhereUniqueInput
    /**
     * In case the td_level found by the `where` argument doesn't exist, create a new td_level with this data.
     */
    create: XOR<td_levelCreateInput, td_levelUncheckedCreateInput>
    /**
     * In case the td_level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<td_levelUpdateInput, td_levelUncheckedUpdateInput>
  }


  /**
   * td_level delete
   */
  export type td_levelDeleteArgs = {
    /**
     * Select specific fields to fetch from the td_level
     */
    select?: td_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_levelInclude | null
    /**
     * Filter which td_level to delete.
     */
    where: td_levelWhereUniqueInput
  }


  /**
   * td_level deleteMany
   */
  export type td_levelDeleteManyArgs = {
    /**
     * Filter which td_levels to delete
     */
    where?: td_levelWhereInput
  }


  /**
   * td_level.tr_post_level
   */
  export type td_level$tr_post_levelArgs = {
    /**
     * Select specific fields to fetch from the tr_post_level
     */
    select?: tr_post_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_post_levelInclude | null
    where?: tr_post_levelWhereInput
    orderBy?: Enumerable<tr_post_levelOrderByWithRelationInput>
    cursor?: tr_post_levelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Tr_post_levelScalarFieldEnum>
  }


  /**
   * td_level.tr_user_level
   */
  export type td_level$tr_user_levelArgs = {
    /**
     * Select specific fields to fetch from the tr_user_level
     */
    select?: tr_user_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_levelInclude | null
    where?: tr_user_levelWhereInput
    orderBy?: Enumerable<tr_user_levelOrderByWithRelationInput>
    cursor?: tr_user_levelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Tr_user_levelScalarFieldEnum>
  }


  /**
   * td_level without action
   */
  export type td_levelArgs = {
    /**
     * Select specific fields to fetch from the td_level
     */
    select?: td_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_levelInclude | null
  }



  /**
   * Model td_post
   */


  export type AggregateTd_post = {
    _count: Td_postCountAggregateOutputType | null
    _avg: Td_postAvgAggregateOutputType | null
    _sum: Td_postSumAggregateOutputType | null
    _min: Td_postMinAggregateOutputType | null
    _max: Td_postMaxAggregateOutputType | null
  }

  export type Td_postAvgAggregateOutputType = {
    id_ainc_post: number | null
  }

  export type Td_postSumAggregateOutputType = {
    id_ainc_post: number | null
  }

  export type Td_postMinAggregateOutputType = {
    id_ainc_post: number | null
    pk_post: string | null
    title_en_post: string | null
    text_en_post: string | null
    create_post: Date | null
    update_post: Date | null
  }

  export type Td_postMaxAggregateOutputType = {
    id_ainc_post: number | null
    pk_post: string | null
    title_en_post: string | null
    text_en_post: string | null
    create_post: Date | null
    update_post: Date | null
  }

  export type Td_postCountAggregateOutputType = {
    id_ainc_post: number
    pk_post: number
    title_en_post: number
    text_en_post: number
    create_post: number
    update_post: number
    _all: number
  }


  export type Td_postAvgAggregateInputType = {
    id_ainc_post?: true
  }

  export type Td_postSumAggregateInputType = {
    id_ainc_post?: true
  }

  export type Td_postMinAggregateInputType = {
    id_ainc_post?: true
    pk_post?: true
    title_en_post?: true
    text_en_post?: true
    create_post?: true
    update_post?: true
  }

  export type Td_postMaxAggregateInputType = {
    id_ainc_post?: true
    pk_post?: true
    title_en_post?: true
    text_en_post?: true
    create_post?: true
    update_post?: true
  }

  export type Td_postCountAggregateInputType = {
    id_ainc_post?: true
    pk_post?: true
    title_en_post?: true
    text_en_post?: true
    create_post?: true
    update_post?: true
    _all?: true
  }

  export type Td_postAggregateArgs = {
    /**
     * Filter which td_post to aggregate.
     */
    where?: td_postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_posts to fetch.
     */
    orderBy?: Enumerable<td_postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: td_postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned td_posts
    **/
    _count?: true | Td_postCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Td_postAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Td_postSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Td_postMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Td_postMaxAggregateInputType
  }

  export type GetTd_postAggregateType<T extends Td_postAggregateArgs> = {
        [P in keyof T & keyof AggregateTd_post]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTd_post[P]>
      : GetScalarType<T[P], AggregateTd_post[P]>
  }




  export type Td_postGroupByArgs = {
    where?: td_postWhereInput
    orderBy?: Enumerable<td_postOrderByWithAggregationInput>
    by: Td_postScalarFieldEnum[]
    having?: td_postScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Td_postCountAggregateInputType | true
    _avg?: Td_postAvgAggregateInputType
    _sum?: Td_postSumAggregateInputType
    _min?: Td_postMinAggregateInputType
    _max?: Td_postMaxAggregateInputType
  }


  export type Td_postGroupByOutputType = {
    id_ainc_post: number
    pk_post: string
    title_en_post: string | null
    text_en_post: string | null
    create_post: Date | null
    update_post: Date | null
    _count: Td_postCountAggregateOutputType | null
    _avg: Td_postAvgAggregateOutputType | null
    _sum: Td_postSumAggregateOutputType | null
    _min: Td_postMinAggregateOutputType | null
    _max: Td_postMaxAggregateOutputType | null
  }

  type GetTd_postGroupByPayload<T extends Td_postGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Td_postGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Td_postGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Td_postGroupByOutputType[P]>
            : GetScalarType<T[P], Td_postGroupByOutputType[P]>
        }
      >
    >


  export type td_postSelect = {
    id_ainc_post?: boolean
    pk_post?: boolean
    title_en_post?: boolean
    text_en_post?: boolean
    create_post?: boolean
    update_post?: boolean
    tr_post_level?: boolean | td_post$tr_post_levelArgs
    tr_user_post?: boolean | td_post$tr_user_postArgs
    _count?: boolean | Td_postCountOutputTypeArgs
  }


  export type td_postInclude = {
    tr_post_level?: boolean | td_post$tr_post_levelArgs
    tr_user_post?: boolean | td_post$tr_user_postArgs
    _count?: boolean | Td_postCountOutputTypeArgs
  }

  export type td_postGetPayload<S extends boolean | null | undefined | td_postArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? td_post :
    S extends undefined ? never :
    S extends { include: any } & (td_postArgs | td_postFindManyArgs)
    ? td_post  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'tr_post_level' ? Array < tr_post_levelGetPayload<S['include'][P]>>  :
        P extends 'tr_user_post' ? Array < tr_user_postGetPayload<S['include'][P]>>  :
        P extends '_count' ? Td_postCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (td_postArgs | td_postFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'tr_post_level' ? Array < tr_post_levelGetPayload<S['select'][P]>>  :
        P extends 'tr_user_post' ? Array < tr_user_postGetPayload<S['select'][P]>>  :
        P extends '_count' ? Td_postCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof td_post ? td_post[P] : never
  } 
      : td_post


  type td_postCountArgs = 
    Omit<td_postFindManyArgs, 'select' | 'include'> & {
      select?: Td_postCountAggregateInputType | true
    }

  export interface td_postDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Td_post that matches the filter.
     * @param {td_postFindUniqueArgs} args - Arguments to find a Td_post
     * @example
     * // Get one Td_post
     * const td_post = await prisma.td_post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends td_postFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, td_postFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'td_post'> extends True ? Prisma__td_postClient<td_postGetPayload<T>> : Prisma__td_postClient<td_postGetPayload<T> | null, null>

    /**
     * Find one Td_post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {td_postFindUniqueOrThrowArgs} args - Arguments to find a Td_post
     * @example
     * // Get one Td_post
     * const td_post = await prisma.td_post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends td_postFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, td_postFindUniqueOrThrowArgs>
    ): Prisma__td_postClient<td_postGetPayload<T>>

    /**
     * Find the first Td_post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_postFindFirstArgs} args - Arguments to find a Td_post
     * @example
     * // Get one Td_post
     * const td_post = await prisma.td_post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends td_postFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, td_postFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'td_post'> extends True ? Prisma__td_postClient<td_postGetPayload<T>> : Prisma__td_postClient<td_postGetPayload<T> | null, null>

    /**
     * Find the first Td_post that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_postFindFirstOrThrowArgs} args - Arguments to find a Td_post
     * @example
     * // Get one Td_post
     * const td_post = await prisma.td_post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends td_postFindFirstOrThrowArgs>(
      args?: SelectSubset<T, td_postFindFirstOrThrowArgs>
    ): Prisma__td_postClient<td_postGetPayload<T>>

    /**
     * Find zero or more Td_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_postFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Td_posts
     * const td_posts = await prisma.td_post.findMany()
     * 
     * // Get first 10 Td_posts
     * const td_posts = await prisma.td_post.findMany({ take: 10 })
     * 
     * // Only select the `id_ainc_post`
     * const td_postWithId_ainc_postOnly = await prisma.td_post.findMany({ select: { id_ainc_post: true } })
     * 
    **/
    findMany<T extends td_postFindManyArgs>(
      args?: SelectSubset<T, td_postFindManyArgs>
    ): PrismaPromise<Array<td_postGetPayload<T>>>

    /**
     * Create a Td_post.
     * @param {td_postCreateArgs} args - Arguments to create a Td_post.
     * @example
     * // Create one Td_post
     * const Td_post = await prisma.td_post.create({
     *   data: {
     *     // ... data to create a Td_post
     *   }
     * })
     * 
    **/
    create<T extends td_postCreateArgs>(
      args: SelectSubset<T, td_postCreateArgs>
    ): Prisma__td_postClient<td_postGetPayload<T>>

    /**
     * Create many Td_posts.
     *     @param {td_postCreateManyArgs} args - Arguments to create many Td_posts.
     *     @example
     *     // Create many Td_posts
     *     const td_post = await prisma.td_post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends td_postCreateManyArgs>(
      args?: SelectSubset<T, td_postCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Td_post.
     * @param {td_postDeleteArgs} args - Arguments to delete one Td_post.
     * @example
     * // Delete one Td_post
     * const Td_post = await prisma.td_post.delete({
     *   where: {
     *     // ... filter to delete one Td_post
     *   }
     * })
     * 
    **/
    delete<T extends td_postDeleteArgs>(
      args: SelectSubset<T, td_postDeleteArgs>
    ): Prisma__td_postClient<td_postGetPayload<T>>

    /**
     * Update one Td_post.
     * @param {td_postUpdateArgs} args - Arguments to update one Td_post.
     * @example
     * // Update one Td_post
     * const td_post = await prisma.td_post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends td_postUpdateArgs>(
      args: SelectSubset<T, td_postUpdateArgs>
    ): Prisma__td_postClient<td_postGetPayload<T>>

    /**
     * Delete zero or more Td_posts.
     * @param {td_postDeleteManyArgs} args - Arguments to filter Td_posts to delete.
     * @example
     * // Delete a few Td_posts
     * const { count } = await prisma.td_post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends td_postDeleteManyArgs>(
      args?: SelectSubset<T, td_postDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_postUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Td_posts
     * const td_post = await prisma.td_post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends td_postUpdateManyArgs>(
      args: SelectSubset<T, td_postUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Td_post.
     * @param {td_postUpsertArgs} args - Arguments to update or create a Td_post.
     * @example
     * // Update or create a Td_post
     * const td_post = await prisma.td_post.upsert({
     *   create: {
     *     // ... data to create a Td_post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Td_post we want to update
     *   }
     * })
    **/
    upsert<T extends td_postUpsertArgs>(
      args: SelectSubset<T, td_postUpsertArgs>
    ): Prisma__td_postClient<td_postGetPayload<T>>

    /**
     * Count the number of Td_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_postCountArgs} args - Arguments to filter Td_posts to count.
     * @example
     * // Count the number of Td_posts
     * const count = await prisma.td_post.count({
     *   where: {
     *     // ... the filter for the Td_posts we want to count
     *   }
     * })
    **/
    count<T extends td_postCountArgs>(
      args?: Subset<T, td_postCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Td_postCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Td_post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Td_postAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Td_postAggregateArgs>(args: Subset<T, Td_postAggregateArgs>): PrismaPromise<GetTd_postAggregateType<T>>

    /**
     * Group by Td_post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Td_postGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Td_postGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Td_postGroupByArgs['orderBy'] }
        : { orderBy?: Td_postGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Td_postGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTd_postGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for td_post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__td_postClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    tr_post_level<T extends td_post$tr_post_levelArgs= {}>(args?: Subset<T, td_post$tr_post_levelArgs>): PrismaPromise<Array<tr_post_levelGetPayload<T>>| Null>;

    tr_user_post<T extends td_post$tr_user_postArgs= {}>(args?: Subset<T, td_post$tr_user_postArgs>): PrismaPromise<Array<tr_user_postGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * td_post base type for findUnique actions
   */
  export type td_postFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the td_post
     */
    select?: td_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_postInclude | null
    /**
     * Filter, which td_post to fetch.
     */
    where: td_postWhereUniqueInput
  }

  /**
   * td_post findUnique
   */
  export interface td_postFindUniqueArgs extends td_postFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * td_post findUniqueOrThrow
   */
  export type td_postFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the td_post
     */
    select?: td_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_postInclude | null
    /**
     * Filter, which td_post to fetch.
     */
    where: td_postWhereUniqueInput
  }


  /**
   * td_post base type for findFirst actions
   */
  export type td_postFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the td_post
     */
    select?: td_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_postInclude | null
    /**
     * Filter, which td_post to fetch.
     */
    where?: td_postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_posts to fetch.
     */
    orderBy?: Enumerable<td_postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_posts.
     */
    cursor?: td_postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_posts.
     */
    distinct?: Enumerable<Td_postScalarFieldEnum>
  }

  /**
   * td_post findFirst
   */
  export interface td_postFindFirstArgs extends td_postFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * td_post findFirstOrThrow
   */
  export type td_postFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the td_post
     */
    select?: td_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_postInclude | null
    /**
     * Filter, which td_post to fetch.
     */
    where?: td_postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_posts to fetch.
     */
    orderBy?: Enumerable<td_postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_posts.
     */
    cursor?: td_postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_posts.
     */
    distinct?: Enumerable<Td_postScalarFieldEnum>
  }


  /**
   * td_post findMany
   */
  export type td_postFindManyArgs = {
    /**
     * Select specific fields to fetch from the td_post
     */
    select?: td_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_postInclude | null
    /**
     * Filter, which td_posts to fetch.
     */
    where?: td_postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_posts to fetch.
     */
    orderBy?: Enumerable<td_postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing td_posts.
     */
    cursor?: td_postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_posts.
     */
    skip?: number
    distinct?: Enumerable<Td_postScalarFieldEnum>
  }


  /**
   * td_post create
   */
  export type td_postCreateArgs = {
    /**
     * Select specific fields to fetch from the td_post
     */
    select?: td_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_postInclude | null
    /**
     * The data needed to create a td_post.
     */
    data: XOR<td_postCreateInput, td_postUncheckedCreateInput>
  }


  /**
   * td_post createMany
   */
  export type td_postCreateManyArgs = {
    /**
     * The data used to create many td_posts.
     */
    data: Enumerable<td_postCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * td_post update
   */
  export type td_postUpdateArgs = {
    /**
     * Select specific fields to fetch from the td_post
     */
    select?: td_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_postInclude | null
    /**
     * The data needed to update a td_post.
     */
    data: XOR<td_postUpdateInput, td_postUncheckedUpdateInput>
    /**
     * Choose, which td_post to update.
     */
    where: td_postWhereUniqueInput
  }


  /**
   * td_post updateMany
   */
  export type td_postUpdateManyArgs = {
    /**
     * The data used to update td_posts.
     */
    data: XOR<td_postUpdateManyMutationInput, td_postUncheckedUpdateManyInput>
    /**
     * Filter which td_posts to update
     */
    where?: td_postWhereInput
  }


  /**
   * td_post upsert
   */
  export type td_postUpsertArgs = {
    /**
     * Select specific fields to fetch from the td_post
     */
    select?: td_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_postInclude | null
    /**
     * The filter to search for the td_post to update in case it exists.
     */
    where: td_postWhereUniqueInput
    /**
     * In case the td_post found by the `where` argument doesn't exist, create a new td_post with this data.
     */
    create: XOR<td_postCreateInput, td_postUncheckedCreateInput>
    /**
     * In case the td_post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<td_postUpdateInput, td_postUncheckedUpdateInput>
  }


  /**
   * td_post delete
   */
  export type td_postDeleteArgs = {
    /**
     * Select specific fields to fetch from the td_post
     */
    select?: td_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_postInclude | null
    /**
     * Filter which td_post to delete.
     */
    where: td_postWhereUniqueInput
  }


  /**
   * td_post deleteMany
   */
  export type td_postDeleteManyArgs = {
    /**
     * Filter which td_posts to delete
     */
    where?: td_postWhereInput
  }


  /**
   * td_post.tr_post_level
   */
  export type td_post$tr_post_levelArgs = {
    /**
     * Select specific fields to fetch from the tr_post_level
     */
    select?: tr_post_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_post_levelInclude | null
    where?: tr_post_levelWhereInput
    orderBy?: Enumerable<tr_post_levelOrderByWithRelationInput>
    cursor?: tr_post_levelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Tr_post_levelScalarFieldEnum>
  }


  /**
   * td_post.tr_user_post
   */
  export type td_post$tr_user_postArgs = {
    /**
     * Select specific fields to fetch from the tr_user_post
     */
    select?: tr_user_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_postInclude | null
    where?: tr_user_postWhereInput
    orderBy?: Enumerable<tr_user_postOrderByWithRelationInput>
    cursor?: tr_user_postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Tr_user_postScalarFieldEnum>
  }


  /**
   * td_post without action
   */
  export type td_postArgs = {
    /**
     * Select specific fields to fetch from the td_post
     */
    select?: td_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_postInclude | null
  }



  /**
   * Model td_user
   */


  export type AggregateTd_user = {
    _count: Td_userCountAggregateOutputType | null
    _avg: Td_userAvgAggregateOutputType | null
    _sum: Td_userSumAggregateOutputType | null
    _min: Td_userMinAggregateOutputType | null
    _max: Td_userMaxAggregateOutputType | null
  }

  export type Td_userAvgAggregateOutputType = {
    id_ainc_user: number | null
    level_user: number | null
    level_staff: number | null
  }

  export type Td_userSumAggregateOutputType = {
    id_ainc_user: number | null
    level_user: number | null
    level_staff: number | null
  }

  export type Td_userMinAggregateOutputType = {
    id_ainc_user: number | null
    pk_user: string | null
    name_user: string | null
    passHash: string | null
    isStaff: boolean | null
    level_user: number | null
    level_staff: number | null
    create_user: Date | null
    update_user: Date | null
  }

  export type Td_userMaxAggregateOutputType = {
    id_ainc_user: number | null
    pk_user: string | null
    name_user: string | null
    passHash: string | null
    isStaff: boolean | null
    level_user: number | null
    level_staff: number | null
    create_user: Date | null
    update_user: Date | null
  }

  export type Td_userCountAggregateOutputType = {
    id_ainc_user: number
    pk_user: number
    name_user: number
    passHash: number
    isStaff: number
    level_user: number
    level_staff: number
    create_user: number
    update_user: number
    _all: number
  }


  export type Td_userAvgAggregateInputType = {
    id_ainc_user?: true
    level_user?: true
    level_staff?: true
  }

  export type Td_userSumAggregateInputType = {
    id_ainc_user?: true
    level_user?: true
    level_staff?: true
  }

  export type Td_userMinAggregateInputType = {
    id_ainc_user?: true
    pk_user?: true
    name_user?: true
    passHash?: true
    isStaff?: true
    level_user?: true
    level_staff?: true
    create_user?: true
    update_user?: true
  }

  export type Td_userMaxAggregateInputType = {
    id_ainc_user?: true
    pk_user?: true
    name_user?: true
    passHash?: true
    isStaff?: true
    level_user?: true
    level_staff?: true
    create_user?: true
    update_user?: true
  }

  export type Td_userCountAggregateInputType = {
    id_ainc_user?: true
    pk_user?: true
    name_user?: true
    passHash?: true
    isStaff?: true
    level_user?: true
    level_staff?: true
    create_user?: true
    update_user?: true
    _all?: true
  }

  export type Td_userAggregateArgs = {
    /**
     * Filter which td_user to aggregate.
     */
    where?: td_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_users to fetch.
     */
    orderBy?: Enumerable<td_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: td_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned td_users
    **/
    _count?: true | Td_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Td_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Td_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Td_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Td_userMaxAggregateInputType
  }

  export type GetTd_userAggregateType<T extends Td_userAggregateArgs> = {
        [P in keyof T & keyof AggregateTd_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTd_user[P]>
      : GetScalarType<T[P], AggregateTd_user[P]>
  }




  export type Td_userGroupByArgs = {
    where?: td_userWhereInput
    orderBy?: Enumerable<td_userOrderByWithAggregationInput>
    by: Td_userScalarFieldEnum[]
    having?: td_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Td_userCountAggregateInputType | true
    _avg?: Td_userAvgAggregateInputType
    _sum?: Td_userSumAggregateInputType
    _min?: Td_userMinAggregateInputType
    _max?: Td_userMaxAggregateInputType
  }


  export type Td_userGroupByOutputType = {
    id_ainc_user: number
    pk_user: string
    name_user: string | null
    passHash: string | null
    isStaff: boolean | null
    level_user: number | null
    level_staff: number | null
    create_user: Date | null
    update_user: Date | null
    _count: Td_userCountAggregateOutputType | null
    _avg: Td_userAvgAggregateOutputType | null
    _sum: Td_userSumAggregateOutputType | null
    _min: Td_userMinAggregateOutputType | null
    _max: Td_userMaxAggregateOutputType | null
  }

  type GetTd_userGroupByPayload<T extends Td_userGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Td_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Td_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Td_userGroupByOutputType[P]>
            : GetScalarType<T[P], Td_userGroupByOutputType[P]>
        }
      >
    >


  export type td_userSelect = {
    id_ainc_user?: boolean
    pk_user?: boolean
    name_user?: boolean
    passHash?: boolean
    isStaff?: boolean
    level_user?: boolean
    level_staff?: boolean
    create_user?: boolean
    update_user?: boolean
    tr_user_level?: boolean | td_user$tr_user_levelArgs
    tr_user_post?: boolean | td_user$tr_user_postArgs
    _count?: boolean | Td_userCountOutputTypeArgs
  }


  export type td_userInclude = {
    tr_user_level?: boolean | td_user$tr_user_levelArgs
    tr_user_post?: boolean | td_user$tr_user_postArgs
    _count?: boolean | Td_userCountOutputTypeArgs
  }

  export type td_userGetPayload<S extends boolean | null | undefined | td_userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? td_user :
    S extends undefined ? never :
    S extends { include: any } & (td_userArgs | td_userFindManyArgs)
    ? td_user  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'tr_user_level' ? Array < tr_user_levelGetPayload<S['include'][P]>>  :
        P extends 'tr_user_post' ? Array < tr_user_postGetPayload<S['include'][P]>>  :
        P extends '_count' ? Td_userCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (td_userArgs | td_userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'tr_user_level' ? Array < tr_user_levelGetPayload<S['select'][P]>>  :
        P extends 'tr_user_post' ? Array < tr_user_postGetPayload<S['select'][P]>>  :
        P extends '_count' ? Td_userCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof td_user ? td_user[P] : never
  } 
      : td_user


  type td_userCountArgs = 
    Omit<td_userFindManyArgs, 'select' | 'include'> & {
      select?: Td_userCountAggregateInputType | true
    }

  export interface td_userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Td_user that matches the filter.
     * @param {td_userFindUniqueArgs} args - Arguments to find a Td_user
     * @example
     * // Get one Td_user
     * const td_user = await prisma.td_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends td_userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, td_userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'td_user'> extends True ? Prisma__td_userClient<td_userGetPayload<T>> : Prisma__td_userClient<td_userGetPayload<T> | null, null>

    /**
     * Find one Td_user that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {td_userFindUniqueOrThrowArgs} args - Arguments to find a Td_user
     * @example
     * // Get one Td_user
     * const td_user = await prisma.td_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends td_userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, td_userFindUniqueOrThrowArgs>
    ): Prisma__td_userClient<td_userGetPayload<T>>

    /**
     * Find the first Td_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_userFindFirstArgs} args - Arguments to find a Td_user
     * @example
     * // Get one Td_user
     * const td_user = await prisma.td_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends td_userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, td_userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'td_user'> extends True ? Prisma__td_userClient<td_userGetPayload<T>> : Prisma__td_userClient<td_userGetPayload<T> | null, null>

    /**
     * Find the first Td_user that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_userFindFirstOrThrowArgs} args - Arguments to find a Td_user
     * @example
     * // Get one Td_user
     * const td_user = await prisma.td_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends td_userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, td_userFindFirstOrThrowArgs>
    ): Prisma__td_userClient<td_userGetPayload<T>>

    /**
     * Find zero or more Td_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Td_users
     * const td_users = await prisma.td_user.findMany()
     * 
     * // Get first 10 Td_users
     * const td_users = await prisma.td_user.findMany({ take: 10 })
     * 
     * // Only select the `id_ainc_user`
     * const td_userWithId_ainc_userOnly = await prisma.td_user.findMany({ select: { id_ainc_user: true } })
     * 
    **/
    findMany<T extends td_userFindManyArgs>(
      args?: SelectSubset<T, td_userFindManyArgs>
    ): PrismaPromise<Array<td_userGetPayload<T>>>

    /**
     * Create a Td_user.
     * @param {td_userCreateArgs} args - Arguments to create a Td_user.
     * @example
     * // Create one Td_user
     * const Td_user = await prisma.td_user.create({
     *   data: {
     *     // ... data to create a Td_user
     *   }
     * })
     * 
    **/
    create<T extends td_userCreateArgs>(
      args: SelectSubset<T, td_userCreateArgs>
    ): Prisma__td_userClient<td_userGetPayload<T>>

    /**
     * Create many Td_users.
     *     @param {td_userCreateManyArgs} args - Arguments to create many Td_users.
     *     @example
     *     // Create many Td_users
     *     const td_user = await prisma.td_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends td_userCreateManyArgs>(
      args?: SelectSubset<T, td_userCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Td_user.
     * @param {td_userDeleteArgs} args - Arguments to delete one Td_user.
     * @example
     * // Delete one Td_user
     * const Td_user = await prisma.td_user.delete({
     *   where: {
     *     // ... filter to delete one Td_user
     *   }
     * })
     * 
    **/
    delete<T extends td_userDeleteArgs>(
      args: SelectSubset<T, td_userDeleteArgs>
    ): Prisma__td_userClient<td_userGetPayload<T>>

    /**
     * Update one Td_user.
     * @param {td_userUpdateArgs} args - Arguments to update one Td_user.
     * @example
     * // Update one Td_user
     * const td_user = await prisma.td_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends td_userUpdateArgs>(
      args: SelectSubset<T, td_userUpdateArgs>
    ): Prisma__td_userClient<td_userGetPayload<T>>

    /**
     * Delete zero or more Td_users.
     * @param {td_userDeleteManyArgs} args - Arguments to filter Td_users to delete.
     * @example
     * // Delete a few Td_users
     * const { count } = await prisma.td_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends td_userDeleteManyArgs>(
      args?: SelectSubset<T, td_userDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Td_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Td_users
     * const td_user = await prisma.td_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends td_userUpdateManyArgs>(
      args: SelectSubset<T, td_userUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Td_user.
     * @param {td_userUpsertArgs} args - Arguments to update or create a Td_user.
     * @example
     * // Update or create a Td_user
     * const td_user = await prisma.td_user.upsert({
     *   create: {
     *     // ... data to create a Td_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Td_user we want to update
     *   }
     * })
    **/
    upsert<T extends td_userUpsertArgs>(
      args: SelectSubset<T, td_userUpsertArgs>
    ): Prisma__td_userClient<td_userGetPayload<T>>

    /**
     * Count the number of Td_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {td_userCountArgs} args - Arguments to filter Td_users to count.
     * @example
     * // Count the number of Td_users
     * const count = await prisma.td_user.count({
     *   where: {
     *     // ... the filter for the Td_users we want to count
     *   }
     * })
    **/
    count<T extends td_userCountArgs>(
      args?: Subset<T, td_userCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Td_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Td_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Td_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Td_userAggregateArgs>(args: Subset<T, Td_userAggregateArgs>): PrismaPromise<GetTd_userAggregateType<T>>

    /**
     * Group by Td_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Td_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Td_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Td_userGroupByArgs['orderBy'] }
        : { orderBy?: Td_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Td_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTd_userGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for td_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__td_userClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    tr_user_level<T extends td_user$tr_user_levelArgs= {}>(args?: Subset<T, td_user$tr_user_levelArgs>): PrismaPromise<Array<tr_user_levelGetPayload<T>>| Null>;

    tr_user_post<T extends td_user$tr_user_postArgs= {}>(args?: Subset<T, td_user$tr_user_postArgs>): PrismaPromise<Array<tr_user_postGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * td_user base type for findUnique actions
   */
  export type td_userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the td_user
     */
    select?: td_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_userInclude | null
    /**
     * Filter, which td_user to fetch.
     */
    where: td_userWhereUniqueInput
  }

  /**
   * td_user findUnique
   */
  export interface td_userFindUniqueArgs extends td_userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * td_user findUniqueOrThrow
   */
  export type td_userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the td_user
     */
    select?: td_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_userInclude | null
    /**
     * Filter, which td_user to fetch.
     */
    where: td_userWhereUniqueInput
  }


  /**
   * td_user base type for findFirst actions
   */
  export type td_userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the td_user
     */
    select?: td_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_userInclude | null
    /**
     * Filter, which td_user to fetch.
     */
    where?: td_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_users to fetch.
     */
    orderBy?: Enumerable<td_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_users.
     */
    cursor?: td_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_users.
     */
    distinct?: Enumerable<Td_userScalarFieldEnum>
  }

  /**
   * td_user findFirst
   */
  export interface td_userFindFirstArgs extends td_userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * td_user findFirstOrThrow
   */
  export type td_userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the td_user
     */
    select?: td_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_userInclude | null
    /**
     * Filter, which td_user to fetch.
     */
    where?: td_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_users to fetch.
     */
    orderBy?: Enumerable<td_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for td_users.
     */
    cursor?: td_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of td_users.
     */
    distinct?: Enumerable<Td_userScalarFieldEnum>
  }


  /**
   * td_user findMany
   */
  export type td_userFindManyArgs = {
    /**
     * Select specific fields to fetch from the td_user
     */
    select?: td_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_userInclude | null
    /**
     * Filter, which td_users to fetch.
     */
    where?: td_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of td_users to fetch.
     */
    orderBy?: Enumerable<td_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing td_users.
     */
    cursor?: td_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` td_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` td_users.
     */
    skip?: number
    distinct?: Enumerable<Td_userScalarFieldEnum>
  }


  /**
   * td_user create
   */
  export type td_userCreateArgs = {
    /**
     * Select specific fields to fetch from the td_user
     */
    select?: td_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_userInclude | null
    /**
     * The data needed to create a td_user.
     */
    data: XOR<td_userCreateInput, td_userUncheckedCreateInput>
  }


  /**
   * td_user createMany
   */
  export type td_userCreateManyArgs = {
    /**
     * The data used to create many td_users.
     */
    data: Enumerable<td_userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * td_user update
   */
  export type td_userUpdateArgs = {
    /**
     * Select specific fields to fetch from the td_user
     */
    select?: td_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_userInclude | null
    /**
     * The data needed to update a td_user.
     */
    data: XOR<td_userUpdateInput, td_userUncheckedUpdateInput>
    /**
     * Choose, which td_user to update.
     */
    where: td_userWhereUniqueInput
  }


  /**
   * td_user updateMany
   */
  export type td_userUpdateManyArgs = {
    /**
     * The data used to update td_users.
     */
    data: XOR<td_userUpdateManyMutationInput, td_userUncheckedUpdateManyInput>
    /**
     * Filter which td_users to update
     */
    where?: td_userWhereInput
  }


  /**
   * td_user upsert
   */
  export type td_userUpsertArgs = {
    /**
     * Select specific fields to fetch from the td_user
     */
    select?: td_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_userInclude | null
    /**
     * The filter to search for the td_user to update in case it exists.
     */
    where: td_userWhereUniqueInput
    /**
     * In case the td_user found by the `where` argument doesn't exist, create a new td_user with this data.
     */
    create: XOR<td_userCreateInput, td_userUncheckedCreateInput>
    /**
     * In case the td_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<td_userUpdateInput, td_userUncheckedUpdateInput>
  }


  /**
   * td_user delete
   */
  export type td_userDeleteArgs = {
    /**
     * Select specific fields to fetch from the td_user
     */
    select?: td_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_userInclude | null
    /**
     * Filter which td_user to delete.
     */
    where: td_userWhereUniqueInput
  }


  /**
   * td_user deleteMany
   */
  export type td_userDeleteManyArgs = {
    /**
     * Filter which td_users to delete
     */
    where?: td_userWhereInput
  }


  /**
   * td_user.tr_user_level
   */
  export type td_user$tr_user_levelArgs = {
    /**
     * Select specific fields to fetch from the tr_user_level
     */
    select?: tr_user_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_levelInclude | null
    where?: tr_user_levelWhereInput
    orderBy?: Enumerable<tr_user_levelOrderByWithRelationInput>
    cursor?: tr_user_levelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Tr_user_levelScalarFieldEnum>
  }


  /**
   * td_user.tr_user_post
   */
  export type td_user$tr_user_postArgs = {
    /**
     * Select specific fields to fetch from the tr_user_post
     */
    select?: tr_user_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_postInclude | null
    where?: tr_user_postWhereInput
    orderBy?: Enumerable<tr_user_postOrderByWithRelationInput>
    cursor?: tr_user_postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Tr_user_postScalarFieldEnum>
  }


  /**
   * td_user without action
   */
  export type td_userArgs = {
    /**
     * Select specific fields to fetch from the td_user
     */
    select?: td_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: td_userInclude | null
  }



  /**
   * Model tr_post_level
   */


  export type AggregateTr_post_level = {
    _count: Tr_post_levelCountAggregateOutputType | null
    _avg: Tr_post_levelAvgAggregateOutputType | null
    _sum: Tr_post_levelSumAggregateOutputType | null
    _min: Tr_post_levelMinAggregateOutputType | null
    _max: Tr_post_levelMaxAggregateOutputType | null
  }

  export type Tr_post_levelAvgAggregateOutputType = {
    id_ainc_post_level: number | null
    fk_level: number | null
  }

  export type Tr_post_levelSumAggregateOutputType = {
    id_ainc_post_level: number | null
    fk_level: number | null
  }

  export type Tr_post_levelMinAggregateOutputType = {
    id_ainc_post_level: number | null
    fk_post: string | null
    fk_level: number | null
    create_post_level: Date | null
    update_post_level: Date | null
  }

  export type Tr_post_levelMaxAggregateOutputType = {
    id_ainc_post_level: number | null
    fk_post: string | null
    fk_level: number | null
    create_post_level: Date | null
    update_post_level: Date | null
  }

  export type Tr_post_levelCountAggregateOutputType = {
    id_ainc_post_level: number
    fk_post: number
    fk_level: number
    create_post_level: number
    update_post_level: number
    _all: number
  }


  export type Tr_post_levelAvgAggregateInputType = {
    id_ainc_post_level?: true
    fk_level?: true
  }

  export type Tr_post_levelSumAggregateInputType = {
    id_ainc_post_level?: true
    fk_level?: true
  }

  export type Tr_post_levelMinAggregateInputType = {
    id_ainc_post_level?: true
    fk_post?: true
    fk_level?: true
    create_post_level?: true
    update_post_level?: true
  }

  export type Tr_post_levelMaxAggregateInputType = {
    id_ainc_post_level?: true
    fk_post?: true
    fk_level?: true
    create_post_level?: true
    update_post_level?: true
  }

  export type Tr_post_levelCountAggregateInputType = {
    id_ainc_post_level?: true
    fk_post?: true
    fk_level?: true
    create_post_level?: true
    update_post_level?: true
    _all?: true
  }

  export type Tr_post_levelAggregateArgs = {
    /**
     * Filter which tr_post_level to aggregate.
     */
    where?: tr_post_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_post_levels to fetch.
     */
    orderBy?: Enumerable<tr_post_levelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_post_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_post_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_post_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_post_levels
    **/
    _count?: true | Tr_post_levelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_post_levelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_post_levelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_post_levelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_post_levelMaxAggregateInputType
  }

  export type GetTr_post_levelAggregateType<T extends Tr_post_levelAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_post_level]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_post_level[P]>
      : GetScalarType<T[P], AggregateTr_post_level[P]>
  }




  export type Tr_post_levelGroupByArgs = {
    where?: tr_post_levelWhereInput
    orderBy?: Enumerable<tr_post_levelOrderByWithAggregationInput>
    by: Tr_post_levelScalarFieldEnum[]
    having?: tr_post_levelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_post_levelCountAggregateInputType | true
    _avg?: Tr_post_levelAvgAggregateInputType
    _sum?: Tr_post_levelSumAggregateInputType
    _min?: Tr_post_levelMinAggregateInputType
    _max?: Tr_post_levelMaxAggregateInputType
  }


  export type Tr_post_levelGroupByOutputType = {
    id_ainc_post_level: number
    fk_post: string | null
    fk_level: number | null
    create_post_level: Date | null
    update_post_level: Date | null
    _count: Tr_post_levelCountAggregateOutputType | null
    _avg: Tr_post_levelAvgAggregateOutputType | null
    _sum: Tr_post_levelSumAggregateOutputType | null
    _min: Tr_post_levelMinAggregateOutputType | null
    _max: Tr_post_levelMaxAggregateOutputType | null
  }

  type GetTr_post_levelGroupByPayload<T extends Tr_post_levelGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Tr_post_levelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_post_levelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_post_levelGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_post_levelGroupByOutputType[P]>
        }
      >
    >


  export type tr_post_levelSelect = {
    id_ainc_post_level?: boolean
    fk_post?: boolean
    fk_level?: boolean
    create_post_level?: boolean
    update_post_level?: boolean
    td_post?: boolean | td_postArgs
    td_level?: boolean | td_levelArgs
  }


  export type tr_post_levelInclude = {
    td_post?: boolean | td_postArgs
    td_level?: boolean | td_levelArgs
  }

  export type tr_post_levelGetPayload<S extends boolean | null | undefined | tr_post_levelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? tr_post_level :
    S extends undefined ? never :
    S extends { include: any } & (tr_post_levelArgs | tr_post_levelFindManyArgs)
    ? tr_post_level  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'td_post' ? td_postGetPayload<S['include'][P]> | null :
        P extends 'td_level' ? td_levelGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (tr_post_levelArgs | tr_post_levelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'td_post' ? td_postGetPayload<S['select'][P]> | null :
        P extends 'td_level' ? td_levelGetPayload<S['select'][P]> | null :  P extends keyof tr_post_level ? tr_post_level[P] : never
  } 
      : tr_post_level


  type tr_post_levelCountArgs = 
    Omit<tr_post_levelFindManyArgs, 'select' | 'include'> & {
      select?: Tr_post_levelCountAggregateInputType | true
    }

  export interface tr_post_levelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tr_post_level that matches the filter.
     * @param {tr_post_levelFindUniqueArgs} args - Arguments to find a Tr_post_level
     * @example
     * // Get one Tr_post_level
     * const tr_post_level = await prisma.tr_post_level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tr_post_levelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tr_post_levelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tr_post_level'> extends True ? Prisma__tr_post_levelClient<tr_post_levelGetPayload<T>> : Prisma__tr_post_levelClient<tr_post_levelGetPayload<T> | null, null>

    /**
     * Find one Tr_post_level that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tr_post_levelFindUniqueOrThrowArgs} args - Arguments to find a Tr_post_level
     * @example
     * // Get one Tr_post_level
     * const tr_post_level = await prisma.tr_post_level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tr_post_levelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tr_post_levelFindUniqueOrThrowArgs>
    ): Prisma__tr_post_levelClient<tr_post_levelGetPayload<T>>

    /**
     * Find the first Tr_post_level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_post_levelFindFirstArgs} args - Arguments to find a Tr_post_level
     * @example
     * // Get one Tr_post_level
     * const tr_post_level = await prisma.tr_post_level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tr_post_levelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tr_post_levelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tr_post_level'> extends True ? Prisma__tr_post_levelClient<tr_post_levelGetPayload<T>> : Prisma__tr_post_levelClient<tr_post_levelGetPayload<T> | null, null>

    /**
     * Find the first Tr_post_level that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_post_levelFindFirstOrThrowArgs} args - Arguments to find a Tr_post_level
     * @example
     * // Get one Tr_post_level
     * const tr_post_level = await prisma.tr_post_level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tr_post_levelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tr_post_levelFindFirstOrThrowArgs>
    ): Prisma__tr_post_levelClient<tr_post_levelGetPayload<T>>

    /**
     * Find zero or more Tr_post_levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_post_levelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_post_levels
     * const tr_post_levels = await prisma.tr_post_level.findMany()
     * 
     * // Get first 10 Tr_post_levels
     * const tr_post_levels = await prisma.tr_post_level.findMany({ take: 10 })
     * 
     * // Only select the `id_ainc_post_level`
     * const tr_post_levelWithId_ainc_post_levelOnly = await prisma.tr_post_level.findMany({ select: { id_ainc_post_level: true } })
     * 
    **/
    findMany<T extends tr_post_levelFindManyArgs>(
      args?: SelectSubset<T, tr_post_levelFindManyArgs>
    ): PrismaPromise<Array<tr_post_levelGetPayload<T>>>

    /**
     * Create a Tr_post_level.
     * @param {tr_post_levelCreateArgs} args - Arguments to create a Tr_post_level.
     * @example
     * // Create one Tr_post_level
     * const Tr_post_level = await prisma.tr_post_level.create({
     *   data: {
     *     // ... data to create a Tr_post_level
     *   }
     * })
     * 
    **/
    create<T extends tr_post_levelCreateArgs>(
      args: SelectSubset<T, tr_post_levelCreateArgs>
    ): Prisma__tr_post_levelClient<tr_post_levelGetPayload<T>>

    /**
     * Create many Tr_post_levels.
     *     @param {tr_post_levelCreateManyArgs} args - Arguments to create many Tr_post_levels.
     *     @example
     *     // Create many Tr_post_levels
     *     const tr_post_level = await prisma.tr_post_level.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tr_post_levelCreateManyArgs>(
      args?: SelectSubset<T, tr_post_levelCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_post_level.
     * @param {tr_post_levelDeleteArgs} args - Arguments to delete one Tr_post_level.
     * @example
     * // Delete one Tr_post_level
     * const Tr_post_level = await prisma.tr_post_level.delete({
     *   where: {
     *     // ... filter to delete one Tr_post_level
     *   }
     * })
     * 
    **/
    delete<T extends tr_post_levelDeleteArgs>(
      args: SelectSubset<T, tr_post_levelDeleteArgs>
    ): Prisma__tr_post_levelClient<tr_post_levelGetPayload<T>>

    /**
     * Update one Tr_post_level.
     * @param {tr_post_levelUpdateArgs} args - Arguments to update one Tr_post_level.
     * @example
     * // Update one Tr_post_level
     * const tr_post_level = await prisma.tr_post_level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tr_post_levelUpdateArgs>(
      args: SelectSubset<T, tr_post_levelUpdateArgs>
    ): Prisma__tr_post_levelClient<tr_post_levelGetPayload<T>>

    /**
     * Delete zero or more Tr_post_levels.
     * @param {tr_post_levelDeleteManyArgs} args - Arguments to filter Tr_post_levels to delete.
     * @example
     * // Delete a few Tr_post_levels
     * const { count } = await prisma.tr_post_level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tr_post_levelDeleteManyArgs>(
      args?: SelectSubset<T, tr_post_levelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_post_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_post_levelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_post_levels
     * const tr_post_level = await prisma.tr_post_level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tr_post_levelUpdateManyArgs>(
      args: SelectSubset<T, tr_post_levelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_post_level.
     * @param {tr_post_levelUpsertArgs} args - Arguments to update or create a Tr_post_level.
     * @example
     * // Update or create a Tr_post_level
     * const tr_post_level = await prisma.tr_post_level.upsert({
     *   create: {
     *     // ... data to create a Tr_post_level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_post_level we want to update
     *   }
     * })
    **/
    upsert<T extends tr_post_levelUpsertArgs>(
      args: SelectSubset<T, tr_post_levelUpsertArgs>
    ): Prisma__tr_post_levelClient<tr_post_levelGetPayload<T>>

    /**
     * Count the number of Tr_post_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_post_levelCountArgs} args - Arguments to filter Tr_post_levels to count.
     * @example
     * // Count the number of Tr_post_levels
     * const count = await prisma.tr_post_level.count({
     *   where: {
     *     // ... the filter for the Tr_post_levels we want to count
     *   }
     * })
    **/
    count<T extends tr_post_levelCountArgs>(
      args?: Subset<T, tr_post_levelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_post_levelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_post_level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_post_levelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tr_post_levelAggregateArgs>(args: Subset<T, Tr_post_levelAggregateArgs>): PrismaPromise<GetTr_post_levelAggregateType<T>>

    /**
     * Group by Tr_post_level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_post_levelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tr_post_levelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tr_post_levelGroupByArgs['orderBy'] }
        : { orderBy?: Tr_post_levelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tr_post_levelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_post_levelGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_post_level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tr_post_levelClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    td_post<T extends td_postArgs= {}>(args?: Subset<T, td_postArgs>): Prisma__td_postClient<td_postGetPayload<T> | Null>;

    td_level<T extends td_levelArgs= {}>(args?: Subset<T, td_levelArgs>): Prisma__td_levelClient<td_levelGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tr_post_level base type for findUnique actions
   */
  export type tr_post_levelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tr_post_level
     */
    select?: tr_post_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_post_levelInclude | null
    /**
     * Filter, which tr_post_level to fetch.
     */
    where: tr_post_levelWhereUniqueInput
  }

  /**
   * tr_post_level findUnique
   */
  export interface tr_post_levelFindUniqueArgs extends tr_post_levelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tr_post_level findUniqueOrThrow
   */
  export type tr_post_levelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tr_post_level
     */
    select?: tr_post_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_post_levelInclude | null
    /**
     * Filter, which tr_post_level to fetch.
     */
    where: tr_post_levelWhereUniqueInput
  }


  /**
   * tr_post_level base type for findFirst actions
   */
  export type tr_post_levelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tr_post_level
     */
    select?: tr_post_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_post_levelInclude | null
    /**
     * Filter, which tr_post_level to fetch.
     */
    where?: tr_post_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_post_levels to fetch.
     */
    orderBy?: Enumerable<tr_post_levelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_post_levels.
     */
    cursor?: tr_post_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_post_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_post_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_post_levels.
     */
    distinct?: Enumerable<Tr_post_levelScalarFieldEnum>
  }

  /**
   * tr_post_level findFirst
   */
  export interface tr_post_levelFindFirstArgs extends tr_post_levelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tr_post_level findFirstOrThrow
   */
  export type tr_post_levelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tr_post_level
     */
    select?: tr_post_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_post_levelInclude | null
    /**
     * Filter, which tr_post_level to fetch.
     */
    where?: tr_post_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_post_levels to fetch.
     */
    orderBy?: Enumerable<tr_post_levelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_post_levels.
     */
    cursor?: tr_post_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_post_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_post_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_post_levels.
     */
    distinct?: Enumerable<Tr_post_levelScalarFieldEnum>
  }


  /**
   * tr_post_level findMany
   */
  export type tr_post_levelFindManyArgs = {
    /**
     * Select specific fields to fetch from the tr_post_level
     */
    select?: tr_post_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_post_levelInclude | null
    /**
     * Filter, which tr_post_levels to fetch.
     */
    where?: tr_post_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_post_levels to fetch.
     */
    orderBy?: Enumerable<tr_post_levelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_post_levels.
     */
    cursor?: tr_post_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_post_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_post_levels.
     */
    skip?: number
    distinct?: Enumerable<Tr_post_levelScalarFieldEnum>
  }


  /**
   * tr_post_level create
   */
  export type tr_post_levelCreateArgs = {
    /**
     * Select specific fields to fetch from the tr_post_level
     */
    select?: tr_post_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_post_levelInclude | null
    /**
     * The data needed to create a tr_post_level.
     */
    data: XOR<tr_post_levelCreateInput, tr_post_levelUncheckedCreateInput>
  }


  /**
   * tr_post_level createMany
   */
  export type tr_post_levelCreateManyArgs = {
    /**
     * The data used to create many tr_post_levels.
     */
    data: Enumerable<tr_post_levelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tr_post_level update
   */
  export type tr_post_levelUpdateArgs = {
    /**
     * Select specific fields to fetch from the tr_post_level
     */
    select?: tr_post_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_post_levelInclude | null
    /**
     * The data needed to update a tr_post_level.
     */
    data: XOR<tr_post_levelUpdateInput, tr_post_levelUncheckedUpdateInput>
    /**
     * Choose, which tr_post_level to update.
     */
    where: tr_post_levelWhereUniqueInput
  }


  /**
   * tr_post_level updateMany
   */
  export type tr_post_levelUpdateManyArgs = {
    /**
     * The data used to update tr_post_levels.
     */
    data: XOR<tr_post_levelUpdateManyMutationInput, tr_post_levelUncheckedUpdateManyInput>
    /**
     * Filter which tr_post_levels to update
     */
    where?: tr_post_levelWhereInput
  }


  /**
   * tr_post_level upsert
   */
  export type tr_post_levelUpsertArgs = {
    /**
     * Select specific fields to fetch from the tr_post_level
     */
    select?: tr_post_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_post_levelInclude | null
    /**
     * The filter to search for the tr_post_level to update in case it exists.
     */
    where: tr_post_levelWhereUniqueInput
    /**
     * In case the tr_post_level found by the `where` argument doesn't exist, create a new tr_post_level with this data.
     */
    create: XOR<tr_post_levelCreateInput, tr_post_levelUncheckedCreateInput>
    /**
     * In case the tr_post_level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_post_levelUpdateInput, tr_post_levelUncheckedUpdateInput>
  }


  /**
   * tr_post_level delete
   */
  export type tr_post_levelDeleteArgs = {
    /**
     * Select specific fields to fetch from the tr_post_level
     */
    select?: tr_post_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_post_levelInclude | null
    /**
     * Filter which tr_post_level to delete.
     */
    where: tr_post_levelWhereUniqueInput
  }


  /**
   * tr_post_level deleteMany
   */
  export type tr_post_levelDeleteManyArgs = {
    /**
     * Filter which tr_post_levels to delete
     */
    where?: tr_post_levelWhereInput
  }


  /**
   * tr_post_level without action
   */
  export type tr_post_levelArgs = {
    /**
     * Select specific fields to fetch from the tr_post_level
     */
    select?: tr_post_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_post_levelInclude | null
  }



  /**
   * Model tr_user_level
   */


  export type AggregateTr_user_level = {
    _count: Tr_user_levelCountAggregateOutputType | null
    _avg: Tr_user_levelAvgAggregateOutputType | null
    _sum: Tr_user_levelSumAggregateOutputType | null
    _min: Tr_user_levelMinAggregateOutputType | null
    _max: Tr_user_levelMaxAggregateOutputType | null
  }

  export type Tr_user_levelAvgAggregateOutputType = {
    id_ainc_user_level: number | null
    fk_level: number | null
  }

  export type Tr_user_levelSumAggregateOutputType = {
    id_ainc_user_level: number | null
    fk_level: number | null
  }

  export type Tr_user_levelMinAggregateOutputType = {
    id_ainc_user_level: number | null
    fk_user: string | null
    fk_level: number | null
    create_user_level: Date | null
    update_user_level: Date | null
  }

  export type Tr_user_levelMaxAggregateOutputType = {
    id_ainc_user_level: number | null
    fk_user: string | null
    fk_level: number | null
    create_user_level: Date | null
    update_user_level: Date | null
  }

  export type Tr_user_levelCountAggregateOutputType = {
    id_ainc_user_level: number
    fk_user: number
    fk_level: number
    create_user_level: number
    update_user_level: number
    _all: number
  }


  export type Tr_user_levelAvgAggregateInputType = {
    id_ainc_user_level?: true
    fk_level?: true
  }

  export type Tr_user_levelSumAggregateInputType = {
    id_ainc_user_level?: true
    fk_level?: true
  }

  export type Tr_user_levelMinAggregateInputType = {
    id_ainc_user_level?: true
    fk_user?: true
    fk_level?: true
    create_user_level?: true
    update_user_level?: true
  }

  export type Tr_user_levelMaxAggregateInputType = {
    id_ainc_user_level?: true
    fk_user?: true
    fk_level?: true
    create_user_level?: true
    update_user_level?: true
  }

  export type Tr_user_levelCountAggregateInputType = {
    id_ainc_user_level?: true
    fk_user?: true
    fk_level?: true
    create_user_level?: true
    update_user_level?: true
    _all?: true
  }

  export type Tr_user_levelAggregateArgs = {
    /**
     * Filter which tr_user_level to aggregate.
     */
    where?: tr_user_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_user_levels to fetch.
     */
    orderBy?: Enumerable<tr_user_levelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_user_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_user_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_user_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_user_levels
    **/
    _count?: true | Tr_user_levelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_user_levelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_user_levelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_user_levelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_user_levelMaxAggregateInputType
  }

  export type GetTr_user_levelAggregateType<T extends Tr_user_levelAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_user_level]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_user_level[P]>
      : GetScalarType<T[P], AggregateTr_user_level[P]>
  }




  export type Tr_user_levelGroupByArgs = {
    where?: tr_user_levelWhereInput
    orderBy?: Enumerable<tr_user_levelOrderByWithAggregationInput>
    by: Tr_user_levelScalarFieldEnum[]
    having?: tr_user_levelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_user_levelCountAggregateInputType | true
    _avg?: Tr_user_levelAvgAggregateInputType
    _sum?: Tr_user_levelSumAggregateInputType
    _min?: Tr_user_levelMinAggregateInputType
    _max?: Tr_user_levelMaxAggregateInputType
  }


  export type Tr_user_levelGroupByOutputType = {
    id_ainc_user_level: number
    fk_user: string | null
    fk_level: number | null
    create_user_level: Date | null
    update_user_level: Date | null
    _count: Tr_user_levelCountAggregateOutputType | null
    _avg: Tr_user_levelAvgAggregateOutputType | null
    _sum: Tr_user_levelSumAggregateOutputType | null
    _min: Tr_user_levelMinAggregateOutputType | null
    _max: Tr_user_levelMaxAggregateOutputType | null
  }

  type GetTr_user_levelGroupByPayload<T extends Tr_user_levelGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Tr_user_levelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_user_levelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_user_levelGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_user_levelGroupByOutputType[P]>
        }
      >
    >


  export type tr_user_levelSelect = {
    id_ainc_user_level?: boolean
    fk_user?: boolean
    fk_level?: boolean
    create_user_level?: boolean
    update_user_level?: boolean
    td_user?: boolean | td_userArgs
    td_level?: boolean | td_levelArgs
  }


  export type tr_user_levelInclude = {
    td_user?: boolean | td_userArgs
    td_level?: boolean | td_levelArgs
  }

  export type tr_user_levelGetPayload<S extends boolean | null | undefined | tr_user_levelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? tr_user_level :
    S extends undefined ? never :
    S extends { include: any } & (tr_user_levelArgs | tr_user_levelFindManyArgs)
    ? tr_user_level  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'td_user' ? td_userGetPayload<S['include'][P]> | null :
        P extends 'td_level' ? td_levelGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (tr_user_levelArgs | tr_user_levelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'td_user' ? td_userGetPayload<S['select'][P]> | null :
        P extends 'td_level' ? td_levelGetPayload<S['select'][P]> | null :  P extends keyof tr_user_level ? tr_user_level[P] : never
  } 
      : tr_user_level


  type tr_user_levelCountArgs = 
    Omit<tr_user_levelFindManyArgs, 'select' | 'include'> & {
      select?: Tr_user_levelCountAggregateInputType | true
    }

  export interface tr_user_levelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tr_user_level that matches the filter.
     * @param {tr_user_levelFindUniqueArgs} args - Arguments to find a Tr_user_level
     * @example
     * // Get one Tr_user_level
     * const tr_user_level = await prisma.tr_user_level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tr_user_levelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tr_user_levelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tr_user_level'> extends True ? Prisma__tr_user_levelClient<tr_user_levelGetPayload<T>> : Prisma__tr_user_levelClient<tr_user_levelGetPayload<T> | null, null>

    /**
     * Find one Tr_user_level that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tr_user_levelFindUniqueOrThrowArgs} args - Arguments to find a Tr_user_level
     * @example
     * // Get one Tr_user_level
     * const tr_user_level = await prisma.tr_user_level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tr_user_levelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tr_user_levelFindUniqueOrThrowArgs>
    ): Prisma__tr_user_levelClient<tr_user_levelGetPayload<T>>

    /**
     * Find the first Tr_user_level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_user_levelFindFirstArgs} args - Arguments to find a Tr_user_level
     * @example
     * // Get one Tr_user_level
     * const tr_user_level = await prisma.tr_user_level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tr_user_levelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tr_user_levelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tr_user_level'> extends True ? Prisma__tr_user_levelClient<tr_user_levelGetPayload<T>> : Prisma__tr_user_levelClient<tr_user_levelGetPayload<T> | null, null>

    /**
     * Find the first Tr_user_level that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_user_levelFindFirstOrThrowArgs} args - Arguments to find a Tr_user_level
     * @example
     * // Get one Tr_user_level
     * const tr_user_level = await prisma.tr_user_level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tr_user_levelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tr_user_levelFindFirstOrThrowArgs>
    ): Prisma__tr_user_levelClient<tr_user_levelGetPayload<T>>

    /**
     * Find zero or more Tr_user_levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_user_levelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_user_levels
     * const tr_user_levels = await prisma.tr_user_level.findMany()
     * 
     * // Get first 10 Tr_user_levels
     * const tr_user_levels = await prisma.tr_user_level.findMany({ take: 10 })
     * 
     * // Only select the `id_ainc_user_level`
     * const tr_user_levelWithId_ainc_user_levelOnly = await prisma.tr_user_level.findMany({ select: { id_ainc_user_level: true } })
     * 
    **/
    findMany<T extends tr_user_levelFindManyArgs>(
      args?: SelectSubset<T, tr_user_levelFindManyArgs>
    ): PrismaPromise<Array<tr_user_levelGetPayload<T>>>

    /**
     * Create a Tr_user_level.
     * @param {tr_user_levelCreateArgs} args - Arguments to create a Tr_user_level.
     * @example
     * // Create one Tr_user_level
     * const Tr_user_level = await prisma.tr_user_level.create({
     *   data: {
     *     // ... data to create a Tr_user_level
     *   }
     * })
     * 
    **/
    create<T extends tr_user_levelCreateArgs>(
      args: SelectSubset<T, tr_user_levelCreateArgs>
    ): Prisma__tr_user_levelClient<tr_user_levelGetPayload<T>>

    /**
     * Create many Tr_user_levels.
     *     @param {tr_user_levelCreateManyArgs} args - Arguments to create many Tr_user_levels.
     *     @example
     *     // Create many Tr_user_levels
     *     const tr_user_level = await prisma.tr_user_level.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tr_user_levelCreateManyArgs>(
      args?: SelectSubset<T, tr_user_levelCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_user_level.
     * @param {tr_user_levelDeleteArgs} args - Arguments to delete one Tr_user_level.
     * @example
     * // Delete one Tr_user_level
     * const Tr_user_level = await prisma.tr_user_level.delete({
     *   where: {
     *     // ... filter to delete one Tr_user_level
     *   }
     * })
     * 
    **/
    delete<T extends tr_user_levelDeleteArgs>(
      args: SelectSubset<T, tr_user_levelDeleteArgs>
    ): Prisma__tr_user_levelClient<tr_user_levelGetPayload<T>>

    /**
     * Update one Tr_user_level.
     * @param {tr_user_levelUpdateArgs} args - Arguments to update one Tr_user_level.
     * @example
     * // Update one Tr_user_level
     * const tr_user_level = await prisma.tr_user_level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tr_user_levelUpdateArgs>(
      args: SelectSubset<T, tr_user_levelUpdateArgs>
    ): Prisma__tr_user_levelClient<tr_user_levelGetPayload<T>>

    /**
     * Delete zero or more Tr_user_levels.
     * @param {tr_user_levelDeleteManyArgs} args - Arguments to filter Tr_user_levels to delete.
     * @example
     * // Delete a few Tr_user_levels
     * const { count } = await prisma.tr_user_level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tr_user_levelDeleteManyArgs>(
      args?: SelectSubset<T, tr_user_levelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_user_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_user_levelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_user_levels
     * const tr_user_level = await prisma.tr_user_level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tr_user_levelUpdateManyArgs>(
      args: SelectSubset<T, tr_user_levelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_user_level.
     * @param {tr_user_levelUpsertArgs} args - Arguments to update or create a Tr_user_level.
     * @example
     * // Update or create a Tr_user_level
     * const tr_user_level = await prisma.tr_user_level.upsert({
     *   create: {
     *     // ... data to create a Tr_user_level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_user_level we want to update
     *   }
     * })
    **/
    upsert<T extends tr_user_levelUpsertArgs>(
      args: SelectSubset<T, tr_user_levelUpsertArgs>
    ): Prisma__tr_user_levelClient<tr_user_levelGetPayload<T>>

    /**
     * Count the number of Tr_user_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_user_levelCountArgs} args - Arguments to filter Tr_user_levels to count.
     * @example
     * // Count the number of Tr_user_levels
     * const count = await prisma.tr_user_level.count({
     *   where: {
     *     // ... the filter for the Tr_user_levels we want to count
     *   }
     * })
    **/
    count<T extends tr_user_levelCountArgs>(
      args?: Subset<T, tr_user_levelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_user_levelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_user_level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_user_levelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tr_user_levelAggregateArgs>(args: Subset<T, Tr_user_levelAggregateArgs>): PrismaPromise<GetTr_user_levelAggregateType<T>>

    /**
     * Group by Tr_user_level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_user_levelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tr_user_levelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tr_user_levelGroupByArgs['orderBy'] }
        : { orderBy?: Tr_user_levelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tr_user_levelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_user_levelGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_user_level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tr_user_levelClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    td_user<T extends td_userArgs= {}>(args?: Subset<T, td_userArgs>): Prisma__td_userClient<td_userGetPayload<T> | Null>;

    td_level<T extends td_levelArgs= {}>(args?: Subset<T, td_levelArgs>): Prisma__td_levelClient<td_levelGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tr_user_level base type for findUnique actions
   */
  export type tr_user_levelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tr_user_level
     */
    select?: tr_user_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_levelInclude | null
    /**
     * Filter, which tr_user_level to fetch.
     */
    where: tr_user_levelWhereUniqueInput
  }

  /**
   * tr_user_level findUnique
   */
  export interface tr_user_levelFindUniqueArgs extends tr_user_levelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tr_user_level findUniqueOrThrow
   */
  export type tr_user_levelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tr_user_level
     */
    select?: tr_user_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_levelInclude | null
    /**
     * Filter, which tr_user_level to fetch.
     */
    where: tr_user_levelWhereUniqueInput
  }


  /**
   * tr_user_level base type for findFirst actions
   */
  export type tr_user_levelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tr_user_level
     */
    select?: tr_user_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_levelInclude | null
    /**
     * Filter, which tr_user_level to fetch.
     */
    where?: tr_user_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_user_levels to fetch.
     */
    orderBy?: Enumerable<tr_user_levelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_user_levels.
     */
    cursor?: tr_user_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_user_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_user_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_user_levels.
     */
    distinct?: Enumerable<Tr_user_levelScalarFieldEnum>
  }

  /**
   * tr_user_level findFirst
   */
  export interface tr_user_levelFindFirstArgs extends tr_user_levelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tr_user_level findFirstOrThrow
   */
  export type tr_user_levelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tr_user_level
     */
    select?: tr_user_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_levelInclude | null
    /**
     * Filter, which tr_user_level to fetch.
     */
    where?: tr_user_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_user_levels to fetch.
     */
    orderBy?: Enumerable<tr_user_levelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_user_levels.
     */
    cursor?: tr_user_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_user_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_user_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_user_levels.
     */
    distinct?: Enumerable<Tr_user_levelScalarFieldEnum>
  }


  /**
   * tr_user_level findMany
   */
  export type tr_user_levelFindManyArgs = {
    /**
     * Select specific fields to fetch from the tr_user_level
     */
    select?: tr_user_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_levelInclude | null
    /**
     * Filter, which tr_user_levels to fetch.
     */
    where?: tr_user_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_user_levels to fetch.
     */
    orderBy?: Enumerable<tr_user_levelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_user_levels.
     */
    cursor?: tr_user_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_user_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_user_levels.
     */
    skip?: number
    distinct?: Enumerable<Tr_user_levelScalarFieldEnum>
  }


  /**
   * tr_user_level create
   */
  export type tr_user_levelCreateArgs = {
    /**
     * Select specific fields to fetch from the tr_user_level
     */
    select?: tr_user_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_levelInclude | null
    /**
     * The data needed to create a tr_user_level.
     */
    data: XOR<tr_user_levelCreateInput, tr_user_levelUncheckedCreateInput>
  }


  /**
   * tr_user_level createMany
   */
  export type tr_user_levelCreateManyArgs = {
    /**
     * The data used to create many tr_user_levels.
     */
    data: Enumerable<tr_user_levelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tr_user_level update
   */
  export type tr_user_levelUpdateArgs = {
    /**
     * Select specific fields to fetch from the tr_user_level
     */
    select?: tr_user_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_levelInclude | null
    /**
     * The data needed to update a tr_user_level.
     */
    data: XOR<tr_user_levelUpdateInput, tr_user_levelUncheckedUpdateInput>
    /**
     * Choose, which tr_user_level to update.
     */
    where: tr_user_levelWhereUniqueInput
  }


  /**
   * tr_user_level updateMany
   */
  export type tr_user_levelUpdateManyArgs = {
    /**
     * The data used to update tr_user_levels.
     */
    data: XOR<tr_user_levelUpdateManyMutationInput, tr_user_levelUncheckedUpdateManyInput>
    /**
     * Filter which tr_user_levels to update
     */
    where?: tr_user_levelWhereInput
  }


  /**
   * tr_user_level upsert
   */
  export type tr_user_levelUpsertArgs = {
    /**
     * Select specific fields to fetch from the tr_user_level
     */
    select?: tr_user_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_levelInclude | null
    /**
     * The filter to search for the tr_user_level to update in case it exists.
     */
    where: tr_user_levelWhereUniqueInput
    /**
     * In case the tr_user_level found by the `where` argument doesn't exist, create a new tr_user_level with this data.
     */
    create: XOR<tr_user_levelCreateInput, tr_user_levelUncheckedCreateInput>
    /**
     * In case the tr_user_level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_user_levelUpdateInput, tr_user_levelUncheckedUpdateInput>
  }


  /**
   * tr_user_level delete
   */
  export type tr_user_levelDeleteArgs = {
    /**
     * Select specific fields to fetch from the tr_user_level
     */
    select?: tr_user_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_levelInclude | null
    /**
     * Filter which tr_user_level to delete.
     */
    where: tr_user_levelWhereUniqueInput
  }


  /**
   * tr_user_level deleteMany
   */
  export type tr_user_levelDeleteManyArgs = {
    /**
     * Filter which tr_user_levels to delete
     */
    where?: tr_user_levelWhereInput
  }


  /**
   * tr_user_level without action
   */
  export type tr_user_levelArgs = {
    /**
     * Select specific fields to fetch from the tr_user_level
     */
    select?: tr_user_levelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_levelInclude | null
  }



  /**
   * Model tr_user_post
   */


  export type AggregateTr_user_post = {
    _count: Tr_user_postCountAggregateOutputType | null
    _avg: Tr_user_postAvgAggregateOutputType | null
    _sum: Tr_user_postSumAggregateOutputType | null
    _min: Tr_user_postMinAggregateOutputType | null
    _max: Tr_user_postMaxAggregateOutputType | null
  }

  export type Tr_user_postAvgAggregateOutputType = {
    id_ainc_user_post: number | null
  }

  export type Tr_user_postSumAggregateOutputType = {
    id_ainc_user_post: number | null
  }

  export type Tr_user_postMinAggregateOutputType = {
    id_ainc_user_post: number | null
    fk_user: string | null
    fk_post: string | null
    create_user_post: Date | null
    update_user_post: Date | null
  }

  export type Tr_user_postMaxAggregateOutputType = {
    id_ainc_user_post: number | null
    fk_user: string | null
    fk_post: string | null
    create_user_post: Date | null
    update_user_post: Date | null
  }

  export type Tr_user_postCountAggregateOutputType = {
    id_ainc_user_post: number
    fk_user: number
    fk_post: number
    create_user_post: number
    update_user_post: number
    _all: number
  }


  export type Tr_user_postAvgAggregateInputType = {
    id_ainc_user_post?: true
  }

  export type Tr_user_postSumAggregateInputType = {
    id_ainc_user_post?: true
  }

  export type Tr_user_postMinAggregateInputType = {
    id_ainc_user_post?: true
    fk_user?: true
    fk_post?: true
    create_user_post?: true
    update_user_post?: true
  }

  export type Tr_user_postMaxAggregateInputType = {
    id_ainc_user_post?: true
    fk_user?: true
    fk_post?: true
    create_user_post?: true
    update_user_post?: true
  }

  export type Tr_user_postCountAggregateInputType = {
    id_ainc_user_post?: true
    fk_user?: true
    fk_post?: true
    create_user_post?: true
    update_user_post?: true
    _all?: true
  }

  export type Tr_user_postAggregateArgs = {
    /**
     * Filter which tr_user_post to aggregate.
     */
    where?: tr_user_postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_user_posts to fetch.
     */
    orderBy?: Enumerable<tr_user_postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_user_postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_user_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_user_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_user_posts
    **/
    _count?: true | Tr_user_postCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_user_postAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_user_postSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_user_postMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_user_postMaxAggregateInputType
  }

  export type GetTr_user_postAggregateType<T extends Tr_user_postAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_user_post]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_user_post[P]>
      : GetScalarType<T[P], AggregateTr_user_post[P]>
  }




  export type Tr_user_postGroupByArgs = {
    where?: tr_user_postWhereInput
    orderBy?: Enumerable<tr_user_postOrderByWithAggregationInput>
    by: Tr_user_postScalarFieldEnum[]
    having?: tr_user_postScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_user_postCountAggregateInputType | true
    _avg?: Tr_user_postAvgAggregateInputType
    _sum?: Tr_user_postSumAggregateInputType
    _min?: Tr_user_postMinAggregateInputType
    _max?: Tr_user_postMaxAggregateInputType
  }


  export type Tr_user_postGroupByOutputType = {
    id_ainc_user_post: number
    fk_user: string | null
    fk_post: string | null
    create_user_post: Date | null
    update_user_post: Date | null
    _count: Tr_user_postCountAggregateOutputType | null
    _avg: Tr_user_postAvgAggregateOutputType | null
    _sum: Tr_user_postSumAggregateOutputType | null
    _min: Tr_user_postMinAggregateOutputType | null
    _max: Tr_user_postMaxAggregateOutputType | null
  }

  type GetTr_user_postGroupByPayload<T extends Tr_user_postGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Tr_user_postGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_user_postGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_user_postGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_user_postGroupByOutputType[P]>
        }
      >
    >


  export type tr_user_postSelect = {
    id_ainc_user_post?: boolean
    fk_user?: boolean
    fk_post?: boolean
    create_user_post?: boolean
    update_user_post?: boolean
    td_user?: boolean | td_userArgs
    td_post?: boolean | td_postArgs
  }


  export type tr_user_postInclude = {
    td_user?: boolean | td_userArgs
    td_post?: boolean | td_postArgs
  }

  export type tr_user_postGetPayload<S extends boolean | null | undefined | tr_user_postArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? tr_user_post :
    S extends undefined ? never :
    S extends { include: any } & (tr_user_postArgs | tr_user_postFindManyArgs)
    ? tr_user_post  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'td_user' ? td_userGetPayload<S['include'][P]> | null :
        P extends 'td_post' ? td_postGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (tr_user_postArgs | tr_user_postFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'td_user' ? td_userGetPayload<S['select'][P]> | null :
        P extends 'td_post' ? td_postGetPayload<S['select'][P]> | null :  P extends keyof tr_user_post ? tr_user_post[P] : never
  } 
      : tr_user_post


  type tr_user_postCountArgs = 
    Omit<tr_user_postFindManyArgs, 'select' | 'include'> & {
      select?: Tr_user_postCountAggregateInputType | true
    }

  export interface tr_user_postDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tr_user_post that matches the filter.
     * @param {tr_user_postFindUniqueArgs} args - Arguments to find a Tr_user_post
     * @example
     * // Get one Tr_user_post
     * const tr_user_post = await prisma.tr_user_post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tr_user_postFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tr_user_postFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tr_user_post'> extends True ? Prisma__tr_user_postClient<tr_user_postGetPayload<T>> : Prisma__tr_user_postClient<tr_user_postGetPayload<T> | null, null>

    /**
     * Find one Tr_user_post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tr_user_postFindUniqueOrThrowArgs} args - Arguments to find a Tr_user_post
     * @example
     * // Get one Tr_user_post
     * const tr_user_post = await prisma.tr_user_post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tr_user_postFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tr_user_postFindUniqueOrThrowArgs>
    ): Prisma__tr_user_postClient<tr_user_postGetPayload<T>>

    /**
     * Find the first Tr_user_post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_user_postFindFirstArgs} args - Arguments to find a Tr_user_post
     * @example
     * // Get one Tr_user_post
     * const tr_user_post = await prisma.tr_user_post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tr_user_postFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tr_user_postFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tr_user_post'> extends True ? Prisma__tr_user_postClient<tr_user_postGetPayload<T>> : Prisma__tr_user_postClient<tr_user_postGetPayload<T> | null, null>

    /**
     * Find the first Tr_user_post that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_user_postFindFirstOrThrowArgs} args - Arguments to find a Tr_user_post
     * @example
     * // Get one Tr_user_post
     * const tr_user_post = await prisma.tr_user_post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tr_user_postFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tr_user_postFindFirstOrThrowArgs>
    ): Prisma__tr_user_postClient<tr_user_postGetPayload<T>>

    /**
     * Find zero or more Tr_user_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_user_postFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_user_posts
     * const tr_user_posts = await prisma.tr_user_post.findMany()
     * 
     * // Get first 10 Tr_user_posts
     * const tr_user_posts = await prisma.tr_user_post.findMany({ take: 10 })
     * 
     * // Only select the `id_ainc_user_post`
     * const tr_user_postWithId_ainc_user_postOnly = await prisma.tr_user_post.findMany({ select: { id_ainc_user_post: true } })
     * 
    **/
    findMany<T extends tr_user_postFindManyArgs>(
      args?: SelectSubset<T, tr_user_postFindManyArgs>
    ): PrismaPromise<Array<tr_user_postGetPayload<T>>>

    /**
     * Create a Tr_user_post.
     * @param {tr_user_postCreateArgs} args - Arguments to create a Tr_user_post.
     * @example
     * // Create one Tr_user_post
     * const Tr_user_post = await prisma.tr_user_post.create({
     *   data: {
     *     // ... data to create a Tr_user_post
     *   }
     * })
     * 
    **/
    create<T extends tr_user_postCreateArgs>(
      args: SelectSubset<T, tr_user_postCreateArgs>
    ): Prisma__tr_user_postClient<tr_user_postGetPayload<T>>

    /**
     * Create many Tr_user_posts.
     *     @param {tr_user_postCreateManyArgs} args - Arguments to create many Tr_user_posts.
     *     @example
     *     // Create many Tr_user_posts
     *     const tr_user_post = await prisma.tr_user_post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tr_user_postCreateManyArgs>(
      args?: SelectSubset<T, tr_user_postCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_user_post.
     * @param {tr_user_postDeleteArgs} args - Arguments to delete one Tr_user_post.
     * @example
     * // Delete one Tr_user_post
     * const Tr_user_post = await prisma.tr_user_post.delete({
     *   where: {
     *     // ... filter to delete one Tr_user_post
     *   }
     * })
     * 
    **/
    delete<T extends tr_user_postDeleteArgs>(
      args: SelectSubset<T, tr_user_postDeleteArgs>
    ): Prisma__tr_user_postClient<tr_user_postGetPayload<T>>

    /**
     * Update one Tr_user_post.
     * @param {tr_user_postUpdateArgs} args - Arguments to update one Tr_user_post.
     * @example
     * // Update one Tr_user_post
     * const tr_user_post = await prisma.tr_user_post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tr_user_postUpdateArgs>(
      args: SelectSubset<T, tr_user_postUpdateArgs>
    ): Prisma__tr_user_postClient<tr_user_postGetPayload<T>>

    /**
     * Delete zero or more Tr_user_posts.
     * @param {tr_user_postDeleteManyArgs} args - Arguments to filter Tr_user_posts to delete.
     * @example
     * // Delete a few Tr_user_posts
     * const { count } = await prisma.tr_user_post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tr_user_postDeleteManyArgs>(
      args?: SelectSubset<T, tr_user_postDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_user_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_user_postUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_user_posts
     * const tr_user_post = await prisma.tr_user_post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tr_user_postUpdateManyArgs>(
      args: SelectSubset<T, tr_user_postUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_user_post.
     * @param {tr_user_postUpsertArgs} args - Arguments to update or create a Tr_user_post.
     * @example
     * // Update or create a Tr_user_post
     * const tr_user_post = await prisma.tr_user_post.upsert({
     *   create: {
     *     // ... data to create a Tr_user_post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_user_post we want to update
     *   }
     * })
    **/
    upsert<T extends tr_user_postUpsertArgs>(
      args: SelectSubset<T, tr_user_postUpsertArgs>
    ): Prisma__tr_user_postClient<tr_user_postGetPayload<T>>

    /**
     * Count the number of Tr_user_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_user_postCountArgs} args - Arguments to filter Tr_user_posts to count.
     * @example
     * // Count the number of Tr_user_posts
     * const count = await prisma.tr_user_post.count({
     *   where: {
     *     // ... the filter for the Tr_user_posts we want to count
     *   }
     * })
    **/
    count<T extends tr_user_postCountArgs>(
      args?: Subset<T, tr_user_postCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_user_postCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_user_post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_user_postAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tr_user_postAggregateArgs>(args: Subset<T, Tr_user_postAggregateArgs>): PrismaPromise<GetTr_user_postAggregateType<T>>

    /**
     * Group by Tr_user_post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_user_postGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tr_user_postGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tr_user_postGroupByArgs['orderBy'] }
        : { orderBy?: Tr_user_postGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tr_user_postGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_user_postGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_user_post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tr_user_postClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    td_user<T extends td_userArgs= {}>(args?: Subset<T, td_userArgs>): Prisma__td_userClient<td_userGetPayload<T> | Null>;

    td_post<T extends td_postArgs= {}>(args?: Subset<T, td_postArgs>): Prisma__td_postClient<td_postGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tr_user_post base type for findUnique actions
   */
  export type tr_user_postFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tr_user_post
     */
    select?: tr_user_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_postInclude | null
    /**
     * Filter, which tr_user_post to fetch.
     */
    where: tr_user_postWhereUniqueInput
  }

  /**
   * tr_user_post findUnique
   */
  export interface tr_user_postFindUniqueArgs extends tr_user_postFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tr_user_post findUniqueOrThrow
   */
  export type tr_user_postFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tr_user_post
     */
    select?: tr_user_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_postInclude | null
    /**
     * Filter, which tr_user_post to fetch.
     */
    where: tr_user_postWhereUniqueInput
  }


  /**
   * tr_user_post base type for findFirst actions
   */
  export type tr_user_postFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tr_user_post
     */
    select?: tr_user_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_postInclude | null
    /**
     * Filter, which tr_user_post to fetch.
     */
    where?: tr_user_postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_user_posts to fetch.
     */
    orderBy?: Enumerable<tr_user_postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_user_posts.
     */
    cursor?: tr_user_postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_user_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_user_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_user_posts.
     */
    distinct?: Enumerable<Tr_user_postScalarFieldEnum>
  }

  /**
   * tr_user_post findFirst
   */
  export interface tr_user_postFindFirstArgs extends tr_user_postFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tr_user_post findFirstOrThrow
   */
  export type tr_user_postFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tr_user_post
     */
    select?: tr_user_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_postInclude | null
    /**
     * Filter, which tr_user_post to fetch.
     */
    where?: tr_user_postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_user_posts to fetch.
     */
    orderBy?: Enumerable<tr_user_postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_user_posts.
     */
    cursor?: tr_user_postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_user_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_user_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_user_posts.
     */
    distinct?: Enumerable<Tr_user_postScalarFieldEnum>
  }


  /**
   * tr_user_post findMany
   */
  export type tr_user_postFindManyArgs = {
    /**
     * Select specific fields to fetch from the tr_user_post
     */
    select?: tr_user_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_postInclude | null
    /**
     * Filter, which tr_user_posts to fetch.
     */
    where?: tr_user_postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_user_posts to fetch.
     */
    orderBy?: Enumerable<tr_user_postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_user_posts.
     */
    cursor?: tr_user_postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_user_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_user_posts.
     */
    skip?: number
    distinct?: Enumerable<Tr_user_postScalarFieldEnum>
  }


  /**
   * tr_user_post create
   */
  export type tr_user_postCreateArgs = {
    /**
     * Select specific fields to fetch from the tr_user_post
     */
    select?: tr_user_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_postInclude | null
    /**
     * The data needed to create a tr_user_post.
     */
    data: XOR<tr_user_postCreateInput, tr_user_postUncheckedCreateInput>
  }


  /**
   * tr_user_post createMany
   */
  export type tr_user_postCreateManyArgs = {
    /**
     * The data used to create many tr_user_posts.
     */
    data: Enumerable<tr_user_postCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tr_user_post update
   */
  export type tr_user_postUpdateArgs = {
    /**
     * Select specific fields to fetch from the tr_user_post
     */
    select?: tr_user_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_postInclude | null
    /**
     * The data needed to update a tr_user_post.
     */
    data: XOR<tr_user_postUpdateInput, tr_user_postUncheckedUpdateInput>
    /**
     * Choose, which tr_user_post to update.
     */
    where: tr_user_postWhereUniqueInput
  }


  /**
   * tr_user_post updateMany
   */
  export type tr_user_postUpdateManyArgs = {
    /**
     * The data used to update tr_user_posts.
     */
    data: XOR<tr_user_postUpdateManyMutationInput, tr_user_postUncheckedUpdateManyInput>
    /**
     * Filter which tr_user_posts to update
     */
    where?: tr_user_postWhereInput
  }


  /**
   * tr_user_post upsert
   */
  export type tr_user_postUpsertArgs = {
    /**
     * Select specific fields to fetch from the tr_user_post
     */
    select?: tr_user_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_postInclude | null
    /**
     * The filter to search for the tr_user_post to update in case it exists.
     */
    where: tr_user_postWhereUniqueInput
    /**
     * In case the tr_user_post found by the `where` argument doesn't exist, create a new tr_user_post with this data.
     */
    create: XOR<tr_user_postCreateInput, tr_user_postUncheckedCreateInput>
    /**
     * In case the tr_user_post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_user_postUpdateInput, tr_user_postUncheckedUpdateInput>
  }


  /**
   * tr_user_post delete
   */
  export type tr_user_postDeleteArgs = {
    /**
     * Select specific fields to fetch from the tr_user_post
     */
    select?: tr_user_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_postInclude | null
    /**
     * Filter which tr_user_post to delete.
     */
    where: tr_user_postWhereUniqueInput
  }


  /**
   * tr_user_post deleteMany
   */
  export type tr_user_postDeleteManyArgs = {
    /**
     * Filter which tr_user_posts to delete
     */
    where?: tr_user_postWhereInput
  }


  /**
   * tr_user_post without action
   */
  export type tr_user_postArgs = {
    /**
     * Select specific fields to fetch from the tr_user_post
     */
    select?: tr_user_postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tr_user_postInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const Td_levelScalarFieldEnum: {
    id_ainc_level: 'id_ainc_level',
    pk_level: 'pk_level',
    title_en_level: 'title_en_level',
    title_pt_level: 'title_pt_level'
  };

  export type Td_levelScalarFieldEnum = (typeof Td_levelScalarFieldEnum)[keyof typeof Td_levelScalarFieldEnum]


  export const Td_postScalarFieldEnum: {
    id_ainc_post: 'id_ainc_post',
    pk_post: 'pk_post',
    title_en_post: 'title_en_post',
    text_en_post: 'text_en_post',
    create_post: 'create_post',
    update_post: 'update_post'
  };

  export type Td_postScalarFieldEnum = (typeof Td_postScalarFieldEnum)[keyof typeof Td_postScalarFieldEnum]


  export const Td_userScalarFieldEnum: {
    id_ainc_user: 'id_ainc_user',
    pk_user: 'pk_user',
    name_user: 'name_user',
    passHash: 'passHash',
    isStaff: 'isStaff',
    level_user: 'level_user',
    level_staff: 'level_staff',
    create_user: 'create_user',
    update_user: 'update_user'
  };

  export type Td_userScalarFieldEnum = (typeof Td_userScalarFieldEnum)[keyof typeof Td_userScalarFieldEnum]


  export const Tr_post_levelScalarFieldEnum: {
    id_ainc_post_level: 'id_ainc_post_level',
    fk_post: 'fk_post',
    fk_level: 'fk_level',
    create_post_level: 'create_post_level',
    update_post_level: 'update_post_level'
  };

  export type Tr_post_levelScalarFieldEnum = (typeof Tr_post_levelScalarFieldEnum)[keyof typeof Tr_post_levelScalarFieldEnum]


  export const Tr_user_levelScalarFieldEnum: {
    id_ainc_user_level: 'id_ainc_user_level',
    fk_user: 'fk_user',
    fk_level: 'fk_level',
    create_user_level: 'create_user_level',
    update_user_level: 'update_user_level'
  };

  export type Tr_user_levelScalarFieldEnum = (typeof Tr_user_levelScalarFieldEnum)[keyof typeof Tr_user_levelScalarFieldEnum]


  export const Tr_user_postScalarFieldEnum: {
    id_ainc_user_post: 'id_ainc_user_post',
    fk_user: 'fk_user',
    fk_post: 'fk_post',
    create_user_post: 'create_user_post',
    update_user_post: 'update_user_post'
  };

  export type Tr_user_postScalarFieldEnum = (typeof Tr_user_postScalarFieldEnum)[keyof typeof Tr_user_postScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type td_levelWhereInput = {
    AND?: Enumerable<td_levelWhereInput>
    OR?: Enumerable<td_levelWhereInput>
    NOT?: Enumerable<td_levelWhereInput>
    id_ainc_level?: IntFilter | number
    pk_level?: IntNullableFilter | number | null
    title_en_level?: StringNullableFilter | string | null
    title_pt_level?: StringNullableFilter | string | null
    tr_post_level?: Tr_post_levelListRelationFilter
    tr_user_level?: Tr_user_levelListRelationFilter
  }

  export type td_levelOrderByWithRelationInput = {
    id_ainc_level?: SortOrder
    pk_level?: SortOrder
    title_en_level?: SortOrder
    title_pt_level?: SortOrder
    tr_post_level?: tr_post_levelOrderByRelationAggregateInput
    tr_user_level?: tr_user_levelOrderByRelationAggregateInput
  }

  export type td_levelWhereUniqueInput = {
    id_ainc_level?: number
    pk_level?: number
  }

  export type td_levelOrderByWithAggregationInput = {
    id_ainc_level?: SortOrder
    pk_level?: SortOrder
    title_en_level?: SortOrder
    title_pt_level?: SortOrder
    _count?: td_levelCountOrderByAggregateInput
    _avg?: td_levelAvgOrderByAggregateInput
    _max?: td_levelMaxOrderByAggregateInput
    _min?: td_levelMinOrderByAggregateInput
    _sum?: td_levelSumOrderByAggregateInput
  }

  export type td_levelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<td_levelScalarWhereWithAggregatesInput>
    OR?: Enumerable<td_levelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<td_levelScalarWhereWithAggregatesInput>
    id_ainc_level?: IntWithAggregatesFilter | number
    pk_level?: IntNullableWithAggregatesFilter | number | null
    title_en_level?: StringNullableWithAggregatesFilter | string | null
    title_pt_level?: StringNullableWithAggregatesFilter | string | null
  }

  export type td_postWhereInput = {
    AND?: Enumerable<td_postWhereInput>
    OR?: Enumerable<td_postWhereInput>
    NOT?: Enumerable<td_postWhereInput>
    id_ainc_post?: IntFilter | number
    pk_post?: StringFilter | string
    title_en_post?: StringNullableFilter | string | null
    text_en_post?: StringNullableFilter | string | null
    create_post?: DateTimeNullableFilter | Date | string | null
    update_post?: DateTimeNullableFilter | Date | string | null
    tr_post_level?: Tr_post_levelListRelationFilter
    tr_user_post?: Tr_user_postListRelationFilter
  }

  export type td_postOrderByWithRelationInput = {
    id_ainc_post?: SortOrder
    pk_post?: SortOrder
    title_en_post?: SortOrder
    text_en_post?: SortOrder
    create_post?: SortOrder
    update_post?: SortOrder
    tr_post_level?: tr_post_levelOrderByRelationAggregateInput
    tr_user_post?: tr_user_postOrderByRelationAggregateInput
  }

  export type td_postWhereUniqueInput = {
    id_ainc_post?: number
    pk_post?: string
  }

  export type td_postOrderByWithAggregationInput = {
    id_ainc_post?: SortOrder
    pk_post?: SortOrder
    title_en_post?: SortOrder
    text_en_post?: SortOrder
    create_post?: SortOrder
    update_post?: SortOrder
    _count?: td_postCountOrderByAggregateInput
    _avg?: td_postAvgOrderByAggregateInput
    _max?: td_postMaxOrderByAggregateInput
    _min?: td_postMinOrderByAggregateInput
    _sum?: td_postSumOrderByAggregateInput
  }

  export type td_postScalarWhereWithAggregatesInput = {
    AND?: Enumerable<td_postScalarWhereWithAggregatesInput>
    OR?: Enumerable<td_postScalarWhereWithAggregatesInput>
    NOT?: Enumerable<td_postScalarWhereWithAggregatesInput>
    id_ainc_post?: IntWithAggregatesFilter | number
    pk_post?: StringWithAggregatesFilter | string
    title_en_post?: StringNullableWithAggregatesFilter | string | null
    text_en_post?: StringNullableWithAggregatesFilter | string | null
    create_post?: DateTimeNullableWithAggregatesFilter | Date | string | null
    update_post?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type td_userWhereInput = {
    AND?: Enumerable<td_userWhereInput>
    OR?: Enumerable<td_userWhereInput>
    NOT?: Enumerable<td_userWhereInput>
    id_ainc_user?: IntFilter | number
    pk_user?: StringFilter | string
    name_user?: StringNullableFilter | string | null
    passHash?: StringNullableFilter | string | null
    isStaff?: BoolNullableFilter | boolean | null
    level_user?: IntNullableFilter | number | null
    level_staff?: IntNullableFilter | number | null
    create_user?: DateTimeNullableFilter | Date | string | null
    update_user?: DateTimeNullableFilter | Date | string | null
    tr_user_level?: Tr_user_levelListRelationFilter
    tr_user_post?: Tr_user_postListRelationFilter
  }

  export type td_userOrderByWithRelationInput = {
    id_ainc_user?: SortOrder
    pk_user?: SortOrder
    name_user?: SortOrder
    passHash?: SortOrder
    isStaff?: SortOrder
    level_user?: SortOrder
    level_staff?: SortOrder
    create_user?: SortOrder
    update_user?: SortOrder
    tr_user_level?: tr_user_levelOrderByRelationAggregateInput
    tr_user_post?: tr_user_postOrderByRelationAggregateInput
  }

  export type td_userWhereUniqueInput = {
    id_ainc_user?: number
    pk_user?: string
  }

  export type td_userOrderByWithAggregationInput = {
    id_ainc_user?: SortOrder
    pk_user?: SortOrder
    name_user?: SortOrder
    passHash?: SortOrder
    isStaff?: SortOrder
    level_user?: SortOrder
    level_staff?: SortOrder
    create_user?: SortOrder
    update_user?: SortOrder
    _count?: td_userCountOrderByAggregateInput
    _avg?: td_userAvgOrderByAggregateInput
    _max?: td_userMaxOrderByAggregateInput
    _min?: td_userMinOrderByAggregateInput
    _sum?: td_userSumOrderByAggregateInput
  }

  export type td_userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<td_userScalarWhereWithAggregatesInput>
    OR?: Enumerable<td_userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<td_userScalarWhereWithAggregatesInput>
    id_ainc_user?: IntWithAggregatesFilter | number
    pk_user?: StringWithAggregatesFilter | string
    name_user?: StringNullableWithAggregatesFilter | string | null
    passHash?: StringNullableWithAggregatesFilter | string | null
    isStaff?: BoolNullableWithAggregatesFilter | boolean | null
    level_user?: IntNullableWithAggregatesFilter | number | null
    level_staff?: IntNullableWithAggregatesFilter | number | null
    create_user?: DateTimeNullableWithAggregatesFilter | Date | string | null
    update_user?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type tr_post_levelWhereInput = {
    AND?: Enumerable<tr_post_levelWhereInput>
    OR?: Enumerable<tr_post_levelWhereInput>
    NOT?: Enumerable<tr_post_levelWhereInput>
    id_ainc_post_level?: IntFilter | number
    fk_post?: StringNullableFilter | string | null
    fk_level?: IntNullableFilter | number | null
    create_post_level?: DateTimeNullableFilter | Date | string | null
    update_post_level?: DateTimeNullableFilter | Date | string | null
    td_post?: XOR<Td_postRelationFilter, td_postWhereInput> | null
    td_level?: XOR<Td_levelRelationFilter, td_levelWhereInput> | null
  }

  export type tr_post_levelOrderByWithRelationInput = {
    id_ainc_post_level?: SortOrder
    fk_post?: SortOrder
    fk_level?: SortOrder
    create_post_level?: SortOrder
    update_post_level?: SortOrder
    td_post?: td_postOrderByWithRelationInput
    td_level?: td_levelOrderByWithRelationInput
  }

  export type tr_post_levelWhereUniqueInput = {
    id_ainc_post_level?: number
  }

  export type tr_post_levelOrderByWithAggregationInput = {
    id_ainc_post_level?: SortOrder
    fk_post?: SortOrder
    fk_level?: SortOrder
    create_post_level?: SortOrder
    update_post_level?: SortOrder
    _count?: tr_post_levelCountOrderByAggregateInput
    _avg?: tr_post_levelAvgOrderByAggregateInput
    _max?: tr_post_levelMaxOrderByAggregateInput
    _min?: tr_post_levelMinOrderByAggregateInput
    _sum?: tr_post_levelSumOrderByAggregateInput
  }

  export type tr_post_levelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tr_post_levelScalarWhereWithAggregatesInput>
    OR?: Enumerable<tr_post_levelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tr_post_levelScalarWhereWithAggregatesInput>
    id_ainc_post_level?: IntWithAggregatesFilter | number
    fk_post?: StringNullableWithAggregatesFilter | string | null
    fk_level?: IntNullableWithAggregatesFilter | number | null
    create_post_level?: DateTimeNullableWithAggregatesFilter | Date | string | null
    update_post_level?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type tr_user_levelWhereInput = {
    AND?: Enumerable<tr_user_levelWhereInput>
    OR?: Enumerable<tr_user_levelWhereInput>
    NOT?: Enumerable<tr_user_levelWhereInput>
    id_ainc_user_level?: IntFilter | number
    fk_user?: StringNullableFilter | string | null
    fk_level?: IntNullableFilter | number | null
    create_user_level?: DateTimeNullableFilter | Date | string | null
    update_user_level?: DateTimeNullableFilter | Date | string | null
    td_user?: XOR<Td_userRelationFilter, td_userWhereInput> | null
    td_level?: XOR<Td_levelRelationFilter, td_levelWhereInput> | null
  }

  export type tr_user_levelOrderByWithRelationInput = {
    id_ainc_user_level?: SortOrder
    fk_user?: SortOrder
    fk_level?: SortOrder
    create_user_level?: SortOrder
    update_user_level?: SortOrder
    td_user?: td_userOrderByWithRelationInput
    td_level?: td_levelOrderByWithRelationInput
  }

  export type tr_user_levelWhereUniqueInput = {
    id_ainc_user_level?: number
  }

  export type tr_user_levelOrderByWithAggregationInput = {
    id_ainc_user_level?: SortOrder
    fk_user?: SortOrder
    fk_level?: SortOrder
    create_user_level?: SortOrder
    update_user_level?: SortOrder
    _count?: tr_user_levelCountOrderByAggregateInput
    _avg?: tr_user_levelAvgOrderByAggregateInput
    _max?: tr_user_levelMaxOrderByAggregateInput
    _min?: tr_user_levelMinOrderByAggregateInput
    _sum?: tr_user_levelSumOrderByAggregateInput
  }

  export type tr_user_levelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tr_user_levelScalarWhereWithAggregatesInput>
    OR?: Enumerable<tr_user_levelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tr_user_levelScalarWhereWithAggregatesInput>
    id_ainc_user_level?: IntWithAggregatesFilter | number
    fk_user?: StringNullableWithAggregatesFilter | string | null
    fk_level?: IntNullableWithAggregatesFilter | number | null
    create_user_level?: DateTimeNullableWithAggregatesFilter | Date | string | null
    update_user_level?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type tr_user_postWhereInput = {
    AND?: Enumerable<tr_user_postWhereInput>
    OR?: Enumerable<tr_user_postWhereInput>
    NOT?: Enumerable<tr_user_postWhereInput>
    id_ainc_user_post?: IntFilter | number
    fk_user?: StringNullableFilter | string | null
    fk_post?: StringNullableFilter | string | null
    create_user_post?: DateTimeNullableFilter | Date | string | null
    update_user_post?: DateTimeNullableFilter | Date | string | null
    td_user?: XOR<Td_userRelationFilter, td_userWhereInput> | null
    td_post?: XOR<Td_postRelationFilter, td_postWhereInput> | null
  }

  export type tr_user_postOrderByWithRelationInput = {
    id_ainc_user_post?: SortOrder
    fk_user?: SortOrder
    fk_post?: SortOrder
    create_user_post?: SortOrder
    update_user_post?: SortOrder
    td_user?: td_userOrderByWithRelationInput
    td_post?: td_postOrderByWithRelationInput
  }

  export type tr_user_postWhereUniqueInput = {
    id_ainc_user_post?: number
  }

  export type tr_user_postOrderByWithAggregationInput = {
    id_ainc_user_post?: SortOrder
    fk_user?: SortOrder
    fk_post?: SortOrder
    create_user_post?: SortOrder
    update_user_post?: SortOrder
    _count?: tr_user_postCountOrderByAggregateInput
    _avg?: tr_user_postAvgOrderByAggregateInput
    _max?: tr_user_postMaxOrderByAggregateInput
    _min?: tr_user_postMinOrderByAggregateInput
    _sum?: tr_user_postSumOrderByAggregateInput
  }

  export type tr_user_postScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tr_user_postScalarWhereWithAggregatesInput>
    OR?: Enumerable<tr_user_postScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tr_user_postScalarWhereWithAggregatesInput>
    id_ainc_user_post?: IntWithAggregatesFilter | number
    fk_user?: StringNullableWithAggregatesFilter | string | null
    fk_post?: StringNullableWithAggregatesFilter | string | null
    create_user_post?: DateTimeNullableWithAggregatesFilter | Date | string | null
    update_user_post?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type td_levelCreateInput = {
    pk_level?: number | null
    title_en_level?: string | null
    title_pt_level?: string | null
    tr_post_level?: tr_post_levelCreateNestedManyWithoutTd_levelInput
    tr_user_level?: tr_user_levelCreateNestedManyWithoutTd_levelInput
  }

  export type td_levelUncheckedCreateInput = {
    id_ainc_level?: number
    pk_level?: number | null
    title_en_level?: string | null
    title_pt_level?: string | null
    tr_post_level?: tr_post_levelUncheckedCreateNestedManyWithoutTd_levelInput
    tr_user_level?: tr_user_levelUncheckedCreateNestedManyWithoutTd_levelInput
  }

  export type td_levelUpdateInput = {
    pk_level?: NullableIntFieldUpdateOperationsInput | number | null
    title_en_level?: NullableStringFieldUpdateOperationsInput | string | null
    title_pt_level?: NullableStringFieldUpdateOperationsInput | string | null
    tr_post_level?: tr_post_levelUpdateManyWithoutTd_levelNestedInput
    tr_user_level?: tr_user_levelUpdateManyWithoutTd_levelNestedInput
  }

  export type td_levelUncheckedUpdateInput = {
    id_ainc_level?: IntFieldUpdateOperationsInput | number
    pk_level?: NullableIntFieldUpdateOperationsInput | number | null
    title_en_level?: NullableStringFieldUpdateOperationsInput | string | null
    title_pt_level?: NullableStringFieldUpdateOperationsInput | string | null
    tr_post_level?: tr_post_levelUncheckedUpdateManyWithoutTd_levelNestedInput
    tr_user_level?: tr_user_levelUncheckedUpdateManyWithoutTd_levelNestedInput
  }

  export type td_levelCreateManyInput = {
    id_ainc_level?: number
    pk_level?: number | null
    title_en_level?: string | null
    title_pt_level?: string | null
  }

  export type td_levelUpdateManyMutationInput = {
    pk_level?: NullableIntFieldUpdateOperationsInput | number | null
    title_en_level?: NullableStringFieldUpdateOperationsInput | string | null
    title_pt_level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type td_levelUncheckedUpdateManyInput = {
    id_ainc_level?: IntFieldUpdateOperationsInput | number
    pk_level?: NullableIntFieldUpdateOperationsInput | number | null
    title_en_level?: NullableStringFieldUpdateOperationsInput | string | null
    title_pt_level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type td_postCreateInput = {
    pk_post: string
    title_en_post?: string | null
    text_en_post?: string | null
    create_post?: Date | string | null
    update_post?: Date | string | null
    tr_post_level?: tr_post_levelCreateNestedManyWithoutTd_postInput
    tr_user_post?: tr_user_postCreateNestedManyWithoutTd_postInput
  }

  export type td_postUncheckedCreateInput = {
    id_ainc_post?: number
    pk_post: string
    title_en_post?: string | null
    text_en_post?: string | null
    create_post?: Date | string | null
    update_post?: Date | string | null
    tr_post_level?: tr_post_levelUncheckedCreateNestedManyWithoutTd_postInput
    tr_user_post?: tr_user_postUncheckedCreateNestedManyWithoutTd_postInput
  }

  export type td_postUpdateInput = {
    pk_post?: StringFieldUpdateOperationsInput | string
    title_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    text_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    create_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tr_post_level?: tr_post_levelUpdateManyWithoutTd_postNestedInput
    tr_user_post?: tr_user_postUpdateManyWithoutTd_postNestedInput
  }

  export type td_postUncheckedUpdateInput = {
    id_ainc_post?: IntFieldUpdateOperationsInput | number
    pk_post?: StringFieldUpdateOperationsInput | string
    title_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    text_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    create_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tr_post_level?: tr_post_levelUncheckedUpdateManyWithoutTd_postNestedInput
    tr_user_post?: tr_user_postUncheckedUpdateManyWithoutTd_postNestedInput
  }

  export type td_postCreateManyInput = {
    id_ainc_post?: number
    pk_post: string
    title_en_post?: string | null
    text_en_post?: string | null
    create_post?: Date | string | null
    update_post?: Date | string | null
  }

  export type td_postUpdateManyMutationInput = {
    pk_post?: StringFieldUpdateOperationsInput | string
    title_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    text_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    create_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_postUncheckedUpdateManyInput = {
    id_ainc_post?: IntFieldUpdateOperationsInput | number
    pk_post?: StringFieldUpdateOperationsInput | string
    title_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    text_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    create_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_userCreateInput = {
    pk_user: string
    name_user?: string | null
    passHash?: string | null
    isStaff?: boolean | null
    level_user?: number | null
    level_staff?: number | null
    create_user?: Date | string | null
    update_user?: Date | string | null
    tr_user_level?: tr_user_levelCreateNestedManyWithoutTd_userInput
    tr_user_post?: tr_user_postCreateNestedManyWithoutTd_userInput
  }

  export type td_userUncheckedCreateInput = {
    id_ainc_user?: number
    pk_user: string
    name_user?: string | null
    passHash?: string | null
    isStaff?: boolean | null
    level_user?: number | null
    level_staff?: number | null
    create_user?: Date | string | null
    update_user?: Date | string | null
    tr_user_level?: tr_user_levelUncheckedCreateNestedManyWithoutTd_userInput
    tr_user_post?: tr_user_postUncheckedCreateNestedManyWithoutTd_userInput
  }

  export type td_userUpdateInput = {
    pk_user?: StringFieldUpdateOperationsInput | string
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    passHash?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    level_user?: NullableIntFieldUpdateOperationsInput | number | null
    level_staff?: NullableIntFieldUpdateOperationsInput | number | null
    create_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tr_user_level?: tr_user_levelUpdateManyWithoutTd_userNestedInput
    tr_user_post?: tr_user_postUpdateManyWithoutTd_userNestedInput
  }

  export type td_userUncheckedUpdateInput = {
    id_ainc_user?: IntFieldUpdateOperationsInput | number
    pk_user?: StringFieldUpdateOperationsInput | string
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    passHash?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    level_user?: NullableIntFieldUpdateOperationsInput | number | null
    level_staff?: NullableIntFieldUpdateOperationsInput | number | null
    create_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tr_user_level?: tr_user_levelUncheckedUpdateManyWithoutTd_userNestedInput
    tr_user_post?: tr_user_postUncheckedUpdateManyWithoutTd_userNestedInput
  }

  export type td_userCreateManyInput = {
    id_ainc_user?: number
    pk_user: string
    name_user?: string | null
    passHash?: string | null
    isStaff?: boolean | null
    level_user?: number | null
    level_staff?: number | null
    create_user?: Date | string | null
    update_user?: Date | string | null
  }

  export type td_userUpdateManyMutationInput = {
    pk_user?: StringFieldUpdateOperationsInput | string
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    passHash?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    level_user?: NullableIntFieldUpdateOperationsInput | number | null
    level_staff?: NullableIntFieldUpdateOperationsInput | number | null
    create_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type td_userUncheckedUpdateManyInput = {
    id_ainc_user?: IntFieldUpdateOperationsInput | number
    pk_user?: StringFieldUpdateOperationsInput | string
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    passHash?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    level_user?: NullableIntFieldUpdateOperationsInput | number | null
    level_staff?: NullableIntFieldUpdateOperationsInput | number | null
    create_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_post_levelCreateInput = {
    create_post_level?: Date | string | null
    update_post_level?: Date | string | null
    td_post?: td_postCreateNestedOneWithoutTr_post_levelInput
    td_level?: td_levelCreateNestedOneWithoutTr_post_levelInput
  }

  export type tr_post_levelUncheckedCreateInput = {
    id_ainc_post_level?: number
    fk_post?: string | null
    fk_level?: number | null
    create_post_level?: Date | string | null
    update_post_level?: Date | string | null
  }

  export type tr_post_levelUpdateInput = {
    create_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    td_post?: td_postUpdateOneWithoutTr_post_levelNestedInput
    td_level?: td_levelUpdateOneWithoutTr_post_levelNestedInput
  }

  export type tr_post_levelUncheckedUpdateInput = {
    id_ainc_post_level?: IntFieldUpdateOperationsInput | number
    fk_post?: NullableStringFieldUpdateOperationsInput | string | null
    fk_level?: NullableIntFieldUpdateOperationsInput | number | null
    create_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_post_levelCreateManyInput = {
    id_ainc_post_level?: number
    fk_post?: string | null
    fk_level?: number | null
    create_post_level?: Date | string | null
    update_post_level?: Date | string | null
  }

  export type tr_post_levelUpdateManyMutationInput = {
    create_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_post_levelUncheckedUpdateManyInput = {
    id_ainc_post_level?: IntFieldUpdateOperationsInput | number
    fk_post?: NullableStringFieldUpdateOperationsInput | string | null
    fk_level?: NullableIntFieldUpdateOperationsInput | number | null
    create_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_user_levelCreateInput = {
    create_user_level?: Date | string | null
    update_user_level?: Date | string | null
    td_user?: td_userCreateNestedOneWithoutTr_user_levelInput
    td_level?: td_levelCreateNestedOneWithoutTr_user_levelInput
  }

  export type tr_user_levelUncheckedCreateInput = {
    id_ainc_user_level?: number
    fk_user?: string | null
    fk_level?: number | null
    create_user_level?: Date | string | null
    update_user_level?: Date | string | null
  }

  export type tr_user_levelUpdateInput = {
    create_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    td_user?: td_userUpdateOneWithoutTr_user_levelNestedInput
    td_level?: td_levelUpdateOneWithoutTr_user_levelNestedInput
  }

  export type tr_user_levelUncheckedUpdateInput = {
    id_ainc_user_level?: IntFieldUpdateOperationsInput | number
    fk_user?: NullableStringFieldUpdateOperationsInput | string | null
    fk_level?: NullableIntFieldUpdateOperationsInput | number | null
    create_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_user_levelCreateManyInput = {
    id_ainc_user_level?: number
    fk_user?: string | null
    fk_level?: number | null
    create_user_level?: Date | string | null
    update_user_level?: Date | string | null
  }

  export type tr_user_levelUpdateManyMutationInput = {
    create_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_user_levelUncheckedUpdateManyInput = {
    id_ainc_user_level?: IntFieldUpdateOperationsInput | number
    fk_user?: NullableStringFieldUpdateOperationsInput | string | null
    fk_level?: NullableIntFieldUpdateOperationsInput | number | null
    create_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_user_postCreateInput = {
    create_user_post?: Date | string | null
    update_user_post?: Date | string | null
    td_user?: td_userCreateNestedOneWithoutTr_user_postInput
    td_post?: td_postCreateNestedOneWithoutTr_user_postInput
  }

  export type tr_user_postUncheckedCreateInput = {
    id_ainc_user_post?: number
    fk_user?: string | null
    fk_post?: string | null
    create_user_post?: Date | string | null
    update_user_post?: Date | string | null
  }

  export type tr_user_postUpdateInput = {
    create_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    td_user?: td_userUpdateOneWithoutTr_user_postNestedInput
    td_post?: td_postUpdateOneWithoutTr_user_postNestedInput
  }

  export type tr_user_postUncheckedUpdateInput = {
    id_ainc_user_post?: IntFieldUpdateOperationsInput | number
    fk_user?: NullableStringFieldUpdateOperationsInput | string | null
    fk_post?: NullableStringFieldUpdateOperationsInput | string | null
    create_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_user_postCreateManyInput = {
    id_ainc_user_post?: number
    fk_user?: string | null
    fk_post?: string | null
    create_user_post?: Date | string | null
    update_user_post?: Date | string | null
  }

  export type tr_user_postUpdateManyMutationInput = {
    create_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_user_postUncheckedUpdateManyInput = {
    id_ainc_user_post?: IntFieldUpdateOperationsInput | number
    fk_user?: NullableStringFieldUpdateOperationsInput | string | null
    fk_post?: NullableStringFieldUpdateOperationsInput | string | null
    create_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type Tr_post_levelListRelationFilter = {
    every?: tr_post_levelWhereInput
    some?: tr_post_levelWhereInput
    none?: tr_post_levelWhereInput
  }

  export type Tr_user_levelListRelationFilter = {
    every?: tr_user_levelWhereInput
    some?: tr_user_levelWhereInput
    none?: tr_user_levelWhereInput
  }

  export type tr_post_levelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tr_user_levelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type td_levelCountOrderByAggregateInput = {
    id_ainc_level?: SortOrder
    pk_level?: SortOrder
    title_en_level?: SortOrder
    title_pt_level?: SortOrder
  }

  export type td_levelAvgOrderByAggregateInput = {
    id_ainc_level?: SortOrder
    pk_level?: SortOrder
  }

  export type td_levelMaxOrderByAggregateInput = {
    id_ainc_level?: SortOrder
    pk_level?: SortOrder
    title_en_level?: SortOrder
    title_pt_level?: SortOrder
  }

  export type td_levelMinOrderByAggregateInput = {
    id_ainc_level?: SortOrder
    pk_level?: SortOrder
    title_en_level?: SortOrder
    title_pt_level?: SortOrder
  }

  export type td_levelSumOrderByAggregateInput = {
    id_ainc_level?: SortOrder
    pk_level?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type Tr_user_postListRelationFilter = {
    every?: tr_user_postWhereInput
    some?: tr_user_postWhereInput
    none?: tr_user_postWhereInput
  }

  export type tr_user_postOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type td_postCountOrderByAggregateInput = {
    id_ainc_post?: SortOrder
    pk_post?: SortOrder
    title_en_post?: SortOrder
    text_en_post?: SortOrder
    create_post?: SortOrder
    update_post?: SortOrder
  }

  export type td_postAvgOrderByAggregateInput = {
    id_ainc_post?: SortOrder
  }

  export type td_postMaxOrderByAggregateInput = {
    id_ainc_post?: SortOrder
    pk_post?: SortOrder
    title_en_post?: SortOrder
    text_en_post?: SortOrder
    create_post?: SortOrder
    update_post?: SortOrder
  }

  export type td_postMinOrderByAggregateInput = {
    id_ainc_post?: SortOrder
    pk_post?: SortOrder
    title_en_post?: SortOrder
    text_en_post?: SortOrder
    create_post?: SortOrder
    update_post?: SortOrder
  }

  export type td_postSumOrderByAggregateInput = {
    id_ainc_post?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type td_userCountOrderByAggregateInput = {
    id_ainc_user?: SortOrder
    pk_user?: SortOrder
    name_user?: SortOrder
    passHash?: SortOrder
    isStaff?: SortOrder
    level_user?: SortOrder
    level_staff?: SortOrder
    create_user?: SortOrder
    update_user?: SortOrder
  }

  export type td_userAvgOrderByAggregateInput = {
    id_ainc_user?: SortOrder
    level_user?: SortOrder
    level_staff?: SortOrder
  }

  export type td_userMaxOrderByAggregateInput = {
    id_ainc_user?: SortOrder
    pk_user?: SortOrder
    name_user?: SortOrder
    passHash?: SortOrder
    isStaff?: SortOrder
    level_user?: SortOrder
    level_staff?: SortOrder
    create_user?: SortOrder
    update_user?: SortOrder
  }

  export type td_userMinOrderByAggregateInput = {
    id_ainc_user?: SortOrder
    pk_user?: SortOrder
    name_user?: SortOrder
    passHash?: SortOrder
    isStaff?: SortOrder
    level_user?: SortOrder
    level_staff?: SortOrder
    create_user?: SortOrder
    update_user?: SortOrder
  }

  export type td_userSumOrderByAggregateInput = {
    id_ainc_user?: SortOrder
    level_user?: SortOrder
    level_staff?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type Td_postRelationFilter = {
    is?: td_postWhereInput | null
    isNot?: td_postWhereInput | null
  }

  export type Td_levelRelationFilter = {
    is?: td_levelWhereInput | null
    isNot?: td_levelWhereInput | null
  }

  export type tr_post_levelCountOrderByAggregateInput = {
    id_ainc_post_level?: SortOrder
    fk_post?: SortOrder
    fk_level?: SortOrder
    create_post_level?: SortOrder
    update_post_level?: SortOrder
  }

  export type tr_post_levelAvgOrderByAggregateInput = {
    id_ainc_post_level?: SortOrder
    fk_level?: SortOrder
  }

  export type tr_post_levelMaxOrderByAggregateInput = {
    id_ainc_post_level?: SortOrder
    fk_post?: SortOrder
    fk_level?: SortOrder
    create_post_level?: SortOrder
    update_post_level?: SortOrder
  }

  export type tr_post_levelMinOrderByAggregateInput = {
    id_ainc_post_level?: SortOrder
    fk_post?: SortOrder
    fk_level?: SortOrder
    create_post_level?: SortOrder
    update_post_level?: SortOrder
  }

  export type tr_post_levelSumOrderByAggregateInput = {
    id_ainc_post_level?: SortOrder
    fk_level?: SortOrder
  }

  export type Td_userRelationFilter = {
    is?: td_userWhereInput | null
    isNot?: td_userWhereInput | null
  }

  export type tr_user_levelCountOrderByAggregateInput = {
    id_ainc_user_level?: SortOrder
    fk_user?: SortOrder
    fk_level?: SortOrder
    create_user_level?: SortOrder
    update_user_level?: SortOrder
  }

  export type tr_user_levelAvgOrderByAggregateInput = {
    id_ainc_user_level?: SortOrder
    fk_level?: SortOrder
  }

  export type tr_user_levelMaxOrderByAggregateInput = {
    id_ainc_user_level?: SortOrder
    fk_user?: SortOrder
    fk_level?: SortOrder
    create_user_level?: SortOrder
    update_user_level?: SortOrder
  }

  export type tr_user_levelMinOrderByAggregateInput = {
    id_ainc_user_level?: SortOrder
    fk_user?: SortOrder
    fk_level?: SortOrder
    create_user_level?: SortOrder
    update_user_level?: SortOrder
  }

  export type tr_user_levelSumOrderByAggregateInput = {
    id_ainc_user_level?: SortOrder
    fk_level?: SortOrder
  }

  export type tr_user_postCountOrderByAggregateInput = {
    id_ainc_user_post?: SortOrder
    fk_user?: SortOrder
    fk_post?: SortOrder
    create_user_post?: SortOrder
    update_user_post?: SortOrder
  }

  export type tr_user_postAvgOrderByAggregateInput = {
    id_ainc_user_post?: SortOrder
  }

  export type tr_user_postMaxOrderByAggregateInput = {
    id_ainc_user_post?: SortOrder
    fk_user?: SortOrder
    fk_post?: SortOrder
    create_user_post?: SortOrder
    update_user_post?: SortOrder
  }

  export type tr_user_postMinOrderByAggregateInput = {
    id_ainc_user_post?: SortOrder
    fk_user?: SortOrder
    fk_post?: SortOrder
    create_user_post?: SortOrder
    update_user_post?: SortOrder
  }

  export type tr_user_postSumOrderByAggregateInput = {
    id_ainc_user_post?: SortOrder
  }

  export type tr_post_levelCreateNestedManyWithoutTd_levelInput = {
    create?: XOR<Enumerable<tr_post_levelCreateWithoutTd_levelInput>, Enumerable<tr_post_levelUncheckedCreateWithoutTd_levelInput>>
    connectOrCreate?: Enumerable<tr_post_levelCreateOrConnectWithoutTd_levelInput>
    createMany?: tr_post_levelCreateManyTd_levelInputEnvelope
    connect?: Enumerable<tr_post_levelWhereUniqueInput>
  }

  export type tr_user_levelCreateNestedManyWithoutTd_levelInput = {
    create?: XOR<Enumerable<tr_user_levelCreateWithoutTd_levelInput>, Enumerable<tr_user_levelUncheckedCreateWithoutTd_levelInput>>
    connectOrCreate?: Enumerable<tr_user_levelCreateOrConnectWithoutTd_levelInput>
    createMany?: tr_user_levelCreateManyTd_levelInputEnvelope
    connect?: Enumerable<tr_user_levelWhereUniqueInput>
  }

  export type tr_post_levelUncheckedCreateNestedManyWithoutTd_levelInput = {
    create?: XOR<Enumerable<tr_post_levelCreateWithoutTd_levelInput>, Enumerable<tr_post_levelUncheckedCreateWithoutTd_levelInput>>
    connectOrCreate?: Enumerable<tr_post_levelCreateOrConnectWithoutTd_levelInput>
    createMany?: tr_post_levelCreateManyTd_levelInputEnvelope
    connect?: Enumerable<tr_post_levelWhereUniqueInput>
  }

  export type tr_user_levelUncheckedCreateNestedManyWithoutTd_levelInput = {
    create?: XOR<Enumerable<tr_user_levelCreateWithoutTd_levelInput>, Enumerable<tr_user_levelUncheckedCreateWithoutTd_levelInput>>
    connectOrCreate?: Enumerable<tr_user_levelCreateOrConnectWithoutTd_levelInput>
    createMany?: tr_user_levelCreateManyTd_levelInputEnvelope
    connect?: Enumerable<tr_user_levelWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type tr_post_levelUpdateManyWithoutTd_levelNestedInput = {
    create?: XOR<Enumerable<tr_post_levelCreateWithoutTd_levelInput>, Enumerable<tr_post_levelUncheckedCreateWithoutTd_levelInput>>
    connectOrCreate?: Enumerable<tr_post_levelCreateOrConnectWithoutTd_levelInput>
    upsert?: Enumerable<tr_post_levelUpsertWithWhereUniqueWithoutTd_levelInput>
    createMany?: tr_post_levelCreateManyTd_levelInputEnvelope
    set?: Enumerable<tr_post_levelWhereUniqueInput>
    disconnect?: Enumerable<tr_post_levelWhereUniqueInput>
    delete?: Enumerable<tr_post_levelWhereUniqueInput>
    connect?: Enumerable<tr_post_levelWhereUniqueInput>
    update?: Enumerable<tr_post_levelUpdateWithWhereUniqueWithoutTd_levelInput>
    updateMany?: Enumerable<tr_post_levelUpdateManyWithWhereWithoutTd_levelInput>
    deleteMany?: Enumerable<tr_post_levelScalarWhereInput>
  }

  export type tr_user_levelUpdateManyWithoutTd_levelNestedInput = {
    create?: XOR<Enumerable<tr_user_levelCreateWithoutTd_levelInput>, Enumerable<tr_user_levelUncheckedCreateWithoutTd_levelInput>>
    connectOrCreate?: Enumerable<tr_user_levelCreateOrConnectWithoutTd_levelInput>
    upsert?: Enumerable<tr_user_levelUpsertWithWhereUniqueWithoutTd_levelInput>
    createMany?: tr_user_levelCreateManyTd_levelInputEnvelope
    set?: Enumerable<tr_user_levelWhereUniqueInput>
    disconnect?: Enumerable<tr_user_levelWhereUniqueInput>
    delete?: Enumerable<tr_user_levelWhereUniqueInput>
    connect?: Enumerable<tr_user_levelWhereUniqueInput>
    update?: Enumerable<tr_user_levelUpdateWithWhereUniqueWithoutTd_levelInput>
    updateMany?: Enumerable<tr_user_levelUpdateManyWithWhereWithoutTd_levelInput>
    deleteMany?: Enumerable<tr_user_levelScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tr_post_levelUncheckedUpdateManyWithoutTd_levelNestedInput = {
    create?: XOR<Enumerable<tr_post_levelCreateWithoutTd_levelInput>, Enumerable<tr_post_levelUncheckedCreateWithoutTd_levelInput>>
    connectOrCreate?: Enumerable<tr_post_levelCreateOrConnectWithoutTd_levelInput>
    upsert?: Enumerable<tr_post_levelUpsertWithWhereUniqueWithoutTd_levelInput>
    createMany?: tr_post_levelCreateManyTd_levelInputEnvelope
    set?: Enumerable<tr_post_levelWhereUniqueInput>
    disconnect?: Enumerable<tr_post_levelWhereUniqueInput>
    delete?: Enumerable<tr_post_levelWhereUniqueInput>
    connect?: Enumerable<tr_post_levelWhereUniqueInput>
    update?: Enumerable<tr_post_levelUpdateWithWhereUniqueWithoutTd_levelInput>
    updateMany?: Enumerable<tr_post_levelUpdateManyWithWhereWithoutTd_levelInput>
    deleteMany?: Enumerable<tr_post_levelScalarWhereInput>
  }

  export type tr_user_levelUncheckedUpdateManyWithoutTd_levelNestedInput = {
    create?: XOR<Enumerable<tr_user_levelCreateWithoutTd_levelInput>, Enumerable<tr_user_levelUncheckedCreateWithoutTd_levelInput>>
    connectOrCreate?: Enumerable<tr_user_levelCreateOrConnectWithoutTd_levelInput>
    upsert?: Enumerable<tr_user_levelUpsertWithWhereUniqueWithoutTd_levelInput>
    createMany?: tr_user_levelCreateManyTd_levelInputEnvelope
    set?: Enumerable<tr_user_levelWhereUniqueInput>
    disconnect?: Enumerable<tr_user_levelWhereUniqueInput>
    delete?: Enumerable<tr_user_levelWhereUniqueInput>
    connect?: Enumerable<tr_user_levelWhereUniqueInput>
    update?: Enumerable<tr_user_levelUpdateWithWhereUniqueWithoutTd_levelInput>
    updateMany?: Enumerable<tr_user_levelUpdateManyWithWhereWithoutTd_levelInput>
    deleteMany?: Enumerable<tr_user_levelScalarWhereInput>
  }

  export type tr_post_levelCreateNestedManyWithoutTd_postInput = {
    create?: XOR<Enumerable<tr_post_levelCreateWithoutTd_postInput>, Enumerable<tr_post_levelUncheckedCreateWithoutTd_postInput>>
    connectOrCreate?: Enumerable<tr_post_levelCreateOrConnectWithoutTd_postInput>
    createMany?: tr_post_levelCreateManyTd_postInputEnvelope
    connect?: Enumerable<tr_post_levelWhereUniqueInput>
  }

  export type tr_user_postCreateNestedManyWithoutTd_postInput = {
    create?: XOR<Enumerable<tr_user_postCreateWithoutTd_postInput>, Enumerable<tr_user_postUncheckedCreateWithoutTd_postInput>>
    connectOrCreate?: Enumerable<tr_user_postCreateOrConnectWithoutTd_postInput>
    createMany?: tr_user_postCreateManyTd_postInputEnvelope
    connect?: Enumerable<tr_user_postWhereUniqueInput>
  }

  export type tr_post_levelUncheckedCreateNestedManyWithoutTd_postInput = {
    create?: XOR<Enumerable<tr_post_levelCreateWithoutTd_postInput>, Enumerable<tr_post_levelUncheckedCreateWithoutTd_postInput>>
    connectOrCreate?: Enumerable<tr_post_levelCreateOrConnectWithoutTd_postInput>
    createMany?: tr_post_levelCreateManyTd_postInputEnvelope
    connect?: Enumerable<tr_post_levelWhereUniqueInput>
  }

  export type tr_user_postUncheckedCreateNestedManyWithoutTd_postInput = {
    create?: XOR<Enumerable<tr_user_postCreateWithoutTd_postInput>, Enumerable<tr_user_postUncheckedCreateWithoutTd_postInput>>
    connectOrCreate?: Enumerable<tr_user_postCreateOrConnectWithoutTd_postInput>
    createMany?: tr_user_postCreateManyTd_postInputEnvelope
    connect?: Enumerable<tr_user_postWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type tr_post_levelUpdateManyWithoutTd_postNestedInput = {
    create?: XOR<Enumerable<tr_post_levelCreateWithoutTd_postInput>, Enumerable<tr_post_levelUncheckedCreateWithoutTd_postInput>>
    connectOrCreate?: Enumerable<tr_post_levelCreateOrConnectWithoutTd_postInput>
    upsert?: Enumerable<tr_post_levelUpsertWithWhereUniqueWithoutTd_postInput>
    createMany?: tr_post_levelCreateManyTd_postInputEnvelope
    set?: Enumerable<tr_post_levelWhereUniqueInput>
    disconnect?: Enumerable<tr_post_levelWhereUniqueInput>
    delete?: Enumerable<tr_post_levelWhereUniqueInput>
    connect?: Enumerable<tr_post_levelWhereUniqueInput>
    update?: Enumerable<tr_post_levelUpdateWithWhereUniqueWithoutTd_postInput>
    updateMany?: Enumerable<tr_post_levelUpdateManyWithWhereWithoutTd_postInput>
    deleteMany?: Enumerable<tr_post_levelScalarWhereInput>
  }

  export type tr_user_postUpdateManyWithoutTd_postNestedInput = {
    create?: XOR<Enumerable<tr_user_postCreateWithoutTd_postInput>, Enumerable<tr_user_postUncheckedCreateWithoutTd_postInput>>
    connectOrCreate?: Enumerable<tr_user_postCreateOrConnectWithoutTd_postInput>
    upsert?: Enumerable<tr_user_postUpsertWithWhereUniqueWithoutTd_postInput>
    createMany?: tr_user_postCreateManyTd_postInputEnvelope
    set?: Enumerable<tr_user_postWhereUniqueInput>
    disconnect?: Enumerable<tr_user_postWhereUniqueInput>
    delete?: Enumerable<tr_user_postWhereUniqueInput>
    connect?: Enumerable<tr_user_postWhereUniqueInput>
    update?: Enumerable<tr_user_postUpdateWithWhereUniqueWithoutTd_postInput>
    updateMany?: Enumerable<tr_user_postUpdateManyWithWhereWithoutTd_postInput>
    deleteMany?: Enumerable<tr_user_postScalarWhereInput>
  }

  export type tr_post_levelUncheckedUpdateManyWithoutTd_postNestedInput = {
    create?: XOR<Enumerable<tr_post_levelCreateWithoutTd_postInput>, Enumerable<tr_post_levelUncheckedCreateWithoutTd_postInput>>
    connectOrCreate?: Enumerable<tr_post_levelCreateOrConnectWithoutTd_postInput>
    upsert?: Enumerable<tr_post_levelUpsertWithWhereUniqueWithoutTd_postInput>
    createMany?: tr_post_levelCreateManyTd_postInputEnvelope
    set?: Enumerable<tr_post_levelWhereUniqueInput>
    disconnect?: Enumerable<tr_post_levelWhereUniqueInput>
    delete?: Enumerable<tr_post_levelWhereUniqueInput>
    connect?: Enumerable<tr_post_levelWhereUniqueInput>
    update?: Enumerable<tr_post_levelUpdateWithWhereUniqueWithoutTd_postInput>
    updateMany?: Enumerable<tr_post_levelUpdateManyWithWhereWithoutTd_postInput>
    deleteMany?: Enumerable<tr_post_levelScalarWhereInput>
  }

  export type tr_user_postUncheckedUpdateManyWithoutTd_postNestedInput = {
    create?: XOR<Enumerable<tr_user_postCreateWithoutTd_postInput>, Enumerable<tr_user_postUncheckedCreateWithoutTd_postInput>>
    connectOrCreate?: Enumerable<tr_user_postCreateOrConnectWithoutTd_postInput>
    upsert?: Enumerable<tr_user_postUpsertWithWhereUniqueWithoutTd_postInput>
    createMany?: tr_user_postCreateManyTd_postInputEnvelope
    set?: Enumerable<tr_user_postWhereUniqueInput>
    disconnect?: Enumerable<tr_user_postWhereUniqueInput>
    delete?: Enumerable<tr_user_postWhereUniqueInput>
    connect?: Enumerable<tr_user_postWhereUniqueInput>
    update?: Enumerable<tr_user_postUpdateWithWhereUniqueWithoutTd_postInput>
    updateMany?: Enumerable<tr_user_postUpdateManyWithWhereWithoutTd_postInput>
    deleteMany?: Enumerable<tr_user_postScalarWhereInput>
  }

  export type tr_user_levelCreateNestedManyWithoutTd_userInput = {
    create?: XOR<Enumerable<tr_user_levelCreateWithoutTd_userInput>, Enumerable<tr_user_levelUncheckedCreateWithoutTd_userInput>>
    connectOrCreate?: Enumerable<tr_user_levelCreateOrConnectWithoutTd_userInput>
    createMany?: tr_user_levelCreateManyTd_userInputEnvelope
    connect?: Enumerable<tr_user_levelWhereUniqueInput>
  }

  export type tr_user_postCreateNestedManyWithoutTd_userInput = {
    create?: XOR<Enumerable<tr_user_postCreateWithoutTd_userInput>, Enumerable<tr_user_postUncheckedCreateWithoutTd_userInput>>
    connectOrCreate?: Enumerable<tr_user_postCreateOrConnectWithoutTd_userInput>
    createMany?: tr_user_postCreateManyTd_userInputEnvelope
    connect?: Enumerable<tr_user_postWhereUniqueInput>
  }

  export type tr_user_levelUncheckedCreateNestedManyWithoutTd_userInput = {
    create?: XOR<Enumerable<tr_user_levelCreateWithoutTd_userInput>, Enumerable<tr_user_levelUncheckedCreateWithoutTd_userInput>>
    connectOrCreate?: Enumerable<tr_user_levelCreateOrConnectWithoutTd_userInput>
    createMany?: tr_user_levelCreateManyTd_userInputEnvelope
    connect?: Enumerable<tr_user_levelWhereUniqueInput>
  }

  export type tr_user_postUncheckedCreateNestedManyWithoutTd_userInput = {
    create?: XOR<Enumerable<tr_user_postCreateWithoutTd_userInput>, Enumerable<tr_user_postUncheckedCreateWithoutTd_userInput>>
    connectOrCreate?: Enumerable<tr_user_postCreateOrConnectWithoutTd_userInput>
    createMany?: tr_user_postCreateManyTd_userInputEnvelope
    connect?: Enumerable<tr_user_postWhereUniqueInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type tr_user_levelUpdateManyWithoutTd_userNestedInput = {
    create?: XOR<Enumerable<tr_user_levelCreateWithoutTd_userInput>, Enumerable<tr_user_levelUncheckedCreateWithoutTd_userInput>>
    connectOrCreate?: Enumerable<tr_user_levelCreateOrConnectWithoutTd_userInput>
    upsert?: Enumerable<tr_user_levelUpsertWithWhereUniqueWithoutTd_userInput>
    createMany?: tr_user_levelCreateManyTd_userInputEnvelope
    set?: Enumerable<tr_user_levelWhereUniqueInput>
    disconnect?: Enumerable<tr_user_levelWhereUniqueInput>
    delete?: Enumerable<tr_user_levelWhereUniqueInput>
    connect?: Enumerable<tr_user_levelWhereUniqueInput>
    update?: Enumerable<tr_user_levelUpdateWithWhereUniqueWithoutTd_userInput>
    updateMany?: Enumerable<tr_user_levelUpdateManyWithWhereWithoutTd_userInput>
    deleteMany?: Enumerable<tr_user_levelScalarWhereInput>
  }

  export type tr_user_postUpdateManyWithoutTd_userNestedInput = {
    create?: XOR<Enumerable<tr_user_postCreateWithoutTd_userInput>, Enumerable<tr_user_postUncheckedCreateWithoutTd_userInput>>
    connectOrCreate?: Enumerable<tr_user_postCreateOrConnectWithoutTd_userInput>
    upsert?: Enumerable<tr_user_postUpsertWithWhereUniqueWithoutTd_userInput>
    createMany?: tr_user_postCreateManyTd_userInputEnvelope
    set?: Enumerable<tr_user_postWhereUniqueInput>
    disconnect?: Enumerable<tr_user_postWhereUniqueInput>
    delete?: Enumerable<tr_user_postWhereUniqueInput>
    connect?: Enumerable<tr_user_postWhereUniqueInput>
    update?: Enumerable<tr_user_postUpdateWithWhereUniqueWithoutTd_userInput>
    updateMany?: Enumerable<tr_user_postUpdateManyWithWhereWithoutTd_userInput>
    deleteMany?: Enumerable<tr_user_postScalarWhereInput>
  }

  export type tr_user_levelUncheckedUpdateManyWithoutTd_userNestedInput = {
    create?: XOR<Enumerable<tr_user_levelCreateWithoutTd_userInput>, Enumerable<tr_user_levelUncheckedCreateWithoutTd_userInput>>
    connectOrCreate?: Enumerable<tr_user_levelCreateOrConnectWithoutTd_userInput>
    upsert?: Enumerable<tr_user_levelUpsertWithWhereUniqueWithoutTd_userInput>
    createMany?: tr_user_levelCreateManyTd_userInputEnvelope
    set?: Enumerable<tr_user_levelWhereUniqueInput>
    disconnect?: Enumerable<tr_user_levelWhereUniqueInput>
    delete?: Enumerable<tr_user_levelWhereUniqueInput>
    connect?: Enumerable<tr_user_levelWhereUniqueInput>
    update?: Enumerable<tr_user_levelUpdateWithWhereUniqueWithoutTd_userInput>
    updateMany?: Enumerable<tr_user_levelUpdateManyWithWhereWithoutTd_userInput>
    deleteMany?: Enumerable<tr_user_levelScalarWhereInput>
  }

  export type tr_user_postUncheckedUpdateManyWithoutTd_userNestedInput = {
    create?: XOR<Enumerable<tr_user_postCreateWithoutTd_userInput>, Enumerable<tr_user_postUncheckedCreateWithoutTd_userInput>>
    connectOrCreate?: Enumerable<tr_user_postCreateOrConnectWithoutTd_userInput>
    upsert?: Enumerable<tr_user_postUpsertWithWhereUniqueWithoutTd_userInput>
    createMany?: tr_user_postCreateManyTd_userInputEnvelope
    set?: Enumerable<tr_user_postWhereUniqueInput>
    disconnect?: Enumerable<tr_user_postWhereUniqueInput>
    delete?: Enumerable<tr_user_postWhereUniqueInput>
    connect?: Enumerable<tr_user_postWhereUniqueInput>
    update?: Enumerable<tr_user_postUpdateWithWhereUniqueWithoutTd_userInput>
    updateMany?: Enumerable<tr_user_postUpdateManyWithWhereWithoutTd_userInput>
    deleteMany?: Enumerable<tr_user_postScalarWhereInput>
  }

  export type td_postCreateNestedOneWithoutTr_post_levelInput = {
    create?: XOR<td_postCreateWithoutTr_post_levelInput, td_postUncheckedCreateWithoutTr_post_levelInput>
    connectOrCreate?: td_postCreateOrConnectWithoutTr_post_levelInput
    connect?: td_postWhereUniqueInput
  }

  export type td_levelCreateNestedOneWithoutTr_post_levelInput = {
    create?: XOR<td_levelCreateWithoutTr_post_levelInput, td_levelUncheckedCreateWithoutTr_post_levelInput>
    connectOrCreate?: td_levelCreateOrConnectWithoutTr_post_levelInput
    connect?: td_levelWhereUniqueInput
  }

  export type td_postUpdateOneWithoutTr_post_levelNestedInput = {
    create?: XOR<td_postCreateWithoutTr_post_levelInput, td_postUncheckedCreateWithoutTr_post_levelInput>
    connectOrCreate?: td_postCreateOrConnectWithoutTr_post_levelInput
    upsert?: td_postUpsertWithoutTr_post_levelInput
    disconnect?: boolean
    delete?: boolean
    connect?: td_postWhereUniqueInput
    update?: XOR<td_postUpdateWithoutTr_post_levelInput, td_postUncheckedUpdateWithoutTr_post_levelInput>
  }

  export type td_levelUpdateOneWithoutTr_post_levelNestedInput = {
    create?: XOR<td_levelCreateWithoutTr_post_levelInput, td_levelUncheckedCreateWithoutTr_post_levelInput>
    connectOrCreate?: td_levelCreateOrConnectWithoutTr_post_levelInput
    upsert?: td_levelUpsertWithoutTr_post_levelInput
    disconnect?: boolean
    delete?: boolean
    connect?: td_levelWhereUniqueInput
    update?: XOR<td_levelUpdateWithoutTr_post_levelInput, td_levelUncheckedUpdateWithoutTr_post_levelInput>
  }

  export type td_userCreateNestedOneWithoutTr_user_levelInput = {
    create?: XOR<td_userCreateWithoutTr_user_levelInput, td_userUncheckedCreateWithoutTr_user_levelInput>
    connectOrCreate?: td_userCreateOrConnectWithoutTr_user_levelInput
    connect?: td_userWhereUniqueInput
  }

  export type td_levelCreateNestedOneWithoutTr_user_levelInput = {
    create?: XOR<td_levelCreateWithoutTr_user_levelInput, td_levelUncheckedCreateWithoutTr_user_levelInput>
    connectOrCreate?: td_levelCreateOrConnectWithoutTr_user_levelInput
    connect?: td_levelWhereUniqueInput
  }

  export type td_userUpdateOneWithoutTr_user_levelNestedInput = {
    create?: XOR<td_userCreateWithoutTr_user_levelInput, td_userUncheckedCreateWithoutTr_user_levelInput>
    connectOrCreate?: td_userCreateOrConnectWithoutTr_user_levelInput
    upsert?: td_userUpsertWithoutTr_user_levelInput
    disconnect?: boolean
    delete?: boolean
    connect?: td_userWhereUniqueInput
    update?: XOR<td_userUpdateWithoutTr_user_levelInput, td_userUncheckedUpdateWithoutTr_user_levelInput>
  }

  export type td_levelUpdateOneWithoutTr_user_levelNestedInput = {
    create?: XOR<td_levelCreateWithoutTr_user_levelInput, td_levelUncheckedCreateWithoutTr_user_levelInput>
    connectOrCreate?: td_levelCreateOrConnectWithoutTr_user_levelInput
    upsert?: td_levelUpsertWithoutTr_user_levelInput
    disconnect?: boolean
    delete?: boolean
    connect?: td_levelWhereUniqueInput
    update?: XOR<td_levelUpdateWithoutTr_user_levelInput, td_levelUncheckedUpdateWithoutTr_user_levelInput>
  }

  export type td_userCreateNestedOneWithoutTr_user_postInput = {
    create?: XOR<td_userCreateWithoutTr_user_postInput, td_userUncheckedCreateWithoutTr_user_postInput>
    connectOrCreate?: td_userCreateOrConnectWithoutTr_user_postInput
    connect?: td_userWhereUniqueInput
  }

  export type td_postCreateNestedOneWithoutTr_user_postInput = {
    create?: XOR<td_postCreateWithoutTr_user_postInput, td_postUncheckedCreateWithoutTr_user_postInput>
    connectOrCreate?: td_postCreateOrConnectWithoutTr_user_postInput
    connect?: td_postWhereUniqueInput
  }

  export type td_userUpdateOneWithoutTr_user_postNestedInput = {
    create?: XOR<td_userCreateWithoutTr_user_postInput, td_userUncheckedCreateWithoutTr_user_postInput>
    connectOrCreate?: td_userCreateOrConnectWithoutTr_user_postInput
    upsert?: td_userUpsertWithoutTr_user_postInput
    disconnect?: boolean
    delete?: boolean
    connect?: td_userWhereUniqueInput
    update?: XOR<td_userUpdateWithoutTr_user_postInput, td_userUncheckedUpdateWithoutTr_user_postInput>
  }

  export type td_postUpdateOneWithoutTr_user_postNestedInput = {
    create?: XOR<td_postCreateWithoutTr_user_postInput, td_postUncheckedCreateWithoutTr_user_postInput>
    connectOrCreate?: td_postCreateOrConnectWithoutTr_user_postInput
    upsert?: td_postUpsertWithoutTr_user_postInput
    disconnect?: boolean
    delete?: boolean
    connect?: td_postWhereUniqueInput
    update?: XOR<td_postUpdateWithoutTr_user_postInput, td_postUncheckedUpdateWithoutTr_user_postInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type tr_post_levelCreateWithoutTd_levelInput = {
    create_post_level?: Date | string | null
    update_post_level?: Date | string | null
    td_post?: td_postCreateNestedOneWithoutTr_post_levelInput
  }

  export type tr_post_levelUncheckedCreateWithoutTd_levelInput = {
    id_ainc_post_level?: number
    fk_post?: string | null
    create_post_level?: Date | string | null
    update_post_level?: Date | string | null
  }

  export type tr_post_levelCreateOrConnectWithoutTd_levelInput = {
    where: tr_post_levelWhereUniqueInput
    create: XOR<tr_post_levelCreateWithoutTd_levelInput, tr_post_levelUncheckedCreateWithoutTd_levelInput>
  }

  export type tr_post_levelCreateManyTd_levelInputEnvelope = {
    data: Enumerable<tr_post_levelCreateManyTd_levelInput>
    skipDuplicates?: boolean
  }

  export type tr_user_levelCreateWithoutTd_levelInput = {
    create_user_level?: Date | string | null
    update_user_level?: Date | string | null
    td_user?: td_userCreateNestedOneWithoutTr_user_levelInput
  }

  export type tr_user_levelUncheckedCreateWithoutTd_levelInput = {
    id_ainc_user_level?: number
    fk_user?: string | null
    create_user_level?: Date | string | null
    update_user_level?: Date | string | null
  }

  export type tr_user_levelCreateOrConnectWithoutTd_levelInput = {
    where: tr_user_levelWhereUniqueInput
    create: XOR<tr_user_levelCreateWithoutTd_levelInput, tr_user_levelUncheckedCreateWithoutTd_levelInput>
  }

  export type tr_user_levelCreateManyTd_levelInputEnvelope = {
    data: Enumerable<tr_user_levelCreateManyTd_levelInput>
    skipDuplicates?: boolean
  }

  export type tr_post_levelUpsertWithWhereUniqueWithoutTd_levelInput = {
    where: tr_post_levelWhereUniqueInput
    update: XOR<tr_post_levelUpdateWithoutTd_levelInput, tr_post_levelUncheckedUpdateWithoutTd_levelInput>
    create: XOR<tr_post_levelCreateWithoutTd_levelInput, tr_post_levelUncheckedCreateWithoutTd_levelInput>
  }

  export type tr_post_levelUpdateWithWhereUniqueWithoutTd_levelInput = {
    where: tr_post_levelWhereUniqueInput
    data: XOR<tr_post_levelUpdateWithoutTd_levelInput, tr_post_levelUncheckedUpdateWithoutTd_levelInput>
  }

  export type tr_post_levelUpdateManyWithWhereWithoutTd_levelInput = {
    where: tr_post_levelScalarWhereInput
    data: XOR<tr_post_levelUpdateManyMutationInput, tr_post_levelUncheckedUpdateManyWithoutTr_post_levelInput>
  }

  export type tr_post_levelScalarWhereInput = {
    AND?: Enumerable<tr_post_levelScalarWhereInput>
    OR?: Enumerable<tr_post_levelScalarWhereInput>
    NOT?: Enumerable<tr_post_levelScalarWhereInput>
    id_ainc_post_level?: IntFilter | number
    fk_post?: StringNullableFilter | string | null
    fk_level?: IntNullableFilter | number | null
    create_post_level?: DateTimeNullableFilter | Date | string | null
    update_post_level?: DateTimeNullableFilter | Date | string | null
  }

  export type tr_user_levelUpsertWithWhereUniqueWithoutTd_levelInput = {
    where: tr_user_levelWhereUniqueInput
    update: XOR<tr_user_levelUpdateWithoutTd_levelInput, tr_user_levelUncheckedUpdateWithoutTd_levelInput>
    create: XOR<tr_user_levelCreateWithoutTd_levelInput, tr_user_levelUncheckedCreateWithoutTd_levelInput>
  }

  export type tr_user_levelUpdateWithWhereUniqueWithoutTd_levelInput = {
    where: tr_user_levelWhereUniqueInput
    data: XOR<tr_user_levelUpdateWithoutTd_levelInput, tr_user_levelUncheckedUpdateWithoutTd_levelInput>
  }

  export type tr_user_levelUpdateManyWithWhereWithoutTd_levelInput = {
    where: tr_user_levelScalarWhereInput
    data: XOR<tr_user_levelUpdateManyMutationInput, tr_user_levelUncheckedUpdateManyWithoutTr_user_levelInput>
  }

  export type tr_user_levelScalarWhereInput = {
    AND?: Enumerable<tr_user_levelScalarWhereInput>
    OR?: Enumerable<tr_user_levelScalarWhereInput>
    NOT?: Enumerable<tr_user_levelScalarWhereInput>
    id_ainc_user_level?: IntFilter | number
    fk_user?: StringNullableFilter | string | null
    fk_level?: IntNullableFilter | number | null
    create_user_level?: DateTimeNullableFilter | Date | string | null
    update_user_level?: DateTimeNullableFilter | Date | string | null
  }

  export type tr_post_levelCreateWithoutTd_postInput = {
    create_post_level?: Date | string | null
    update_post_level?: Date | string | null
    td_level?: td_levelCreateNestedOneWithoutTr_post_levelInput
  }

  export type tr_post_levelUncheckedCreateWithoutTd_postInput = {
    id_ainc_post_level?: number
    fk_level?: number | null
    create_post_level?: Date | string | null
    update_post_level?: Date | string | null
  }

  export type tr_post_levelCreateOrConnectWithoutTd_postInput = {
    where: tr_post_levelWhereUniqueInput
    create: XOR<tr_post_levelCreateWithoutTd_postInput, tr_post_levelUncheckedCreateWithoutTd_postInput>
  }

  export type tr_post_levelCreateManyTd_postInputEnvelope = {
    data: Enumerable<tr_post_levelCreateManyTd_postInput>
    skipDuplicates?: boolean
  }

  export type tr_user_postCreateWithoutTd_postInput = {
    create_user_post?: Date | string | null
    update_user_post?: Date | string | null
    td_user?: td_userCreateNestedOneWithoutTr_user_postInput
  }

  export type tr_user_postUncheckedCreateWithoutTd_postInput = {
    id_ainc_user_post?: number
    fk_user?: string | null
    create_user_post?: Date | string | null
    update_user_post?: Date | string | null
  }

  export type tr_user_postCreateOrConnectWithoutTd_postInput = {
    where: tr_user_postWhereUniqueInput
    create: XOR<tr_user_postCreateWithoutTd_postInput, tr_user_postUncheckedCreateWithoutTd_postInput>
  }

  export type tr_user_postCreateManyTd_postInputEnvelope = {
    data: Enumerable<tr_user_postCreateManyTd_postInput>
    skipDuplicates?: boolean
  }

  export type tr_post_levelUpsertWithWhereUniqueWithoutTd_postInput = {
    where: tr_post_levelWhereUniqueInput
    update: XOR<tr_post_levelUpdateWithoutTd_postInput, tr_post_levelUncheckedUpdateWithoutTd_postInput>
    create: XOR<tr_post_levelCreateWithoutTd_postInput, tr_post_levelUncheckedCreateWithoutTd_postInput>
  }

  export type tr_post_levelUpdateWithWhereUniqueWithoutTd_postInput = {
    where: tr_post_levelWhereUniqueInput
    data: XOR<tr_post_levelUpdateWithoutTd_postInput, tr_post_levelUncheckedUpdateWithoutTd_postInput>
  }

  export type tr_post_levelUpdateManyWithWhereWithoutTd_postInput = {
    where: tr_post_levelScalarWhereInput
    data: XOR<tr_post_levelUpdateManyMutationInput, tr_post_levelUncheckedUpdateManyWithoutTr_post_levelInput>
  }

  export type tr_user_postUpsertWithWhereUniqueWithoutTd_postInput = {
    where: tr_user_postWhereUniqueInput
    update: XOR<tr_user_postUpdateWithoutTd_postInput, tr_user_postUncheckedUpdateWithoutTd_postInput>
    create: XOR<tr_user_postCreateWithoutTd_postInput, tr_user_postUncheckedCreateWithoutTd_postInput>
  }

  export type tr_user_postUpdateWithWhereUniqueWithoutTd_postInput = {
    where: tr_user_postWhereUniqueInput
    data: XOR<tr_user_postUpdateWithoutTd_postInput, tr_user_postUncheckedUpdateWithoutTd_postInput>
  }

  export type tr_user_postUpdateManyWithWhereWithoutTd_postInput = {
    where: tr_user_postScalarWhereInput
    data: XOR<tr_user_postUpdateManyMutationInput, tr_user_postUncheckedUpdateManyWithoutTr_user_postInput>
  }

  export type tr_user_postScalarWhereInput = {
    AND?: Enumerable<tr_user_postScalarWhereInput>
    OR?: Enumerable<tr_user_postScalarWhereInput>
    NOT?: Enumerable<tr_user_postScalarWhereInput>
    id_ainc_user_post?: IntFilter | number
    fk_user?: StringNullableFilter | string | null
    fk_post?: StringNullableFilter | string | null
    create_user_post?: DateTimeNullableFilter | Date | string | null
    update_user_post?: DateTimeNullableFilter | Date | string | null
  }

  export type tr_user_levelCreateWithoutTd_userInput = {
    create_user_level?: Date | string | null
    update_user_level?: Date | string | null
    td_level?: td_levelCreateNestedOneWithoutTr_user_levelInput
  }

  export type tr_user_levelUncheckedCreateWithoutTd_userInput = {
    id_ainc_user_level?: number
    fk_level?: number | null
    create_user_level?: Date | string | null
    update_user_level?: Date | string | null
  }

  export type tr_user_levelCreateOrConnectWithoutTd_userInput = {
    where: tr_user_levelWhereUniqueInput
    create: XOR<tr_user_levelCreateWithoutTd_userInput, tr_user_levelUncheckedCreateWithoutTd_userInput>
  }

  export type tr_user_levelCreateManyTd_userInputEnvelope = {
    data: Enumerable<tr_user_levelCreateManyTd_userInput>
    skipDuplicates?: boolean
  }

  export type tr_user_postCreateWithoutTd_userInput = {
    create_user_post?: Date | string | null
    update_user_post?: Date | string | null
    td_post?: td_postCreateNestedOneWithoutTr_user_postInput
  }

  export type tr_user_postUncheckedCreateWithoutTd_userInput = {
    id_ainc_user_post?: number
    fk_post?: string | null
    create_user_post?: Date | string | null
    update_user_post?: Date | string | null
  }

  export type tr_user_postCreateOrConnectWithoutTd_userInput = {
    where: tr_user_postWhereUniqueInput
    create: XOR<tr_user_postCreateWithoutTd_userInput, tr_user_postUncheckedCreateWithoutTd_userInput>
  }

  export type tr_user_postCreateManyTd_userInputEnvelope = {
    data: Enumerable<tr_user_postCreateManyTd_userInput>
    skipDuplicates?: boolean
  }

  export type tr_user_levelUpsertWithWhereUniqueWithoutTd_userInput = {
    where: tr_user_levelWhereUniqueInput
    update: XOR<tr_user_levelUpdateWithoutTd_userInput, tr_user_levelUncheckedUpdateWithoutTd_userInput>
    create: XOR<tr_user_levelCreateWithoutTd_userInput, tr_user_levelUncheckedCreateWithoutTd_userInput>
  }

  export type tr_user_levelUpdateWithWhereUniqueWithoutTd_userInput = {
    where: tr_user_levelWhereUniqueInput
    data: XOR<tr_user_levelUpdateWithoutTd_userInput, tr_user_levelUncheckedUpdateWithoutTd_userInput>
  }

  export type tr_user_levelUpdateManyWithWhereWithoutTd_userInput = {
    where: tr_user_levelScalarWhereInput
    data: XOR<tr_user_levelUpdateManyMutationInput, tr_user_levelUncheckedUpdateManyWithoutTr_user_levelInput>
  }

  export type tr_user_postUpsertWithWhereUniqueWithoutTd_userInput = {
    where: tr_user_postWhereUniqueInput
    update: XOR<tr_user_postUpdateWithoutTd_userInput, tr_user_postUncheckedUpdateWithoutTd_userInput>
    create: XOR<tr_user_postCreateWithoutTd_userInput, tr_user_postUncheckedCreateWithoutTd_userInput>
  }

  export type tr_user_postUpdateWithWhereUniqueWithoutTd_userInput = {
    where: tr_user_postWhereUniqueInput
    data: XOR<tr_user_postUpdateWithoutTd_userInput, tr_user_postUncheckedUpdateWithoutTd_userInput>
  }

  export type tr_user_postUpdateManyWithWhereWithoutTd_userInput = {
    where: tr_user_postScalarWhereInput
    data: XOR<tr_user_postUpdateManyMutationInput, tr_user_postUncheckedUpdateManyWithoutTr_user_postInput>
  }

  export type td_postCreateWithoutTr_post_levelInput = {
    pk_post: string
    title_en_post?: string | null
    text_en_post?: string | null
    create_post?: Date | string | null
    update_post?: Date | string | null
    tr_user_post?: tr_user_postCreateNestedManyWithoutTd_postInput
  }

  export type td_postUncheckedCreateWithoutTr_post_levelInput = {
    id_ainc_post?: number
    pk_post: string
    title_en_post?: string | null
    text_en_post?: string | null
    create_post?: Date | string | null
    update_post?: Date | string | null
    tr_user_post?: tr_user_postUncheckedCreateNestedManyWithoutTd_postInput
  }

  export type td_postCreateOrConnectWithoutTr_post_levelInput = {
    where: td_postWhereUniqueInput
    create: XOR<td_postCreateWithoutTr_post_levelInput, td_postUncheckedCreateWithoutTr_post_levelInput>
  }

  export type td_levelCreateWithoutTr_post_levelInput = {
    pk_level?: number | null
    title_en_level?: string | null
    title_pt_level?: string | null
    tr_user_level?: tr_user_levelCreateNestedManyWithoutTd_levelInput
  }

  export type td_levelUncheckedCreateWithoutTr_post_levelInput = {
    id_ainc_level?: number
    pk_level?: number | null
    title_en_level?: string | null
    title_pt_level?: string | null
    tr_user_level?: tr_user_levelUncheckedCreateNestedManyWithoutTd_levelInput
  }

  export type td_levelCreateOrConnectWithoutTr_post_levelInput = {
    where: td_levelWhereUniqueInput
    create: XOR<td_levelCreateWithoutTr_post_levelInput, td_levelUncheckedCreateWithoutTr_post_levelInput>
  }

  export type td_postUpsertWithoutTr_post_levelInput = {
    update: XOR<td_postUpdateWithoutTr_post_levelInput, td_postUncheckedUpdateWithoutTr_post_levelInput>
    create: XOR<td_postCreateWithoutTr_post_levelInput, td_postUncheckedCreateWithoutTr_post_levelInput>
  }

  export type td_postUpdateWithoutTr_post_levelInput = {
    pk_post?: StringFieldUpdateOperationsInput | string
    title_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    text_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    create_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tr_user_post?: tr_user_postUpdateManyWithoutTd_postNestedInput
  }

  export type td_postUncheckedUpdateWithoutTr_post_levelInput = {
    id_ainc_post?: IntFieldUpdateOperationsInput | number
    pk_post?: StringFieldUpdateOperationsInput | string
    title_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    text_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    create_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tr_user_post?: tr_user_postUncheckedUpdateManyWithoutTd_postNestedInput
  }

  export type td_levelUpsertWithoutTr_post_levelInput = {
    update: XOR<td_levelUpdateWithoutTr_post_levelInput, td_levelUncheckedUpdateWithoutTr_post_levelInput>
    create: XOR<td_levelCreateWithoutTr_post_levelInput, td_levelUncheckedCreateWithoutTr_post_levelInput>
  }

  export type td_levelUpdateWithoutTr_post_levelInput = {
    pk_level?: NullableIntFieldUpdateOperationsInput | number | null
    title_en_level?: NullableStringFieldUpdateOperationsInput | string | null
    title_pt_level?: NullableStringFieldUpdateOperationsInput | string | null
    tr_user_level?: tr_user_levelUpdateManyWithoutTd_levelNestedInput
  }

  export type td_levelUncheckedUpdateWithoutTr_post_levelInput = {
    id_ainc_level?: IntFieldUpdateOperationsInput | number
    pk_level?: NullableIntFieldUpdateOperationsInput | number | null
    title_en_level?: NullableStringFieldUpdateOperationsInput | string | null
    title_pt_level?: NullableStringFieldUpdateOperationsInput | string | null
    tr_user_level?: tr_user_levelUncheckedUpdateManyWithoutTd_levelNestedInput
  }

  export type td_userCreateWithoutTr_user_levelInput = {
    pk_user: string
    name_user?: string | null
    passHash?: string | null
    isStaff?: boolean | null
    level_user?: number | null
    level_staff?: number | null
    create_user?: Date | string | null
    update_user?: Date | string | null
    tr_user_post?: tr_user_postCreateNestedManyWithoutTd_userInput
  }

  export type td_userUncheckedCreateWithoutTr_user_levelInput = {
    id_ainc_user?: number
    pk_user: string
    name_user?: string | null
    passHash?: string | null
    isStaff?: boolean | null
    level_user?: number | null
    level_staff?: number | null
    create_user?: Date | string | null
    update_user?: Date | string | null
    tr_user_post?: tr_user_postUncheckedCreateNestedManyWithoutTd_userInput
  }

  export type td_userCreateOrConnectWithoutTr_user_levelInput = {
    where: td_userWhereUniqueInput
    create: XOR<td_userCreateWithoutTr_user_levelInput, td_userUncheckedCreateWithoutTr_user_levelInput>
  }

  export type td_levelCreateWithoutTr_user_levelInput = {
    pk_level?: number | null
    title_en_level?: string | null
    title_pt_level?: string | null
    tr_post_level?: tr_post_levelCreateNestedManyWithoutTd_levelInput
  }

  export type td_levelUncheckedCreateWithoutTr_user_levelInput = {
    id_ainc_level?: number
    pk_level?: number | null
    title_en_level?: string | null
    title_pt_level?: string | null
    tr_post_level?: tr_post_levelUncheckedCreateNestedManyWithoutTd_levelInput
  }

  export type td_levelCreateOrConnectWithoutTr_user_levelInput = {
    where: td_levelWhereUniqueInput
    create: XOR<td_levelCreateWithoutTr_user_levelInput, td_levelUncheckedCreateWithoutTr_user_levelInput>
  }

  export type td_userUpsertWithoutTr_user_levelInput = {
    update: XOR<td_userUpdateWithoutTr_user_levelInput, td_userUncheckedUpdateWithoutTr_user_levelInput>
    create: XOR<td_userCreateWithoutTr_user_levelInput, td_userUncheckedCreateWithoutTr_user_levelInput>
  }

  export type td_userUpdateWithoutTr_user_levelInput = {
    pk_user?: StringFieldUpdateOperationsInput | string
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    passHash?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    level_user?: NullableIntFieldUpdateOperationsInput | number | null
    level_staff?: NullableIntFieldUpdateOperationsInput | number | null
    create_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tr_user_post?: tr_user_postUpdateManyWithoutTd_userNestedInput
  }

  export type td_userUncheckedUpdateWithoutTr_user_levelInput = {
    id_ainc_user?: IntFieldUpdateOperationsInput | number
    pk_user?: StringFieldUpdateOperationsInput | string
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    passHash?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    level_user?: NullableIntFieldUpdateOperationsInput | number | null
    level_staff?: NullableIntFieldUpdateOperationsInput | number | null
    create_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tr_user_post?: tr_user_postUncheckedUpdateManyWithoutTd_userNestedInput
  }

  export type td_levelUpsertWithoutTr_user_levelInput = {
    update: XOR<td_levelUpdateWithoutTr_user_levelInput, td_levelUncheckedUpdateWithoutTr_user_levelInput>
    create: XOR<td_levelCreateWithoutTr_user_levelInput, td_levelUncheckedCreateWithoutTr_user_levelInput>
  }

  export type td_levelUpdateWithoutTr_user_levelInput = {
    pk_level?: NullableIntFieldUpdateOperationsInput | number | null
    title_en_level?: NullableStringFieldUpdateOperationsInput | string | null
    title_pt_level?: NullableStringFieldUpdateOperationsInput | string | null
    tr_post_level?: tr_post_levelUpdateManyWithoutTd_levelNestedInput
  }

  export type td_levelUncheckedUpdateWithoutTr_user_levelInput = {
    id_ainc_level?: IntFieldUpdateOperationsInput | number
    pk_level?: NullableIntFieldUpdateOperationsInput | number | null
    title_en_level?: NullableStringFieldUpdateOperationsInput | string | null
    title_pt_level?: NullableStringFieldUpdateOperationsInput | string | null
    tr_post_level?: tr_post_levelUncheckedUpdateManyWithoutTd_levelNestedInput
  }

  export type td_userCreateWithoutTr_user_postInput = {
    pk_user: string
    name_user?: string | null
    passHash?: string | null
    isStaff?: boolean | null
    level_user?: number | null
    level_staff?: number | null
    create_user?: Date | string | null
    update_user?: Date | string | null
    tr_user_level?: tr_user_levelCreateNestedManyWithoutTd_userInput
  }

  export type td_userUncheckedCreateWithoutTr_user_postInput = {
    id_ainc_user?: number
    pk_user: string
    name_user?: string | null
    passHash?: string | null
    isStaff?: boolean | null
    level_user?: number | null
    level_staff?: number | null
    create_user?: Date | string | null
    update_user?: Date | string | null
    tr_user_level?: tr_user_levelUncheckedCreateNestedManyWithoutTd_userInput
  }

  export type td_userCreateOrConnectWithoutTr_user_postInput = {
    where: td_userWhereUniqueInput
    create: XOR<td_userCreateWithoutTr_user_postInput, td_userUncheckedCreateWithoutTr_user_postInput>
  }

  export type td_postCreateWithoutTr_user_postInput = {
    pk_post: string
    title_en_post?: string | null
    text_en_post?: string | null
    create_post?: Date | string | null
    update_post?: Date | string | null
    tr_post_level?: tr_post_levelCreateNestedManyWithoutTd_postInput
  }

  export type td_postUncheckedCreateWithoutTr_user_postInput = {
    id_ainc_post?: number
    pk_post: string
    title_en_post?: string | null
    text_en_post?: string | null
    create_post?: Date | string | null
    update_post?: Date | string | null
    tr_post_level?: tr_post_levelUncheckedCreateNestedManyWithoutTd_postInput
  }

  export type td_postCreateOrConnectWithoutTr_user_postInput = {
    where: td_postWhereUniqueInput
    create: XOR<td_postCreateWithoutTr_user_postInput, td_postUncheckedCreateWithoutTr_user_postInput>
  }

  export type td_userUpsertWithoutTr_user_postInput = {
    update: XOR<td_userUpdateWithoutTr_user_postInput, td_userUncheckedUpdateWithoutTr_user_postInput>
    create: XOR<td_userCreateWithoutTr_user_postInput, td_userUncheckedCreateWithoutTr_user_postInput>
  }

  export type td_userUpdateWithoutTr_user_postInput = {
    pk_user?: StringFieldUpdateOperationsInput | string
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    passHash?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    level_user?: NullableIntFieldUpdateOperationsInput | number | null
    level_staff?: NullableIntFieldUpdateOperationsInput | number | null
    create_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tr_user_level?: tr_user_levelUpdateManyWithoutTd_userNestedInput
  }

  export type td_userUncheckedUpdateWithoutTr_user_postInput = {
    id_ainc_user?: IntFieldUpdateOperationsInput | number
    pk_user?: StringFieldUpdateOperationsInput | string
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    passHash?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    level_user?: NullableIntFieldUpdateOperationsInput | number | null
    level_staff?: NullableIntFieldUpdateOperationsInput | number | null
    create_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tr_user_level?: tr_user_levelUncheckedUpdateManyWithoutTd_userNestedInput
  }

  export type td_postUpsertWithoutTr_user_postInput = {
    update: XOR<td_postUpdateWithoutTr_user_postInput, td_postUncheckedUpdateWithoutTr_user_postInput>
    create: XOR<td_postCreateWithoutTr_user_postInput, td_postUncheckedCreateWithoutTr_user_postInput>
  }

  export type td_postUpdateWithoutTr_user_postInput = {
    pk_post?: StringFieldUpdateOperationsInput | string
    title_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    text_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    create_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tr_post_level?: tr_post_levelUpdateManyWithoutTd_postNestedInput
  }

  export type td_postUncheckedUpdateWithoutTr_user_postInput = {
    id_ainc_post?: IntFieldUpdateOperationsInput | number
    pk_post?: StringFieldUpdateOperationsInput | string
    title_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    text_en_post?: NullableStringFieldUpdateOperationsInput | string | null
    create_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tr_post_level?: tr_post_levelUncheckedUpdateManyWithoutTd_postNestedInput
  }

  export type tr_post_levelCreateManyTd_levelInput = {
    id_ainc_post_level?: number
    fk_post?: string | null
    create_post_level?: Date | string | null
    update_post_level?: Date | string | null
  }

  export type tr_user_levelCreateManyTd_levelInput = {
    id_ainc_user_level?: number
    fk_user?: string | null
    create_user_level?: Date | string | null
    update_user_level?: Date | string | null
  }

  export type tr_post_levelUpdateWithoutTd_levelInput = {
    create_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    td_post?: td_postUpdateOneWithoutTr_post_levelNestedInput
  }

  export type tr_post_levelUncheckedUpdateWithoutTd_levelInput = {
    id_ainc_post_level?: IntFieldUpdateOperationsInput | number
    fk_post?: NullableStringFieldUpdateOperationsInput | string | null
    create_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_post_levelUncheckedUpdateManyWithoutTr_post_levelInput = {
    id_ainc_post_level?: IntFieldUpdateOperationsInput | number
    fk_post?: NullableStringFieldUpdateOperationsInput | string | null
    create_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_user_levelUpdateWithoutTd_levelInput = {
    create_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    td_user?: td_userUpdateOneWithoutTr_user_levelNestedInput
  }

  export type tr_user_levelUncheckedUpdateWithoutTd_levelInput = {
    id_ainc_user_level?: IntFieldUpdateOperationsInput | number
    fk_user?: NullableStringFieldUpdateOperationsInput | string | null
    create_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_user_levelUncheckedUpdateManyWithoutTr_user_levelInput = {
    id_ainc_user_level?: IntFieldUpdateOperationsInput | number
    fk_user?: NullableStringFieldUpdateOperationsInput | string | null
    create_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_post_levelCreateManyTd_postInput = {
    id_ainc_post_level?: number
    fk_level?: number | null
    create_post_level?: Date | string | null
    update_post_level?: Date | string | null
  }

  export type tr_user_postCreateManyTd_postInput = {
    id_ainc_user_post?: number
    fk_user?: string | null
    create_user_post?: Date | string | null
    update_user_post?: Date | string | null
  }

  export type tr_post_levelUpdateWithoutTd_postInput = {
    create_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    td_level?: td_levelUpdateOneWithoutTr_post_levelNestedInput
  }

  export type tr_post_levelUncheckedUpdateWithoutTd_postInput = {
    id_ainc_post_level?: IntFieldUpdateOperationsInput | number
    fk_level?: NullableIntFieldUpdateOperationsInput | number | null
    create_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_post_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_user_postUpdateWithoutTd_postInput = {
    create_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    td_user?: td_userUpdateOneWithoutTr_user_postNestedInput
  }

  export type tr_user_postUncheckedUpdateWithoutTd_postInput = {
    id_ainc_user_post?: IntFieldUpdateOperationsInput | number
    fk_user?: NullableStringFieldUpdateOperationsInput | string | null
    create_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_user_postUncheckedUpdateManyWithoutTr_user_postInput = {
    id_ainc_user_post?: IntFieldUpdateOperationsInput | number
    fk_user?: NullableStringFieldUpdateOperationsInput | string | null
    create_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_user_levelCreateManyTd_userInput = {
    id_ainc_user_level?: number
    fk_level?: number | null
    create_user_level?: Date | string | null
    update_user_level?: Date | string | null
  }

  export type tr_user_postCreateManyTd_userInput = {
    id_ainc_user_post?: number
    fk_post?: string | null
    create_user_post?: Date | string | null
    update_user_post?: Date | string | null
  }

  export type tr_user_levelUpdateWithoutTd_userInput = {
    create_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    td_level?: td_levelUpdateOneWithoutTr_user_levelNestedInput
  }

  export type tr_user_levelUncheckedUpdateWithoutTd_userInput = {
    id_ainc_user_level?: IntFieldUpdateOperationsInput | number
    fk_level?: NullableIntFieldUpdateOperationsInput | number | null
    create_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_level?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_user_postUpdateWithoutTd_userInput = {
    create_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    td_post?: td_postUpdateOneWithoutTr_user_postNestedInput
  }

  export type tr_user_postUncheckedUpdateWithoutTd_userInput = {
    id_ainc_user_post?: IntFieldUpdateOperationsInput | number
    fk_post?: NullableStringFieldUpdateOperationsInput | string | null
    create_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_user_post?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}