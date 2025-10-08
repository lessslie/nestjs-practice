
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model audit_eliminaciones
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type audit_eliminaciones = $Result.DefaultSelection<Prisma.$audit_eliminacionesPayload>
/**
 * Model conversations
 * 
 */
export type conversations = $Result.DefaultSelection<Prisma.$conversationsPayload>
/**
 * Model cuentas_gmail_asociadas
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cuentas_gmail_asociadas = $Result.DefaultSelection<Prisma.$cuentas_gmail_asociadasPayload>
/**
 * Model emails_sincronizados
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.
 */
export type emails_sincronizados = $Result.DefaultSelection<Prisma.$emails_sincronizadosPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model sesiones_jwt
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type sesiones_jwt = $Result.DefaultSelection<Prisma.$sesiones_jwtPayload>
/**
 * Model usuarios_principales
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type usuarios_principales = $Result.DefaultSelection<Prisma.$usuarios_principalesPayload>
/**
 * Model whatsapp_accounts
 * 
 */
export type whatsapp_accounts = $Result.DefaultSelection<Prisma.$whatsapp_accountsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Audit_eliminaciones
 * const audit_eliminaciones = await prisma.audit_eliminaciones.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Audit_eliminaciones
   * const audit_eliminaciones = await prisma.audit_eliminaciones.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.audit_eliminaciones`: Exposes CRUD operations for the **audit_eliminaciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_eliminaciones
    * const audit_eliminaciones = await prisma.audit_eliminaciones.findMany()
    * ```
    */
  get audit_eliminaciones(): Prisma.audit_eliminacionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversations`: Exposes CRUD operations for the **conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversations.findMany()
    * ```
    */
  get conversations(): Prisma.conversationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cuentas_gmail_asociadas`: Exposes CRUD operations for the **cuentas_gmail_asociadas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuentas_gmail_asociadas
    * const cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.findMany()
    * ```
    */
  get cuentas_gmail_asociadas(): Prisma.cuentas_gmail_asociadasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emails_sincronizados`: Exposes CRUD operations for the **emails_sincronizados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails_sincronizados
    * const emails_sincronizados = await prisma.emails_sincronizados.findMany()
    * ```
    */
  get emails_sincronizados(): Prisma.emails_sincronizadosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sesiones_jwt`: Exposes CRUD operations for the **sesiones_jwt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sesiones_jwts
    * const sesiones_jwts = await prisma.sesiones_jwt.findMany()
    * ```
    */
  get sesiones_jwt(): Prisma.sesiones_jwtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios_principales`: Exposes CRUD operations for the **usuarios_principales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios_principales
    * const usuarios_principales = await prisma.usuarios_principales.findMany()
    * ```
    */
  get usuarios_principales(): Prisma.usuarios_principalesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsapp_accounts`: Exposes CRUD operations for the **whatsapp_accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Whatsapp_accounts
    * const whatsapp_accounts = await prisma.whatsapp_accounts.findMany()
    * ```
    */
  get whatsapp_accounts(): Prisma.whatsapp_accountsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    audit_eliminaciones: 'audit_eliminaciones',
    conversations: 'conversations',
    cuentas_gmail_asociadas: 'cuentas_gmail_asociadas',
    emails_sincronizados: 'emails_sincronizados',
    messages: 'messages',
    sesiones_jwt: 'sesiones_jwt',
    usuarios_principales: 'usuarios_principales',
    whatsapp_accounts: 'whatsapp_accounts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "audit_eliminaciones" | "conversations" | "cuentas_gmail_asociadas" | "emails_sincronizados" | "messages" | "sesiones_jwt" | "usuarios_principales" | "whatsapp_accounts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      audit_eliminaciones: {
        payload: Prisma.$audit_eliminacionesPayload<ExtArgs>
        fields: Prisma.audit_eliminacionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.audit_eliminacionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_eliminacionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.audit_eliminacionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_eliminacionesPayload>
          }
          findFirst: {
            args: Prisma.audit_eliminacionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_eliminacionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.audit_eliminacionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_eliminacionesPayload>
          }
          findMany: {
            args: Prisma.audit_eliminacionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_eliminacionesPayload>[]
          }
          create: {
            args: Prisma.audit_eliminacionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_eliminacionesPayload>
          }
          createMany: {
            args: Prisma.audit_eliminacionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.audit_eliminacionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_eliminacionesPayload>[]
          }
          delete: {
            args: Prisma.audit_eliminacionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_eliminacionesPayload>
          }
          update: {
            args: Prisma.audit_eliminacionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_eliminacionesPayload>
          }
          deleteMany: {
            args: Prisma.audit_eliminacionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.audit_eliminacionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.audit_eliminacionesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_eliminacionesPayload>[]
          }
          upsert: {
            args: Prisma.audit_eliminacionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_eliminacionesPayload>
          }
          aggregate: {
            args: Prisma.Audit_eliminacionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit_eliminaciones>
          }
          groupBy: {
            args: Prisma.audit_eliminacionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Audit_eliminacionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.audit_eliminacionesCountArgs<ExtArgs>
            result: $Utils.Optional<Audit_eliminacionesCountAggregateOutputType> | number
          }
        }
      }
      conversations: {
        payload: Prisma.$conversationsPayload<ExtArgs>
        fields: Prisma.conversationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.conversationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.conversationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          findFirst: {
            args: Prisma.conversationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.conversationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          findMany: {
            args: Prisma.conversationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          create: {
            args: Prisma.conversationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          createMany: {
            args: Prisma.conversationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.conversationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          delete: {
            args: Prisma.conversationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          update: {
            args: Prisma.conversationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          deleteMany: {
            args: Prisma.conversationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.conversationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.conversationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          upsert: {
            args: Prisma.conversationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          aggregate: {
            args: Prisma.ConversationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversations>
          }
          groupBy: {
            args: Prisma.conversationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.conversationsCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationsCountAggregateOutputType> | number
          }
        }
      }
      cuentas_gmail_asociadas: {
        payload: Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>
        fields: Prisma.cuentas_gmail_asociadasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cuentas_gmail_asociadasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentas_gmail_asociadasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cuentas_gmail_asociadasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentas_gmail_asociadasPayload>
          }
          findFirst: {
            args: Prisma.cuentas_gmail_asociadasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentas_gmail_asociadasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cuentas_gmail_asociadasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentas_gmail_asociadasPayload>
          }
          findMany: {
            args: Prisma.cuentas_gmail_asociadasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentas_gmail_asociadasPayload>[]
          }
          create: {
            args: Prisma.cuentas_gmail_asociadasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentas_gmail_asociadasPayload>
          }
          createMany: {
            args: Prisma.cuentas_gmail_asociadasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cuentas_gmail_asociadasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentas_gmail_asociadasPayload>[]
          }
          delete: {
            args: Prisma.cuentas_gmail_asociadasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentas_gmail_asociadasPayload>
          }
          update: {
            args: Prisma.cuentas_gmail_asociadasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentas_gmail_asociadasPayload>
          }
          deleteMany: {
            args: Prisma.cuentas_gmail_asociadasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cuentas_gmail_asociadasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cuentas_gmail_asociadasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentas_gmail_asociadasPayload>[]
          }
          upsert: {
            args: Prisma.cuentas_gmail_asociadasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentas_gmail_asociadasPayload>
          }
          aggregate: {
            args: Prisma.Cuentas_gmail_asociadasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuentas_gmail_asociadas>
          }
          groupBy: {
            args: Prisma.cuentas_gmail_asociadasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cuentas_gmail_asociadasGroupByOutputType>[]
          }
          count: {
            args: Prisma.cuentas_gmail_asociadasCountArgs<ExtArgs>
            result: $Utils.Optional<Cuentas_gmail_asociadasCountAggregateOutputType> | number
          }
        }
      }
      emails_sincronizados: {
        payload: Prisma.$emails_sincronizadosPayload<ExtArgs>
        fields: Prisma.emails_sincronizadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.emails_sincronizadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emails_sincronizadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.emails_sincronizadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emails_sincronizadosPayload>
          }
          findFirst: {
            args: Prisma.emails_sincronizadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emails_sincronizadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.emails_sincronizadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emails_sincronizadosPayload>
          }
          findMany: {
            args: Prisma.emails_sincronizadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emails_sincronizadosPayload>[]
          }
          create: {
            args: Prisma.emails_sincronizadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emails_sincronizadosPayload>
          }
          createMany: {
            args: Prisma.emails_sincronizadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.emails_sincronizadosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emails_sincronizadosPayload>[]
          }
          delete: {
            args: Prisma.emails_sincronizadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emails_sincronizadosPayload>
          }
          update: {
            args: Prisma.emails_sincronizadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emails_sincronizadosPayload>
          }
          deleteMany: {
            args: Prisma.emails_sincronizadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.emails_sincronizadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.emails_sincronizadosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emails_sincronizadosPayload>[]
          }
          upsert: {
            args: Prisma.emails_sincronizadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emails_sincronizadosPayload>
          }
          aggregate: {
            args: Prisma.Emails_sincronizadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmails_sincronizados>
          }
          groupBy: {
            args: Prisma.emails_sincronizadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Emails_sincronizadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.emails_sincronizadosCountArgs<ExtArgs>
            result: $Utils.Optional<Emails_sincronizadosCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      sesiones_jwt: {
        payload: Prisma.$sesiones_jwtPayload<ExtArgs>
        fields: Prisma.sesiones_jwtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sesiones_jwtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_jwtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sesiones_jwtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_jwtPayload>
          }
          findFirst: {
            args: Prisma.sesiones_jwtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_jwtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sesiones_jwtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_jwtPayload>
          }
          findMany: {
            args: Prisma.sesiones_jwtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_jwtPayload>[]
          }
          create: {
            args: Prisma.sesiones_jwtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_jwtPayload>
          }
          createMany: {
            args: Prisma.sesiones_jwtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sesiones_jwtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_jwtPayload>[]
          }
          delete: {
            args: Prisma.sesiones_jwtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_jwtPayload>
          }
          update: {
            args: Prisma.sesiones_jwtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_jwtPayload>
          }
          deleteMany: {
            args: Prisma.sesiones_jwtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sesiones_jwtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sesiones_jwtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_jwtPayload>[]
          }
          upsert: {
            args: Prisma.sesiones_jwtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_jwtPayload>
          }
          aggregate: {
            args: Prisma.Sesiones_jwtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSesiones_jwt>
          }
          groupBy: {
            args: Prisma.sesiones_jwtGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sesiones_jwtGroupByOutputType>[]
          }
          count: {
            args: Prisma.sesiones_jwtCountArgs<ExtArgs>
            result: $Utils.Optional<Sesiones_jwtCountAggregateOutputType> | number
          }
        }
      }
      usuarios_principales: {
        payload: Prisma.$usuarios_principalesPayload<ExtArgs>
        fields: Prisma.usuarios_principalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarios_principalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_principalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarios_principalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_principalesPayload>
          }
          findFirst: {
            args: Prisma.usuarios_principalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_principalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarios_principalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_principalesPayload>
          }
          findMany: {
            args: Prisma.usuarios_principalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_principalesPayload>[]
          }
          create: {
            args: Prisma.usuarios_principalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_principalesPayload>
          }
          createMany: {
            args: Prisma.usuarios_principalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuarios_principalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_principalesPayload>[]
          }
          delete: {
            args: Prisma.usuarios_principalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_principalesPayload>
          }
          update: {
            args: Prisma.usuarios_principalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_principalesPayload>
          }
          deleteMany: {
            args: Prisma.usuarios_principalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarios_principalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuarios_principalesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_principalesPayload>[]
          }
          upsert: {
            args: Prisma.usuarios_principalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_principalesPayload>
          }
          aggregate: {
            args: Prisma.Usuarios_principalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios_principales>
          }
          groupBy: {
            args: Prisma.usuarios_principalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usuarios_principalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarios_principalesCountArgs<ExtArgs>
            result: $Utils.Optional<Usuarios_principalesCountAggregateOutputType> | number
          }
        }
      }
      whatsapp_accounts: {
        payload: Prisma.$whatsapp_accountsPayload<ExtArgs>
        fields: Prisma.whatsapp_accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.whatsapp_accountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.whatsapp_accountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_accountsPayload>
          }
          findFirst: {
            args: Prisma.whatsapp_accountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.whatsapp_accountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_accountsPayload>
          }
          findMany: {
            args: Prisma.whatsapp_accountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_accountsPayload>[]
          }
          create: {
            args: Prisma.whatsapp_accountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_accountsPayload>
          }
          createMany: {
            args: Prisma.whatsapp_accountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.whatsapp_accountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_accountsPayload>[]
          }
          delete: {
            args: Prisma.whatsapp_accountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_accountsPayload>
          }
          update: {
            args: Prisma.whatsapp_accountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_accountsPayload>
          }
          deleteMany: {
            args: Prisma.whatsapp_accountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.whatsapp_accountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.whatsapp_accountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_accountsPayload>[]
          }
          upsert: {
            args: Prisma.whatsapp_accountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_accountsPayload>
          }
          aggregate: {
            args: Prisma.Whatsapp_accountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsapp_accounts>
          }
          groupBy: {
            args: Prisma.whatsapp_accountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Whatsapp_accountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.whatsapp_accountsCountArgs<ExtArgs>
            result: $Utils.Optional<Whatsapp_accountsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    audit_eliminaciones?: audit_eliminacionesOmit
    conversations?: conversationsOmit
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasOmit
    emails_sincronizados?: emails_sincronizadosOmit
    messages?: messagesOmit
    sesiones_jwt?: sesiones_jwtOmit
    usuarios_principales?: usuarios_principalesOmit
    whatsapp_accounts?: whatsapp_accountsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ConversationsCountOutputType
   */

  export type ConversationsCountOutputType = {
    messages: number
  }

  export type ConversationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationsCountOutputType
     */
    select?: ConversationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * Count Type Cuentas_gmail_asociadasCountOutputType
   */

  export type Cuentas_gmail_asociadasCountOutputType = {
    emails_sincronizados: number
  }

  export type Cuentas_gmail_asociadasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails_sincronizados?: boolean | Cuentas_gmail_asociadasCountOutputTypeCountEmails_sincronizadosArgs
  }

  // Custom InputTypes
  /**
   * Cuentas_gmail_asociadasCountOutputType without action
   */
  export type Cuentas_gmail_asociadasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuentas_gmail_asociadasCountOutputType
     */
    select?: Cuentas_gmail_asociadasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Cuentas_gmail_asociadasCountOutputType without action
   */
  export type Cuentas_gmail_asociadasCountOutputTypeCountEmails_sincronizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emails_sincronizadosWhereInput
  }


  /**
   * Count Type Usuarios_principalesCountOutputType
   */

  export type Usuarios_principalesCountOutputType = {
    cuentas_gmail_asociadas: number
    sesiones_jwt: number
    whatsapp_accounts: number
  }

  export type Usuarios_principalesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuentas_gmail_asociadas?: boolean | Usuarios_principalesCountOutputTypeCountCuentas_gmail_asociadasArgs
    sesiones_jwt?: boolean | Usuarios_principalesCountOutputTypeCountSesiones_jwtArgs
    whatsapp_accounts?: boolean | Usuarios_principalesCountOutputTypeCountWhatsapp_accountsArgs
  }

  // Custom InputTypes
  /**
   * Usuarios_principalesCountOutputType without action
   */
  export type Usuarios_principalesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios_principalesCountOutputType
     */
    select?: Usuarios_principalesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Usuarios_principalesCountOutputType without action
   */
  export type Usuarios_principalesCountOutputTypeCountCuentas_gmail_asociadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuentas_gmail_asociadasWhereInput
  }

  /**
   * Usuarios_principalesCountOutputType without action
   */
  export type Usuarios_principalesCountOutputTypeCountSesiones_jwtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sesiones_jwtWhereInput
  }

  /**
   * Usuarios_principalesCountOutputType without action
   */
  export type Usuarios_principalesCountOutputTypeCountWhatsapp_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: whatsapp_accountsWhereInput
  }


  /**
   * Count Type Whatsapp_accountsCountOutputType
   */

  export type Whatsapp_accountsCountOutputType = {
    conversations: number
    messages: number
  }

  export type Whatsapp_accountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | Whatsapp_accountsCountOutputTypeCountConversationsArgs
    messages?: boolean | Whatsapp_accountsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * Whatsapp_accountsCountOutputType without action
   */
  export type Whatsapp_accountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whatsapp_accountsCountOutputType
     */
    select?: Whatsapp_accountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Whatsapp_accountsCountOutputType without action
   */
  export type Whatsapp_accountsCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
  }

  /**
   * Whatsapp_accountsCountOutputType without action
   */
  export type Whatsapp_accountsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model audit_eliminaciones
   */

  export type AggregateAudit_eliminaciones = {
    _count: Audit_eliminacionesCountAggregateOutputType | null
    _avg: Audit_eliminacionesAvgAggregateOutputType | null
    _sum: Audit_eliminacionesSumAggregateOutputType | null
    _min: Audit_eliminacionesMinAggregateOutputType | null
    _max: Audit_eliminacionesMaxAggregateOutputType | null
  }

  export type Audit_eliminacionesAvgAggregateOutputType = {
    id: number | null
    registro_id: number | null
  }

  export type Audit_eliminacionesSumAggregateOutputType = {
    id: number | null
    registro_id: number | null
  }

  export type Audit_eliminacionesMinAggregateOutputType = {
    id: number | null
    tabla: string | null
    registro_id: number | null
    usuario_bd: string | null
    fecha_eliminacion: Date | null
  }

  export type Audit_eliminacionesMaxAggregateOutputType = {
    id: number | null
    tabla: string | null
    registro_id: number | null
    usuario_bd: string | null
    fecha_eliminacion: Date | null
  }

  export type Audit_eliminacionesCountAggregateOutputType = {
    id: number
    tabla: number
    registro_id: number
    datos_eliminados: number
    usuario_bd: number
    fecha_eliminacion: number
    _all: number
  }


  export type Audit_eliminacionesAvgAggregateInputType = {
    id?: true
    registro_id?: true
  }

  export type Audit_eliminacionesSumAggregateInputType = {
    id?: true
    registro_id?: true
  }

  export type Audit_eliminacionesMinAggregateInputType = {
    id?: true
    tabla?: true
    registro_id?: true
    usuario_bd?: true
    fecha_eliminacion?: true
  }

  export type Audit_eliminacionesMaxAggregateInputType = {
    id?: true
    tabla?: true
    registro_id?: true
    usuario_bd?: true
    fecha_eliminacion?: true
  }

  export type Audit_eliminacionesCountAggregateInputType = {
    id?: true
    tabla?: true
    registro_id?: true
    datos_eliminados?: true
    usuario_bd?: true
    fecha_eliminacion?: true
    _all?: true
  }

  export type Audit_eliminacionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_eliminaciones to aggregate.
     */
    where?: audit_eliminacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_eliminaciones to fetch.
     */
    orderBy?: audit_eliminacionesOrderByWithRelationInput | audit_eliminacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: audit_eliminacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_eliminaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_eliminaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audit_eliminaciones
    **/
    _count?: true | Audit_eliminacionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Audit_eliminacionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Audit_eliminacionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_eliminacionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_eliminacionesMaxAggregateInputType
  }

  export type GetAudit_eliminacionesAggregateType<T extends Audit_eliminacionesAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_eliminaciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_eliminaciones[P]>
      : GetScalarType<T[P], AggregateAudit_eliminaciones[P]>
  }




  export type audit_eliminacionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_eliminacionesWhereInput
    orderBy?: audit_eliminacionesOrderByWithAggregationInput | audit_eliminacionesOrderByWithAggregationInput[]
    by: Audit_eliminacionesScalarFieldEnum[] | Audit_eliminacionesScalarFieldEnum
    having?: audit_eliminacionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_eliminacionesCountAggregateInputType | true
    _avg?: Audit_eliminacionesAvgAggregateInputType
    _sum?: Audit_eliminacionesSumAggregateInputType
    _min?: Audit_eliminacionesMinAggregateInputType
    _max?: Audit_eliminacionesMaxAggregateInputType
  }

  export type Audit_eliminacionesGroupByOutputType = {
    id: number
    tabla: string | null
    registro_id: number | null
    datos_eliminados: JsonValue | null
    usuario_bd: string | null
    fecha_eliminacion: Date | null
    _count: Audit_eliminacionesCountAggregateOutputType | null
    _avg: Audit_eliminacionesAvgAggregateOutputType | null
    _sum: Audit_eliminacionesSumAggregateOutputType | null
    _min: Audit_eliminacionesMinAggregateOutputType | null
    _max: Audit_eliminacionesMaxAggregateOutputType | null
  }

  type GetAudit_eliminacionesGroupByPayload<T extends audit_eliminacionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_eliminacionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_eliminacionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_eliminacionesGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_eliminacionesGroupByOutputType[P]>
        }
      >
    >


  export type audit_eliminacionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabla?: boolean
    registro_id?: boolean
    datos_eliminados?: boolean
    usuario_bd?: boolean
    fecha_eliminacion?: boolean
  }, ExtArgs["result"]["audit_eliminaciones"]>

  export type audit_eliminacionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabla?: boolean
    registro_id?: boolean
    datos_eliminados?: boolean
    usuario_bd?: boolean
    fecha_eliminacion?: boolean
  }, ExtArgs["result"]["audit_eliminaciones"]>

  export type audit_eliminacionesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabla?: boolean
    registro_id?: boolean
    datos_eliminados?: boolean
    usuario_bd?: boolean
    fecha_eliminacion?: boolean
  }, ExtArgs["result"]["audit_eliminaciones"]>

  export type audit_eliminacionesSelectScalar = {
    id?: boolean
    tabla?: boolean
    registro_id?: boolean
    datos_eliminados?: boolean
    usuario_bd?: boolean
    fecha_eliminacion?: boolean
  }

  export type audit_eliminacionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tabla" | "registro_id" | "datos_eliminados" | "usuario_bd" | "fecha_eliminacion", ExtArgs["result"]["audit_eliminaciones"]>

  export type $audit_eliminacionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "audit_eliminaciones"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tabla: string | null
      registro_id: number | null
      datos_eliminados: Prisma.JsonValue | null
      usuario_bd: string | null
      fecha_eliminacion: Date | null
    }, ExtArgs["result"]["audit_eliminaciones"]>
    composites: {}
  }

  type audit_eliminacionesGetPayload<S extends boolean | null | undefined | audit_eliminacionesDefaultArgs> = $Result.GetResult<Prisma.$audit_eliminacionesPayload, S>

  type audit_eliminacionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<audit_eliminacionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Audit_eliminacionesCountAggregateInputType | true
    }

  export interface audit_eliminacionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_eliminaciones'], meta: { name: 'audit_eliminaciones' } }
    /**
     * Find zero or one Audit_eliminaciones that matches the filter.
     * @param {audit_eliminacionesFindUniqueArgs} args - Arguments to find a Audit_eliminaciones
     * @example
     * // Get one Audit_eliminaciones
     * const audit_eliminaciones = await prisma.audit_eliminaciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends audit_eliminacionesFindUniqueArgs>(args: SelectSubset<T, audit_eliminacionesFindUniqueArgs<ExtArgs>>): Prisma__audit_eliminacionesClient<$Result.GetResult<Prisma.$audit_eliminacionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit_eliminaciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {audit_eliminacionesFindUniqueOrThrowArgs} args - Arguments to find a Audit_eliminaciones
     * @example
     * // Get one Audit_eliminaciones
     * const audit_eliminaciones = await prisma.audit_eliminaciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends audit_eliminacionesFindUniqueOrThrowArgs>(args: SelectSubset<T, audit_eliminacionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__audit_eliminacionesClient<$Result.GetResult<Prisma.$audit_eliminacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_eliminaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_eliminacionesFindFirstArgs} args - Arguments to find a Audit_eliminaciones
     * @example
     * // Get one Audit_eliminaciones
     * const audit_eliminaciones = await prisma.audit_eliminaciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends audit_eliminacionesFindFirstArgs>(args?: SelectSubset<T, audit_eliminacionesFindFirstArgs<ExtArgs>>): Prisma__audit_eliminacionesClient<$Result.GetResult<Prisma.$audit_eliminacionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_eliminaciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_eliminacionesFindFirstOrThrowArgs} args - Arguments to find a Audit_eliminaciones
     * @example
     * // Get one Audit_eliminaciones
     * const audit_eliminaciones = await prisma.audit_eliminaciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends audit_eliminacionesFindFirstOrThrowArgs>(args?: SelectSubset<T, audit_eliminacionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__audit_eliminacionesClient<$Result.GetResult<Prisma.$audit_eliminacionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audit_eliminaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_eliminacionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_eliminaciones
     * const audit_eliminaciones = await prisma.audit_eliminaciones.findMany()
     * 
     * // Get first 10 Audit_eliminaciones
     * const audit_eliminaciones = await prisma.audit_eliminaciones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audit_eliminacionesWithIdOnly = await prisma.audit_eliminaciones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends audit_eliminacionesFindManyArgs>(args?: SelectSubset<T, audit_eliminacionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_eliminacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit_eliminaciones.
     * @param {audit_eliminacionesCreateArgs} args - Arguments to create a Audit_eliminaciones.
     * @example
     * // Create one Audit_eliminaciones
     * const Audit_eliminaciones = await prisma.audit_eliminaciones.create({
     *   data: {
     *     // ... data to create a Audit_eliminaciones
     *   }
     * })
     * 
     */
    create<T extends audit_eliminacionesCreateArgs>(args: SelectSubset<T, audit_eliminacionesCreateArgs<ExtArgs>>): Prisma__audit_eliminacionesClient<$Result.GetResult<Prisma.$audit_eliminacionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audit_eliminaciones.
     * @param {audit_eliminacionesCreateManyArgs} args - Arguments to create many Audit_eliminaciones.
     * @example
     * // Create many Audit_eliminaciones
     * const audit_eliminaciones = await prisma.audit_eliminaciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends audit_eliminacionesCreateManyArgs>(args?: SelectSubset<T, audit_eliminacionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audit_eliminaciones and returns the data saved in the database.
     * @param {audit_eliminacionesCreateManyAndReturnArgs} args - Arguments to create many Audit_eliminaciones.
     * @example
     * // Create many Audit_eliminaciones
     * const audit_eliminaciones = await prisma.audit_eliminaciones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audit_eliminaciones and only return the `id`
     * const audit_eliminacionesWithIdOnly = await prisma.audit_eliminaciones.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends audit_eliminacionesCreateManyAndReturnArgs>(args?: SelectSubset<T, audit_eliminacionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_eliminacionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audit_eliminaciones.
     * @param {audit_eliminacionesDeleteArgs} args - Arguments to delete one Audit_eliminaciones.
     * @example
     * // Delete one Audit_eliminaciones
     * const Audit_eliminaciones = await prisma.audit_eliminaciones.delete({
     *   where: {
     *     // ... filter to delete one Audit_eliminaciones
     *   }
     * })
     * 
     */
    delete<T extends audit_eliminacionesDeleteArgs>(args: SelectSubset<T, audit_eliminacionesDeleteArgs<ExtArgs>>): Prisma__audit_eliminacionesClient<$Result.GetResult<Prisma.$audit_eliminacionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit_eliminaciones.
     * @param {audit_eliminacionesUpdateArgs} args - Arguments to update one Audit_eliminaciones.
     * @example
     * // Update one Audit_eliminaciones
     * const audit_eliminaciones = await prisma.audit_eliminaciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends audit_eliminacionesUpdateArgs>(args: SelectSubset<T, audit_eliminacionesUpdateArgs<ExtArgs>>): Prisma__audit_eliminacionesClient<$Result.GetResult<Prisma.$audit_eliminacionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audit_eliminaciones.
     * @param {audit_eliminacionesDeleteManyArgs} args - Arguments to filter Audit_eliminaciones to delete.
     * @example
     * // Delete a few Audit_eliminaciones
     * const { count } = await prisma.audit_eliminaciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends audit_eliminacionesDeleteManyArgs>(args?: SelectSubset<T, audit_eliminacionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_eliminaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_eliminacionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_eliminaciones
     * const audit_eliminaciones = await prisma.audit_eliminaciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends audit_eliminacionesUpdateManyArgs>(args: SelectSubset<T, audit_eliminacionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_eliminaciones and returns the data updated in the database.
     * @param {audit_eliminacionesUpdateManyAndReturnArgs} args - Arguments to update many Audit_eliminaciones.
     * @example
     * // Update many Audit_eliminaciones
     * const audit_eliminaciones = await prisma.audit_eliminaciones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audit_eliminaciones and only return the `id`
     * const audit_eliminacionesWithIdOnly = await prisma.audit_eliminaciones.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends audit_eliminacionesUpdateManyAndReturnArgs>(args: SelectSubset<T, audit_eliminacionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_eliminacionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audit_eliminaciones.
     * @param {audit_eliminacionesUpsertArgs} args - Arguments to update or create a Audit_eliminaciones.
     * @example
     * // Update or create a Audit_eliminaciones
     * const audit_eliminaciones = await prisma.audit_eliminaciones.upsert({
     *   create: {
     *     // ... data to create a Audit_eliminaciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_eliminaciones we want to update
     *   }
     * })
     */
    upsert<T extends audit_eliminacionesUpsertArgs>(args: SelectSubset<T, audit_eliminacionesUpsertArgs<ExtArgs>>): Prisma__audit_eliminacionesClient<$Result.GetResult<Prisma.$audit_eliminacionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audit_eliminaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_eliminacionesCountArgs} args - Arguments to filter Audit_eliminaciones to count.
     * @example
     * // Count the number of Audit_eliminaciones
     * const count = await prisma.audit_eliminaciones.count({
     *   where: {
     *     // ... the filter for the Audit_eliminaciones we want to count
     *   }
     * })
    **/
    count<T extends audit_eliminacionesCountArgs>(
      args?: Subset<T, audit_eliminacionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_eliminacionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_eliminaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_eliminacionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Audit_eliminacionesAggregateArgs>(args: Subset<T, Audit_eliminacionesAggregateArgs>): Prisma.PrismaPromise<GetAudit_eliminacionesAggregateType<T>>

    /**
     * Group by Audit_eliminaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_eliminacionesGroupByArgs} args - Group by arguments.
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
      T extends audit_eliminacionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_eliminacionesGroupByArgs['orderBy'] }
        : { orderBy?: audit_eliminacionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, audit_eliminacionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_eliminacionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the audit_eliminaciones model
   */
  readonly fields: audit_eliminacionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_eliminaciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_eliminacionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the audit_eliminaciones model
   */
  interface audit_eliminacionesFieldRefs {
    readonly id: FieldRef<"audit_eliminaciones", 'Int'>
    readonly tabla: FieldRef<"audit_eliminaciones", 'String'>
    readonly registro_id: FieldRef<"audit_eliminaciones", 'Int'>
    readonly datos_eliminados: FieldRef<"audit_eliminaciones", 'Json'>
    readonly usuario_bd: FieldRef<"audit_eliminaciones", 'String'>
    readonly fecha_eliminacion: FieldRef<"audit_eliminaciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * audit_eliminaciones findUnique
   */
  export type audit_eliminacionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_eliminaciones
     */
    select?: audit_eliminacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_eliminaciones
     */
    omit?: audit_eliminacionesOmit<ExtArgs> | null
    /**
     * Filter, which audit_eliminaciones to fetch.
     */
    where: audit_eliminacionesWhereUniqueInput
  }

  /**
   * audit_eliminaciones findUniqueOrThrow
   */
  export type audit_eliminacionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_eliminaciones
     */
    select?: audit_eliminacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_eliminaciones
     */
    omit?: audit_eliminacionesOmit<ExtArgs> | null
    /**
     * Filter, which audit_eliminaciones to fetch.
     */
    where: audit_eliminacionesWhereUniqueInput
  }

  /**
   * audit_eliminaciones findFirst
   */
  export type audit_eliminacionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_eliminaciones
     */
    select?: audit_eliminacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_eliminaciones
     */
    omit?: audit_eliminacionesOmit<ExtArgs> | null
    /**
     * Filter, which audit_eliminaciones to fetch.
     */
    where?: audit_eliminacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_eliminaciones to fetch.
     */
    orderBy?: audit_eliminacionesOrderByWithRelationInput | audit_eliminacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_eliminaciones.
     */
    cursor?: audit_eliminacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_eliminaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_eliminaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_eliminaciones.
     */
    distinct?: Audit_eliminacionesScalarFieldEnum | Audit_eliminacionesScalarFieldEnum[]
  }

  /**
   * audit_eliminaciones findFirstOrThrow
   */
  export type audit_eliminacionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_eliminaciones
     */
    select?: audit_eliminacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_eliminaciones
     */
    omit?: audit_eliminacionesOmit<ExtArgs> | null
    /**
     * Filter, which audit_eliminaciones to fetch.
     */
    where?: audit_eliminacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_eliminaciones to fetch.
     */
    orderBy?: audit_eliminacionesOrderByWithRelationInput | audit_eliminacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_eliminaciones.
     */
    cursor?: audit_eliminacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_eliminaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_eliminaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_eliminaciones.
     */
    distinct?: Audit_eliminacionesScalarFieldEnum | Audit_eliminacionesScalarFieldEnum[]
  }

  /**
   * audit_eliminaciones findMany
   */
  export type audit_eliminacionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_eliminaciones
     */
    select?: audit_eliminacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_eliminaciones
     */
    omit?: audit_eliminacionesOmit<ExtArgs> | null
    /**
     * Filter, which audit_eliminaciones to fetch.
     */
    where?: audit_eliminacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_eliminaciones to fetch.
     */
    orderBy?: audit_eliminacionesOrderByWithRelationInput | audit_eliminacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audit_eliminaciones.
     */
    cursor?: audit_eliminacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_eliminaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_eliminaciones.
     */
    skip?: number
    distinct?: Audit_eliminacionesScalarFieldEnum | Audit_eliminacionesScalarFieldEnum[]
  }

  /**
   * audit_eliminaciones create
   */
  export type audit_eliminacionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_eliminaciones
     */
    select?: audit_eliminacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_eliminaciones
     */
    omit?: audit_eliminacionesOmit<ExtArgs> | null
    /**
     * The data needed to create a audit_eliminaciones.
     */
    data?: XOR<audit_eliminacionesCreateInput, audit_eliminacionesUncheckedCreateInput>
  }

  /**
   * audit_eliminaciones createMany
   */
  export type audit_eliminacionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_eliminaciones.
     */
    data: audit_eliminacionesCreateManyInput | audit_eliminacionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * audit_eliminaciones createManyAndReturn
   */
  export type audit_eliminacionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_eliminaciones
     */
    select?: audit_eliminacionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_eliminaciones
     */
    omit?: audit_eliminacionesOmit<ExtArgs> | null
    /**
     * The data used to create many audit_eliminaciones.
     */
    data: audit_eliminacionesCreateManyInput | audit_eliminacionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * audit_eliminaciones update
   */
  export type audit_eliminacionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_eliminaciones
     */
    select?: audit_eliminacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_eliminaciones
     */
    omit?: audit_eliminacionesOmit<ExtArgs> | null
    /**
     * The data needed to update a audit_eliminaciones.
     */
    data: XOR<audit_eliminacionesUpdateInput, audit_eliminacionesUncheckedUpdateInput>
    /**
     * Choose, which audit_eliminaciones to update.
     */
    where: audit_eliminacionesWhereUniqueInput
  }

  /**
   * audit_eliminaciones updateMany
   */
  export type audit_eliminacionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_eliminaciones.
     */
    data: XOR<audit_eliminacionesUpdateManyMutationInput, audit_eliminacionesUncheckedUpdateManyInput>
    /**
     * Filter which audit_eliminaciones to update
     */
    where?: audit_eliminacionesWhereInput
    /**
     * Limit how many audit_eliminaciones to update.
     */
    limit?: number
  }

  /**
   * audit_eliminaciones updateManyAndReturn
   */
  export type audit_eliminacionesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_eliminaciones
     */
    select?: audit_eliminacionesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_eliminaciones
     */
    omit?: audit_eliminacionesOmit<ExtArgs> | null
    /**
     * The data used to update audit_eliminaciones.
     */
    data: XOR<audit_eliminacionesUpdateManyMutationInput, audit_eliminacionesUncheckedUpdateManyInput>
    /**
     * Filter which audit_eliminaciones to update
     */
    where?: audit_eliminacionesWhereInput
    /**
     * Limit how many audit_eliminaciones to update.
     */
    limit?: number
  }

  /**
   * audit_eliminaciones upsert
   */
  export type audit_eliminacionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_eliminaciones
     */
    select?: audit_eliminacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_eliminaciones
     */
    omit?: audit_eliminacionesOmit<ExtArgs> | null
    /**
     * The filter to search for the audit_eliminaciones to update in case it exists.
     */
    where: audit_eliminacionesWhereUniqueInput
    /**
     * In case the audit_eliminaciones found by the `where` argument doesn't exist, create a new audit_eliminaciones with this data.
     */
    create: XOR<audit_eliminacionesCreateInput, audit_eliminacionesUncheckedCreateInput>
    /**
     * In case the audit_eliminaciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_eliminacionesUpdateInput, audit_eliminacionesUncheckedUpdateInput>
  }

  /**
   * audit_eliminaciones delete
   */
  export type audit_eliminacionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_eliminaciones
     */
    select?: audit_eliminacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_eliminaciones
     */
    omit?: audit_eliminacionesOmit<ExtArgs> | null
    /**
     * Filter which audit_eliminaciones to delete.
     */
    where: audit_eliminacionesWhereUniqueInput
  }

  /**
   * audit_eliminaciones deleteMany
   */
  export type audit_eliminacionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_eliminaciones to delete
     */
    where?: audit_eliminacionesWhereInput
    /**
     * Limit how many audit_eliminaciones to delete.
     */
    limit?: number
  }

  /**
   * audit_eliminaciones without action
   */
  export type audit_eliminacionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_eliminaciones
     */
    select?: audit_eliminacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_eliminaciones
     */
    omit?: audit_eliminacionesOmit<ExtArgs> | null
  }


  /**
   * Model conversations
   */

  export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  export type ConversationsMinAggregateOutputType = {
    id: string | null
    whatsapp_account_id: string | null
    phone: string | null
    name: string | null
    last_message: string | null
    last_message_date: Date | null
  }

  export type ConversationsMaxAggregateOutputType = {
    id: string | null
    whatsapp_account_id: string | null
    phone: string | null
    name: string | null
    last_message: string | null
    last_message_date: Date | null
  }

  export type ConversationsCountAggregateOutputType = {
    id: number
    whatsapp_account_id: number
    phone: number
    name: number
    last_message: number
    last_message_date: number
    _all: number
  }


  export type ConversationsMinAggregateInputType = {
    id?: true
    whatsapp_account_id?: true
    phone?: true
    name?: true
    last_message?: true
    last_message_date?: true
  }

  export type ConversationsMaxAggregateInputType = {
    id?: true
    whatsapp_account_id?: true
    phone?: true
    name?: true
    last_message?: true
    last_message_date?: true
  }

  export type ConversationsCountAggregateInputType = {
    id?: true
    whatsapp_account_id?: true
    phone?: true
    name?: true
    last_message?: true
    last_message_date?: true
    _all?: true
  }

  export type ConversationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to aggregate.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned conversations
    **/
    _count?: true | ConversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationsMaxAggregateInputType
  }

  export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversations[P]>
      : GetScalarType<T[P], AggregateConversations[P]>
  }




  export type conversationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
    orderBy?: conversationsOrderByWithAggregationInput | conversationsOrderByWithAggregationInput[]
    by: ConversationsScalarFieldEnum[] | ConversationsScalarFieldEnum
    having?: conversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationsCountAggregateInputType | true
    _min?: ConversationsMinAggregateInputType
    _max?: ConversationsMaxAggregateInputType
  }

  export type ConversationsGroupByOutputType = {
    id: string
    whatsapp_account_id: string
    phone: string | null
    name: string | null
    last_message: string | null
    last_message_date: Date | null
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  type GetConversationsGroupByPayload<T extends conversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
        }
      >
    >


  export type conversationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsapp_account_id?: boolean
    phone?: boolean
    name?: boolean
    last_message?: boolean
    last_message_date?: boolean
    whatsapp_accounts?: boolean | whatsapp_accountsDefaultArgs<ExtArgs>
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsapp_account_id?: boolean
    phone?: boolean
    name?: boolean
    last_message?: boolean
    last_message_date?: boolean
    whatsapp_accounts?: boolean | whatsapp_accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsapp_account_id?: boolean
    phone?: boolean
    name?: boolean
    last_message?: boolean
    last_message_date?: boolean
    whatsapp_accounts?: boolean | whatsapp_accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectScalar = {
    id?: boolean
    whatsapp_account_id?: boolean
    phone?: boolean
    name?: boolean
    last_message?: boolean
    last_message_date?: boolean
  }

  export type conversationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "whatsapp_account_id" | "phone" | "name" | "last_message" | "last_message_date", ExtArgs["result"]["conversations"]>
  export type conversationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whatsapp_accounts?: boolean | whatsapp_accountsDefaultArgs<ExtArgs>
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type conversationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whatsapp_accounts?: boolean | whatsapp_accountsDefaultArgs<ExtArgs>
  }
  export type conversationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whatsapp_accounts?: boolean | whatsapp_accountsDefaultArgs<ExtArgs>
  }

  export type $conversationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "conversations"
    objects: {
      whatsapp_accounts: Prisma.$whatsapp_accountsPayload<ExtArgs>
      messages: Prisma.$messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      whatsapp_account_id: string
      phone: string | null
      name: string | null
      last_message: string | null
      last_message_date: Date | null
    }, ExtArgs["result"]["conversations"]>
    composites: {}
  }

  type conversationsGetPayload<S extends boolean | null | undefined | conversationsDefaultArgs> = $Result.GetResult<Prisma.$conversationsPayload, S>

  type conversationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<conversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationsCountAggregateInputType | true
    }

  export interface conversationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conversations'], meta: { name: 'conversations' } }
    /**
     * Find zero or one Conversations that matches the filter.
     * @param {conversationsFindUniqueArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends conversationsFindUniqueArgs>(args: SelectSubset<T, conversationsFindUniqueArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {conversationsFindUniqueOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends conversationsFindUniqueOrThrowArgs>(args: SelectSubset<T, conversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends conversationsFindFirstArgs>(args?: SelectSubset<T, conversationsFindFirstArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends conversationsFindFirstOrThrowArgs>(args?: SelectSubset<T, conversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversations.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationsWithIdOnly = await prisma.conversations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends conversationsFindManyArgs>(args?: SelectSubset<T, conversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversations.
     * @param {conversationsCreateArgs} args - Arguments to create a Conversations.
     * @example
     * // Create one Conversations
     * const Conversations = await prisma.conversations.create({
     *   data: {
     *     // ... data to create a Conversations
     *   }
     * })
     * 
     */
    create<T extends conversationsCreateArgs>(args: SelectSubset<T, conversationsCreateArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {conversationsCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends conversationsCreateManyArgs>(args?: SelectSubset<T, conversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {conversationsCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends conversationsCreateManyAndReturnArgs>(args?: SelectSubset<T, conversationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversations.
     * @param {conversationsDeleteArgs} args - Arguments to delete one Conversations.
     * @example
     * // Delete one Conversations
     * const Conversations = await prisma.conversations.delete({
     *   where: {
     *     // ... filter to delete one Conversations
     *   }
     * })
     * 
     */
    delete<T extends conversationsDeleteArgs>(args: SelectSubset<T, conversationsDeleteArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversations.
     * @param {conversationsUpdateArgs} args - Arguments to update one Conversations.
     * @example
     * // Update one Conversations
     * const conversations = await prisma.conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends conversationsUpdateArgs>(args: SelectSubset<T, conversationsUpdateArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {conversationsDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends conversationsDeleteManyArgs>(args?: SelectSubset<T, conversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends conversationsUpdateManyArgs>(args: SelectSubset<T, conversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {conversationsUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends conversationsUpdateManyAndReturnArgs>(args: SelectSubset<T, conversationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversations.
     * @param {conversationsUpsertArgs} args - Arguments to update or create a Conversations.
     * @example
     * // Update or create a Conversations
     * const conversations = await prisma.conversations.upsert({
     *   create: {
     *     // ... data to create a Conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversations we want to update
     *   }
     * })
     */
    upsert<T extends conversationsUpsertArgs>(args: SelectSubset<T, conversationsUpsertArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversations.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends conversationsCountArgs>(
      args?: Subset<T, conversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationsAggregateArgs>(args: Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>

    /**
     * Group by Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsGroupByArgs} args - Group by arguments.
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
      T extends conversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conversationsGroupByArgs['orderBy'] }
        : { orderBy?: conversationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, conversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the conversations model
   */
  readonly fields: conversationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conversationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    whatsapp_accounts<T extends whatsapp_accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, whatsapp_accountsDefaultArgs<ExtArgs>>): Prisma__whatsapp_accountsClient<$Result.GetResult<Prisma.$whatsapp_accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends conversations$messagesArgs<ExtArgs> = {}>(args?: Subset<T, conversations$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the conversations model
   */
  interface conversationsFieldRefs {
    readonly id: FieldRef<"conversations", 'String'>
    readonly whatsapp_account_id: FieldRef<"conversations", 'String'>
    readonly phone: FieldRef<"conversations", 'String'>
    readonly name: FieldRef<"conversations", 'String'>
    readonly last_message: FieldRef<"conversations", 'String'>
    readonly last_message_date: FieldRef<"conversations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * conversations findUnique
   */
  export type conversationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findUniqueOrThrow
   */
  export type conversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findFirst
   */
  export type conversationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations findFirstOrThrow
   */
  export type conversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations findMany
   */
  export type conversationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations create
   */
  export type conversationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a conversations.
     */
    data: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
  }

  /**
   * conversations createMany
   */
  export type conversationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conversations.
     */
    data: conversationsCreateManyInput | conversationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conversations createManyAndReturn
   */
  export type conversationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * The data used to create many conversations.
     */
    data: conversationsCreateManyInput | conversationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * conversations update
   */
  export type conversationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a conversations.
     */
    data: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
    /**
     * Choose, which conversations to update.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations updateMany
   */
  export type conversationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conversations.
     */
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyInput>
    /**
     * Filter which conversations to update
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to update.
     */
    limit?: number
  }

  /**
   * conversations updateManyAndReturn
   */
  export type conversationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * The data used to update conversations.
     */
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyInput>
    /**
     * Filter which conversations to update
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * conversations upsert
   */
  export type conversationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the conversations to update in case it exists.
     */
    where: conversationsWhereUniqueInput
    /**
     * In case the conversations found by the `where` argument doesn't exist, create a new conversations with this data.
     */
    create: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
    /**
     * In case the conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
  }

  /**
   * conversations delete
   */
  export type conversationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter which conversations to delete.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations deleteMany
   */
  export type conversationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to delete
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to delete.
     */
    limit?: number
  }

  /**
   * conversations.messages
   */
  export type conversations$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * conversations without action
   */
  export type conversationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
  }


  /**
   * Model cuentas_gmail_asociadas
   */

  export type AggregateCuentas_gmail_asociadas = {
    _count: Cuentas_gmail_asociadasCountAggregateOutputType | null
    _avg: Cuentas_gmail_asociadasAvgAggregateOutputType | null
    _sum: Cuentas_gmail_asociadasSumAggregateOutputType | null
    _min: Cuentas_gmail_asociadasMinAggregateOutputType | null
    _max: Cuentas_gmail_asociadasMaxAggregateOutputType | null
  }

  export type Cuentas_gmail_asociadasAvgAggregateOutputType = {
    id: number | null
    usuario_principal_id: number | null
    consecutive_zero_syncs: number | null
  }

  export type Cuentas_gmail_asociadasSumAggregateOutputType = {
    id: number | null
    usuario_principal_id: number | null
    consecutive_zero_syncs: number | null
  }

  export type Cuentas_gmail_asociadasMinAggregateOutputType = {
    id: number | null
    usuario_principal_id: number | null
    email_gmail: string | null
    nombre_cuenta: string | null
    google_id: string | null
    access_token: string | null
    refresh_token: string | null
    token_expira_en: Date | null
    fecha_conexion: Date | null
    ultima_sincronizacion: Date | null
    esta_activa: boolean | null
    consecutive_zero_syncs: number | null
    alias_personalizado: string | null
    backfill_checkpoint_date: Date | null
    backfill_page_token: string | null
  }

  export type Cuentas_gmail_asociadasMaxAggregateOutputType = {
    id: number | null
    usuario_principal_id: number | null
    email_gmail: string | null
    nombre_cuenta: string | null
    google_id: string | null
    access_token: string | null
    refresh_token: string | null
    token_expira_en: Date | null
    fecha_conexion: Date | null
    ultima_sincronizacion: Date | null
    esta_activa: boolean | null
    consecutive_zero_syncs: number | null
    alias_personalizado: string | null
    backfill_checkpoint_date: Date | null
    backfill_page_token: string | null
  }

  export type Cuentas_gmail_asociadasCountAggregateOutputType = {
    id: number
    usuario_principal_id: number
    email_gmail: number
    nombre_cuenta: number
    google_id: number
    access_token: number
    refresh_token: number
    token_expira_en: number
    fecha_conexion: number
    ultima_sincronizacion: number
    esta_activa: number
    consecutive_zero_syncs: number
    alias_personalizado: number
    backfill_checkpoint_date: number
    backfill_page_token: number
    _all: number
  }


  export type Cuentas_gmail_asociadasAvgAggregateInputType = {
    id?: true
    usuario_principal_id?: true
    consecutive_zero_syncs?: true
  }

  export type Cuentas_gmail_asociadasSumAggregateInputType = {
    id?: true
    usuario_principal_id?: true
    consecutive_zero_syncs?: true
  }

  export type Cuentas_gmail_asociadasMinAggregateInputType = {
    id?: true
    usuario_principal_id?: true
    email_gmail?: true
    nombre_cuenta?: true
    google_id?: true
    access_token?: true
    refresh_token?: true
    token_expira_en?: true
    fecha_conexion?: true
    ultima_sincronizacion?: true
    esta_activa?: true
    consecutive_zero_syncs?: true
    alias_personalizado?: true
    backfill_checkpoint_date?: true
    backfill_page_token?: true
  }

  export type Cuentas_gmail_asociadasMaxAggregateInputType = {
    id?: true
    usuario_principal_id?: true
    email_gmail?: true
    nombre_cuenta?: true
    google_id?: true
    access_token?: true
    refresh_token?: true
    token_expira_en?: true
    fecha_conexion?: true
    ultima_sincronizacion?: true
    esta_activa?: true
    consecutive_zero_syncs?: true
    alias_personalizado?: true
    backfill_checkpoint_date?: true
    backfill_page_token?: true
  }

  export type Cuentas_gmail_asociadasCountAggregateInputType = {
    id?: true
    usuario_principal_id?: true
    email_gmail?: true
    nombre_cuenta?: true
    google_id?: true
    access_token?: true
    refresh_token?: true
    token_expira_en?: true
    fecha_conexion?: true
    ultima_sincronizacion?: true
    esta_activa?: true
    consecutive_zero_syncs?: true
    alias_personalizado?: true
    backfill_checkpoint_date?: true
    backfill_page_token?: true
    _all?: true
  }

  export type Cuentas_gmail_asociadasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cuentas_gmail_asociadas to aggregate.
     */
    where?: cuentas_gmail_asociadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuentas_gmail_asociadas to fetch.
     */
    orderBy?: cuentas_gmail_asociadasOrderByWithRelationInput | cuentas_gmail_asociadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cuentas_gmail_asociadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuentas_gmail_asociadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuentas_gmail_asociadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cuentas_gmail_asociadas
    **/
    _count?: true | Cuentas_gmail_asociadasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cuentas_gmail_asociadasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cuentas_gmail_asociadasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cuentas_gmail_asociadasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cuentas_gmail_asociadasMaxAggregateInputType
  }

  export type GetCuentas_gmail_asociadasAggregateType<T extends Cuentas_gmail_asociadasAggregateArgs> = {
        [P in keyof T & keyof AggregateCuentas_gmail_asociadas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuentas_gmail_asociadas[P]>
      : GetScalarType<T[P], AggregateCuentas_gmail_asociadas[P]>
  }




  export type cuentas_gmail_asociadasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuentas_gmail_asociadasWhereInput
    orderBy?: cuentas_gmail_asociadasOrderByWithAggregationInput | cuentas_gmail_asociadasOrderByWithAggregationInput[]
    by: Cuentas_gmail_asociadasScalarFieldEnum[] | Cuentas_gmail_asociadasScalarFieldEnum
    having?: cuentas_gmail_asociadasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cuentas_gmail_asociadasCountAggregateInputType | true
    _avg?: Cuentas_gmail_asociadasAvgAggregateInputType
    _sum?: Cuentas_gmail_asociadasSumAggregateInputType
    _min?: Cuentas_gmail_asociadasMinAggregateInputType
    _max?: Cuentas_gmail_asociadasMaxAggregateInputType
  }

  export type Cuentas_gmail_asociadasGroupByOutputType = {
    id: number
    usuario_principal_id: number
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token: string | null
    refresh_token: string | null
    token_expira_en: Date | null
    fecha_conexion: Date | null
    ultima_sincronizacion: Date | null
    esta_activa: boolean | null
    consecutive_zero_syncs: number | null
    alias_personalizado: string | null
    backfill_checkpoint_date: Date | null
    backfill_page_token: string | null
    _count: Cuentas_gmail_asociadasCountAggregateOutputType | null
    _avg: Cuentas_gmail_asociadasAvgAggregateOutputType | null
    _sum: Cuentas_gmail_asociadasSumAggregateOutputType | null
    _min: Cuentas_gmail_asociadasMinAggregateOutputType | null
    _max: Cuentas_gmail_asociadasMaxAggregateOutputType | null
  }

  type GetCuentas_gmail_asociadasGroupByPayload<T extends cuentas_gmail_asociadasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cuentas_gmail_asociadasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cuentas_gmail_asociadasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cuentas_gmail_asociadasGroupByOutputType[P]>
            : GetScalarType<T[P], Cuentas_gmail_asociadasGroupByOutputType[P]>
        }
      >
    >


  export type cuentas_gmail_asociadasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_principal_id?: boolean
    email_gmail?: boolean
    nombre_cuenta?: boolean
    google_id?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_expira_en?: boolean
    fecha_conexion?: boolean
    ultima_sincronizacion?: boolean
    esta_activa?: boolean
    consecutive_zero_syncs?: boolean
    alias_personalizado?: boolean
    backfill_checkpoint_date?: boolean
    backfill_page_token?: boolean
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
    emails_sincronizados?: boolean | cuentas_gmail_asociadas$emails_sincronizadosArgs<ExtArgs>
    _count?: boolean | Cuentas_gmail_asociadasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuentas_gmail_asociadas"]>

  export type cuentas_gmail_asociadasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_principal_id?: boolean
    email_gmail?: boolean
    nombre_cuenta?: boolean
    google_id?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_expira_en?: boolean
    fecha_conexion?: boolean
    ultima_sincronizacion?: boolean
    esta_activa?: boolean
    consecutive_zero_syncs?: boolean
    alias_personalizado?: boolean
    backfill_checkpoint_date?: boolean
    backfill_page_token?: boolean
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuentas_gmail_asociadas"]>

  export type cuentas_gmail_asociadasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_principal_id?: boolean
    email_gmail?: boolean
    nombre_cuenta?: boolean
    google_id?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_expira_en?: boolean
    fecha_conexion?: boolean
    ultima_sincronizacion?: boolean
    esta_activa?: boolean
    consecutive_zero_syncs?: boolean
    alias_personalizado?: boolean
    backfill_checkpoint_date?: boolean
    backfill_page_token?: boolean
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuentas_gmail_asociadas"]>

  export type cuentas_gmail_asociadasSelectScalar = {
    id?: boolean
    usuario_principal_id?: boolean
    email_gmail?: boolean
    nombre_cuenta?: boolean
    google_id?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_expira_en?: boolean
    fecha_conexion?: boolean
    ultima_sincronizacion?: boolean
    esta_activa?: boolean
    consecutive_zero_syncs?: boolean
    alias_personalizado?: boolean
    backfill_checkpoint_date?: boolean
    backfill_page_token?: boolean
  }

  export type cuentas_gmail_asociadasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_principal_id" | "email_gmail" | "nombre_cuenta" | "google_id" | "access_token" | "refresh_token" | "token_expira_en" | "fecha_conexion" | "ultima_sincronizacion" | "esta_activa" | "consecutive_zero_syncs" | "alias_personalizado" | "backfill_checkpoint_date" | "backfill_page_token", ExtArgs["result"]["cuentas_gmail_asociadas"]>
  export type cuentas_gmail_asociadasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
    emails_sincronizados?: boolean | cuentas_gmail_asociadas$emails_sincronizadosArgs<ExtArgs>
    _count?: boolean | Cuentas_gmail_asociadasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cuentas_gmail_asociadasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
  }
  export type cuentas_gmail_asociadasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
  }

  export type $cuentas_gmail_asociadasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cuentas_gmail_asociadas"
    objects: {
      usuarios_principales: Prisma.$usuarios_principalesPayload<ExtArgs>
      emails_sincronizados: Prisma.$emails_sincronizadosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_principal_id: number
      email_gmail: string
      nombre_cuenta: string
      google_id: string
      access_token: string | null
      refresh_token: string | null
      token_expira_en: Date | null
      fecha_conexion: Date | null
      ultima_sincronizacion: Date | null
      esta_activa: boolean | null
      consecutive_zero_syncs: number | null
      alias_personalizado: string | null
      backfill_checkpoint_date: Date | null
      backfill_page_token: string | null
    }, ExtArgs["result"]["cuentas_gmail_asociadas"]>
    composites: {}
  }

  type cuentas_gmail_asociadasGetPayload<S extends boolean | null | undefined | cuentas_gmail_asociadasDefaultArgs> = $Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload, S>

  type cuentas_gmail_asociadasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cuentas_gmail_asociadasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cuentas_gmail_asociadasCountAggregateInputType | true
    }

  export interface cuentas_gmail_asociadasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cuentas_gmail_asociadas'], meta: { name: 'cuentas_gmail_asociadas' } }
    /**
     * Find zero or one Cuentas_gmail_asociadas that matches the filter.
     * @param {cuentas_gmail_asociadasFindUniqueArgs} args - Arguments to find a Cuentas_gmail_asociadas
     * @example
     * // Get one Cuentas_gmail_asociadas
     * const cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cuentas_gmail_asociadasFindUniqueArgs>(args: SelectSubset<T, cuentas_gmail_asociadasFindUniqueArgs<ExtArgs>>): Prisma__cuentas_gmail_asociadasClient<$Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cuentas_gmail_asociadas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cuentas_gmail_asociadasFindUniqueOrThrowArgs} args - Arguments to find a Cuentas_gmail_asociadas
     * @example
     * // Get one Cuentas_gmail_asociadas
     * const cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cuentas_gmail_asociadasFindUniqueOrThrowArgs>(args: SelectSubset<T, cuentas_gmail_asociadasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cuentas_gmail_asociadasClient<$Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuentas_gmail_asociadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentas_gmail_asociadasFindFirstArgs} args - Arguments to find a Cuentas_gmail_asociadas
     * @example
     * // Get one Cuentas_gmail_asociadas
     * const cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cuentas_gmail_asociadasFindFirstArgs>(args?: SelectSubset<T, cuentas_gmail_asociadasFindFirstArgs<ExtArgs>>): Prisma__cuentas_gmail_asociadasClient<$Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuentas_gmail_asociadas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentas_gmail_asociadasFindFirstOrThrowArgs} args - Arguments to find a Cuentas_gmail_asociadas
     * @example
     * // Get one Cuentas_gmail_asociadas
     * const cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cuentas_gmail_asociadasFindFirstOrThrowArgs>(args?: SelectSubset<T, cuentas_gmail_asociadasFindFirstOrThrowArgs<ExtArgs>>): Prisma__cuentas_gmail_asociadasClient<$Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cuentas_gmail_asociadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentas_gmail_asociadasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuentas_gmail_asociadas
     * const cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.findMany()
     * 
     * // Get first 10 Cuentas_gmail_asociadas
     * const cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cuentas_gmail_asociadasWithIdOnly = await prisma.cuentas_gmail_asociadas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cuentas_gmail_asociadasFindManyArgs>(args?: SelectSubset<T, cuentas_gmail_asociadasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cuentas_gmail_asociadas.
     * @param {cuentas_gmail_asociadasCreateArgs} args - Arguments to create a Cuentas_gmail_asociadas.
     * @example
     * // Create one Cuentas_gmail_asociadas
     * const Cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.create({
     *   data: {
     *     // ... data to create a Cuentas_gmail_asociadas
     *   }
     * })
     * 
     */
    create<T extends cuentas_gmail_asociadasCreateArgs>(args: SelectSubset<T, cuentas_gmail_asociadasCreateArgs<ExtArgs>>): Prisma__cuentas_gmail_asociadasClient<$Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cuentas_gmail_asociadas.
     * @param {cuentas_gmail_asociadasCreateManyArgs} args - Arguments to create many Cuentas_gmail_asociadas.
     * @example
     * // Create many Cuentas_gmail_asociadas
     * const cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cuentas_gmail_asociadasCreateManyArgs>(args?: SelectSubset<T, cuentas_gmail_asociadasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cuentas_gmail_asociadas and returns the data saved in the database.
     * @param {cuentas_gmail_asociadasCreateManyAndReturnArgs} args - Arguments to create many Cuentas_gmail_asociadas.
     * @example
     * // Create many Cuentas_gmail_asociadas
     * const cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cuentas_gmail_asociadas and only return the `id`
     * const cuentas_gmail_asociadasWithIdOnly = await prisma.cuentas_gmail_asociadas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cuentas_gmail_asociadasCreateManyAndReturnArgs>(args?: SelectSubset<T, cuentas_gmail_asociadasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cuentas_gmail_asociadas.
     * @param {cuentas_gmail_asociadasDeleteArgs} args - Arguments to delete one Cuentas_gmail_asociadas.
     * @example
     * // Delete one Cuentas_gmail_asociadas
     * const Cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.delete({
     *   where: {
     *     // ... filter to delete one Cuentas_gmail_asociadas
     *   }
     * })
     * 
     */
    delete<T extends cuentas_gmail_asociadasDeleteArgs>(args: SelectSubset<T, cuentas_gmail_asociadasDeleteArgs<ExtArgs>>): Prisma__cuentas_gmail_asociadasClient<$Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cuentas_gmail_asociadas.
     * @param {cuentas_gmail_asociadasUpdateArgs} args - Arguments to update one Cuentas_gmail_asociadas.
     * @example
     * // Update one Cuentas_gmail_asociadas
     * const cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cuentas_gmail_asociadasUpdateArgs>(args: SelectSubset<T, cuentas_gmail_asociadasUpdateArgs<ExtArgs>>): Prisma__cuentas_gmail_asociadasClient<$Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cuentas_gmail_asociadas.
     * @param {cuentas_gmail_asociadasDeleteManyArgs} args - Arguments to filter Cuentas_gmail_asociadas to delete.
     * @example
     * // Delete a few Cuentas_gmail_asociadas
     * const { count } = await prisma.cuentas_gmail_asociadas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cuentas_gmail_asociadasDeleteManyArgs>(args?: SelectSubset<T, cuentas_gmail_asociadasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuentas_gmail_asociadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentas_gmail_asociadasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuentas_gmail_asociadas
     * const cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cuentas_gmail_asociadasUpdateManyArgs>(args: SelectSubset<T, cuentas_gmail_asociadasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuentas_gmail_asociadas and returns the data updated in the database.
     * @param {cuentas_gmail_asociadasUpdateManyAndReturnArgs} args - Arguments to update many Cuentas_gmail_asociadas.
     * @example
     * // Update many Cuentas_gmail_asociadas
     * const cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cuentas_gmail_asociadas and only return the `id`
     * const cuentas_gmail_asociadasWithIdOnly = await prisma.cuentas_gmail_asociadas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cuentas_gmail_asociadasUpdateManyAndReturnArgs>(args: SelectSubset<T, cuentas_gmail_asociadasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cuentas_gmail_asociadas.
     * @param {cuentas_gmail_asociadasUpsertArgs} args - Arguments to update or create a Cuentas_gmail_asociadas.
     * @example
     * // Update or create a Cuentas_gmail_asociadas
     * const cuentas_gmail_asociadas = await prisma.cuentas_gmail_asociadas.upsert({
     *   create: {
     *     // ... data to create a Cuentas_gmail_asociadas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuentas_gmail_asociadas we want to update
     *   }
     * })
     */
    upsert<T extends cuentas_gmail_asociadasUpsertArgs>(args: SelectSubset<T, cuentas_gmail_asociadasUpsertArgs<ExtArgs>>): Prisma__cuentas_gmail_asociadasClient<$Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cuentas_gmail_asociadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentas_gmail_asociadasCountArgs} args - Arguments to filter Cuentas_gmail_asociadas to count.
     * @example
     * // Count the number of Cuentas_gmail_asociadas
     * const count = await prisma.cuentas_gmail_asociadas.count({
     *   where: {
     *     // ... the filter for the Cuentas_gmail_asociadas we want to count
     *   }
     * })
    **/
    count<T extends cuentas_gmail_asociadasCountArgs>(
      args?: Subset<T, cuentas_gmail_asociadasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cuentas_gmail_asociadasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuentas_gmail_asociadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cuentas_gmail_asociadasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cuentas_gmail_asociadasAggregateArgs>(args: Subset<T, Cuentas_gmail_asociadasAggregateArgs>): Prisma.PrismaPromise<GetCuentas_gmail_asociadasAggregateType<T>>

    /**
     * Group by Cuentas_gmail_asociadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentas_gmail_asociadasGroupByArgs} args - Group by arguments.
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
      T extends cuentas_gmail_asociadasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cuentas_gmail_asociadasGroupByArgs['orderBy'] }
        : { orderBy?: cuentas_gmail_asociadasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, cuentas_gmail_asociadasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuentas_gmail_asociadasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cuentas_gmail_asociadas model
   */
  readonly fields: cuentas_gmail_asociadasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cuentas_gmail_asociadas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cuentas_gmail_asociadasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios_principales<T extends usuarios_principalesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarios_principalesDefaultArgs<ExtArgs>>): Prisma__usuarios_principalesClient<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emails_sincronizados<T extends cuentas_gmail_asociadas$emails_sincronizadosArgs<ExtArgs> = {}>(args?: Subset<T, cuentas_gmail_asociadas$emails_sincronizadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emails_sincronizadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cuentas_gmail_asociadas model
   */
  interface cuentas_gmail_asociadasFieldRefs {
    readonly id: FieldRef<"cuentas_gmail_asociadas", 'Int'>
    readonly usuario_principal_id: FieldRef<"cuentas_gmail_asociadas", 'Int'>
    readonly email_gmail: FieldRef<"cuentas_gmail_asociadas", 'String'>
    readonly nombre_cuenta: FieldRef<"cuentas_gmail_asociadas", 'String'>
    readonly google_id: FieldRef<"cuentas_gmail_asociadas", 'String'>
    readonly access_token: FieldRef<"cuentas_gmail_asociadas", 'String'>
    readonly refresh_token: FieldRef<"cuentas_gmail_asociadas", 'String'>
    readonly token_expira_en: FieldRef<"cuentas_gmail_asociadas", 'DateTime'>
    readonly fecha_conexion: FieldRef<"cuentas_gmail_asociadas", 'DateTime'>
    readonly ultima_sincronizacion: FieldRef<"cuentas_gmail_asociadas", 'DateTime'>
    readonly esta_activa: FieldRef<"cuentas_gmail_asociadas", 'Boolean'>
    readonly consecutive_zero_syncs: FieldRef<"cuentas_gmail_asociadas", 'Int'>
    readonly alias_personalizado: FieldRef<"cuentas_gmail_asociadas", 'String'>
    readonly backfill_checkpoint_date: FieldRef<"cuentas_gmail_asociadas", 'DateTime'>
    readonly backfill_page_token: FieldRef<"cuentas_gmail_asociadas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cuentas_gmail_asociadas findUnique
   */
  export type cuentas_gmail_asociadasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentas_gmail_asociadas
     */
    select?: cuentas_gmail_asociadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuentas_gmail_asociadas
     */
    omit?: cuentas_gmail_asociadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentas_gmail_asociadasInclude<ExtArgs> | null
    /**
     * Filter, which cuentas_gmail_asociadas to fetch.
     */
    where: cuentas_gmail_asociadasWhereUniqueInput
  }

  /**
   * cuentas_gmail_asociadas findUniqueOrThrow
   */
  export type cuentas_gmail_asociadasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentas_gmail_asociadas
     */
    select?: cuentas_gmail_asociadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuentas_gmail_asociadas
     */
    omit?: cuentas_gmail_asociadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentas_gmail_asociadasInclude<ExtArgs> | null
    /**
     * Filter, which cuentas_gmail_asociadas to fetch.
     */
    where: cuentas_gmail_asociadasWhereUniqueInput
  }

  /**
   * cuentas_gmail_asociadas findFirst
   */
  export type cuentas_gmail_asociadasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentas_gmail_asociadas
     */
    select?: cuentas_gmail_asociadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuentas_gmail_asociadas
     */
    omit?: cuentas_gmail_asociadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentas_gmail_asociadasInclude<ExtArgs> | null
    /**
     * Filter, which cuentas_gmail_asociadas to fetch.
     */
    where?: cuentas_gmail_asociadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuentas_gmail_asociadas to fetch.
     */
    orderBy?: cuentas_gmail_asociadasOrderByWithRelationInput | cuentas_gmail_asociadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cuentas_gmail_asociadas.
     */
    cursor?: cuentas_gmail_asociadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuentas_gmail_asociadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuentas_gmail_asociadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cuentas_gmail_asociadas.
     */
    distinct?: Cuentas_gmail_asociadasScalarFieldEnum | Cuentas_gmail_asociadasScalarFieldEnum[]
  }

  /**
   * cuentas_gmail_asociadas findFirstOrThrow
   */
  export type cuentas_gmail_asociadasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentas_gmail_asociadas
     */
    select?: cuentas_gmail_asociadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuentas_gmail_asociadas
     */
    omit?: cuentas_gmail_asociadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentas_gmail_asociadasInclude<ExtArgs> | null
    /**
     * Filter, which cuentas_gmail_asociadas to fetch.
     */
    where?: cuentas_gmail_asociadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuentas_gmail_asociadas to fetch.
     */
    orderBy?: cuentas_gmail_asociadasOrderByWithRelationInput | cuentas_gmail_asociadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cuentas_gmail_asociadas.
     */
    cursor?: cuentas_gmail_asociadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuentas_gmail_asociadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuentas_gmail_asociadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cuentas_gmail_asociadas.
     */
    distinct?: Cuentas_gmail_asociadasScalarFieldEnum | Cuentas_gmail_asociadasScalarFieldEnum[]
  }

  /**
   * cuentas_gmail_asociadas findMany
   */
  export type cuentas_gmail_asociadasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentas_gmail_asociadas
     */
    select?: cuentas_gmail_asociadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuentas_gmail_asociadas
     */
    omit?: cuentas_gmail_asociadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentas_gmail_asociadasInclude<ExtArgs> | null
    /**
     * Filter, which cuentas_gmail_asociadas to fetch.
     */
    where?: cuentas_gmail_asociadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuentas_gmail_asociadas to fetch.
     */
    orderBy?: cuentas_gmail_asociadasOrderByWithRelationInput | cuentas_gmail_asociadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cuentas_gmail_asociadas.
     */
    cursor?: cuentas_gmail_asociadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuentas_gmail_asociadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuentas_gmail_asociadas.
     */
    skip?: number
    distinct?: Cuentas_gmail_asociadasScalarFieldEnum | Cuentas_gmail_asociadasScalarFieldEnum[]
  }

  /**
   * cuentas_gmail_asociadas create
   */
  export type cuentas_gmail_asociadasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentas_gmail_asociadas
     */
    select?: cuentas_gmail_asociadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuentas_gmail_asociadas
     */
    omit?: cuentas_gmail_asociadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentas_gmail_asociadasInclude<ExtArgs> | null
    /**
     * The data needed to create a cuentas_gmail_asociadas.
     */
    data: XOR<cuentas_gmail_asociadasCreateInput, cuentas_gmail_asociadasUncheckedCreateInput>
  }

  /**
   * cuentas_gmail_asociadas createMany
   */
  export type cuentas_gmail_asociadasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cuentas_gmail_asociadas.
     */
    data: cuentas_gmail_asociadasCreateManyInput | cuentas_gmail_asociadasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cuentas_gmail_asociadas createManyAndReturn
   */
  export type cuentas_gmail_asociadasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentas_gmail_asociadas
     */
    select?: cuentas_gmail_asociadasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cuentas_gmail_asociadas
     */
    omit?: cuentas_gmail_asociadasOmit<ExtArgs> | null
    /**
     * The data used to create many cuentas_gmail_asociadas.
     */
    data: cuentas_gmail_asociadasCreateManyInput | cuentas_gmail_asociadasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentas_gmail_asociadasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cuentas_gmail_asociadas update
   */
  export type cuentas_gmail_asociadasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentas_gmail_asociadas
     */
    select?: cuentas_gmail_asociadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuentas_gmail_asociadas
     */
    omit?: cuentas_gmail_asociadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentas_gmail_asociadasInclude<ExtArgs> | null
    /**
     * The data needed to update a cuentas_gmail_asociadas.
     */
    data: XOR<cuentas_gmail_asociadasUpdateInput, cuentas_gmail_asociadasUncheckedUpdateInput>
    /**
     * Choose, which cuentas_gmail_asociadas to update.
     */
    where: cuentas_gmail_asociadasWhereUniqueInput
  }

  /**
   * cuentas_gmail_asociadas updateMany
   */
  export type cuentas_gmail_asociadasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cuentas_gmail_asociadas.
     */
    data: XOR<cuentas_gmail_asociadasUpdateManyMutationInput, cuentas_gmail_asociadasUncheckedUpdateManyInput>
    /**
     * Filter which cuentas_gmail_asociadas to update
     */
    where?: cuentas_gmail_asociadasWhereInput
    /**
     * Limit how many cuentas_gmail_asociadas to update.
     */
    limit?: number
  }

  /**
   * cuentas_gmail_asociadas updateManyAndReturn
   */
  export type cuentas_gmail_asociadasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentas_gmail_asociadas
     */
    select?: cuentas_gmail_asociadasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cuentas_gmail_asociadas
     */
    omit?: cuentas_gmail_asociadasOmit<ExtArgs> | null
    /**
     * The data used to update cuentas_gmail_asociadas.
     */
    data: XOR<cuentas_gmail_asociadasUpdateManyMutationInput, cuentas_gmail_asociadasUncheckedUpdateManyInput>
    /**
     * Filter which cuentas_gmail_asociadas to update
     */
    where?: cuentas_gmail_asociadasWhereInput
    /**
     * Limit how many cuentas_gmail_asociadas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentas_gmail_asociadasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cuentas_gmail_asociadas upsert
   */
  export type cuentas_gmail_asociadasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentas_gmail_asociadas
     */
    select?: cuentas_gmail_asociadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuentas_gmail_asociadas
     */
    omit?: cuentas_gmail_asociadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentas_gmail_asociadasInclude<ExtArgs> | null
    /**
     * The filter to search for the cuentas_gmail_asociadas to update in case it exists.
     */
    where: cuentas_gmail_asociadasWhereUniqueInput
    /**
     * In case the cuentas_gmail_asociadas found by the `where` argument doesn't exist, create a new cuentas_gmail_asociadas with this data.
     */
    create: XOR<cuentas_gmail_asociadasCreateInput, cuentas_gmail_asociadasUncheckedCreateInput>
    /**
     * In case the cuentas_gmail_asociadas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cuentas_gmail_asociadasUpdateInput, cuentas_gmail_asociadasUncheckedUpdateInput>
  }

  /**
   * cuentas_gmail_asociadas delete
   */
  export type cuentas_gmail_asociadasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentas_gmail_asociadas
     */
    select?: cuentas_gmail_asociadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuentas_gmail_asociadas
     */
    omit?: cuentas_gmail_asociadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentas_gmail_asociadasInclude<ExtArgs> | null
    /**
     * Filter which cuentas_gmail_asociadas to delete.
     */
    where: cuentas_gmail_asociadasWhereUniqueInput
  }

  /**
   * cuentas_gmail_asociadas deleteMany
   */
  export type cuentas_gmail_asociadasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cuentas_gmail_asociadas to delete
     */
    where?: cuentas_gmail_asociadasWhereInput
    /**
     * Limit how many cuentas_gmail_asociadas to delete.
     */
    limit?: number
  }

  /**
   * cuentas_gmail_asociadas.emails_sincronizados
   */
  export type cuentas_gmail_asociadas$emails_sincronizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails_sincronizados
     */
    select?: emails_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails_sincronizados
     */
    omit?: emails_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emails_sincronizadosInclude<ExtArgs> | null
    where?: emails_sincronizadosWhereInput
    orderBy?: emails_sincronizadosOrderByWithRelationInput | emails_sincronizadosOrderByWithRelationInput[]
    cursor?: emails_sincronizadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Emails_sincronizadosScalarFieldEnum | Emails_sincronizadosScalarFieldEnum[]
  }

  /**
   * cuentas_gmail_asociadas without action
   */
  export type cuentas_gmail_asociadasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentas_gmail_asociadas
     */
    select?: cuentas_gmail_asociadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuentas_gmail_asociadas
     */
    omit?: cuentas_gmail_asociadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentas_gmail_asociadasInclude<ExtArgs> | null
  }


  /**
   * Model emails_sincronizados
   */

  export type AggregateEmails_sincronizados = {
    _count: Emails_sincronizadosCountAggregateOutputType | null
    _avg: Emails_sincronizadosAvgAggregateOutputType | null
    _sum: Emails_sincronizadosSumAggregateOutputType | null
    _min: Emails_sincronizadosMinAggregateOutputType | null
    _max: Emails_sincronizadosMaxAggregateOutputType | null
  }

  export type Emails_sincronizadosAvgAggregateOutputType = {
    id: number | null
    cuenta_gmail_id: number | null
    tamano_bytes: number | null
  }

  export type Emails_sincronizadosSumAggregateOutputType = {
    id: number | null
    cuenta_gmail_id: number | null
    tamano_bytes: number | null
  }

  export type Emails_sincronizadosMinAggregateOutputType = {
    id: number | null
    cuenta_gmail_id: number | null
    gmail_message_id: string | null
    asunto: string | null
    remitente_email: string | null
    remitente_nombre: string | null
    destinatario_email: string | null
    fecha_recibido: Date | null
    esta_leido: boolean | null
    tiene_adjuntos: boolean | null
    tamano_bytes: number | null
    fecha_sincronizado: Date | null
  }

  export type Emails_sincronizadosMaxAggregateOutputType = {
    id: number | null
    cuenta_gmail_id: number | null
    gmail_message_id: string | null
    asunto: string | null
    remitente_email: string | null
    remitente_nombre: string | null
    destinatario_email: string | null
    fecha_recibido: Date | null
    esta_leido: boolean | null
    tiene_adjuntos: boolean | null
    tamano_bytes: number | null
    fecha_sincronizado: Date | null
  }

  export type Emails_sincronizadosCountAggregateOutputType = {
    id: number
    cuenta_gmail_id: number
    gmail_message_id: number
    asunto: number
    remitente_email: number
    remitente_nombre: number
    destinatario_email: number
    fecha_recibido: number
    esta_leido: number
    tiene_adjuntos: number
    etiquetas_gmail: number
    tamano_bytes: number
    fecha_sincronizado: number
    _all: number
  }


  export type Emails_sincronizadosAvgAggregateInputType = {
    id?: true
    cuenta_gmail_id?: true
    tamano_bytes?: true
  }

  export type Emails_sincronizadosSumAggregateInputType = {
    id?: true
    cuenta_gmail_id?: true
    tamano_bytes?: true
  }

  export type Emails_sincronizadosMinAggregateInputType = {
    id?: true
    cuenta_gmail_id?: true
    gmail_message_id?: true
    asunto?: true
    remitente_email?: true
    remitente_nombre?: true
    destinatario_email?: true
    fecha_recibido?: true
    esta_leido?: true
    tiene_adjuntos?: true
    tamano_bytes?: true
    fecha_sincronizado?: true
  }

  export type Emails_sincronizadosMaxAggregateInputType = {
    id?: true
    cuenta_gmail_id?: true
    gmail_message_id?: true
    asunto?: true
    remitente_email?: true
    remitente_nombre?: true
    destinatario_email?: true
    fecha_recibido?: true
    esta_leido?: true
    tiene_adjuntos?: true
    tamano_bytes?: true
    fecha_sincronizado?: true
  }

  export type Emails_sincronizadosCountAggregateInputType = {
    id?: true
    cuenta_gmail_id?: true
    gmail_message_id?: true
    asunto?: true
    remitente_email?: true
    remitente_nombre?: true
    destinatario_email?: true
    fecha_recibido?: true
    esta_leido?: true
    tiene_adjuntos?: true
    etiquetas_gmail?: true
    tamano_bytes?: true
    fecha_sincronizado?: true
    _all?: true
  }

  export type Emails_sincronizadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which emails_sincronizados to aggregate.
     */
    where?: emails_sincronizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails_sincronizados to fetch.
     */
    orderBy?: emails_sincronizadosOrderByWithRelationInput | emails_sincronizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: emails_sincronizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails_sincronizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails_sincronizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned emails_sincronizados
    **/
    _count?: true | Emails_sincronizadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Emails_sincronizadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Emails_sincronizadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Emails_sincronizadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Emails_sincronizadosMaxAggregateInputType
  }

  export type GetEmails_sincronizadosAggregateType<T extends Emails_sincronizadosAggregateArgs> = {
        [P in keyof T & keyof AggregateEmails_sincronizados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmails_sincronizados[P]>
      : GetScalarType<T[P], AggregateEmails_sincronizados[P]>
  }




  export type emails_sincronizadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emails_sincronizadosWhereInput
    orderBy?: emails_sincronizadosOrderByWithAggregationInput | emails_sincronizadosOrderByWithAggregationInput[]
    by: Emails_sincronizadosScalarFieldEnum[] | Emails_sincronizadosScalarFieldEnum
    having?: emails_sincronizadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Emails_sincronizadosCountAggregateInputType | true
    _avg?: Emails_sincronizadosAvgAggregateInputType
    _sum?: Emails_sincronizadosSumAggregateInputType
    _min?: Emails_sincronizadosMinAggregateInputType
    _max?: Emails_sincronizadosMaxAggregateInputType
  }

  export type Emails_sincronizadosGroupByOutputType = {
    id: number
    cuenta_gmail_id: number
    gmail_message_id: string
    asunto: string | null
    remitente_email: string | null
    remitente_nombre: string | null
    destinatario_email: string | null
    fecha_recibido: Date | null
    esta_leido: boolean | null
    tiene_adjuntos: boolean | null
    etiquetas_gmail: string[]
    tamano_bytes: number | null
    fecha_sincronizado: Date | null
    _count: Emails_sincronizadosCountAggregateOutputType | null
    _avg: Emails_sincronizadosAvgAggregateOutputType | null
    _sum: Emails_sincronizadosSumAggregateOutputType | null
    _min: Emails_sincronizadosMinAggregateOutputType | null
    _max: Emails_sincronizadosMaxAggregateOutputType | null
  }

  type GetEmails_sincronizadosGroupByPayload<T extends emails_sincronizadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Emails_sincronizadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Emails_sincronizadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Emails_sincronizadosGroupByOutputType[P]>
            : GetScalarType<T[P], Emails_sincronizadosGroupByOutputType[P]>
        }
      >
    >


  export type emails_sincronizadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cuenta_gmail_id?: boolean
    gmail_message_id?: boolean
    asunto?: boolean
    remitente_email?: boolean
    remitente_nombre?: boolean
    destinatario_email?: boolean
    fecha_recibido?: boolean
    esta_leido?: boolean
    tiene_adjuntos?: boolean
    etiquetas_gmail?: boolean
    tamano_bytes?: boolean
    fecha_sincronizado?: boolean
    cuentas_gmail_asociadas?: boolean | cuentas_gmail_asociadasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emails_sincronizados"]>

  export type emails_sincronizadosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cuenta_gmail_id?: boolean
    gmail_message_id?: boolean
    asunto?: boolean
    remitente_email?: boolean
    remitente_nombre?: boolean
    destinatario_email?: boolean
    fecha_recibido?: boolean
    esta_leido?: boolean
    tiene_adjuntos?: boolean
    etiquetas_gmail?: boolean
    tamano_bytes?: boolean
    fecha_sincronizado?: boolean
    cuentas_gmail_asociadas?: boolean | cuentas_gmail_asociadasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emails_sincronizados"]>

  export type emails_sincronizadosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cuenta_gmail_id?: boolean
    gmail_message_id?: boolean
    asunto?: boolean
    remitente_email?: boolean
    remitente_nombre?: boolean
    destinatario_email?: boolean
    fecha_recibido?: boolean
    esta_leido?: boolean
    tiene_adjuntos?: boolean
    etiquetas_gmail?: boolean
    tamano_bytes?: boolean
    fecha_sincronizado?: boolean
    cuentas_gmail_asociadas?: boolean | cuentas_gmail_asociadasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emails_sincronizados"]>

  export type emails_sincronizadosSelectScalar = {
    id?: boolean
    cuenta_gmail_id?: boolean
    gmail_message_id?: boolean
    asunto?: boolean
    remitente_email?: boolean
    remitente_nombre?: boolean
    destinatario_email?: boolean
    fecha_recibido?: boolean
    esta_leido?: boolean
    tiene_adjuntos?: boolean
    etiquetas_gmail?: boolean
    tamano_bytes?: boolean
    fecha_sincronizado?: boolean
  }

  export type emails_sincronizadosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cuenta_gmail_id" | "gmail_message_id" | "asunto" | "remitente_email" | "remitente_nombre" | "destinatario_email" | "fecha_recibido" | "esta_leido" | "tiene_adjuntos" | "etiquetas_gmail" | "tamano_bytes" | "fecha_sincronizado", ExtArgs["result"]["emails_sincronizados"]>
  export type emails_sincronizadosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuentas_gmail_asociadas?: boolean | cuentas_gmail_asociadasDefaultArgs<ExtArgs>
  }
  export type emails_sincronizadosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuentas_gmail_asociadas?: boolean | cuentas_gmail_asociadasDefaultArgs<ExtArgs>
  }
  export type emails_sincronizadosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuentas_gmail_asociadas?: boolean | cuentas_gmail_asociadasDefaultArgs<ExtArgs>
  }

  export type $emails_sincronizadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "emails_sincronizados"
    objects: {
      cuentas_gmail_asociadas: Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cuenta_gmail_id: number
      gmail_message_id: string
      asunto: string | null
      remitente_email: string | null
      remitente_nombre: string | null
      destinatario_email: string | null
      fecha_recibido: Date | null
      esta_leido: boolean | null
      tiene_adjuntos: boolean | null
      etiquetas_gmail: string[]
      tamano_bytes: number | null
      fecha_sincronizado: Date | null
    }, ExtArgs["result"]["emails_sincronizados"]>
    composites: {}
  }

  type emails_sincronizadosGetPayload<S extends boolean | null | undefined | emails_sincronizadosDefaultArgs> = $Result.GetResult<Prisma.$emails_sincronizadosPayload, S>

  type emails_sincronizadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<emails_sincronizadosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Emails_sincronizadosCountAggregateInputType | true
    }

  export interface emails_sincronizadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['emails_sincronizados'], meta: { name: 'emails_sincronizados' } }
    /**
     * Find zero or one Emails_sincronizados that matches the filter.
     * @param {emails_sincronizadosFindUniqueArgs} args - Arguments to find a Emails_sincronizados
     * @example
     * // Get one Emails_sincronizados
     * const emails_sincronizados = await prisma.emails_sincronizados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends emails_sincronizadosFindUniqueArgs>(args: SelectSubset<T, emails_sincronizadosFindUniqueArgs<ExtArgs>>): Prisma__emails_sincronizadosClient<$Result.GetResult<Prisma.$emails_sincronizadosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emails_sincronizados that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {emails_sincronizadosFindUniqueOrThrowArgs} args - Arguments to find a Emails_sincronizados
     * @example
     * // Get one Emails_sincronizados
     * const emails_sincronizados = await prisma.emails_sincronizados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends emails_sincronizadosFindUniqueOrThrowArgs>(args: SelectSubset<T, emails_sincronizadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__emails_sincronizadosClient<$Result.GetResult<Prisma.$emails_sincronizadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emails_sincronizados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emails_sincronizadosFindFirstArgs} args - Arguments to find a Emails_sincronizados
     * @example
     * // Get one Emails_sincronizados
     * const emails_sincronizados = await prisma.emails_sincronizados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends emails_sincronizadosFindFirstArgs>(args?: SelectSubset<T, emails_sincronizadosFindFirstArgs<ExtArgs>>): Prisma__emails_sincronizadosClient<$Result.GetResult<Prisma.$emails_sincronizadosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emails_sincronizados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emails_sincronizadosFindFirstOrThrowArgs} args - Arguments to find a Emails_sincronizados
     * @example
     * // Get one Emails_sincronizados
     * const emails_sincronizados = await prisma.emails_sincronizados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends emails_sincronizadosFindFirstOrThrowArgs>(args?: SelectSubset<T, emails_sincronizadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__emails_sincronizadosClient<$Result.GetResult<Prisma.$emails_sincronizadosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emails_sincronizados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emails_sincronizadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails_sincronizados
     * const emails_sincronizados = await prisma.emails_sincronizados.findMany()
     * 
     * // Get first 10 Emails_sincronizados
     * const emails_sincronizados = await prisma.emails_sincronizados.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emails_sincronizadosWithIdOnly = await prisma.emails_sincronizados.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends emails_sincronizadosFindManyArgs>(args?: SelectSubset<T, emails_sincronizadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emails_sincronizadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emails_sincronizados.
     * @param {emails_sincronizadosCreateArgs} args - Arguments to create a Emails_sincronizados.
     * @example
     * // Create one Emails_sincronizados
     * const Emails_sincronizados = await prisma.emails_sincronizados.create({
     *   data: {
     *     // ... data to create a Emails_sincronizados
     *   }
     * })
     * 
     */
    create<T extends emails_sincronizadosCreateArgs>(args: SelectSubset<T, emails_sincronizadosCreateArgs<ExtArgs>>): Prisma__emails_sincronizadosClient<$Result.GetResult<Prisma.$emails_sincronizadosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emails_sincronizados.
     * @param {emails_sincronizadosCreateManyArgs} args - Arguments to create many Emails_sincronizados.
     * @example
     * // Create many Emails_sincronizados
     * const emails_sincronizados = await prisma.emails_sincronizados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends emails_sincronizadosCreateManyArgs>(args?: SelectSubset<T, emails_sincronizadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emails_sincronizados and returns the data saved in the database.
     * @param {emails_sincronizadosCreateManyAndReturnArgs} args - Arguments to create many Emails_sincronizados.
     * @example
     * // Create many Emails_sincronizados
     * const emails_sincronizados = await prisma.emails_sincronizados.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emails_sincronizados and only return the `id`
     * const emails_sincronizadosWithIdOnly = await prisma.emails_sincronizados.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends emails_sincronizadosCreateManyAndReturnArgs>(args?: SelectSubset<T, emails_sincronizadosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emails_sincronizadosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emails_sincronizados.
     * @param {emails_sincronizadosDeleteArgs} args - Arguments to delete one Emails_sincronizados.
     * @example
     * // Delete one Emails_sincronizados
     * const Emails_sincronizados = await prisma.emails_sincronizados.delete({
     *   where: {
     *     // ... filter to delete one Emails_sincronizados
     *   }
     * })
     * 
     */
    delete<T extends emails_sincronizadosDeleteArgs>(args: SelectSubset<T, emails_sincronizadosDeleteArgs<ExtArgs>>): Prisma__emails_sincronizadosClient<$Result.GetResult<Prisma.$emails_sincronizadosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emails_sincronizados.
     * @param {emails_sincronizadosUpdateArgs} args - Arguments to update one Emails_sincronizados.
     * @example
     * // Update one Emails_sincronizados
     * const emails_sincronizados = await prisma.emails_sincronizados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends emails_sincronizadosUpdateArgs>(args: SelectSubset<T, emails_sincronizadosUpdateArgs<ExtArgs>>): Prisma__emails_sincronizadosClient<$Result.GetResult<Prisma.$emails_sincronizadosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emails_sincronizados.
     * @param {emails_sincronizadosDeleteManyArgs} args - Arguments to filter Emails_sincronizados to delete.
     * @example
     * // Delete a few Emails_sincronizados
     * const { count } = await prisma.emails_sincronizados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends emails_sincronizadosDeleteManyArgs>(args?: SelectSubset<T, emails_sincronizadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails_sincronizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emails_sincronizadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails_sincronizados
     * const emails_sincronizados = await prisma.emails_sincronizados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends emails_sincronizadosUpdateManyArgs>(args: SelectSubset<T, emails_sincronizadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails_sincronizados and returns the data updated in the database.
     * @param {emails_sincronizadosUpdateManyAndReturnArgs} args - Arguments to update many Emails_sincronizados.
     * @example
     * // Update many Emails_sincronizados
     * const emails_sincronizados = await prisma.emails_sincronizados.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emails_sincronizados and only return the `id`
     * const emails_sincronizadosWithIdOnly = await prisma.emails_sincronizados.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends emails_sincronizadosUpdateManyAndReturnArgs>(args: SelectSubset<T, emails_sincronizadosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emails_sincronizadosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emails_sincronizados.
     * @param {emails_sincronizadosUpsertArgs} args - Arguments to update or create a Emails_sincronizados.
     * @example
     * // Update or create a Emails_sincronizados
     * const emails_sincronizados = await prisma.emails_sincronizados.upsert({
     *   create: {
     *     // ... data to create a Emails_sincronizados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emails_sincronizados we want to update
     *   }
     * })
     */
    upsert<T extends emails_sincronizadosUpsertArgs>(args: SelectSubset<T, emails_sincronizadosUpsertArgs<ExtArgs>>): Prisma__emails_sincronizadosClient<$Result.GetResult<Prisma.$emails_sincronizadosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emails_sincronizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emails_sincronizadosCountArgs} args - Arguments to filter Emails_sincronizados to count.
     * @example
     * // Count the number of Emails_sincronizados
     * const count = await prisma.emails_sincronizados.count({
     *   where: {
     *     // ... the filter for the Emails_sincronizados we want to count
     *   }
     * })
    **/
    count<T extends emails_sincronizadosCountArgs>(
      args?: Subset<T, emails_sincronizadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Emails_sincronizadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emails_sincronizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Emails_sincronizadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Emails_sincronizadosAggregateArgs>(args: Subset<T, Emails_sincronizadosAggregateArgs>): Prisma.PrismaPromise<GetEmails_sincronizadosAggregateType<T>>

    /**
     * Group by Emails_sincronizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emails_sincronizadosGroupByArgs} args - Group by arguments.
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
      T extends emails_sincronizadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: emails_sincronizadosGroupByArgs['orderBy'] }
        : { orderBy?: emails_sincronizadosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, emails_sincronizadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmails_sincronizadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the emails_sincronizados model
   */
  readonly fields: emails_sincronizadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for emails_sincronizados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__emails_sincronizadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuentas_gmail_asociadas<T extends cuentas_gmail_asociadasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cuentas_gmail_asociadasDefaultArgs<ExtArgs>>): Prisma__cuentas_gmail_asociadasClient<$Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the emails_sincronizados model
   */
  interface emails_sincronizadosFieldRefs {
    readonly id: FieldRef<"emails_sincronizados", 'Int'>
    readonly cuenta_gmail_id: FieldRef<"emails_sincronizados", 'Int'>
    readonly gmail_message_id: FieldRef<"emails_sincronizados", 'String'>
    readonly asunto: FieldRef<"emails_sincronizados", 'String'>
    readonly remitente_email: FieldRef<"emails_sincronizados", 'String'>
    readonly remitente_nombre: FieldRef<"emails_sincronizados", 'String'>
    readonly destinatario_email: FieldRef<"emails_sincronizados", 'String'>
    readonly fecha_recibido: FieldRef<"emails_sincronizados", 'DateTime'>
    readonly esta_leido: FieldRef<"emails_sincronizados", 'Boolean'>
    readonly tiene_adjuntos: FieldRef<"emails_sincronizados", 'Boolean'>
    readonly etiquetas_gmail: FieldRef<"emails_sincronizados", 'String[]'>
    readonly tamano_bytes: FieldRef<"emails_sincronizados", 'Int'>
    readonly fecha_sincronizado: FieldRef<"emails_sincronizados", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * emails_sincronizados findUnique
   */
  export type emails_sincronizadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails_sincronizados
     */
    select?: emails_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails_sincronizados
     */
    omit?: emails_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emails_sincronizadosInclude<ExtArgs> | null
    /**
     * Filter, which emails_sincronizados to fetch.
     */
    where: emails_sincronizadosWhereUniqueInput
  }

  /**
   * emails_sincronizados findUniqueOrThrow
   */
  export type emails_sincronizadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails_sincronizados
     */
    select?: emails_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails_sincronizados
     */
    omit?: emails_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emails_sincronizadosInclude<ExtArgs> | null
    /**
     * Filter, which emails_sincronizados to fetch.
     */
    where: emails_sincronizadosWhereUniqueInput
  }

  /**
   * emails_sincronizados findFirst
   */
  export type emails_sincronizadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails_sincronizados
     */
    select?: emails_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails_sincronizados
     */
    omit?: emails_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emails_sincronizadosInclude<ExtArgs> | null
    /**
     * Filter, which emails_sincronizados to fetch.
     */
    where?: emails_sincronizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails_sincronizados to fetch.
     */
    orderBy?: emails_sincronizadosOrderByWithRelationInput | emails_sincronizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emails_sincronizados.
     */
    cursor?: emails_sincronizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails_sincronizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails_sincronizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emails_sincronizados.
     */
    distinct?: Emails_sincronizadosScalarFieldEnum | Emails_sincronizadosScalarFieldEnum[]
  }

  /**
   * emails_sincronizados findFirstOrThrow
   */
  export type emails_sincronizadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails_sincronizados
     */
    select?: emails_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails_sincronizados
     */
    omit?: emails_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emails_sincronizadosInclude<ExtArgs> | null
    /**
     * Filter, which emails_sincronizados to fetch.
     */
    where?: emails_sincronizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails_sincronizados to fetch.
     */
    orderBy?: emails_sincronizadosOrderByWithRelationInput | emails_sincronizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emails_sincronizados.
     */
    cursor?: emails_sincronizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails_sincronizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails_sincronizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emails_sincronizados.
     */
    distinct?: Emails_sincronizadosScalarFieldEnum | Emails_sincronizadosScalarFieldEnum[]
  }

  /**
   * emails_sincronizados findMany
   */
  export type emails_sincronizadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails_sincronizados
     */
    select?: emails_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails_sincronizados
     */
    omit?: emails_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emails_sincronizadosInclude<ExtArgs> | null
    /**
     * Filter, which emails_sincronizados to fetch.
     */
    where?: emails_sincronizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails_sincronizados to fetch.
     */
    orderBy?: emails_sincronizadosOrderByWithRelationInput | emails_sincronizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing emails_sincronizados.
     */
    cursor?: emails_sincronizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails_sincronizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails_sincronizados.
     */
    skip?: number
    distinct?: Emails_sincronizadosScalarFieldEnum | Emails_sincronizadosScalarFieldEnum[]
  }

  /**
   * emails_sincronizados create
   */
  export type emails_sincronizadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails_sincronizados
     */
    select?: emails_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails_sincronizados
     */
    omit?: emails_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emails_sincronizadosInclude<ExtArgs> | null
    /**
     * The data needed to create a emails_sincronizados.
     */
    data: XOR<emails_sincronizadosCreateInput, emails_sincronizadosUncheckedCreateInput>
  }

  /**
   * emails_sincronizados createMany
   */
  export type emails_sincronizadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many emails_sincronizados.
     */
    data: emails_sincronizadosCreateManyInput | emails_sincronizadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * emails_sincronizados createManyAndReturn
   */
  export type emails_sincronizadosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails_sincronizados
     */
    select?: emails_sincronizadosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the emails_sincronizados
     */
    omit?: emails_sincronizadosOmit<ExtArgs> | null
    /**
     * The data used to create many emails_sincronizados.
     */
    data: emails_sincronizadosCreateManyInput | emails_sincronizadosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emails_sincronizadosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * emails_sincronizados update
   */
  export type emails_sincronizadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails_sincronizados
     */
    select?: emails_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails_sincronizados
     */
    omit?: emails_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emails_sincronizadosInclude<ExtArgs> | null
    /**
     * The data needed to update a emails_sincronizados.
     */
    data: XOR<emails_sincronizadosUpdateInput, emails_sincronizadosUncheckedUpdateInput>
    /**
     * Choose, which emails_sincronizados to update.
     */
    where: emails_sincronizadosWhereUniqueInput
  }

  /**
   * emails_sincronizados updateMany
   */
  export type emails_sincronizadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update emails_sincronizados.
     */
    data: XOR<emails_sincronizadosUpdateManyMutationInput, emails_sincronizadosUncheckedUpdateManyInput>
    /**
     * Filter which emails_sincronizados to update
     */
    where?: emails_sincronizadosWhereInput
    /**
     * Limit how many emails_sincronizados to update.
     */
    limit?: number
  }

  /**
   * emails_sincronizados updateManyAndReturn
   */
  export type emails_sincronizadosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails_sincronizados
     */
    select?: emails_sincronizadosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the emails_sincronizados
     */
    omit?: emails_sincronizadosOmit<ExtArgs> | null
    /**
     * The data used to update emails_sincronizados.
     */
    data: XOR<emails_sincronizadosUpdateManyMutationInput, emails_sincronizadosUncheckedUpdateManyInput>
    /**
     * Filter which emails_sincronizados to update
     */
    where?: emails_sincronizadosWhereInput
    /**
     * Limit how many emails_sincronizados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emails_sincronizadosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * emails_sincronizados upsert
   */
  export type emails_sincronizadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails_sincronizados
     */
    select?: emails_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails_sincronizados
     */
    omit?: emails_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emails_sincronizadosInclude<ExtArgs> | null
    /**
     * The filter to search for the emails_sincronizados to update in case it exists.
     */
    where: emails_sincronizadosWhereUniqueInput
    /**
     * In case the emails_sincronizados found by the `where` argument doesn't exist, create a new emails_sincronizados with this data.
     */
    create: XOR<emails_sincronizadosCreateInput, emails_sincronizadosUncheckedCreateInput>
    /**
     * In case the emails_sincronizados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<emails_sincronizadosUpdateInput, emails_sincronizadosUncheckedUpdateInput>
  }

  /**
   * emails_sincronizados delete
   */
  export type emails_sincronizadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails_sincronizados
     */
    select?: emails_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails_sincronizados
     */
    omit?: emails_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emails_sincronizadosInclude<ExtArgs> | null
    /**
     * Filter which emails_sincronizados to delete.
     */
    where: emails_sincronizadosWhereUniqueInput
  }

  /**
   * emails_sincronizados deleteMany
   */
  export type emails_sincronizadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which emails_sincronizados to delete
     */
    where?: emails_sincronizadosWhereInput
    /**
     * Limit how many emails_sincronizados to delete.
     */
    limit?: number
  }

  /**
   * emails_sincronizados without action
   */
  export type emails_sincronizadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails_sincronizados
     */
    select?: emails_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails_sincronizados
     */
    omit?: emails_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emails_sincronizadosInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesMinAggregateOutputType = {
    id: string | null
    conversation_id: string | null
    whatsapp_account_id: string | null
    phone: string | null
    message: string | null
    timestamp: Date | null
    respondido: boolean | null
    canal: string | null
    categoria: string | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: string | null
    conversation_id: string | null
    whatsapp_account_id: string | null
    phone: string | null
    message: string | null
    timestamp: Date | null
    respondido: boolean | null
    canal: string | null
    categoria: string | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    conversation_id: number
    whatsapp_account_id: number
    phone: number
    message: number
    timestamp: number
    respondido: number
    canal: number
    categoria: number
    _all: number
  }


  export type MessagesMinAggregateInputType = {
    id?: true
    conversation_id?: true
    whatsapp_account_id?: true
    phone?: true
    message?: true
    timestamp?: true
    respondido?: true
    canal?: true
    categoria?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    conversation_id?: true
    whatsapp_account_id?: true
    phone?: true
    message?: true
    timestamp?: true
    respondido?: true
    canal?: true
    categoria?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    conversation_id?: true
    whatsapp_account_id?: true
    phone?: true
    message?: true
    timestamp?: true
    respondido?: true
    canal?: true
    categoria?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: string
    conversation_id: string
    whatsapp_account_id: string
    phone: string | null
    message: string | null
    timestamp: Date | null
    respondido: boolean | null
    canal: string | null
    categoria: string | null
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversation_id?: boolean
    whatsapp_account_id?: boolean
    phone?: boolean
    message?: boolean
    timestamp?: boolean
    respondido?: boolean
    canal?: boolean
    categoria?: boolean
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
    whatsapp_accounts?: boolean | whatsapp_accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversation_id?: boolean
    whatsapp_account_id?: boolean
    phone?: boolean
    message?: boolean
    timestamp?: boolean
    respondido?: boolean
    canal?: boolean
    categoria?: boolean
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
    whatsapp_accounts?: boolean | whatsapp_accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversation_id?: boolean
    whatsapp_account_id?: boolean
    phone?: boolean
    message?: boolean
    timestamp?: boolean
    respondido?: boolean
    canal?: boolean
    categoria?: boolean
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
    whatsapp_accounts?: boolean | whatsapp_accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    id?: boolean
    conversation_id?: boolean
    whatsapp_account_id?: boolean
    phone?: boolean
    message?: boolean
    timestamp?: boolean
    respondido?: boolean
    canal?: boolean
    categoria?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversation_id" | "whatsapp_account_id" | "phone" | "message" | "timestamp" | "respondido" | "canal" | "categoria", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
    whatsapp_accounts?: boolean | whatsapp_accountsDefaultArgs<ExtArgs>
  }
  export type messagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
    whatsapp_accounts?: boolean | whatsapp_accountsDefaultArgs<ExtArgs>
  }
  export type messagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
    whatsapp_accounts?: boolean | whatsapp_accountsDefaultArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      conversations: Prisma.$conversationsPayload<ExtArgs>
      whatsapp_accounts: Prisma.$whatsapp_accountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversation_id: string
      whatsapp_account_id: string
      phone: string | null
      message: string | null
      timestamp: Date | null
      respondido: boolean | null
      canal: string | null
      categoria: string | null
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
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
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends conversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, conversationsDefaultArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    whatsapp_accounts<T extends whatsapp_accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, whatsapp_accountsDefaultArgs<ExtArgs>>): Prisma__whatsapp_accountsClient<$Result.GetResult<Prisma.$whatsapp_accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'String'>
    readonly conversation_id: FieldRef<"messages", 'String'>
    readonly whatsapp_account_id: FieldRef<"messages", 'String'>
    readonly phone: FieldRef<"messages", 'String'>
    readonly message: FieldRef<"messages", 'String'>
    readonly timestamp: FieldRef<"messages", 'DateTime'>
    readonly respondido: FieldRef<"messages", 'Boolean'>
    readonly canal: FieldRef<"messages", 'String'>
    readonly categoria: FieldRef<"messages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages createManyAndReturn
   */
  export type messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages updateManyAndReturn
   */
  export type messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
  }


  /**
   * Model sesiones_jwt
   */

  export type AggregateSesiones_jwt = {
    _count: Sesiones_jwtCountAggregateOutputType | null
    _avg: Sesiones_jwtAvgAggregateOutputType | null
    _sum: Sesiones_jwtSumAggregateOutputType | null
    _min: Sesiones_jwtMinAggregateOutputType | null
    _max: Sesiones_jwtMaxAggregateOutputType | null
  }

  export type Sesiones_jwtAvgAggregateOutputType = {
    id: number | null
    usuario_principal_id: number | null
  }

  export type Sesiones_jwtSumAggregateOutputType = {
    id: number | null
    usuario_principal_id: number | null
  }

  export type Sesiones_jwtMinAggregateOutputType = {
    id: number | null
    usuario_principal_id: number | null
    jwt_token: string | null
    expira_en: Date | null
    fecha_creacion: Date | null
    esta_activa: boolean | null
    ip_origen: string | null
    user_agent: string | null
  }

  export type Sesiones_jwtMaxAggregateOutputType = {
    id: number | null
    usuario_principal_id: number | null
    jwt_token: string | null
    expira_en: Date | null
    fecha_creacion: Date | null
    esta_activa: boolean | null
    ip_origen: string | null
    user_agent: string | null
  }

  export type Sesiones_jwtCountAggregateOutputType = {
    id: number
    usuario_principal_id: number
    jwt_token: number
    expira_en: number
    fecha_creacion: number
    esta_activa: number
    ip_origen: number
    user_agent: number
    _all: number
  }


  export type Sesiones_jwtAvgAggregateInputType = {
    id?: true
    usuario_principal_id?: true
  }

  export type Sesiones_jwtSumAggregateInputType = {
    id?: true
    usuario_principal_id?: true
  }

  export type Sesiones_jwtMinAggregateInputType = {
    id?: true
    usuario_principal_id?: true
    jwt_token?: true
    expira_en?: true
    fecha_creacion?: true
    esta_activa?: true
    ip_origen?: true
    user_agent?: true
  }

  export type Sesiones_jwtMaxAggregateInputType = {
    id?: true
    usuario_principal_id?: true
    jwt_token?: true
    expira_en?: true
    fecha_creacion?: true
    esta_activa?: true
    ip_origen?: true
    user_agent?: true
  }

  export type Sesiones_jwtCountAggregateInputType = {
    id?: true
    usuario_principal_id?: true
    jwt_token?: true
    expira_en?: true
    fecha_creacion?: true
    esta_activa?: true
    ip_origen?: true
    user_agent?: true
    _all?: true
  }

  export type Sesiones_jwtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sesiones_jwt to aggregate.
     */
    where?: sesiones_jwtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sesiones_jwts to fetch.
     */
    orderBy?: sesiones_jwtOrderByWithRelationInput | sesiones_jwtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sesiones_jwtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sesiones_jwts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sesiones_jwts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sesiones_jwts
    **/
    _count?: true | Sesiones_jwtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sesiones_jwtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sesiones_jwtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sesiones_jwtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sesiones_jwtMaxAggregateInputType
  }

  export type GetSesiones_jwtAggregateType<T extends Sesiones_jwtAggregateArgs> = {
        [P in keyof T & keyof AggregateSesiones_jwt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSesiones_jwt[P]>
      : GetScalarType<T[P], AggregateSesiones_jwt[P]>
  }




  export type sesiones_jwtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sesiones_jwtWhereInput
    orderBy?: sesiones_jwtOrderByWithAggregationInput | sesiones_jwtOrderByWithAggregationInput[]
    by: Sesiones_jwtScalarFieldEnum[] | Sesiones_jwtScalarFieldEnum
    having?: sesiones_jwtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sesiones_jwtCountAggregateInputType | true
    _avg?: Sesiones_jwtAvgAggregateInputType
    _sum?: Sesiones_jwtSumAggregateInputType
    _min?: Sesiones_jwtMinAggregateInputType
    _max?: Sesiones_jwtMaxAggregateInputType
  }

  export type Sesiones_jwtGroupByOutputType = {
    id: number
    usuario_principal_id: number
    jwt_token: string
    expira_en: Date
    fecha_creacion: Date | null
    esta_activa: boolean | null
    ip_origen: string | null
    user_agent: string | null
    _count: Sesiones_jwtCountAggregateOutputType | null
    _avg: Sesiones_jwtAvgAggregateOutputType | null
    _sum: Sesiones_jwtSumAggregateOutputType | null
    _min: Sesiones_jwtMinAggregateOutputType | null
    _max: Sesiones_jwtMaxAggregateOutputType | null
  }

  type GetSesiones_jwtGroupByPayload<T extends sesiones_jwtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sesiones_jwtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sesiones_jwtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sesiones_jwtGroupByOutputType[P]>
            : GetScalarType<T[P], Sesiones_jwtGroupByOutputType[P]>
        }
      >
    >


  export type sesiones_jwtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_principal_id?: boolean
    jwt_token?: boolean
    expira_en?: boolean
    fecha_creacion?: boolean
    esta_activa?: boolean
    ip_origen?: boolean
    user_agent?: boolean
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sesiones_jwt"]>

  export type sesiones_jwtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_principal_id?: boolean
    jwt_token?: boolean
    expira_en?: boolean
    fecha_creacion?: boolean
    esta_activa?: boolean
    ip_origen?: boolean
    user_agent?: boolean
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sesiones_jwt"]>

  export type sesiones_jwtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_principal_id?: boolean
    jwt_token?: boolean
    expira_en?: boolean
    fecha_creacion?: boolean
    esta_activa?: boolean
    ip_origen?: boolean
    user_agent?: boolean
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sesiones_jwt"]>

  export type sesiones_jwtSelectScalar = {
    id?: boolean
    usuario_principal_id?: boolean
    jwt_token?: boolean
    expira_en?: boolean
    fecha_creacion?: boolean
    esta_activa?: boolean
    ip_origen?: boolean
    user_agent?: boolean
  }

  export type sesiones_jwtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_principal_id" | "jwt_token" | "expira_en" | "fecha_creacion" | "esta_activa" | "ip_origen" | "user_agent", ExtArgs["result"]["sesiones_jwt"]>
  export type sesiones_jwtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
  }
  export type sesiones_jwtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
  }
  export type sesiones_jwtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
  }

  export type $sesiones_jwtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sesiones_jwt"
    objects: {
      usuarios_principales: Prisma.$usuarios_principalesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_principal_id: number
      jwt_token: string
      expira_en: Date
      fecha_creacion: Date | null
      esta_activa: boolean | null
      ip_origen: string | null
      user_agent: string | null
    }, ExtArgs["result"]["sesiones_jwt"]>
    composites: {}
  }

  type sesiones_jwtGetPayload<S extends boolean | null | undefined | sesiones_jwtDefaultArgs> = $Result.GetResult<Prisma.$sesiones_jwtPayload, S>

  type sesiones_jwtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sesiones_jwtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sesiones_jwtCountAggregateInputType | true
    }

  export interface sesiones_jwtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sesiones_jwt'], meta: { name: 'sesiones_jwt' } }
    /**
     * Find zero or one Sesiones_jwt that matches the filter.
     * @param {sesiones_jwtFindUniqueArgs} args - Arguments to find a Sesiones_jwt
     * @example
     * // Get one Sesiones_jwt
     * const sesiones_jwt = await prisma.sesiones_jwt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sesiones_jwtFindUniqueArgs>(args: SelectSubset<T, sesiones_jwtFindUniqueArgs<ExtArgs>>): Prisma__sesiones_jwtClient<$Result.GetResult<Prisma.$sesiones_jwtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sesiones_jwt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sesiones_jwtFindUniqueOrThrowArgs} args - Arguments to find a Sesiones_jwt
     * @example
     * // Get one Sesiones_jwt
     * const sesiones_jwt = await prisma.sesiones_jwt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sesiones_jwtFindUniqueOrThrowArgs>(args: SelectSubset<T, sesiones_jwtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sesiones_jwtClient<$Result.GetResult<Prisma.$sesiones_jwtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sesiones_jwt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sesiones_jwtFindFirstArgs} args - Arguments to find a Sesiones_jwt
     * @example
     * // Get one Sesiones_jwt
     * const sesiones_jwt = await prisma.sesiones_jwt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sesiones_jwtFindFirstArgs>(args?: SelectSubset<T, sesiones_jwtFindFirstArgs<ExtArgs>>): Prisma__sesiones_jwtClient<$Result.GetResult<Prisma.$sesiones_jwtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sesiones_jwt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sesiones_jwtFindFirstOrThrowArgs} args - Arguments to find a Sesiones_jwt
     * @example
     * // Get one Sesiones_jwt
     * const sesiones_jwt = await prisma.sesiones_jwt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sesiones_jwtFindFirstOrThrowArgs>(args?: SelectSubset<T, sesiones_jwtFindFirstOrThrowArgs<ExtArgs>>): Prisma__sesiones_jwtClient<$Result.GetResult<Prisma.$sesiones_jwtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sesiones_jwts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sesiones_jwtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sesiones_jwts
     * const sesiones_jwts = await prisma.sesiones_jwt.findMany()
     * 
     * // Get first 10 Sesiones_jwts
     * const sesiones_jwts = await prisma.sesiones_jwt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sesiones_jwtWithIdOnly = await prisma.sesiones_jwt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sesiones_jwtFindManyArgs>(args?: SelectSubset<T, sesiones_jwtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sesiones_jwtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sesiones_jwt.
     * @param {sesiones_jwtCreateArgs} args - Arguments to create a Sesiones_jwt.
     * @example
     * // Create one Sesiones_jwt
     * const Sesiones_jwt = await prisma.sesiones_jwt.create({
     *   data: {
     *     // ... data to create a Sesiones_jwt
     *   }
     * })
     * 
     */
    create<T extends sesiones_jwtCreateArgs>(args: SelectSubset<T, sesiones_jwtCreateArgs<ExtArgs>>): Prisma__sesiones_jwtClient<$Result.GetResult<Prisma.$sesiones_jwtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sesiones_jwts.
     * @param {sesiones_jwtCreateManyArgs} args - Arguments to create many Sesiones_jwts.
     * @example
     * // Create many Sesiones_jwts
     * const sesiones_jwt = await prisma.sesiones_jwt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sesiones_jwtCreateManyArgs>(args?: SelectSubset<T, sesiones_jwtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sesiones_jwts and returns the data saved in the database.
     * @param {sesiones_jwtCreateManyAndReturnArgs} args - Arguments to create many Sesiones_jwts.
     * @example
     * // Create many Sesiones_jwts
     * const sesiones_jwt = await prisma.sesiones_jwt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sesiones_jwts and only return the `id`
     * const sesiones_jwtWithIdOnly = await prisma.sesiones_jwt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sesiones_jwtCreateManyAndReturnArgs>(args?: SelectSubset<T, sesiones_jwtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sesiones_jwtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sesiones_jwt.
     * @param {sesiones_jwtDeleteArgs} args - Arguments to delete one Sesiones_jwt.
     * @example
     * // Delete one Sesiones_jwt
     * const Sesiones_jwt = await prisma.sesiones_jwt.delete({
     *   where: {
     *     // ... filter to delete one Sesiones_jwt
     *   }
     * })
     * 
     */
    delete<T extends sesiones_jwtDeleteArgs>(args: SelectSubset<T, sesiones_jwtDeleteArgs<ExtArgs>>): Prisma__sesiones_jwtClient<$Result.GetResult<Prisma.$sesiones_jwtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sesiones_jwt.
     * @param {sesiones_jwtUpdateArgs} args - Arguments to update one Sesiones_jwt.
     * @example
     * // Update one Sesiones_jwt
     * const sesiones_jwt = await prisma.sesiones_jwt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sesiones_jwtUpdateArgs>(args: SelectSubset<T, sesiones_jwtUpdateArgs<ExtArgs>>): Prisma__sesiones_jwtClient<$Result.GetResult<Prisma.$sesiones_jwtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sesiones_jwts.
     * @param {sesiones_jwtDeleteManyArgs} args - Arguments to filter Sesiones_jwts to delete.
     * @example
     * // Delete a few Sesiones_jwts
     * const { count } = await prisma.sesiones_jwt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sesiones_jwtDeleteManyArgs>(args?: SelectSubset<T, sesiones_jwtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sesiones_jwts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sesiones_jwtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sesiones_jwts
     * const sesiones_jwt = await prisma.sesiones_jwt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sesiones_jwtUpdateManyArgs>(args: SelectSubset<T, sesiones_jwtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sesiones_jwts and returns the data updated in the database.
     * @param {sesiones_jwtUpdateManyAndReturnArgs} args - Arguments to update many Sesiones_jwts.
     * @example
     * // Update many Sesiones_jwts
     * const sesiones_jwt = await prisma.sesiones_jwt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sesiones_jwts and only return the `id`
     * const sesiones_jwtWithIdOnly = await prisma.sesiones_jwt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sesiones_jwtUpdateManyAndReturnArgs>(args: SelectSubset<T, sesiones_jwtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sesiones_jwtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sesiones_jwt.
     * @param {sesiones_jwtUpsertArgs} args - Arguments to update or create a Sesiones_jwt.
     * @example
     * // Update or create a Sesiones_jwt
     * const sesiones_jwt = await prisma.sesiones_jwt.upsert({
     *   create: {
     *     // ... data to create a Sesiones_jwt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sesiones_jwt we want to update
     *   }
     * })
     */
    upsert<T extends sesiones_jwtUpsertArgs>(args: SelectSubset<T, sesiones_jwtUpsertArgs<ExtArgs>>): Prisma__sesiones_jwtClient<$Result.GetResult<Prisma.$sesiones_jwtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sesiones_jwts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sesiones_jwtCountArgs} args - Arguments to filter Sesiones_jwts to count.
     * @example
     * // Count the number of Sesiones_jwts
     * const count = await prisma.sesiones_jwt.count({
     *   where: {
     *     // ... the filter for the Sesiones_jwts we want to count
     *   }
     * })
    **/
    count<T extends sesiones_jwtCountArgs>(
      args?: Subset<T, sesiones_jwtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sesiones_jwtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sesiones_jwt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sesiones_jwtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sesiones_jwtAggregateArgs>(args: Subset<T, Sesiones_jwtAggregateArgs>): Prisma.PrismaPromise<GetSesiones_jwtAggregateType<T>>

    /**
     * Group by Sesiones_jwt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sesiones_jwtGroupByArgs} args - Group by arguments.
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
      T extends sesiones_jwtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sesiones_jwtGroupByArgs['orderBy'] }
        : { orderBy?: sesiones_jwtGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, sesiones_jwtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSesiones_jwtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sesiones_jwt model
   */
  readonly fields: sesiones_jwtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sesiones_jwt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sesiones_jwtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios_principales<T extends usuarios_principalesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarios_principalesDefaultArgs<ExtArgs>>): Prisma__usuarios_principalesClient<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sesiones_jwt model
   */
  interface sesiones_jwtFieldRefs {
    readonly id: FieldRef<"sesiones_jwt", 'Int'>
    readonly usuario_principal_id: FieldRef<"sesiones_jwt", 'Int'>
    readonly jwt_token: FieldRef<"sesiones_jwt", 'String'>
    readonly expira_en: FieldRef<"sesiones_jwt", 'DateTime'>
    readonly fecha_creacion: FieldRef<"sesiones_jwt", 'DateTime'>
    readonly esta_activa: FieldRef<"sesiones_jwt", 'Boolean'>
    readonly ip_origen: FieldRef<"sesiones_jwt", 'String'>
    readonly user_agent: FieldRef<"sesiones_jwt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sesiones_jwt findUnique
   */
  export type sesiones_jwtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_jwt
     */
    select?: sesiones_jwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_jwt
     */
    omit?: sesiones_jwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_jwtInclude<ExtArgs> | null
    /**
     * Filter, which sesiones_jwt to fetch.
     */
    where: sesiones_jwtWhereUniqueInput
  }

  /**
   * sesiones_jwt findUniqueOrThrow
   */
  export type sesiones_jwtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_jwt
     */
    select?: sesiones_jwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_jwt
     */
    omit?: sesiones_jwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_jwtInclude<ExtArgs> | null
    /**
     * Filter, which sesiones_jwt to fetch.
     */
    where: sesiones_jwtWhereUniqueInput
  }

  /**
   * sesiones_jwt findFirst
   */
  export type sesiones_jwtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_jwt
     */
    select?: sesiones_jwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_jwt
     */
    omit?: sesiones_jwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_jwtInclude<ExtArgs> | null
    /**
     * Filter, which sesiones_jwt to fetch.
     */
    where?: sesiones_jwtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sesiones_jwts to fetch.
     */
    orderBy?: sesiones_jwtOrderByWithRelationInput | sesiones_jwtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sesiones_jwts.
     */
    cursor?: sesiones_jwtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sesiones_jwts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sesiones_jwts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sesiones_jwts.
     */
    distinct?: Sesiones_jwtScalarFieldEnum | Sesiones_jwtScalarFieldEnum[]
  }

  /**
   * sesiones_jwt findFirstOrThrow
   */
  export type sesiones_jwtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_jwt
     */
    select?: sesiones_jwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_jwt
     */
    omit?: sesiones_jwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_jwtInclude<ExtArgs> | null
    /**
     * Filter, which sesiones_jwt to fetch.
     */
    where?: sesiones_jwtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sesiones_jwts to fetch.
     */
    orderBy?: sesiones_jwtOrderByWithRelationInput | sesiones_jwtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sesiones_jwts.
     */
    cursor?: sesiones_jwtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sesiones_jwts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sesiones_jwts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sesiones_jwts.
     */
    distinct?: Sesiones_jwtScalarFieldEnum | Sesiones_jwtScalarFieldEnum[]
  }

  /**
   * sesiones_jwt findMany
   */
  export type sesiones_jwtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_jwt
     */
    select?: sesiones_jwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_jwt
     */
    omit?: sesiones_jwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_jwtInclude<ExtArgs> | null
    /**
     * Filter, which sesiones_jwts to fetch.
     */
    where?: sesiones_jwtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sesiones_jwts to fetch.
     */
    orderBy?: sesiones_jwtOrderByWithRelationInput | sesiones_jwtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sesiones_jwts.
     */
    cursor?: sesiones_jwtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sesiones_jwts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sesiones_jwts.
     */
    skip?: number
    distinct?: Sesiones_jwtScalarFieldEnum | Sesiones_jwtScalarFieldEnum[]
  }

  /**
   * sesiones_jwt create
   */
  export type sesiones_jwtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_jwt
     */
    select?: sesiones_jwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_jwt
     */
    omit?: sesiones_jwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_jwtInclude<ExtArgs> | null
    /**
     * The data needed to create a sesiones_jwt.
     */
    data: XOR<sesiones_jwtCreateInput, sesiones_jwtUncheckedCreateInput>
  }

  /**
   * sesiones_jwt createMany
   */
  export type sesiones_jwtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sesiones_jwts.
     */
    data: sesiones_jwtCreateManyInput | sesiones_jwtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sesiones_jwt createManyAndReturn
   */
  export type sesiones_jwtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_jwt
     */
    select?: sesiones_jwtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_jwt
     */
    omit?: sesiones_jwtOmit<ExtArgs> | null
    /**
     * The data used to create many sesiones_jwts.
     */
    data: sesiones_jwtCreateManyInput | sesiones_jwtCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_jwtIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sesiones_jwt update
   */
  export type sesiones_jwtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_jwt
     */
    select?: sesiones_jwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_jwt
     */
    omit?: sesiones_jwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_jwtInclude<ExtArgs> | null
    /**
     * The data needed to update a sesiones_jwt.
     */
    data: XOR<sesiones_jwtUpdateInput, sesiones_jwtUncheckedUpdateInput>
    /**
     * Choose, which sesiones_jwt to update.
     */
    where: sesiones_jwtWhereUniqueInput
  }

  /**
   * sesiones_jwt updateMany
   */
  export type sesiones_jwtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sesiones_jwts.
     */
    data: XOR<sesiones_jwtUpdateManyMutationInput, sesiones_jwtUncheckedUpdateManyInput>
    /**
     * Filter which sesiones_jwts to update
     */
    where?: sesiones_jwtWhereInput
    /**
     * Limit how many sesiones_jwts to update.
     */
    limit?: number
  }

  /**
   * sesiones_jwt updateManyAndReturn
   */
  export type sesiones_jwtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_jwt
     */
    select?: sesiones_jwtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_jwt
     */
    omit?: sesiones_jwtOmit<ExtArgs> | null
    /**
     * The data used to update sesiones_jwts.
     */
    data: XOR<sesiones_jwtUpdateManyMutationInput, sesiones_jwtUncheckedUpdateManyInput>
    /**
     * Filter which sesiones_jwts to update
     */
    where?: sesiones_jwtWhereInput
    /**
     * Limit how many sesiones_jwts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_jwtIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sesiones_jwt upsert
   */
  export type sesiones_jwtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_jwt
     */
    select?: sesiones_jwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_jwt
     */
    omit?: sesiones_jwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_jwtInclude<ExtArgs> | null
    /**
     * The filter to search for the sesiones_jwt to update in case it exists.
     */
    where: sesiones_jwtWhereUniqueInput
    /**
     * In case the sesiones_jwt found by the `where` argument doesn't exist, create a new sesiones_jwt with this data.
     */
    create: XOR<sesiones_jwtCreateInput, sesiones_jwtUncheckedCreateInput>
    /**
     * In case the sesiones_jwt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sesiones_jwtUpdateInput, sesiones_jwtUncheckedUpdateInput>
  }

  /**
   * sesiones_jwt delete
   */
  export type sesiones_jwtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_jwt
     */
    select?: sesiones_jwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_jwt
     */
    omit?: sesiones_jwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_jwtInclude<ExtArgs> | null
    /**
     * Filter which sesiones_jwt to delete.
     */
    where: sesiones_jwtWhereUniqueInput
  }

  /**
   * sesiones_jwt deleteMany
   */
  export type sesiones_jwtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sesiones_jwts to delete
     */
    where?: sesiones_jwtWhereInput
    /**
     * Limit how many sesiones_jwts to delete.
     */
    limit?: number
  }

  /**
   * sesiones_jwt without action
   */
  export type sesiones_jwtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_jwt
     */
    select?: sesiones_jwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_jwt
     */
    omit?: sesiones_jwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_jwtInclude<ExtArgs> | null
  }


  /**
   * Model usuarios_principales
   */

  export type AggregateUsuarios_principales = {
    _count: Usuarios_principalesCountAggregateOutputType | null
    _avg: Usuarios_principalesAvgAggregateOutputType | null
    _sum: Usuarios_principalesSumAggregateOutputType | null
    _min: Usuarios_principalesMinAggregateOutputType | null
    _max: Usuarios_principalesMaxAggregateOutputType | null
  }

  export type Usuarios_principalesAvgAggregateOutputType = {
    id: number | null
  }

  export type Usuarios_principalesSumAggregateOutputType = {
    id: number | null
  }

  export type Usuarios_principalesMinAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    nombre: string | null
    fecha_registro: Date | null
    ultima_actualizacion: Date | null
    estado: string | null
    email_verificado: boolean | null
  }

  export type Usuarios_principalesMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    nombre: string | null
    fecha_registro: Date | null
    ultima_actualizacion: Date | null
    estado: string | null
    email_verificado: boolean | null
  }

  export type Usuarios_principalesCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    nombre: number
    fecha_registro: number
    ultima_actualizacion: number
    estado: number
    email_verificado: number
    _all: number
  }


  export type Usuarios_principalesAvgAggregateInputType = {
    id?: true
  }

  export type Usuarios_principalesSumAggregateInputType = {
    id?: true
  }

  export type Usuarios_principalesMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    nombre?: true
    fecha_registro?: true
    ultima_actualizacion?: true
    estado?: true
    email_verificado?: true
  }

  export type Usuarios_principalesMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    nombre?: true
    fecha_registro?: true
    ultima_actualizacion?: true
    estado?: true
    email_verificado?: true
  }

  export type Usuarios_principalesCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    nombre?: true
    fecha_registro?: true
    ultima_actualizacion?: true
    estado?: true
    email_verificado?: true
    _all?: true
  }

  export type Usuarios_principalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios_principales to aggregate.
     */
    where?: usuarios_principalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_principales to fetch.
     */
    orderBy?: usuarios_principalesOrderByWithRelationInput | usuarios_principalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarios_principalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_principales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_principales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios_principales
    **/
    _count?: true | Usuarios_principalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuarios_principalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuarios_principalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuarios_principalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuarios_principalesMaxAggregateInputType
  }

  export type GetUsuarios_principalesAggregateType<T extends Usuarios_principalesAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios_principales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios_principales[P]>
      : GetScalarType<T[P], AggregateUsuarios_principales[P]>
  }




  export type usuarios_principalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarios_principalesWhereInput
    orderBy?: usuarios_principalesOrderByWithAggregationInput | usuarios_principalesOrderByWithAggregationInput[]
    by: Usuarios_principalesScalarFieldEnum[] | Usuarios_principalesScalarFieldEnum
    having?: usuarios_principalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuarios_principalesCountAggregateInputType | true
    _avg?: Usuarios_principalesAvgAggregateInputType
    _sum?: Usuarios_principalesSumAggregateInputType
    _min?: Usuarios_principalesMinAggregateInputType
    _max?: Usuarios_principalesMaxAggregateInputType
  }

  export type Usuarios_principalesGroupByOutputType = {
    id: number
    email: string
    password_hash: string
    nombre: string
    fecha_registro: Date | null
    ultima_actualizacion: Date | null
    estado: string | null
    email_verificado: boolean | null
    _count: Usuarios_principalesCountAggregateOutputType | null
    _avg: Usuarios_principalesAvgAggregateOutputType | null
    _sum: Usuarios_principalesSumAggregateOutputType | null
    _min: Usuarios_principalesMinAggregateOutputType | null
    _max: Usuarios_principalesMaxAggregateOutputType | null
  }

  type GetUsuarios_principalesGroupByPayload<T extends usuarios_principalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuarios_principalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuarios_principalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuarios_principalesGroupByOutputType[P]>
            : GetScalarType<T[P], Usuarios_principalesGroupByOutputType[P]>
        }
      >
    >


  export type usuarios_principalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    nombre?: boolean
    fecha_registro?: boolean
    ultima_actualizacion?: boolean
    estado?: boolean
    email_verificado?: boolean
    cuentas_gmail_asociadas?: boolean | usuarios_principales$cuentas_gmail_asociadasArgs<ExtArgs>
    sesiones_jwt?: boolean | usuarios_principales$sesiones_jwtArgs<ExtArgs>
    whatsapp_accounts?: boolean | usuarios_principales$whatsapp_accountsArgs<ExtArgs>
    _count?: boolean | Usuarios_principalesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios_principales"]>

  export type usuarios_principalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    nombre?: boolean
    fecha_registro?: boolean
    ultima_actualizacion?: boolean
    estado?: boolean
    email_verificado?: boolean
  }, ExtArgs["result"]["usuarios_principales"]>

  export type usuarios_principalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    nombre?: boolean
    fecha_registro?: boolean
    ultima_actualizacion?: boolean
    estado?: boolean
    email_verificado?: boolean
  }, ExtArgs["result"]["usuarios_principales"]>

  export type usuarios_principalesSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    nombre?: boolean
    fecha_registro?: boolean
    ultima_actualizacion?: boolean
    estado?: boolean
    email_verificado?: boolean
  }

  export type usuarios_principalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "nombre" | "fecha_registro" | "ultima_actualizacion" | "estado" | "email_verificado", ExtArgs["result"]["usuarios_principales"]>
  export type usuarios_principalesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuentas_gmail_asociadas?: boolean | usuarios_principales$cuentas_gmail_asociadasArgs<ExtArgs>
    sesiones_jwt?: boolean | usuarios_principales$sesiones_jwtArgs<ExtArgs>
    whatsapp_accounts?: boolean | usuarios_principales$whatsapp_accountsArgs<ExtArgs>
    _count?: boolean | Usuarios_principalesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuarios_principalesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuarios_principalesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuarios_principalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios_principales"
    objects: {
      cuentas_gmail_asociadas: Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>[]
      sesiones_jwt: Prisma.$sesiones_jwtPayload<ExtArgs>[]
      whatsapp_accounts: Prisma.$whatsapp_accountsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password_hash: string
      nombre: string
      fecha_registro: Date | null
      ultima_actualizacion: Date | null
      estado: string | null
      email_verificado: boolean | null
    }, ExtArgs["result"]["usuarios_principales"]>
    composites: {}
  }

  type usuarios_principalesGetPayload<S extends boolean | null | undefined | usuarios_principalesDefaultArgs> = $Result.GetResult<Prisma.$usuarios_principalesPayload, S>

  type usuarios_principalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarios_principalesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Usuarios_principalesCountAggregateInputType | true
    }

  export interface usuarios_principalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios_principales'], meta: { name: 'usuarios_principales' } }
    /**
     * Find zero or one Usuarios_principales that matches the filter.
     * @param {usuarios_principalesFindUniqueArgs} args - Arguments to find a Usuarios_principales
     * @example
     * // Get one Usuarios_principales
     * const usuarios_principales = await prisma.usuarios_principales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarios_principalesFindUniqueArgs>(args: SelectSubset<T, usuarios_principalesFindUniqueArgs<ExtArgs>>): Prisma__usuarios_principalesClient<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios_principales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarios_principalesFindUniqueOrThrowArgs} args - Arguments to find a Usuarios_principales
     * @example
     * // Get one Usuarios_principales
     * const usuarios_principales = await prisma.usuarios_principales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarios_principalesFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarios_principalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarios_principalesClient<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios_principales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_principalesFindFirstArgs} args - Arguments to find a Usuarios_principales
     * @example
     * // Get one Usuarios_principales
     * const usuarios_principales = await prisma.usuarios_principales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarios_principalesFindFirstArgs>(args?: SelectSubset<T, usuarios_principalesFindFirstArgs<ExtArgs>>): Prisma__usuarios_principalesClient<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios_principales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_principalesFindFirstOrThrowArgs} args - Arguments to find a Usuarios_principales
     * @example
     * // Get one Usuarios_principales
     * const usuarios_principales = await prisma.usuarios_principales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarios_principalesFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarios_principalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarios_principalesClient<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios_principales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_principalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios_principales
     * const usuarios_principales = await prisma.usuarios_principales.findMany()
     * 
     * // Get first 10 Usuarios_principales
     * const usuarios_principales = await prisma.usuarios_principales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarios_principalesWithIdOnly = await prisma.usuarios_principales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarios_principalesFindManyArgs>(args?: SelectSubset<T, usuarios_principalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios_principales.
     * @param {usuarios_principalesCreateArgs} args - Arguments to create a Usuarios_principales.
     * @example
     * // Create one Usuarios_principales
     * const Usuarios_principales = await prisma.usuarios_principales.create({
     *   data: {
     *     // ... data to create a Usuarios_principales
     *   }
     * })
     * 
     */
    create<T extends usuarios_principalesCreateArgs>(args: SelectSubset<T, usuarios_principalesCreateArgs<ExtArgs>>): Prisma__usuarios_principalesClient<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios_principales.
     * @param {usuarios_principalesCreateManyArgs} args - Arguments to create many Usuarios_principales.
     * @example
     * // Create many Usuarios_principales
     * const usuarios_principales = await prisma.usuarios_principales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarios_principalesCreateManyArgs>(args?: SelectSubset<T, usuarios_principalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios_principales and returns the data saved in the database.
     * @param {usuarios_principalesCreateManyAndReturnArgs} args - Arguments to create many Usuarios_principales.
     * @example
     * // Create many Usuarios_principales
     * const usuarios_principales = await prisma.usuarios_principales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios_principales and only return the `id`
     * const usuarios_principalesWithIdOnly = await prisma.usuarios_principales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuarios_principalesCreateManyAndReturnArgs>(args?: SelectSubset<T, usuarios_principalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios_principales.
     * @param {usuarios_principalesDeleteArgs} args - Arguments to delete one Usuarios_principales.
     * @example
     * // Delete one Usuarios_principales
     * const Usuarios_principales = await prisma.usuarios_principales.delete({
     *   where: {
     *     // ... filter to delete one Usuarios_principales
     *   }
     * })
     * 
     */
    delete<T extends usuarios_principalesDeleteArgs>(args: SelectSubset<T, usuarios_principalesDeleteArgs<ExtArgs>>): Prisma__usuarios_principalesClient<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios_principales.
     * @param {usuarios_principalesUpdateArgs} args - Arguments to update one Usuarios_principales.
     * @example
     * // Update one Usuarios_principales
     * const usuarios_principales = await prisma.usuarios_principales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarios_principalesUpdateArgs>(args: SelectSubset<T, usuarios_principalesUpdateArgs<ExtArgs>>): Prisma__usuarios_principalesClient<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios_principales.
     * @param {usuarios_principalesDeleteManyArgs} args - Arguments to filter Usuarios_principales to delete.
     * @example
     * // Delete a few Usuarios_principales
     * const { count } = await prisma.usuarios_principales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarios_principalesDeleteManyArgs>(args?: SelectSubset<T, usuarios_principalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios_principales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_principalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios_principales
     * const usuarios_principales = await prisma.usuarios_principales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarios_principalesUpdateManyArgs>(args: SelectSubset<T, usuarios_principalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios_principales and returns the data updated in the database.
     * @param {usuarios_principalesUpdateManyAndReturnArgs} args - Arguments to update many Usuarios_principales.
     * @example
     * // Update many Usuarios_principales
     * const usuarios_principales = await prisma.usuarios_principales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios_principales and only return the `id`
     * const usuarios_principalesWithIdOnly = await prisma.usuarios_principales.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuarios_principalesUpdateManyAndReturnArgs>(args: SelectSubset<T, usuarios_principalesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios_principales.
     * @param {usuarios_principalesUpsertArgs} args - Arguments to update or create a Usuarios_principales.
     * @example
     * // Update or create a Usuarios_principales
     * const usuarios_principales = await prisma.usuarios_principales.upsert({
     *   create: {
     *     // ... data to create a Usuarios_principales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios_principales we want to update
     *   }
     * })
     */
    upsert<T extends usuarios_principalesUpsertArgs>(args: SelectSubset<T, usuarios_principalesUpsertArgs<ExtArgs>>): Prisma__usuarios_principalesClient<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios_principales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_principalesCountArgs} args - Arguments to filter Usuarios_principales to count.
     * @example
     * // Count the number of Usuarios_principales
     * const count = await prisma.usuarios_principales.count({
     *   where: {
     *     // ... the filter for the Usuarios_principales we want to count
     *   }
     * })
    **/
    count<T extends usuarios_principalesCountArgs>(
      args?: Subset<T, usuarios_principalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuarios_principalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios_principales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuarios_principalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Usuarios_principalesAggregateArgs>(args: Subset<T, Usuarios_principalesAggregateArgs>): Prisma.PrismaPromise<GetUsuarios_principalesAggregateType<T>>

    /**
     * Group by Usuarios_principales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_principalesGroupByArgs} args - Group by arguments.
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
      T extends usuarios_principalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarios_principalesGroupByArgs['orderBy'] }
        : { orderBy?: usuarios_principalesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, usuarios_principalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarios_principalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios_principales model
   */
  readonly fields: usuarios_principalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios_principales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarios_principalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuentas_gmail_asociadas<T extends usuarios_principales$cuentas_gmail_asociadasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios_principales$cuentas_gmail_asociadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sesiones_jwt<T extends usuarios_principales$sesiones_jwtArgs<ExtArgs> = {}>(args?: Subset<T, usuarios_principales$sesiones_jwtArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sesiones_jwtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    whatsapp_accounts<T extends usuarios_principales$whatsapp_accountsArgs<ExtArgs> = {}>(args?: Subset<T, usuarios_principales$whatsapp_accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios_principales model
   */
  interface usuarios_principalesFieldRefs {
    readonly id: FieldRef<"usuarios_principales", 'Int'>
    readonly email: FieldRef<"usuarios_principales", 'String'>
    readonly password_hash: FieldRef<"usuarios_principales", 'String'>
    readonly nombre: FieldRef<"usuarios_principales", 'String'>
    readonly fecha_registro: FieldRef<"usuarios_principales", 'DateTime'>
    readonly ultima_actualizacion: FieldRef<"usuarios_principales", 'DateTime'>
    readonly estado: FieldRef<"usuarios_principales", 'String'>
    readonly email_verificado: FieldRef<"usuarios_principales", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * usuarios_principales findUnique
   */
  export type usuarios_principalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_principales
     */
    select?: usuarios_principalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_principales
     */
    omit?: usuarios_principalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_principalesInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_principales to fetch.
     */
    where: usuarios_principalesWhereUniqueInput
  }

  /**
   * usuarios_principales findUniqueOrThrow
   */
  export type usuarios_principalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_principales
     */
    select?: usuarios_principalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_principales
     */
    omit?: usuarios_principalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_principalesInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_principales to fetch.
     */
    where: usuarios_principalesWhereUniqueInput
  }

  /**
   * usuarios_principales findFirst
   */
  export type usuarios_principalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_principales
     */
    select?: usuarios_principalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_principales
     */
    omit?: usuarios_principalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_principalesInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_principales to fetch.
     */
    where?: usuarios_principalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_principales to fetch.
     */
    orderBy?: usuarios_principalesOrderByWithRelationInput | usuarios_principalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios_principales.
     */
    cursor?: usuarios_principalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_principales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_principales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios_principales.
     */
    distinct?: Usuarios_principalesScalarFieldEnum | Usuarios_principalesScalarFieldEnum[]
  }

  /**
   * usuarios_principales findFirstOrThrow
   */
  export type usuarios_principalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_principales
     */
    select?: usuarios_principalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_principales
     */
    omit?: usuarios_principalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_principalesInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_principales to fetch.
     */
    where?: usuarios_principalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_principales to fetch.
     */
    orderBy?: usuarios_principalesOrderByWithRelationInput | usuarios_principalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios_principales.
     */
    cursor?: usuarios_principalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_principales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_principales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios_principales.
     */
    distinct?: Usuarios_principalesScalarFieldEnum | Usuarios_principalesScalarFieldEnum[]
  }

  /**
   * usuarios_principales findMany
   */
  export type usuarios_principalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_principales
     */
    select?: usuarios_principalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_principales
     */
    omit?: usuarios_principalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_principalesInclude<ExtArgs> | null
    /**
     * Filter, which usuarios_principales to fetch.
     */
    where?: usuarios_principalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_principales to fetch.
     */
    orderBy?: usuarios_principalesOrderByWithRelationInput | usuarios_principalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios_principales.
     */
    cursor?: usuarios_principalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_principales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_principales.
     */
    skip?: number
    distinct?: Usuarios_principalesScalarFieldEnum | Usuarios_principalesScalarFieldEnum[]
  }

  /**
   * usuarios_principales create
   */
  export type usuarios_principalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_principales
     */
    select?: usuarios_principalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_principales
     */
    omit?: usuarios_principalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_principalesInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios_principales.
     */
    data: XOR<usuarios_principalesCreateInput, usuarios_principalesUncheckedCreateInput>
  }

  /**
   * usuarios_principales createMany
   */
  export type usuarios_principalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios_principales.
     */
    data: usuarios_principalesCreateManyInput | usuarios_principalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios_principales createManyAndReturn
   */
  export type usuarios_principalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_principales
     */
    select?: usuarios_principalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_principales
     */
    omit?: usuarios_principalesOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios_principales.
     */
    data: usuarios_principalesCreateManyInput | usuarios_principalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios_principales update
   */
  export type usuarios_principalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_principales
     */
    select?: usuarios_principalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_principales
     */
    omit?: usuarios_principalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_principalesInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios_principales.
     */
    data: XOR<usuarios_principalesUpdateInput, usuarios_principalesUncheckedUpdateInput>
    /**
     * Choose, which usuarios_principales to update.
     */
    where: usuarios_principalesWhereUniqueInput
  }

  /**
   * usuarios_principales updateMany
   */
  export type usuarios_principalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios_principales.
     */
    data: XOR<usuarios_principalesUpdateManyMutationInput, usuarios_principalesUncheckedUpdateManyInput>
    /**
     * Filter which usuarios_principales to update
     */
    where?: usuarios_principalesWhereInput
    /**
     * Limit how many usuarios_principales to update.
     */
    limit?: number
  }

  /**
   * usuarios_principales updateManyAndReturn
   */
  export type usuarios_principalesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_principales
     */
    select?: usuarios_principalesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_principales
     */
    omit?: usuarios_principalesOmit<ExtArgs> | null
    /**
     * The data used to update usuarios_principales.
     */
    data: XOR<usuarios_principalesUpdateManyMutationInput, usuarios_principalesUncheckedUpdateManyInput>
    /**
     * Filter which usuarios_principales to update
     */
    where?: usuarios_principalesWhereInput
    /**
     * Limit how many usuarios_principales to update.
     */
    limit?: number
  }

  /**
   * usuarios_principales upsert
   */
  export type usuarios_principalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_principales
     */
    select?: usuarios_principalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_principales
     */
    omit?: usuarios_principalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_principalesInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios_principales to update in case it exists.
     */
    where: usuarios_principalesWhereUniqueInput
    /**
     * In case the usuarios_principales found by the `where` argument doesn't exist, create a new usuarios_principales with this data.
     */
    create: XOR<usuarios_principalesCreateInput, usuarios_principalesUncheckedCreateInput>
    /**
     * In case the usuarios_principales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarios_principalesUpdateInput, usuarios_principalesUncheckedUpdateInput>
  }

  /**
   * usuarios_principales delete
   */
  export type usuarios_principalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_principales
     */
    select?: usuarios_principalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_principales
     */
    omit?: usuarios_principalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_principalesInclude<ExtArgs> | null
    /**
     * Filter which usuarios_principales to delete.
     */
    where: usuarios_principalesWhereUniqueInput
  }

  /**
   * usuarios_principales deleteMany
   */
  export type usuarios_principalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios_principales to delete
     */
    where?: usuarios_principalesWhereInput
    /**
     * Limit how many usuarios_principales to delete.
     */
    limit?: number
  }

  /**
   * usuarios_principales.cuentas_gmail_asociadas
   */
  export type usuarios_principales$cuentas_gmail_asociadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentas_gmail_asociadas
     */
    select?: cuentas_gmail_asociadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuentas_gmail_asociadas
     */
    omit?: cuentas_gmail_asociadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentas_gmail_asociadasInclude<ExtArgs> | null
    where?: cuentas_gmail_asociadasWhereInput
    orderBy?: cuentas_gmail_asociadasOrderByWithRelationInput | cuentas_gmail_asociadasOrderByWithRelationInput[]
    cursor?: cuentas_gmail_asociadasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cuentas_gmail_asociadasScalarFieldEnum | Cuentas_gmail_asociadasScalarFieldEnum[]
  }

  /**
   * usuarios_principales.sesiones_jwt
   */
  export type usuarios_principales$sesiones_jwtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_jwt
     */
    select?: sesiones_jwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_jwt
     */
    omit?: sesiones_jwtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_jwtInclude<ExtArgs> | null
    where?: sesiones_jwtWhereInput
    orderBy?: sesiones_jwtOrderByWithRelationInput | sesiones_jwtOrderByWithRelationInput[]
    cursor?: sesiones_jwtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sesiones_jwtScalarFieldEnum | Sesiones_jwtScalarFieldEnum[]
  }

  /**
   * usuarios_principales.whatsapp_accounts
   */
  export type usuarios_principales$whatsapp_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_accounts
     */
    select?: whatsapp_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_accounts
     */
    omit?: whatsapp_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_accountsInclude<ExtArgs> | null
    where?: whatsapp_accountsWhereInput
    orderBy?: whatsapp_accountsOrderByWithRelationInput | whatsapp_accountsOrderByWithRelationInput[]
    cursor?: whatsapp_accountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Whatsapp_accountsScalarFieldEnum | Whatsapp_accountsScalarFieldEnum[]
  }

  /**
   * usuarios_principales without action
   */
  export type usuarios_principalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_principales
     */
    select?: usuarios_principalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_principales
     */
    omit?: usuarios_principalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarios_principalesInclude<ExtArgs> | null
  }


  /**
   * Model whatsapp_accounts
   */

  export type AggregateWhatsapp_accounts = {
    _count: Whatsapp_accountsCountAggregateOutputType | null
    _avg: Whatsapp_accountsAvgAggregateOutputType | null
    _sum: Whatsapp_accountsSumAggregateOutputType | null
    _min: Whatsapp_accountsMinAggregateOutputType | null
    _max: Whatsapp_accountsMaxAggregateOutputType | null
  }

  export type Whatsapp_accountsAvgAggregateOutputType = {
    usuario_principal_id: number | null
  }

  export type Whatsapp_accountsSumAggregateOutputType = {
    usuario_principal_id: number | null
  }

  export type Whatsapp_accountsMinAggregateOutputType = {
    id: string | null
    usuario_principal_id: number | null
    phone: string | null
    nombre_cuenta: string | null
    token: string | null
    fecha_conexion: Date | null
    esta_activa: boolean | null
    alias_personalizado: string | null
    phone_number_id: string | null
    token_updated_at: Date | null
    token_expires_at: Date | null
  }

  export type Whatsapp_accountsMaxAggregateOutputType = {
    id: string | null
    usuario_principal_id: number | null
    phone: string | null
    nombre_cuenta: string | null
    token: string | null
    fecha_conexion: Date | null
    esta_activa: boolean | null
    alias_personalizado: string | null
    phone_number_id: string | null
    token_updated_at: Date | null
    token_expires_at: Date | null
  }

  export type Whatsapp_accountsCountAggregateOutputType = {
    id: number
    usuario_principal_id: number
    phone: number
    nombre_cuenta: number
    token: number
    fecha_conexion: number
    esta_activa: number
    alias_personalizado: number
    phone_number_id: number
    token_updated_at: number
    token_expires_at: number
    _all: number
  }


  export type Whatsapp_accountsAvgAggregateInputType = {
    usuario_principal_id?: true
  }

  export type Whatsapp_accountsSumAggregateInputType = {
    usuario_principal_id?: true
  }

  export type Whatsapp_accountsMinAggregateInputType = {
    id?: true
    usuario_principal_id?: true
    phone?: true
    nombre_cuenta?: true
    token?: true
    fecha_conexion?: true
    esta_activa?: true
    alias_personalizado?: true
    phone_number_id?: true
    token_updated_at?: true
    token_expires_at?: true
  }

  export type Whatsapp_accountsMaxAggregateInputType = {
    id?: true
    usuario_principal_id?: true
    phone?: true
    nombre_cuenta?: true
    token?: true
    fecha_conexion?: true
    esta_activa?: true
    alias_personalizado?: true
    phone_number_id?: true
    token_updated_at?: true
    token_expires_at?: true
  }

  export type Whatsapp_accountsCountAggregateInputType = {
    id?: true
    usuario_principal_id?: true
    phone?: true
    nombre_cuenta?: true
    token?: true
    fecha_conexion?: true
    esta_activa?: true
    alias_personalizado?: true
    phone_number_id?: true
    token_updated_at?: true
    token_expires_at?: true
    _all?: true
  }

  export type Whatsapp_accountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which whatsapp_accounts to aggregate.
     */
    where?: whatsapp_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_accounts to fetch.
     */
    orderBy?: whatsapp_accountsOrderByWithRelationInput | whatsapp_accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: whatsapp_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned whatsapp_accounts
    **/
    _count?: true | Whatsapp_accountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Whatsapp_accountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Whatsapp_accountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Whatsapp_accountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Whatsapp_accountsMaxAggregateInputType
  }

  export type GetWhatsapp_accountsAggregateType<T extends Whatsapp_accountsAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsapp_accounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsapp_accounts[P]>
      : GetScalarType<T[P], AggregateWhatsapp_accounts[P]>
  }




  export type whatsapp_accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: whatsapp_accountsWhereInput
    orderBy?: whatsapp_accountsOrderByWithAggregationInput | whatsapp_accountsOrderByWithAggregationInput[]
    by: Whatsapp_accountsScalarFieldEnum[] | Whatsapp_accountsScalarFieldEnum
    having?: whatsapp_accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Whatsapp_accountsCountAggregateInputType | true
    _avg?: Whatsapp_accountsAvgAggregateInputType
    _sum?: Whatsapp_accountsSumAggregateInputType
    _min?: Whatsapp_accountsMinAggregateInputType
    _max?: Whatsapp_accountsMaxAggregateInputType
  }

  export type Whatsapp_accountsGroupByOutputType = {
    id: string
    usuario_principal_id: number
    phone: string
    nombre_cuenta: string | null
    token: string | null
    fecha_conexion: Date | null
    esta_activa: boolean | null
    alias_personalizado: string | null
    phone_number_id: string | null
    token_updated_at: Date | null
    token_expires_at: Date | null
    _count: Whatsapp_accountsCountAggregateOutputType | null
    _avg: Whatsapp_accountsAvgAggregateOutputType | null
    _sum: Whatsapp_accountsSumAggregateOutputType | null
    _min: Whatsapp_accountsMinAggregateOutputType | null
    _max: Whatsapp_accountsMaxAggregateOutputType | null
  }

  type GetWhatsapp_accountsGroupByPayload<T extends whatsapp_accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Whatsapp_accountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Whatsapp_accountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Whatsapp_accountsGroupByOutputType[P]>
            : GetScalarType<T[P], Whatsapp_accountsGroupByOutputType[P]>
        }
      >
    >


  export type whatsapp_accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_principal_id?: boolean
    phone?: boolean
    nombre_cuenta?: boolean
    token?: boolean
    fecha_conexion?: boolean
    esta_activa?: boolean
    alias_personalizado?: boolean
    phone_number_id?: boolean
    token_updated_at?: boolean
    token_expires_at?: boolean
    conversations?: boolean | whatsapp_accounts$conversationsArgs<ExtArgs>
    messages?: boolean | whatsapp_accounts$messagesArgs<ExtArgs>
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
    _count?: boolean | Whatsapp_accountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsapp_accounts"]>

  export type whatsapp_accountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_principal_id?: boolean
    phone?: boolean
    nombre_cuenta?: boolean
    token?: boolean
    fecha_conexion?: boolean
    esta_activa?: boolean
    alias_personalizado?: boolean
    phone_number_id?: boolean
    token_updated_at?: boolean
    token_expires_at?: boolean
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsapp_accounts"]>

  export type whatsapp_accountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_principal_id?: boolean
    phone?: boolean
    nombre_cuenta?: boolean
    token?: boolean
    fecha_conexion?: boolean
    esta_activa?: boolean
    alias_personalizado?: boolean
    phone_number_id?: boolean
    token_updated_at?: boolean
    token_expires_at?: boolean
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsapp_accounts"]>

  export type whatsapp_accountsSelectScalar = {
    id?: boolean
    usuario_principal_id?: boolean
    phone?: boolean
    nombre_cuenta?: boolean
    token?: boolean
    fecha_conexion?: boolean
    esta_activa?: boolean
    alias_personalizado?: boolean
    phone_number_id?: boolean
    token_updated_at?: boolean
    token_expires_at?: boolean
  }

  export type whatsapp_accountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_principal_id" | "phone" | "nombre_cuenta" | "token" | "fecha_conexion" | "esta_activa" | "alias_personalizado" | "phone_number_id" | "token_updated_at" | "token_expires_at", ExtArgs["result"]["whatsapp_accounts"]>
  export type whatsapp_accountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | whatsapp_accounts$conversationsArgs<ExtArgs>
    messages?: boolean | whatsapp_accounts$messagesArgs<ExtArgs>
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
    _count?: boolean | Whatsapp_accountsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type whatsapp_accountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
  }
  export type whatsapp_accountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_principales?: boolean | usuarios_principalesDefaultArgs<ExtArgs>
  }

  export type $whatsapp_accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "whatsapp_accounts"
    objects: {
      conversations: Prisma.$conversationsPayload<ExtArgs>[]
      messages: Prisma.$messagesPayload<ExtArgs>[]
      usuarios_principales: Prisma.$usuarios_principalesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuario_principal_id: number
      phone: string
      nombre_cuenta: string | null
      token: string | null
      fecha_conexion: Date | null
      esta_activa: boolean | null
      alias_personalizado: string | null
      phone_number_id: string | null
      token_updated_at: Date | null
      token_expires_at: Date | null
    }, ExtArgs["result"]["whatsapp_accounts"]>
    composites: {}
  }

  type whatsapp_accountsGetPayload<S extends boolean | null | undefined | whatsapp_accountsDefaultArgs> = $Result.GetResult<Prisma.$whatsapp_accountsPayload, S>

  type whatsapp_accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<whatsapp_accountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Whatsapp_accountsCountAggregateInputType | true
    }

  export interface whatsapp_accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['whatsapp_accounts'], meta: { name: 'whatsapp_accounts' } }
    /**
     * Find zero or one Whatsapp_accounts that matches the filter.
     * @param {whatsapp_accountsFindUniqueArgs} args - Arguments to find a Whatsapp_accounts
     * @example
     * // Get one Whatsapp_accounts
     * const whatsapp_accounts = await prisma.whatsapp_accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends whatsapp_accountsFindUniqueArgs>(args: SelectSubset<T, whatsapp_accountsFindUniqueArgs<ExtArgs>>): Prisma__whatsapp_accountsClient<$Result.GetResult<Prisma.$whatsapp_accountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Whatsapp_accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {whatsapp_accountsFindUniqueOrThrowArgs} args - Arguments to find a Whatsapp_accounts
     * @example
     * // Get one Whatsapp_accounts
     * const whatsapp_accounts = await prisma.whatsapp_accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends whatsapp_accountsFindUniqueOrThrowArgs>(args: SelectSubset<T, whatsapp_accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__whatsapp_accountsClient<$Result.GetResult<Prisma.$whatsapp_accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whatsapp_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_accountsFindFirstArgs} args - Arguments to find a Whatsapp_accounts
     * @example
     * // Get one Whatsapp_accounts
     * const whatsapp_accounts = await prisma.whatsapp_accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends whatsapp_accountsFindFirstArgs>(args?: SelectSubset<T, whatsapp_accountsFindFirstArgs<ExtArgs>>): Prisma__whatsapp_accountsClient<$Result.GetResult<Prisma.$whatsapp_accountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whatsapp_accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_accountsFindFirstOrThrowArgs} args - Arguments to find a Whatsapp_accounts
     * @example
     * // Get one Whatsapp_accounts
     * const whatsapp_accounts = await prisma.whatsapp_accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends whatsapp_accountsFindFirstOrThrowArgs>(args?: SelectSubset<T, whatsapp_accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__whatsapp_accountsClient<$Result.GetResult<Prisma.$whatsapp_accountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Whatsapp_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Whatsapp_accounts
     * const whatsapp_accounts = await prisma.whatsapp_accounts.findMany()
     * 
     * // Get first 10 Whatsapp_accounts
     * const whatsapp_accounts = await prisma.whatsapp_accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsapp_accountsWithIdOnly = await prisma.whatsapp_accounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends whatsapp_accountsFindManyArgs>(args?: SelectSubset<T, whatsapp_accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Whatsapp_accounts.
     * @param {whatsapp_accountsCreateArgs} args - Arguments to create a Whatsapp_accounts.
     * @example
     * // Create one Whatsapp_accounts
     * const Whatsapp_accounts = await prisma.whatsapp_accounts.create({
     *   data: {
     *     // ... data to create a Whatsapp_accounts
     *   }
     * })
     * 
     */
    create<T extends whatsapp_accountsCreateArgs>(args: SelectSubset<T, whatsapp_accountsCreateArgs<ExtArgs>>): Prisma__whatsapp_accountsClient<$Result.GetResult<Prisma.$whatsapp_accountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Whatsapp_accounts.
     * @param {whatsapp_accountsCreateManyArgs} args - Arguments to create many Whatsapp_accounts.
     * @example
     * // Create many Whatsapp_accounts
     * const whatsapp_accounts = await prisma.whatsapp_accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends whatsapp_accountsCreateManyArgs>(args?: SelectSubset<T, whatsapp_accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Whatsapp_accounts and returns the data saved in the database.
     * @param {whatsapp_accountsCreateManyAndReturnArgs} args - Arguments to create many Whatsapp_accounts.
     * @example
     * // Create many Whatsapp_accounts
     * const whatsapp_accounts = await prisma.whatsapp_accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Whatsapp_accounts and only return the `id`
     * const whatsapp_accountsWithIdOnly = await prisma.whatsapp_accounts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends whatsapp_accountsCreateManyAndReturnArgs>(args?: SelectSubset<T, whatsapp_accountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_accountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Whatsapp_accounts.
     * @param {whatsapp_accountsDeleteArgs} args - Arguments to delete one Whatsapp_accounts.
     * @example
     * // Delete one Whatsapp_accounts
     * const Whatsapp_accounts = await prisma.whatsapp_accounts.delete({
     *   where: {
     *     // ... filter to delete one Whatsapp_accounts
     *   }
     * })
     * 
     */
    delete<T extends whatsapp_accountsDeleteArgs>(args: SelectSubset<T, whatsapp_accountsDeleteArgs<ExtArgs>>): Prisma__whatsapp_accountsClient<$Result.GetResult<Prisma.$whatsapp_accountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Whatsapp_accounts.
     * @param {whatsapp_accountsUpdateArgs} args - Arguments to update one Whatsapp_accounts.
     * @example
     * // Update one Whatsapp_accounts
     * const whatsapp_accounts = await prisma.whatsapp_accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends whatsapp_accountsUpdateArgs>(args: SelectSubset<T, whatsapp_accountsUpdateArgs<ExtArgs>>): Prisma__whatsapp_accountsClient<$Result.GetResult<Prisma.$whatsapp_accountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Whatsapp_accounts.
     * @param {whatsapp_accountsDeleteManyArgs} args - Arguments to filter Whatsapp_accounts to delete.
     * @example
     * // Delete a few Whatsapp_accounts
     * const { count } = await prisma.whatsapp_accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends whatsapp_accountsDeleteManyArgs>(args?: SelectSubset<T, whatsapp_accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whatsapp_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Whatsapp_accounts
     * const whatsapp_accounts = await prisma.whatsapp_accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends whatsapp_accountsUpdateManyArgs>(args: SelectSubset<T, whatsapp_accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whatsapp_accounts and returns the data updated in the database.
     * @param {whatsapp_accountsUpdateManyAndReturnArgs} args - Arguments to update many Whatsapp_accounts.
     * @example
     * // Update many Whatsapp_accounts
     * const whatsapp_accounts = await prisma.whatsapp_accounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Whatsapp_accounts and only return the `id`
     * const whatsapp_accountsWithIdOnly = await prisma.whatsapp_accounts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends whatsapp_accountsUpdateManyAndReturnArgs>(args: SelectSubset<T, whatsapp_accountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_accountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Whatsapp_accounts.
     * @param {whatsapp_accountsUpsertArgs} args - Arguments to update or create a Whatsapp_accounts.
     * @example
     * // Update or create a Whatsapp_accounts
     * const whatsapp_accounts = await prisma.whatsapp_accounts.upsert({
     *   create: {
     *     // ... data to create a Whatsapp_accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Whatsapp_accounts we want to update
     *   }
     * })
     */
    upsert<T extends whatsapp_accountsUpsertArgs>(args: SelectSubset<T, whatsapp_accountsUpsertArgs<ExtArgs>>): Prisma__whatsapp_accountsClient<$Result.GetResult<Prisma.$whatsapp_accountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Whatsapp_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_accountsCountArgs} args - Arguments to filter Whatsapp_accounts to count.
     * @example
     * // Count the number of Whatsapp_accounts
     * const count = await prisma.whatsapp_accounts.count({
     *   where: {
     *     // ... the filter for the Whatsapp_accounts we want to count
     *   }
     * })
    **/
    count<T extends whatsapp_accountsCountArgs>(
      args?: Subset<T, whatsapp_accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Whatsapp_accountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Whatsapp_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Whatsapp_accountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Whatsapp_accountsAggregateArgs>(args: Subset<T, Whatsapp_accountsAggregateArgs>): Prisma.PrismaPromise<GetWhatsapp_accountsAggregateType<T>>

    /**
     * Group by Whatsapp_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_accountsGroupByArgs} args - Group by arguments.
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
      T extends whatsapp_accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: whatsapp_accountsGroupByArgs['orderBy'] }
        : { orderBy?: whatsapp_accountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, whatsapp_accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsapp_accountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the whatsapp_accounts model
   */
  readonly fields: whatsapp_accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for whatsapp_accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__whatsapp_accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends whatsapp_accounts$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, whatsapp_accounts$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends whatsapp_accounts$messagesArgs<ExtArgs> = {}>(args?: Subset<T, whatsapp_accounts$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios_principales<T extends usuarios_principalesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarios_principalesDefaultArgs<ExtArgs>>): Prisma__usuarios_principalesClient<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the whatsapp_accounts model
   */
  interface whatsapp_accountsFieldRefs {
    readonly id: FieldRef<"whatsapp_accounts", 'String'>
    readonly usuario_principal_id: FieldRef<"whatsapp_accounts", 'Int'>
    readonly phone: FieldRef<"whatsapp_accounts", 'String'>
    readonly nombre_cuenta: FieldRef<"whatsapp_accounts", 'String'>
    readonly token: FieldRef<"whatsapp_accounts", 'String'>
    readonly fecha_conexion: FieldRef<"whatsapp_accounts", 'DateTime'>
    readonly esta_activa: FieldRef<"whatsapp_accounts", 'Boolean'>
    readonly alias_personalizado: FieldRef<"whatsapp_accounts", 'String'>
    readonly phone_number_id: FieldRef<"whatsapp_accounts", 'String'>
    readonly token_updated_at: FieldRef<"whatsapp_accounts", 'DateTime'>
    readonly token_expires_at: FieldRef<"whatsapp_accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * whatsapp_accounts findUnique
   */
  export type whatsapp_accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_accounts
     */
    select?: whatsapp_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_accounts
     */
    omit?: whatsapp_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_accountsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_accounts to fetch.
     */
    where: whatsapp_accountsWhereUniqueInput
  }

  /**
   * whatsapp_accounts findUniqueOrThrow
   */
  export type whatsapp_accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_accounts
     */
    select?: whatsapp_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_accounts
     */
    omit?: whatsapp_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_accountsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_accounts to fetch.
     */
    where: whatsapp_accountsWhereUniqueInput
  }

  /**
   * whatsapp_accounts findFirst
   */
  export type whatsapp_accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_accounts
     */
    select?: whatsapp_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_accounts
     */
    omit?: whatsapp_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_accountsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_accounts to fetch.
     */
    where?: whatsapp_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_accounts to fetch.
     */
    orderBy?: whatsapp_accountsOrderByWithRelationInput | whatsapp_accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for whatsapp_accounts.
     */
    cursor?: whatsapp_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of whatsapp_accounts.
     */
    distinct?: Whatsapp_accountsScalarFieldEnum | Whatsapp_accountsScalarFieldEnum[]
  }

  /**
   * whatsapp_accounts findFirstOrThrow
   */
  export type whatsapp_accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_accounts
     */
    select?: whatsapp_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_accounts
     */
    omit?: whatsapp_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_accountsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_accounts to fetch.
     */
    where?: whatsapp_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_accounts to fetch.
     */
    orderBy?: whatsapp_accountsOrderByWithRelationInput | whatsapp_accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for whatsapp_accounts.
     */
    cursor?: whatsapp_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of whatsapp_accounts.
     */
    distinct?: Whatsapp_accountsScalarFieldEnum | Whatsapp_accountsScalarFieldEnum[]
  }

  /**
   * whatsapp_accounts findMany
   */
  export type whatsapp_accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_accounts
     */
    select?: whatsapp_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_accounts
     */
    omit?: whatsapp_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_accountsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_accounts to fetch.
     */
    where?: whatsapp_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_accounts to fetch.
     */
    orderBy?: whatsapp_accountsOrderByWithRelationInput | whatsapp_accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing whatsapp_accounts.
     */
    cursor?: whatsapp_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_accounts.
     */
    skip?: number
    distinct?: Whatsapp_accountsScalarFieldEnum | Whatsapp_accountsScalarFieldEnum[]
  }

  /**
   * whatsapp_accounts create
   */
  export type whatsapp_accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_accounts
     */
    select?: whatsapp_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_accounts
     */
    omit?: whatsapp_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_accountsInclude<ExtArgs> | null
    /**
     * The data needed to create a whatsapp_accounts.
     */
    data: XOR<whatsapp_accountsCreateInput, whatsapp_accountsUncheckedCreateInput>
  }

  /**
   * whatsapp_accounts createMany
   */
  export type whatsapp_accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many whatsapp_accounts.
     */
    data: whatsapp_accountsCreateManyInput | whatsapp_accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * whatsapp_accounts createManyAndReturn
   */
  export type whatsapp_accountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_accounts
     */
    select?: whatsapp_accountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_accounts
     */
    omit?: whatsapp_accountsOmit<ExtArgs> | null
    /**
     * The data used to create many whatsapp_accounts.
     */
    data: whatsapp_accountsCreateManyInput | whatsapp_accountsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_accountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * whatsapp_accounts update
   */
  export type whatsapp_accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_accounts
     */
    select?: whatsapp_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_accounts
     */
    omit?: whatsapp_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_accountsInclude<ExtArgs> | null
    /**
     * The data needed to update a whatsapp_accounts.
     */
    data: XOR<whatsapp_accountsUpdateInput, whatsapp_accountsUncheckedUpdateInput>
    /**
     * Choose, which whatsapp_accounts to update.
     */
    where: whatsapp_accountsWhereUniqueInput
  }

  /**
   * whatsapp_accounts updateMany
   */
  export type whatsapp_accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update whatsapp_accounts.
     */
    data: XOR<whatsapp_accountsUpdateManyMutationInput, whatsapp_accountsUncheckedUpdateManyInput>
    /**
     * Filter which whatsapp_accounts to update
     */
    where?: whatsapp_accountsWhereInput
    /**
     * Limit how many whatsapp_accounts to update.
     */
    limit?: number
  }

  /**
   * whatsapp_accounts updateManyAndReturn
   */
  export type whatsapp_accountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_accounts
     */
    select?: whatsapp_accountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_accounts
     */
    omit?: whatsapp_accountsOmit<ExtArgs> | null
    /**
     * The data used to update whatsapp_accounts.
     */
    data: XOR<whatsapp_accountsUpdateManyMutationInput, whatsapp_accountsUncheckedUpdateManyInput>
    /**
     * Filter which whatsapp_accounts to update
     */
    where?: whatsapp_accountsWhereInput
    /**
     * Limit how many whatsapp_accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_accountsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * whatsapp_accounts upsert
   */
  export type whatsapp_accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_accounts
     */
    select?: whatsapp_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_accounts
     */
    omit?: whatsapp_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_accountsInclude<ExtArgs> | null
    /**
     * The filter to search for the whatsapp_accounts to update in case it exists.
     */
    where: whatsapp_accountsWhereUniqueInput
    /**
     * In case the whatsapp_accounts found by the `where` argument doesn't exist, create a new whatsapp_accounts with this data.
     */
    create: XOR<whatsapp_accountsCreateInput, whatsapp_accountsUncheckedCreateInput>
    /**
     * In case the whatsapp_accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<whatsapp_accountsUpdateInput, whatsapp_accountsUncheckedUpdateInput>
  }

  /**
   * whatsapp_accounts delete
   */
  export type whatsapp_accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_accounts
     */
    select?: whatsapp_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_accounts
     */
    omit?: whatsapp_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_accountsInclude<ExtArgs> | null
    /**
     * Filter which whatsapp_accounts to delete.
     */
    where: whatsapp_accountsWhereUniqueInput
  }

  /**
   * whatsapp_accounts deleteMany
   */
  export type whatsapp_accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which whatsapp_accounts to delete
     */
    where?: whatsapp_accountsWhereInput
    /**
     * Limit how many whatsapp_accounts to delete.
     */
    limit?: number
  }

  /**
   * whatsapp_accounts.conversations
   */
  export type whatsapp_accounts$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    where?: conversationsWhereInput
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    cursor?: conversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * whatsapp_accounts.messages
   */
  export type whatsapp_accounts$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * whatsapp_accounts without action
   */
  export type whatsapp_accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_accounts
     */
    select?: whatsapp_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_accounts
     */
    omit?: whatsapp_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_accountsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Audit_eliminacionesScalarFieldEnum: {
    id: 'id',
    tabla: 'tabla',
    registro_id: 'registro_id',
    datos_eliminados: 'datos_eliminados',
    usuario_bd: 'usuario_bd',
    fecha_eliminacion: 'fecha_eliminacion'
  };

  export type Audit_eliminacionesScalarFieldEnum = (typeof Audit_eliminacionesScalarFieldEnum)[keyof typeof Audit_eliminacionesScalarFieldEnum]


  export const ConversationsScalarFieldEnum: {
    id: 'id',
    whatsapp_account_id: 'whatsapp_account_id',
    phone: 'phone',
    name: 'name',
    last_message: 'last_message',
    last_message_date: 'last_message_date'
  };

  export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum]


  export const Cuentas_gmail_asociadasScalarFieldEnum: {
    id: 'id',
    usuario_principal_id: 'usuario_principal_id',
    email_gmail: 'email_gmail',
    nombre_cuenta: 'nombre_cuenta',
    google_id: 'google_id',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    token_expira_en: 'token_expira_en',
    fecha_conexion: 'fecha_conexion',
    ultima_sincronizacion: 'ultima_sincronizacion',
    esta_activa: 'esta_activa',
    consecutive_zero_syncs: 'consecutive_zero_syncs',
    alias_personalizado: 'alias_personalizado',
    backfill_checkpoint_date: 'backfill_checkpoint_date',
    backfill_page_token: 'backfill_page_token'
  };

  export type Cuentas_gmail_asociadasScalarFieldEnum = (typeof Cuentas_gmail_asociadasScalarFieldEnum)[keyof typeof Cuentas_gmail_asociadasScalarFieldEnum]


  export const Emails_sincronizadosScalarFieldEnum: {
    id: 'id',
    cuenta_gmail_id: 'cuenta_gmail_id',
    gmail_message_id: 'gmail_message_id',
    asunto: 'asunto',
    remitente_email: 'remitente_email',
    remitente_nombre: 'remitente_nombre',
    destinatario_email: 'destinatario_email',
    fecha_recibido: 'fecha_recibido',
    esta_leido: 'esta_leido',
    tiene_adjuntos: 'tiene_adjuntos',
    etiquetas_gmail: 'etiquetas_gmail',
    tamano_bytes: 'tamano_bytes',
    fecha_sincronizado: 'fecha_sincronizado'
  };

  export type Emails_sincronizadosScalarFieldEnum = (typeof Emails_sincronizadosScalarFieldEnum)[keyof typeof Emails_sincronizadosScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    conversation_id: 'conversation_id',
    whatsapp_account_id: 'whatsapp_account_id',
    phone: 'phone',
    message: 'message',
    timestamp: 'timestamp',
    respondido: 'respondido',
    canal: 'canal',
    categoria: 'categoria'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const Sesiones_jwtScalarFieldEnum: {
    id: 'id',
    usuario_principal_id: 'usuario_principal_id',
    jwt_token: 'jwt_token',
    expira_en: 'expira_en',
    fecha_creacion: 'fecha_creacion',
    esta_activa: 'esta_activa',
    ip_origen: 'ip_origen',
    user_agent: 'user_agent'
  };

  export type Sesiones_jwtScalarFieldEnum = (typeof Sesiones_jwtScalarFieldEnum)[keyof typeof Sesiones_jwtScalarFieldEnum]


  export const Usuarios_principalesScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    nombre: 'nombre',
    fecha_registro: 'fecha_registro',
    ultima_actualizacion: 'ultima_actualizacion',
    estado: 'estado',
    email_verificado: 'email_verificado'
  };

  export type Usuarios_principalesScalarFieldEnum = (typeof Usuarios_principalesScalarFieldEnum)[keyof typeof Usuarios_principalesScalarFieldEnum]


  export const Whatsapp_accountsScalarFieldEnum: {
    id: 'id',
    usuario_principal_id: 'usuario_principal_id',
    phone: 'phone',
    nombre_cuenta: 'nombre_cuenta',
    token: 'token',
    fecha_conexion: 'fecha_conexion',
    esta_activa: 'esta_activa',
    alias_personalizado: 'alias_personalizado',
    phone_number_id: 'phone_number_id',
    token_updated_at: 'token_updated_at',
    token_expires_at: 'token_expires_at'
  };

  export type Whatsapp_accountsScalarFieldEnum = (typeof Whatsapp_accountsScalarFieldEnum)[keyof typeof Whatsapp_accountsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type audit_eliminacionesWhereInput = {
    AND?: audit_eliminacionesWhereInput | audit_eliminacionesWhereInput[]
    OR?: audit_eliminacionesWhereInput[]
    NOT?: audit_eliminacionesWhereInput | audit_eliminacionesWhereInput[]
    id?: IntFilter<"audit_eliminaciones"> | number
    tabla?: StringNullableFilter<"audit_eliminaciones"> | string | null
    registro_id?: IntNullableFilter<"audit_eliminaciones"> | number | null
    datos_eliminados?: JsonNullableFilter<"audit_eliminaciones">
    usuario_bd?: StringNullableFilter<"audit_eliminaciones"> | string | null
    fecha_eliminacion?: DateTimeNullableFilter<"audit_eliminaciones"> | Date | string | null
  }

  export type audit_eliminacionesOrderByWithRelationInput = {
    id?: SortOrder
    tabla?: SortOrderInput | SortOrder
    registro_id?: SortOrderInput | SortOrder
    datos_eliminados?: SortOrderInput | SortOrder
    usuario_bd?: SortOrderInput | SortOrder
    fecha_eliminacion?: SortOrderInput | SortOrder
  }

  export type audit_eliminacionesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: audit_eliminacionesWhereInput | audit_eliminacionesWhereInput[]
    OR?: audit_eliminacionesWhereInput[]
    NOT?: audit_eliminacionesWhereInput | audit_eliminacionesWhereInput[]
    tabla?: StringNullableFilter<"audit_eliminaciones"> | string | null
    registro_id?: IntNullableFilter<"audit_eliminaciones"> | number | null
    datos_eliminados?: JsonNullableFilter<"audit_eliminaciones">
    usuario_bd?: StringNullableFilter<"audit_eliminaciones"> | string | null
    fecha_eliminacion?: DateTimeNullableFilter<"audit_eliminaciones"> | Date | string | null
  }, "id">

  export type audit_eliminacionesOrderByWithAggregationInput = {
    id?: SortOrder
    tabla?: SortOrderInput | SortOrder
    registro_id?: SortOrderInput | SortOrder
    datos_eliminados?: SortOrderInput | SortOrder
    usuario_bd?: SortOrderInput | SortOrder
    fecha_eliminacion?: SortOrderInput | SortOrder
    _count?: audit_eliminacionesCountOrderByAggregateInput
    _avg?: audit_eliminacionesAvgOrderByAggregateInput
    _max?: audit_eliminacionesMaxOrderByAggregateInput
    _min?: audit_eliminacionesMinOrderByAggregateInput
    _sum?: audit_eliminacionesSumOrderByAggregateInput
  }

  export type audit_eliminacionesScalarWhereWithAggregatesInput = {
    AND?: audit_eliminacionesScalarWhereWithAggregatesInput | audit_eliminacionesScalarWhereWithAggregatesInput[]
    OR?: audit_eliminacionesScalarWhereWithAggregatesInput[]
    NOT?: audit_eliminacionesScalarWhereWithAggregatesInput | audit_eliminacionesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"audit_eliminaciones"> | number
    tabla?: StringNullableWithAggregatesFilter<"audit_eliminaciones"> | string | null
    registro_id?: IntNullableWithAggregatesFilter<"audit_eliminaciones"> | number | null
    datos_eliminados?: JsonNullableWithAggregatesFilter<"audit_eliminaciones">
    usuario_bd?: StringNullableWithAggregatesFilter<"audit_eliminaciones"> | string | null
    fecha_eliminacion?: DateTimeNullableWithAggregatesFilter<"audit_eliminaciones"> | Date | string | null
  }

  export type conversationsWhereInput = {
    AND?: conversationsWhereInput | conversationsWhereInput[]
    OR?: conversationsWhereInput[]
    NOT?: conversationsWhereInput | conversationsWhereInput[]
    id?: UuidFilter<"conversations"> | string
    whatsapp_account_id?: UuidFilter<"conversations"> | string
    phone?: StringNullableFilter<"conversations"> | string | null
    name?: StringNullableFilter<"conversations"> | string | null
    last_message?: StringNullableFilter<"conversations"> | string | null
    last_message_date?: DateTimeNullableFilter<"conversations"> | Date | string | null
    whatsapp_accounts?: XOR<Whatsapp_accountsScalarRelationFilter, whatsapp_accountsWhereInput>
    messages?: MessagesListRelationFilter
  }

  export type conversationsOrderByWithRelationInput = {
    id?: SortOrder
    whatsapp_account_id?: SortOrder
    phone?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    last_message?: SortOrderInput | SortOrder
    last_message_date?: SortOrderInput | SortOrder
    whatsapp_accounts?: whatsapp_accountsOrderByWithRelationInput
    messages?: messagesOrderByRelationAggregateInput
  }

  export type conversationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: conversationsWhereInput | conversationsWhereInput[]
    OR?: conversationsWhereInput[]
    NOT?: conversationsWhereInput | conversationsWhereInput[]
    whatsapp_account_id?: UuidFilter<"conversations"> | string
    phone?: StringNullableFilter<"conversations"> | string | null
    name?: StringNullableFilter<"conversations"> | string | null
    last_message?: StringNullableFilter<"conversations"> | string | null
    last_message_date?: DateTimeNullableFilter<"conversations"> | Date | string | null
    whatsapp_accounts?: XOR<Whatsapp_accountsScalarRelationFilter, whatsapp_accountsWhereInput>
    messages?: MessagesListRelationFilter
  }, "id">

  export type conversationsOrderByWithAggregationInput = {
    id?: SortOrder
    whatsapp_account_id?: SortOrder
    phone?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    last_message?: SortOrderInput | SortOrder
    last_message_date?: SortOrderInput | SortOrder
    _count?: conversationsCountOrderByAggregateInput
    _max?: conversationsMaxOrderByAggregateInput
    _min?: conversationsMinOrderByAggregateInput
  }

  export type conversationsScalarWhereWithAggregatesInput = {
    AND?: conversationsScalarWhereWithAggregatesInput | conversationsScalarWhereWithAggregatesInput[]
    OR?: conversationsScalarWhereWithAggregatesInput[]
    NOT?: conversationsScalarWhereWithAggregatesInput | conversationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"conversations"> | string
    whatsapp_account_id?: UuidWithAggregatesFilter<"conversations"> | string
    phone?: StringNullableWithAggregatesFilter<"conversations"> | string | null
    name?: StringNullableWithAggregatesFilter<"conversations"> | string | null
    last_message?: StringNullableWithAggregatesFilter<"conversations"> | string | null
    last_message_date?: DateTimeNullableWithAggregatesFilter<"conversations"> | Date | string | null
  }

  export type cuentas_gmail_asociadasWhereInput = {
    AND?: cuentas_gmail_asociadasWhereInput | cuentas_gmail_asociadasWhereInput[]
    OR?: cuentas_gmail_asociadasWhereInput[]
    NOT?: cuentas_gmail_asociadasWhereInput | cuentas_gmail_asociadasWhereInput[]
    id?: IntFilter<"cuentas_gmail_asociadas"> | number
    usuario_principal_id?: IntFilter<"cuentas_gmail_asociadas"> | number
    email_gmail?: StringFilter<"cuentas_gmail_asociadas"> | string
    nombre_cuenta?: StringFilter<"cuentas_gmail_asociadas"> | string
    google_id?: StringFilter<"cuentas_gmail_asociadas"> | string
    access_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    refresh_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    token_expira_en?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    fecha_conexion?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    ultima_sincronizacion?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    esta_activa?: BoolNullableFilter<"cuentas_gmail_asociadas"> | boolean | null
    consecutive_zero_syncs?: IntNullableFilter<"cuentas_gmail_asociadas"> | number | null
    alias_personalizado?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    backfill_checkpoint_date?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    backfill_page_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    usuarios_principales?: XOR<Usuarios_principalesScalarRelationFilter, usuarios_principalesWhereInput>
    emails_sincronizados?: Emails_sincronizadosListRelationFilter
  }

  export type cuentas_gmail_asociadasOrderByWithRelationInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    email_gmail?: SortOrder
    nombre_cuenta?: SortOrder
    google_id?: SortOrder
    access_token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    token_expira_en?: SortOrderInput | SortOrder
    fecha_conexion?: SortOrderInput | SortOrder
    ultima_sincronizacion?: SortOrderInput | SortOrder
    esta_activa?: SortOrderInput | SortOrder
    consecutive_zero_syncs?: SortOrderInput | SortOrder
    alias_personalizado?: SortOrderInput | SortOrder
    backfill_checkpoint_date?: SortOrderInput | SortOrder
    backfill_page_token?: SortOrderInput | SortOrder
    usuarios_principales?: usuarios_principalesOrderByWithRelationInput
    emails_sincronizados?: emails_sincronizadosOrderByRelationAggregateInput
  }

  export type cuentas_gmail_asociadasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    google_id?: string
    usuario_principal_id_email_gmail?: cuentas_gmail_asociadasUsuario_principal_idEmail_gmailCompoundUniqueInput
    AND?: cuentas_gmail_asociadasWhereInput | cuentas_gmail_asociadasWhereInput[]
    OR?: cuentas_gmail_asociadasWhereInput[]
    NOT?: cuentas_gmail_asociadasWhereInput | cuentas_gmail_asociadasWhereInput[]
    usuario_principal_id?: IntFilter<"cuentas_gmail_asociadas"> | number
    email_gmail?: StringFilter<"cuentas_gmail_asociadas"> | string
    nombre_cuenta?: StringFilter<"cuentas_gmail_asociadas"> | string
    access_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    refresh_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    token_expira_en?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    fecha_conexion?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    ultima_sincronizacion?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    esta_activa?: BoolNullableFilter<"cuentas_gmail_asociadas"> | boolean | null
    consecutive_zero_syncs?: IntNullableFilter<"cuentas_gmail_asociadas"> | number | null
    alias_personalizado?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    backfill_checkpoint_date?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    backfill_page_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    usuarios_principales?: XOR<Usuarios_principalesScalarRelationFilter, usuarios_principalesWhereInput>
    emails_sincronizados?: Emails_sincronizadosListRelationFilter
  }, "id" | "google_id" | "usuario_principal_id_email_gmail">

  export type cuentas_gmail_asociadasOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    email_gmail?: SortOrder
    nombre_cuenta?: SortOrder
    google_id?: SortOrder
    access_token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    token_expira_en?: SortOrderInput | SortOrder
    fecha_conexion?: SortOrderInput | SortOrder
    ultima_sincronizacion?: SortOrderInput | SortOrder
    esta_activa?: SortOrderInput | SortOrder
    consecutive_zero_syncs?: SortOrderInput | SortOrder
    alias_personalizado?: SortOrderInput | SortOrder
    backfill_checkpoint_date?: SortOrderInput | SortOrder
    backfill_page_token?: SortOrderInput | SortOrder
    _count?: cuentas_gmail_asociadasCountOrderByAggregateInput
    _avg?: cuentas_gmail_asociadasAvgOrderByAggregateInput
    _max?: cuentas_gmail_asociadasMaxOrderByAggregateInput
    _min?: cuentas_gmail_asociadasMinOrderByAggregateInput
    _sum?: cuentas_gmail_asociadasSumOrderByAggregateInput
  }

  export type cuentas_gmail_asociadasScalarWhereWithAggregatesInput = {
    AND?: cuentas_gmail_asociadasScalarWhereWithAggregatesInput | cuentas_gmail_asociadasScalarWhereWithAggregatesInput[]
    OR?: cuentas_gmail_asociadasScalarWhereWithAggregatesInput[]
    NOT?: cuentas_gmail_asociadasScalarWhereWithAggregatesInput | cuentas_gmail_asociadasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cuentas_gmail_asociadas"> | number
    usuario_principal_id?: IntWithAggregatesFilter<"cuentas_gmail_asociadas"> | number
    email_gmail?: StringWithAggregatesFilter<"cuentas_gmail_asociadas"> | string
    nombre_cuenta?: StringWithAggregatesFilter<"cuentas_gmail_asociadas"> | string
    google_id?: StringWithAggregatesFilter<"cuentas_gmail_asociadas"> | string
    access_token?: StringNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | string | null
    token_expira_en?: DateTimeNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | Date | string | null
    fecha_conexion?: DateTimeNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | Date | string | null
    ultima_sincronizacion?: DateTimeNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | Date | string | null
    esta_activa?: BoolNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | boolean | null
    consecutive_zero_syncs?: IntNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | number | null
    alias_personalizado?: StringNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | string | null
    backfill_checkpoint_date?: DateTimeNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | Date | string | null
    backfill_page_token?: StringNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | string | null
  }

  export type emails_sincronizadosWhereInput = {
    AND?: emails_sincronizadosWhereInput | emails_sincronizadosWhereInput[]
    OR?: emails_sincronizadosWhereInput[]
    NOT?: emails_sincronizadosWhereInput | emails_sincronizadosWhereInput[]
    id?: IntFilter<"emails_sincronizados"> | number
    cuenta_gmail_id?: IntFilter<"emails_sincronizados"> | number
    gmail_message_id?: StringFilter<"emails_sincronizados"> | string
    asunto?: StringNullableFilter<"emails_sincronizados"> | string | null
    remitente_email?: StringNullableFilter<"emails_sincronizados"> | string | null
    remitente_nombre?: StringNullableFilter<"emails_sincronizados"> | string | null
    destinatario_email?: StringNullableFilter<"emails_sincronizados"> | string | null
    fecha_recibido?: DateTimeNullableFilter<"emails_sincronizados"> | Date | string | null
    esta_leido?: BoolNullableFilter<"emails_sincronizados"> | boolean | null
    tiene_adjuntos?: BoolNullableFilter<"emails_sincronizados"> | boolean | null
    etiquetas_gmail?: StringNullableListFilter<"emails_sincronizados">
    tamano_bytes?: IntNullableFilter<"emails_sincronizados"> | number | null
    fecha_sincronizado?: DateTimeNullableFilter<"emails_sincronizados"> | Date | string | null
    cuentas_gmail_asociadas?: XOR<Cuentas_gmail_asociadasScalarRelationFilter, cuentas_gmail_asociadasWhereInput>
  }

  export type emails_sincronizadosOrderByWithRelationInput = {
    id?: SortOrder
    cuenta_gmail_id?: SortOrder
    gmail_message_id?: SortOrder
    asunto?: SortOrderInput | SortOrder
    remitente_email?: SortOrderInput | SortOrder
    remitente_nombre?: SortOrderInput | SortOrder
    destinatario_email?: SortOrderInput | SortOrder
    fecha_recibido?: SortOrderInput | SortOrder
    esta_leido?: SortOrderInput | SortOrder
    tiene_adjuntos?: SortOrderInput | SortOrder
    etiquetas_gmail?: SortOrder
    tamano_bytes?: SortOrderInput | SortOrder
    fecha_sincronizado?: SortOrderInput | SortOrder
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasOrderByWithRelationInput
  }

  export type emails_sincronizadosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cuenta_gmail_id_gmail_message_id?: emails_sincronizadosCuenta_gmail_idGmail_message_idCompoundUniqueInput
    AND?: emails_sincronizadosWhereInput | emails_sincronizadosWhereInput[]
    OR?: emails_sincronizadosWhereInput[]
    NOT?: emails_sincronizadosWhereInput | emails_sincronizadosWhereInput[]
    cuenta_gmail_id?: IntFilter<"emails_sincronizados"> | number
    gmail_message_id?: StringFilter<"emails_sincronizados"> | string
    asunto?: StringNullableFilter<"emails_sincronizados"> | string | null
    remitente_email?: StringNullableFilter<"emails_sincronizados"> | string | null
    remitente_nombre?: StringNullableFilter<"emails_sincronizados"> | string | null
    destinatario_email?: StringNullableFilter<"emails_sincronizados"> | string | null
    fecha_recibido?: DateTimeNullableFilter<"emails_sincronizados"> | Date | string | null
    esta_leido?: BoolNullableFilter<"emails_sincronizados"> | boolean | null
    tiene_adjuntos?: BoolNullableFilter<"emails_sincronizados"> | boolean | null
    etiquetas_gmail?: StringNullableListFilter<"emails_sincronizados">
    tamano_bytes?: IntNullableFilter<"emails_sincronizados"> | number | null
    fecha_sincronizado?: DateTimeNullableFilter<"emails_sincronizados"> | Date | string | null
    cuentas_gmail_asociadas?: XOR<Cuentas_gmail_asociadasScalarRelationFilter, cuentas_gmail_asociadasWhereInput>
  }, "id" | "cuenta_gmail_id_gmail_message_id">

  export type emails_sincronizadosOrderByWithAggregationInput = {
    id?: SortOrder
    cuenta_gmail_id?: SortOrder
    gmail_message_id?: SortOrder
    asunto?: SortOrderInput | SortOrder
    remitente_email?: SortOrderInput | SortOrder
    remitente_nombre?: SortOrderInput | SortOrder
    destinatario_email?: SortOrderInput | SortOrder
    fecha_recibido?: SortOrderInput | SortOrder
    esta_leido?: SortOrderInput | SortOrder
    tiene_adjuntos?: SortOrderInput | SortOrder
    etiquetas_gmail?: SortOrder
    tamano_bytes?: SortOrderInput | SortOrder
    fecha_sincronizado?: SortOrderInput | SortOrder
    _count?: emails_sincronizadosCountOrderByAggregateInput
    _avg?: emails_sincronizadosAvgOrderByAggregateInput
    _max?: emails_sincronizadosMaxOrderByAggregateInput
    _min?: emails_sincronizadosMinOrderByAggregateInput
    _sum?: emails_sincronizadosSumOrderByAggregateInput
  }

  export type emails_sincronizadosScalarWhereWithAggregatesInput = {
    AND?: emails_sincronizadosScalarWhereWithAggregatesInput | emails_sincronizadosScalarWhereWithAggregatesInput[]
    OR?: emails_sincronizadosScalarWhereWithAggregatesInput[]
    NOT?: emails_sincronizadosScalarWhereWithAggregatesInput | emails_sincronizadosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"emails_sincronizados"> | number
    cuenta_gmail_id?: IntWithAggregatesFilter<"emails_sincronizados"> | number
    gmail_message_id?: StringWithAggregatesFilter<"emails_sincronizados"> | string
    asunto?: StringNullableWithAggregatesFilter<"emails_sincronizados"> | string | null
    remitente_email?: StringNullableWithAggregatesFilter<"emails_sincronizados"> | string | null
    remitente_nombre?: StringNullableWithAggregatesFilter<"emails_sincronizados"> | string | null
    destinatario_email?: StringNullableWithAggregatesFilter<"emails_sincronizados"> | string | null
    fecha_recibido?: DateTimeNullableWithAggregatesFilter<"emails_sincronizados"> | Date | string | null
    esta_leido?: BoolNullableWithAggregatesFilter<"emails_sincronizados"> | boolean | null
    tiene_adjuntos?: BoolNullableWithAggregatesFilter<"emails_sincronizados"> | boolean | null
    etiquetas_gmail?: StringNullableListFilter<"emails_sincronizados">
    tamano_bytes?: IntNullableWithAggregatesFilter<"emails_sincronizados"> | number | null
    fecha_sincronizado?: DateTimeNullableWithAggregatesFilter<"emails_sincronizados"> | Date | string | null
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: UuidFilter<"messages"> | string
    conversation_id?: UuidFilter<"messages"> | string
    whatsapp_account_id?: UuidFilter<"messages"> | string
    phone?: StringNullableFilter<"messages"> | string | null
    message?: StringNullableFilter<"messages"> | string | null
    timestamp?: DateTimeNullableFilter<"messages"> | Date | string | null
    respondido?: BoolNullableFilter<"messages"> | boolean | null
    canal?: StringNullableFilter<"messages"> | string | null
    categoria?: StringNullableFilter<"messages"> | string | null
    conversations?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
    whatsapp_accounts?: XOR<Whatsapp_accountsScalarRelationFilter, whatsapp_accountsWhereInput>
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    whatsapp_account_id?: SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    respondido?: SortOrderInput | SortOrder
    canal?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    conversations?: conversationsOrderByWithRelationInput
    whatsapp_accounts?: whatsapp_accountsOrderByWithRelationInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    conversation_id?: UuidFilter<"messages"> | string
    whatsapp_account_id?: UuidFilter<"messages"> | string
    phone?: StringNullableFilter<"messages"> | string | null
    message?: StringNullableFilter<"messages"> | string | null
    timestamp?: DateTimeNullableFilter<"messages"> | Date | string | null
    respondido?: BoolNullableFilter<"messages"> | boolean | null
    canal?: StringNullableFilter<"messages"> | string | null
    categoria?: StringNullableFilter<"messages"> | string | null
    conversations?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
    whatsapp_accounts?: XOR<Whatsapp_accountsScalarRelationFilter, whatsapp_accountsWhereInput>
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    whatsapp_account_id?: SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    respondido?: SortOrderInput | SortOrder
    canal?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    _count?: messagesCountOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"messages"> | string
    conversation_id?: UuidWithAggregatesFilter<"messages"> | string
    whatsapp_account_id?: UuidWithAggregatesFilter<"messages"> | string
    phone?: StringNullableWithAggregatesFilter<"messages"> | string | null
    message?: StringNullableWithAggregatesFilter<"messages"> | string | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null
    respondido?: BoolNullableWithAggregatesFilter<"messages"> | boolean | null
    canal?: StringNullableWithAggregatesFilter<"messages"> | string | null
    categoria?: StringNullableWithAggregatesFilter<"messages"> | string | null
  }

  export type sesiones_jwtWhereInput = {
    AND?: sesiones_jwtWhereInput | sesiones_jwtWhereInput[]
    OR?: sesiones_jwtWhereInput[]
    NOT?: sesiones_jwtWhereInput | sesiones_jwtWhereInput[]
    id?: IntFilter<"sesiones_jwt"> | number
    usuario_principal_id?: IntFilter<"sesiones_jwt"> | number
    jwt_token?: StringFilter<"sesiones_jwt"> | string
    expira_en?: DateTimeFilter<"sesiones_jwt"> | Date | string
    fecha_creacion?: DateTimeNullableFilter<"sesiones_jwt"> | Date | string | null
    esta_activa?: BoolNullableFilter<"sesiones_jwt"> | boolean | null
    ip_origen?: StringNullableFilter<"sesiones_jwt"> | string | null
    user_agent?: StringNullableFilter<"sesiones_jwt"> | string | null
    usuarios_principales?: XOR<Usuarios_principalesScalarRelationFilter, usuarios_principalesWhereInput>
  }

  export type sesiones_jwtOrderByWithRelationInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    jwt_token?: SortOrder
    expira_en?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    esta_activa?: SortOrderInput | SortOrder
    ip_origen?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    usuarios_principales?: usuarios_principalesOrderByWithRelationInput
  }

  export type sesiones_jwtWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sesiones_jwtWhereInput | sesiones_jwtWhereInput[]
    OR?: sesiones_jwtWhereInput[]
    NOT?: sesiones_jwtWhereInput | sesiones_jwtWhereInput[]
    usuario_principal_id?: IntFilter<"sesiones_jwt"> | number
    jwt_token?: StringFilter<"sesiones_jwt"> | string
    expira_en?: DateTimeFilter<"sesiones_jwt"> | Date | string
    fecha_creacion?: DateTimeNullableFilter<"sesiones_jwt"> | Date | string | null
    esta_activa?: BoolNullableFilter<"sesiones_jwt"> | boolean | null
    ip_origen?: StringNullableFilter<"sesiones_jwt"> | string | null
    user_agent?: StringNullableFilter<"sesiones_jwt"> | string | null
    usuarios_principales?: XOR<Usuarios_principalesScalarRelationFilter, usuarios_principalesWhereInput>
  }, "id">

  export type sesiones_jwtOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    jwt_token?: SortOrder
    expira_en?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    esta_activa?: SortOrderInput | SortOrder
    ip_origen?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    _count?: sesiones_jwtCountOrderByAggregateInput
    _avg?: sesiones_jwtAvgOrderByAggregateInput
    _max?: sesiones_jwtMaxOrderByAggregateInput
    _min?: sesiones_jwtMinOrderByAggregateInput
    _sum?: sesiones_jwtSumOrderByAggregateInput
  }

  export type sesiones_jwtScalarWhereWithAggregatesInput = {
    AND?: sesiones_jwtScalarWhereWithAggregatesInput | sesiones_jwtScalarWhereWithAggregatesInput[]
    OR?: sesiones_jwtScalarWhereWithAggregatesInput[]
    NOT?: sesiones_jwtScalarWhereWithAggregatesInput | sesiones_jwtScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sesiones_jwt"> | number
    usuario_principal_id?: IntWithAggregatesFilter<"sesiones_jwt"> | number
    jwt_token?: StringWithAggregatesFilter<"sesiones_jwt"> | string
    expira_en?: DateTimeWithAggregatesFilter<"sesiones_jwt"> | Date | string
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"sesiones_jwt"> | Date | string | null
    esta_activa?: BoolNullableWithAggregatesFilter<"sesiones_jwt"> | boolean | null
    ip_origen?: StringNullableWithAggregatesFilter<"sesiones_jwt"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"sesiones_jwt"> | string | null
  }

  export type usuarios_principalesWhereInput = {
    AND?: usuarios_principalesWhereInput | usuarios_principalesWhereInput[]
    OR?: usuarios_principalesWhereInput[]
    NOT?: usuarios_principalesWhereInput | usuarios_principalesWhereInput[]
    id?: IntFilter<"usuarios_principales"> | number
    email?: StringFilter<"usuarios_principales"> | string
    password_hash?: StringFilter<"usuarios_principales"> | string
    nombre?: StringFilter<"usuarios_principales"> | string
    fecha_registro?: DateTimeNullableFilter<"usuarios_principales"> | Date | string | null
    ultima_actualizacion?: DateTimeNullableFilter<"usuarios_principales"> | Date | string | null
    estado?: StringNullableFilter<"usuarios_principales"> | string | null
    email_verificado?: BoolNullableFilter<"usuarios_principales"> | boolean | null
    cuentas_gmail_asociadas?: Cuentas_gmail_asociadasListRelationFilter
    sesiones_jwt?: Sesiones_jwtListRelationFilter
    whatsapp_accounts?: Whatsapp_accountsListRelationFilter
  }

  export type usuarios_principalesOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    nombre?: SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    ultima_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    email_verificado?: SortOrderInput | SortOrder
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasOrderByRelationAggregateInput
    sesiones_jwt?: sesiones_jwtOrderByRelationAggregateInput
    whatsapp_accounts?: whatsapp_accountsOrderByRelationAggregateInput
  }

  export type usuarios_principalesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usuarios_principalesWhereInput | usuarios_principalesWhereInput[]
    OR?: usuarios_principalesWhereInput[]
    NOT?: usuarios_principalesWhereInput | usuarios_principalesWhereInput[]
    password_hash?: StringFilter<"usuarios_principales"> | string
    nombre?: StringFilter<"usuarios_principales"> | string
    fecha_registro?: DateTimeNullableFilter<"usuarios_principales"> | Date | string | null
    ultima_actualizacion?: DateTimeNullableFilter<"usuarios_principales"> | Date | string | null
    estado?: StringNullableFilter<"usuarios_principales"> | string | null
    email_verificado?: BoolNullableFilter<"usuarios_principales"> | boolean | null
    cuentas_gmail_asociadas?: Cuentas_gmail_asociadasListRelationFilter
    sesiones_jwt?: Sesiones_jwtListRelationFilter
    whatsapp_accounts?: Whatsapp_accountsListRelationFilter
  }, "id" | "email">

  export type usuarios_principalesOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    nombre?: SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    ultima_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    email_verificado?: SortOrderInput | SortOrder
    _count?: usuarios_principalesCountOrderByAggregateInput
    _avg?: usuarios_principalesAvgOrderByAggregateInput
    _max?: usuarios_principalesMaxOrderByAggregateInput
    _min?: usuarios_principalesMinOrderByAggregateInput
    _sum?: usuarios_principalesSumOrderByAggregateInput
  }

  export type usuarios_principalesScalarWhereWithAggregatesInput = {
    AND?: usuarios_principalesScalarWhereWithAggregatesInput | usuarios_principalesScalarWhereWithAggregatesInput[]
    OR?: usuarios_principalesScalarWhereWithAggregatesInput[]
    NOT?: usuarios_principalesScalarWhereWithAggregatesInput | usuarios_principalesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios_principales"> | number
    email?: StringWithAggregatesFilter<"usuarios_principales"> | string
    password_hash?: StringWithAggregatesFilter<"usuarios_principales"> | string
    nombre?: StringWithAggregatesFilter<"usuarios_principales"> | string
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"usuarios_principales"> | Date | string | null
    ultima_actualizacion?: DateTimeNullableWithAggregatesFilter<"usuarios_principales"> | Date | string | null
    estado?: StringNullableWithAggregatesFilter<"usuarios_principales"> | string | null
    email_verificado?: BoolNullableWithAggregatesFilter<"usuarios_principales"> | boolean | null
  }

  export type whatsapp_accountsWhereInput = {
    AND?: whatsapp_accountsWhereInput | whatsapp_accountsWhereInput[]
    OR?: whatsapp_accountsWhereInput[]
    NOT?: whatsapp_accountsWhereInput | whatsapp_accountsWhereInput[]
    id?: UuidFilter<"whatsapp_accounts"> | string
    usuario_principal_id?: IntFilter<"whatsapp_accounts"> | number
    phone?: StringFilter<"whatsapp_accounts"> | string
    nombre_cuenta?: StringNullableFilter<"whatsapp_accounts"> | string | null
    token?: StringNullableFilter<"whatsapp_accounts"> | string | null
    fecha_conexion?: DateTimeNullableFilter<"whatsapp_accounts"> | Date | string | null
    esta_activa?: BoolNullableFilter<"whatsapp_accounts"> | boolean | null
    alias_personalizado?: StringNullableFilter<"whatsapp_accounts"> | string | null
    phone_number_id?: StringNullableFilter<"whatsapp_accounts"> | string | null
    token_updated_at?: DateTimeNullableFilter<"whatsapp_accounts"> | Date | string | null
    token_expires_at?: DateTimeNullableFilter<"whatsapp_accounts"> | Date | string | null
    conversations?: ConversationsListRelationFilter
    messages?: MessagesListRelationFilter
    usuarios_principales?: XOR<Usuarios_principalesScalarRelationFilter, usuarios_principalesWhereInput>
  }

  export type whatsapp_accountsOrderByWithRelationInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    phone?: SortOrder
    nombre_cuenta?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    fecha_conexion?: SortOrderInput | SortOrder
    esta_activa?: SortOrderInput | SortOrder
    alias_personalizado?: SortOrderInput | SortOrder
    phone_number_id?: SortOrderInput | SortOrder
    token_updated_at?: SortOrderInput | SortOrder
    token_expires_at?: SortOrderInput | SortOrder
    conversations?: conversationsOrderByRelationAggregateInput
    messages?: messagesOrderByRelationAggregateInput
    usuarios_principales?: usuarios_principalesOrderByWithRelationInput
  }

  export type whatsapp_accountsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    phone_number_id?: string
    AND?: whatsapp_accountsWhereInput | whatsapp_accountsWhereInput[]
    OR?: whatsapp_accountsWhereInput[]
    NOT?: whatsapp_accountsWhereInput | whatsapp_accountsWhereInput[]
    usuario_principal_id?: IntFilter<"whatsapp_accounts"> | number
    nombre_cuenta?: StringNullableFilter<"whatsapp_accounts"> | string | null
    token?: StringNullableFilter<"whatsapp_accounts"> | string | null
    fecha_conexion?: DateTimeNullableFilter<"whatsapp_accounts"> | Date | string | null
    esta_activa?: BoolNullableFilter<"whatsapp_accounts"> | boolean | null
    alias_personalizado?: StringNullableFilter<"whatsapp_accounts"> | string | null
    token_updated_at?: DateTimeNullableFilter<"whatsapp_accounts"> | Date | string | null
    token_expires_at?: DateTimeNullableFilter<"whatsapp_accounts"> | Date | string | null
    conversations?: ConversationsListRelationFilter
    messages?: MessagesListRelationFilter
    usuarios_principales?: XOR<Usuarios_principalesScalarRelationFilter, usuarios_principalesWhereInput>
  }, "id" | "phone" | "phone_number_id">

  export type whatsapp_accountsOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    phone?: SortOrder
    nombre_cuenta?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    fecha_conexion?: SortOrderInput | SortOrder
    esta_activa?: SortOrderInput | SortOrder
    alias_personalizado?: SortOrderInput | SortOrder
    phone_number_id?: SortOrderInput | SortOrder
    token_updated_at?: SortOrderInput | SortOrder
    token_expires_at?: SortOrderInput | SortOrder
    _count?: whatsapp_accountsCountOrderByAggregateInput
    _avg?: whatsapp_accountsAvgOrderByAggregateInput
    _max?: whatsapp_accountsMaxOrderByAggregateInput
    _min?: whatsapp_accountsMinOrderByAggregateInput
    _sum?: whatsapp_accountsSumOrderByAggregateInput
  }

  export type whatsapp_accountsScalarWhereWithAggregatesInput = {
    AND?: whatsapp_accountsScalarWhereWithAggregatesInput | whatsapp_accountsScalarWhereWithAggregatesInput[]
    OR?: whatsapp_accountsScalarWhereWithAggregatesInput[]
    NOT?: whatsapp_accountsScalarWhereWithAggregatesInput | whatsapp_accountsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"whatsapp_accounts"> | string
    usuario_principal_id?: IntWithAggregatesFilter<"whatsapp_accounts"> | number
    phone?: StringWithAggregatesFilter<"whatsapp_accounts"> | string
    nombre_cuenta?: StringNullableWithAggregatesFilter<"whatsapp_accounts"> | string | null
    token?: StringNullableWithAggregatesFilter<"whatsapp_accounts"> | string | null
    fecha_conexion?: DateTimeNullableWithAggregatesFilter<"whatsapp_accounts"> | Date | string | null
    esta_activa?: BoolNullableWithAggregatesFilter<"whatsapp_accounts"> | boolean | null
    alias_personalizado?: StringNullableWithAggregatesFilter<"whatsapp_accounts"> | string | null
    phone_number_id?: StringNullableWithAggregatesFilter<"whatsapp_accounts"> | string | null
    token_updated_at?: DateTimeNullableWithAggregatesFilter<"whatsapp_accounts"> | Date | string | null
    token_expires_at?: DateTimeNullableWithAggregatesFilter<"whatsapp_accounts"> | Date | string | null
  }

  export type audit_eliminacionesCreateInput = {
    tabla?: string | null
    registro_id?: number | null
    datos_eliminados?: NullableJsonNullValueInput | InputJsonValue
    usuario_bd?: string | null
    fecha_eliminacion?: Date | string | null
  }

  export type audit_eliminacionesUncheckedCreateInput = {
    id?: number
    tabla?: string | null
    registro_id?: number | null
    datos_eliminados?: NullableJsonNullValueInput | InputJsonValue
    usuario_bd?: string | null
    fecha_eliminacion?: Date | string | null
  }

  export type audit_eliminacionesUpdateInput = {
    tabla?: NullableStringFieldUpdateOperationsInput | string | null
    registro_id?: NullableIntFieldUpdateOperationsInput | number | null
    datos_eliminados?: NullableJsonNullValueInput | InputJsonValue
    usuario_bd?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_eliminacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_eliminacionesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tabla?: NullableStringFieldUpdateOperationsInput | string | null
    registro_id?: NullableIntFieldUpdateOperationsInput | number | null
    datos_eliminados?: NullableJsonNullValueInput | InputJsonValue
    usuario_bd?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_eliminacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_eliminacionesCreateManyInput = {
    id?: number
    tabla?: string | null
    registro_id?: number | null
    datos_eliminados?: NullableJsonNullValueInput | InputJsonValue
    usuario_bd?: string | null
    fecha_eliminacion?: Date | string | null
  }

  export type audit_eliminacionesUpdateManyMutationInput = {
    tabla?: NullableStringFieldUpdateOperationsInput | string | null
    registro_id?: NullableIntFieldUpdateOperationsInput | number | null
    datos_eliminados?: NullableJsonNullValueInput | InputJsonValue
    usuario_bd?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_eliminacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_eliminacionesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tabla?: NullableStringFieldUpdateOperationsInput | string | null
    registro_id?: NullableIntFieldUpdateOperationsInput | number | null
    datos_eliminados?: NullableJsonNullValueInput | InputJsonValue
    usuario_bd?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_eliminacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type conversationsCreateInput = {
    id?: string
    phone?: string | null
    name?: string | null
    last_message?: string | null
    last_message_date?: Date | string | null
    whatsapp_accounts: whatsapp_accountsCreateNestedOneWithoutConversationsInput
    messages?: messagesCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateInput = {
    id?: string
    whatsapp_account_id: string
    phone?: string | null
    name?: string | null
    last_message?: string | null
    last_message_date?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    whatsapp_accounts?: whatsapp_accountsUpdateOneRequiredWithoutConversationsNestedInput
    messages?: messagesUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsapp_account_id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsCreateManyInput = {
    id?: string
    whatsapp_account_id: string
    phone?: string | null
    name?: string | null
    last_message?: string | null
    last_message_date?: Date | string | null
  }

  export type conversationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type conversationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsapp_account_id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cuentas_gmail_asociadasCreateInput = {
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    consecutive_zero_syncs?: number | null
    alias_personalizado?: string | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
    usuarios_principales: usuarios_principalesCreateNestedOneWithoutCuentas_gmail_asociadasInput
    emails_sincronizados?: emails_sincronizadosCreateNestedManyWithoutCuentas_gmail_asociadasInput
  }

  export type cuentas_gmail_asociadasUncheckedCreateInput = {
    id?: number
    usuario_principal_id: number
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    consecutive_zero_syncs?: number | null
    alias_personalizado?: string | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
    emails_sincronizados?: emails_sincronizadosUncheckedCreateNestedManyWithoutCuentas_gmail_asociadasInput
  }

  export type cuentas_gmail_asociadasUpdateInput = {
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios_principales?: usuarios_principalesUpdateOneRequiredWithoutCuentas_gmail_asociadasNestedInput
    emails_sincronizados?: emails_sincronizadosUpdateManyWithoutCuentas_gmail_asociadasNestedInput
  }

  export type cuentas_gmail_asociadasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_principal_id?: IntFieldUpdateOperationsInput | number
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
    emails_sincronizados?: emails_sincronizadosUncheckedUpdateManyWithoutCuentas_gmail_asociadasNestedInput
  }

  export type cuentas_gmail_asociadasCreateManyInput = {
    id?: number
    usuario_principal_id: number
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    consecutive_zero_syncs?: number | null
    alias_personalizado?: string | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
  }

  export type cuentas_gmail_asociadasUpdateManyMutationInput = {
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cuentas_gmail_asociadasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_principal_id?: IntFieldUpdateOperationsInput | number
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type emails_sincronizadosCreateInput = {
    gmail_message_id: string
    asunto?: string | null
    remitente_email?: string | null
    remitente_nombre?: string | null
    destinatario_email?: string | null
    fecha_recibido?: Date | string | null
    esta_leido?: boolean | null
    tiene_adjuntos?: boolean | null
    etiquetas_gmail?: emails_sincronizadosCreateetiquetas_gmailInput | string[]
    tamano_bytes?: number | null
    fecha_sincronizado?: Date | string | null
    cuentas_gmail_asociadas: cuentas_gmail_asociadasCreateNestedOneWithoutEmails_sincronizadosInput
  }

  export type emails_sincronizadosUncheckedCreateInput = {
    id?: number
    cuenta_gmail_id: number
    gmail_message_id: string
    asunto?: string | null
    remitente_email?: string | null
    remitente_nombre?: string | null
    destinatario_email?: string | null
    fecha_recibido?: Date | string | null
    esta_leido?: boolean | null
    tiene_adjuntos?: boolean | null
    etiquetas_gmail?: emails_sincronizadosCreateetiquetas_gmailInput | string[]
    tamano_bytes?: number | null
    fecha_sincronizado?: Date | string | null
  }

  export type emails_sincronizadosUpdateInput = {
    gmail_message_id?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    remitente_email?: NullableStringFieldUpdateOperationsInput | string | null
    remitente_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    destinatario_email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tiene_adjuntos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    etiquetas_gmail?: emails_sincronizadosUpdateetiquetas_gmailInput | string[]
    tamano_bytes?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_sincronizado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUpdateOneRequiredWithoutEmails_sincronizadosNestedInput
  }

  export type emails_sincronizadosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cuenta_gmail_id?: IntFieldUpdateOperationsInput | number
    gmail_message_id?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    remitente_email?: NullableStringFieldUpdateOperationsInput | string | null
    remitente_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    destinatario_email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tiene_adjuntos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    etiquetas_gmail?: emails_sincronizadosUpdateetiquetas_gmailInput | string[]
    tamano_bytes?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_sincronizado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type emails_sincronizadosCreateManyInput = {
    id?: number
    cuenta_gmail_id: number
    gmail_message_id: string
    asunto?: string | null
    remitente_email?: string | null
    remitente_nombre?: string | null
    destinatario_email?: string | null
    fecha_recibido?: Date | string | null
    esta_leido?: boolean | null
    tiene_adjuntos?: boolean | null
    etiquetas_gmail?: emails_sincronizadosCreateetiquetas_gmailInput | string[]
    tamano_bytes?: number | null
    fecha_sincronizado?: Date | string | null
  }

  export type emails_sincronizadosUpdateManyMutationInput = {
    gmail_message_id?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    remitente_email?: NullableStringFieldUpdateOperationsInput | string | null
    remitente_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    destinatario_email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tiene_adjuntos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    etiquetas_gmail?: emails_sincronizadosUpdateetiquetas_gmailInput | string[]
    tamano_bytes?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_sincronizado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type emails_sincronizadosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cuenta_gmail_id?: IntFieldUpdateOperationsInput | number
    gmail_message_id?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    remitente_email?: NullableStringFieldUpdateOperationsInput | string | null
    remitente_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    destinatario_email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tiene_adjuntos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    etiquetas_gmail?: emails_sincronizadosUpdateetiquetas_gmailInput | string[]
    tamano_bytes?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_sincronizado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesCreateInput = {
    id?: string
    phone?: string | null
    message?: string | null
    timestamp?: Date | string | null
    respondido?: boolean | null
    canal?: string | null
    categoria?: string | null
    conversations: conversationsCreateNestedOneWithoutMessagesInput
    whatsapp_accounts: whatsapp_accountsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateInput = {
    id?: string
    conversation_id: string
    whatsapp_account_id: string
    phone?: string | null
    message?: string | null
    timestamp?: Date | string | null
    respondido?: boolean | null
    canal?: string | null
    categoria?: string | null
  }

  export type messagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canal?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
    whatsapp_accounts?: whatsapp_accountsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    whatsapp_account_id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canal?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesCreateManyInput = {
    id?: string
    conversation_id: string
    whatsapp_account_id: string
    phone?: string | null
    message?: string | null
    timestamp?: Date | string | null
    respondido?: boolean | null
    canal?: string | null
    categoria?: string | null
  }

  export type messagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canal?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    whatsapp_account_id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canal?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sesiones_jwtCreateInput = {
    jwt_token: string
    expira_en: Date | string
    fecha_creacion?: Date | string | null
    esta_activa?: boolean | null
    ip_origen?: string | null
    user_agent?: string | null
    usuarios_principales: usuarios_principalesCreateNestedOneWithoutSesiones_jwtInput
  }

  export type sesiones_jwtUncheckedCreateInput = {
    id?: number
    usuario_principal_id: number
    jwt_token: string
    expira_en: Date | string
    fecha_creacion?: Date | string | null
    esta_activa?: boolean | null
    ip_origen?: string | null
    user_agent?: string | null
  }

  export type sesiones_jwtUpdateInput = {
    jwt_token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ip_origen?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios_principales?: usuarios_principalesUpdateOneRequiredWithoutSesiones_jwtNestedInput
  }

  export type sesiones_jwtUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_principal_id?: IntFieldUpdateOperationsInput | number
    jwt_token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ip_origen?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sesiones_jwtCreateManyInput = {
    id?: number
    usuario_principal_id: number
    jwt_token: string
    expira_en: Date | string
    fecha_creacion?: Date | string | null
    esta_activa?: boolean | null
    ip_origen?: string | null
    user_agent?: string | null
  }

  export type sesiones_jwtUpdateManyMutationInput = {
    jwt_token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ip_origen?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sesiones_jwtUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_principal_id?: IntFieldUpdateOperationsInput | number
    jwt_token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ip_origen?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarios_principalesCreateInput = {
    email: string
    password_hash: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasCreateNestedManyWithoutUsuarios_principalesInput
    sesiones_jwt?: sesiones_jwtCreateNestedManyWithoutUsuarios_principalesInput
    whatsapp_accounts?: whatsapp_accountsCreateNestedManyWithoutUsuarios_principalesInput
  }

  export type usuarios_principalesUncheckedCreateInput = {
    id?: number
    email: string
    password_hash: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUncheckedCreateNestedManyWithoutUsuarios_principalesInput
    sesiones_jwt?: sesiones_jwtUncheckedCreateNestedManyWithoutUsuarios_principalesInput
    whatsapp_accounts?: whatsapp_accountsUncheckedCreateNestedManyWithoutUsuarios_principalesInput
  }

  export type usuarios_principalesUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUpdateManyWithoutUsuarios_principalesNestedInput
    sesiones_jwt?: sesiones_jwtUpdateManyWithoutUsuarios_principalesNestedInput
    whatsapp_accounts?: whatsapp_accountsUpdateManyWithoutUsuarios_principalesNestedInput
  }

  export type usuarios_principalesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUncheckedUpdateManyWithoutUsuarios_principalesNestedInput
    sesiones_jwt?: sesiones_jwtUncheckedUpdateManyWithoutUsuarios_principalesNestedInput
    whatsapp_accounts?: whatsapp_accountsUncheckedUpdateManyWithoutUsuarios_principalesNestedInput
  }

  export type usuarios_principalesCreateManyInput = {
    id?: number
    email: string
    password_hash: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
  }

  export type usuarios_principalesUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usuarios_principalesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type whatsapp_accountsCreateInput = {
    id?: string
    phone: string
    nombre_cuenta?: string | null
    token?: string | null
    fecha_conexion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    phone_number_id?: string | null
    token_updated_at?: Date | string | null
    token_expires_at?: Date | string | null
    conversations?: conversationsCreateNestedManyWithoutWhatsapp_accountsInput
    messages?: messagesCreateNestedManyWithoutWhatsapp_accountsInput
    usuarios_principales: usuarios_principalesCreateNestedOneWithoutWhatsapp_accountsInput
  }

  export type whatsapp_accountsUncheckedCreateInput = {
    id?: string
    usuario_principal_id: number
    phone: string
    nombre_cuenta?: string | null
    token?: string | null
    fecha_conexion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    phone_number_id?: string | null
    token_updated_at?: Date | string | null
    token_expires_at?: Date | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutWhatsapp_accountsInput
    messages?: messagesUncheckedCreateNestedManyWithoutWhatsapp_accountsInput
  }

  export type whatsapp_accountsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_id?: NullableStringFieldUpdateOperationsInput | string | null
    token_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUpdateManyWithoutWhatsapp_accountsNestedInput
    messages?: messagesUpdateManyWithoutWhatsapp_accountsNestedInput
    usuarios_principales?: usuarios_principalesUpdateOneRequiredWithoutWhatsapp_accountsNestedInput
  }

  export type whatsapp_accountsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_principal_id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_id?: NullableStringFieldUpdateOperationsInput | string | null
    token_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutWhatsapp_accountsNestedInput
    messages?: messagesUncheckedUpdateManyWithoutWhatsapp_accountsNestedInput
  }

  export type whatsapp_accountsCreateManyInput = {
    id?: string
    usuario_principal_id: number
    phone: string
    nombre_cuenta?: string | null
    token?: string | null
    fecha_conexion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    phone_number_id?: string | null
    token_updated_at?: Date | string | null
    token_expires_at?: Date | string | null
  }

  export type whatsapp_accountsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_id?: NullableStringFieldUpdateOperationsInput | string | null
    token_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type whatsapp_accountsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_principal_id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_id?: NullableStringFieldUpdateOperationsInput | string | null
    token_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type audit_eliminacionesCountOrderByAggregateInput = {
    id?: SortOrder
    tabla?: SortOrder
    registro_id?: SortOrder
    datos_eliminados?: SortOrder
    usuario_bd?: SortOrder
    fecha_eliminacion?: SortOrder
  }

  export type audit_eliminacionesAvgOrderByAggregateInput = {
    id?: SortOrder
    registro_id?: SortOrder
  }

  export type audit_eliminacionesMaxOrderByAggregateInput = {
    id?: SortOrder
    tabla?: SortOrder
    registro_id?: SortOrder
    usuario_bd?: SortOrder
    fecha_eliminacion?: SortOrder
  }

  export type audit_eliminacionesMinOrderByAggregateInput = {
    id?: SortOrder
    tabla?: SortOrder
    registro_id?: SortOrder
    usuario_bd?: SortOrder
    fecha_eliminacion?: SortOrder
  }

  export type audit_eliminacionesSumOrderByAggregateInput = {
    id?: SortOrder
    registro_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type Whatsapp_accountsScalarRelationFilter = {
    is?: whatsapp_accountsWhereInput
    isNot?: whatsapp_accountsWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type conversationsCountOrderByAggregateInput = {
    id?: SortOrder
    whatsapp_account_id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    last_message?: SortOrder
    last_message_date?: SortOrder
  }

  export type conversationsMaxOrderByAggregateInput = {
    id?: SortOrder
    whatsapp_account_id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    last_message?: SortOrder
    last_message_date?: SortOrder
  }

  export type conversationsMinOrderByAggregateInput = {
    id?: SortOrder
    whatsapp_account_id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    last_message?: SortOrder
    last_message_date?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Usuarios_principalesScalarRelationFilter = {
    is?: usuarios_principalesWhereInput
    isNot?: usuarios_principalesWhereInput
  }

  export type Emails_sincronizadosListRelationFilter = {
    every?: emails_sincronizadosWhereInput
    some?: emails_sincronizadosWhereInput
    none?: emails_sincronizadosWhereInput
  }

  export type emails_sincronizadosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cuentas_gmail_asociadasUsuario_principal_idEmail_gmailCompoundUniqueInput = {
    usuario_principal_id: number
    email_gmail: string
  }

  export type cuentas_gmail_asociadasCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    email_gmail?: SortOrder
    nombre_cuenta?: SortOrder
    google_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_expira_en?: SortOrder
    fecha_conexion?: SortOrder
    ultima_sincronizacion?: SortOrder
    esta_activa?: SortOrder
    consecutive_zero_syncs?: SortOrder
    alias_personalizado?: SortOrder
    backfill_checkpoint_date?: SortOrder
    backfill_page_token?: SortOrder
  }

  export type cuentas_gmail_asociadasAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    consecutive_zero_syncs?: SortOrder
  }

  export type cuentas_gmail_asociadasMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    email_gmail?: SortOrder
    nombre_cuenta?: SortOrder
    google_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_expira_en?: SortOrder
    fecha_conexion?: SortOrder
    ultima_sincronizacion?: SortOrder
    esta_activa?: SortOrder
    consecutive_zero_syncs?: SortOrder
    alias_personalizado?: SortOrder
    backfill_checkpoint_date?: SortOrder
    backfill_page_token?: SortOrder
  }

  export type cuentas_gmail_asociadasMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    email_gmail?: SortOrder
    nombre_cuenta?: SortOrder
    google_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_expira_en?: SortOrder
    fecha_conexion?: SortOrder
    ultima_sincronizacion?: SortOrder
    esta_activa?: SortOrder
    consecutive_zero_syncs?: SortOrder
    alias_personalizado?: SortOrder
    backfill_checkpoint_date?: SortOrder
    backfill_page_token?: SortOrder
  }

  export type cuentas_gmail_asociadasSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    consecutive_zero_syncs?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type Cuentas_gmail_asociadasScalarRelationFilter = {
    is?: cuentas_gmail_asociadasWhereInput
    isNot?: cuentas_gmail_asociadasWhereInput
  }

  export type emails_sincronizadosCuenta_gmail_idGmail_message_idCompoundUniqueInput = {
    cuenta_gmail_id: number
    gmail_message_id: string
  }

  export type emails_sincronizadosCountOrderByAggregateInput = {
    id?: SortOrder
    cuenta_gmail_id?: SortOrder
    gmail_message_id?: SortOrder
    asunto?: SortOrder
    remitente_email?: SortOrder
    remitente_nombre?: SortOrder
    destinatario_email?: SortOrder
    fecha_recibido?: SortOrder
    esta_leido?: SortOrder
    tiene_adjuntos?: SortOrder
    etiquetas_gmail?: SortOrder
    tamano_bytes?: SortOrder
    fecha_sincronizado?: SortOrder
  }

  export type emails_sincronizadosAvgOrderByAggregateInput = {
    id?: SortOrder
    cuenta_gmail_id?: SortOrder
    tamano_bytes?: SortOrder
  }

  export type emails_sincronizadosMaxOrderByAggregateInput = {
    id?: SortOrder
    cuenta_gmail_id?: SortOrder
    gmail_message_id?: SortOrder
    asunto?: SortOrder
    remitente_email?: SortOrder
    remitente_nombre?: SortOrder
    destinatario_email?: SortOrder
    fecha_recibido?: SortOrder
    esta_leido?: SortOrder
    tiene_adjuntos?: SortOrder
    tamano_bytes?: SortOrder
    fecha_sincronizado?: SortOrder
  }

  export type emails_sincronizadosMinOrderByAggregateInput = {
    id?: SortOrder
    cuenta_gmail_id?: SortOrder
    gmail_message_id?: SortOrder
    asunto?: SortOrder
    remitente_email?: SortOrder
    remitente_nombre?: SortOrder
    destinatario_email?: SortOrder
    fecha_recibido?: SortOrder
    esta_leido?: SortOrder
    tiene_adjuntos?: SortOrder
    tamano_bytes?: SortOrder
    fecha_sincronizado?: SortOrder
  }

  export type emails_sincronizadosSumOrderByAggregateInput = {
    id?: SortOrder
    cuenta_gmail_id?: SortOrder
    tamano_bytes?: SortOrder
  }

  export type ConversationsScalarRelationFilter = {
    is?: conversationsWhereInput
    isNot?: conversationsWhereInput
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    whatsapp_account_id?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    respondido?: SortOrder
    canal?: SortOrder
    categoria?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    whatsapp_account_id?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    respondido?: SortOrder
    canal?: SortOrder
    categoria?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    whatsapp_account_id?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    respondido?: SortOrder
    canal?: SortOrder
    categoria?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type sesiones_jwtCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    jwt_token?: SortOrder
    expira_en?: SortOrder
    fecha_creacion?: SortOrder
    esta_activa?: SortOrder
    ip_origen?: SortOrder
    user_agent?: SortOrder
  }

  export type sesiones_jwtAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
  }

  export type sesiones_jwtMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    jwt_token?: SortOrder
    expira_en?: SortOrder
    fecha_creacion?: SortOrder
    esta_activa?: SortOrder
    ip_origen?: SortOrder
    user_agent?: SortOrder
  }

  export type sesiones_jwtMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    jwt_token?: SortOrder
    expira_en?: SortOrder
    fecha_creacion?: SortOrder
    esta_activa?: SortOrder
    ip_origen?: SortOrder
    user_agent?: SortOrder
  }

  export type sesiones_jwtSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Cuentas_gmail_asociadasListRelationFilter = {
    every?: cuentas_gmail_asociadasWhereInput
    some?: cuentas_gmail_asociadasWhereInput
    none?: cuentas_gmail_asociadasWhereInput
  }

  export type Sesiones_jwtListRelationFilter = {
    every?: sesiones_jwtWhereInput
    some?: sesiones_jwtWhereInput
    none?: sesiones_jwtWhereInput
  }

  export type Whatsapp_accountsListRelationFilter = {
    every?: whatsapp_accountsWhereInput
    some?: whatsapp_accountsWhereInput
    none?: whatsapp_accountsWhereInput
  }

  export type cuentas_gmail_asociadasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sesiones_jwtOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type whatsapp_accountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarios_principalesCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    nombre?: SortOrder
    fecha_registro?: SortOrder
    ultima_actualizacion?: SortOrder
    estado?: SortOrder
    email_verificado?: SortOrder
  }

  export type usuarios_principalesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuarios_principalesMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    nombre?: SortOrder
    fecha_registro?: SortOrder
    ultima_actualizacion?: SortOrder
    estado?: SortOrder
    email_verificado?: SortOrder
  }

  export type usuarios_principalesMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    nombre?: SortOrder
    fecha_registro?: SortOrder
    ultima_actualizacion?: SortOrder
    estado?: SortOrder
    email_verificado?: SortOrder
  }

  export type usuarios_principalesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConversationsListRelationFilter = {
    every?: conversationsWhereInput
    some?: conversationsWhereInput
    none?: conversationsWhereInput
  }

  export type conversationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type whatsapp_accountsCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    phone?: SortOrder
    nombre_cuenta?: SortOrder
    token?: SortOrder
    fecha_conexion?: SortOrder
    esta_activa?: SortOrder
    alias_personalizado?: SortOrder
    phone_number_id?: SortOrder
    token_updated_at?: SortOrder
    token_expires_at?: SortOrder
  }

  export type whatsapp_accountsAvgOrderByAggregateInput = {
    usuario_principal_id?: SortOrder
  }

  export type whatsapp_accountsMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    phone?: SortOrder
    nombre_cuenta?: SortOrder
    token?: SortOrder
    fecha_conexion?: SortOrder
    esta_activa?: SortOrder
    alias_personalizado?: SortOrder
    phone_number_id?: SortOrder
    token_updated_at?: SortOrder
    token_expires_at?: SortOrder
  }

  export type whatsapp_accountsMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrder
    phone?: SortOrder
    nombre_cuenta?: SortOrder
    token?: SortOrder
    fecha_conexion?: SortOrder
    esta_activa?: SortOrder
    alias_personalizado?: SortOrder
    phone_number_id?: SortOrder
    token_updated_at?: SortOrder
    token_expires_at?: SortOrder
  }

  export type whatsapp_accountsSumOrderByAggregateInput = {
    usuario_principal_id?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type whatsapp_accountsCreateNestedOneWithoutConversationsInput = {
    create?: XOR<whatsapp_accountsCreateWithoutConversationsInput, whatsapp_accountsUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: whatsapp_accountsCreateOrConnectWithoutConversationsInput
    connect?: whatsapp_accountsWhereUniqueInput
  }

  export type messagesCreateNestedManyWithoutConversationsInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutConversationsInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type whatsapp_accountsUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<whatsapp_accountsCreateWithoutConversationsInput, whatsapp_accountsUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: whatsapp_accountsCreateOrConnectWithoutConversationsInput
    upsert?: whatsapp_accountsUpsertWithoutConversationsInput
    connect?: whatsapp_accountsWhereUniqueInput
    update?: XOR<XOR<whatsapp_accountsUpdateToOneWithWhereWithoutConversationsInput, whatsapp_accountsUpdateWithoutConversationsInput>, whatsapp_accountsUncheckedUpdateWithoutConversationsInput>
  }

  export type messagesUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationsInput | messagesUpsertWithWhereUniqueWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationsInput | messagesUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationsInput | messagesUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationsInput | messagesUpsertWithWhereUniqueWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationsInput | messagesUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationsInput | messagesUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type usuarios_principalesCreateNestedOneWithoutCuentas_gmail_asociadasInput = {
    create?: XOR<usuarios_principalesCreateWithoutCuentas_gmail_asociadasInput, usuarios_principalesUncheckedCreateWithoutCuentas_gmail_asociadasInput>
    connectOrCreate?: usuarios_principalesCreateOrConnectWithoutCuentas_gmail_asociadasInput
    connect?: usuarios_principalesWhereUniqueInput
  }

  export type emails_sincronizadosCreateNestedManyWithoutCuentas_gmail_asociadasInput = {
    create?: XOR<emails_sincronizadosCreateWithoutCuentas_gmail_asociadasInput, emails_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput> | emails_sincronizadosCreateWithoutCuentas_gmail_asociadasInput[] | emails_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput[]
    connectOrCreate?: emails_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput | emails_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput[]
    createMany?: emails_sincronizadosCreateManyCuentas_gmail_asociadasInputEnvelope
    connect?: emails_sincronizadosWhereUniqueInput | emails_sincronizadosWhereUniqueInput[]
  }

  export type emails_sincronizadosUncheckedCreateNestedManyWithoutCuentas_gmail_asociadasInput = {
    create?: XOR<emails_sincronizadosCreateWithoutCuentas_gmail_asociadasInput, emails_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput> | emails_sincronizadosCreateWithoutCuentas_gmail_asociadasInput[] | emails_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput[]
    connectOrCreate?: emails_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput | emails_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput[]
    createMany?: emails_sincronizadosCreateManyCuentas_gmail_asociadasInputEnvelope
    connect?: emails_sincronizadosWhereUniqueInput | emails_sincronizadosWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usuarios_principalesUpdateOneRequiredWithoutCuentas_gmail_asociadasNestedInput = {
    create?: XOR<usuarios_principalesCreateWithoutCuentas_gmail_asociadasInput, usuarios_principalesUncheckedCreateWithoutCuentas_gmail_asociadasInput>
    connectOrCreate?: usuarios_principalesCreateOrConnectWithoutCuentas_gmail_asociadasInput
    upsert?: usuarios_principalesUpsertWithoutCuentas_gmail_asociadasInput
    connect?: usuarios_principalesWhereUniqueInput
    update?: XOR<XOR<usuarios_principalesUpdateToOneWithWhereWithoutCuentas_gmail_asociadasInput, usuarios_principalesUpdateWithoutCuentas_gmail_asociadasInput>, usuarios_principalesUncheckedUpdateWithoutCuentas_gmail_asociadasInput>
  }

  export type emails_sincronizadosUpdateManyWithoutCuentas_gmail_asociadasNestedInput = {
    create?: XOR<emails_sincronizadosCreateWithoutCuentas_gmail_asociadasInput, emails_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput> | emails_sincronizadosCreateWithoutCuentas_gmail_asociadasInput[] | emails_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput[]
    connectOrCreate?: emails_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput | emails_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput[]
    upsert?: emails_sincronizadosUpsertWithWhereUniqueWithoutCuentas_gmail_asociadasInput | emails_sincronizadosUpsertWithWhereUniqueWithoutCuentas_gmail_asociadasInput[]
    createMany?: emails_sincronizadosCreateManyCuentas_gmail_asociadasInputEnvelope
    set?: emails_sincronizadosWhereUniqueInput | emails_sincronizadosWhereUniqueInput[]
    disconnect?: emails_sincronizadosWhereUniqueInput | emails_sincronizadosWhereUniqueInput[]
    delete?: emails_sincronizadosWhereUniqueInput | emails_sincronizadosWhereUniqueInput[]
    connect?: emails_sincronizadosWhereUniqueInput | emails_sincronizadosWhereUniqueInput[]
    update?: emails_sincronizadosUpdateWithWhereUniqueWithoutCuentas_gmail_asociadasInput | emails_sincronizadosUpdateWithWhereUniqueWithoutCuentas_gmail_asociadasInput[]
    updateMany?: emails_sincronizadosUpdateManyWithWhereWithoutCuentas_gmail_asociadasInput | emails_sincronizadosUpdateManyWithWhereWithoutCuentas_gmail_asociadasInput[]
    deleteMany?: emails_sincronizadosScalarWhereInput | emails_sincronizadosScalarWhereInput[]
  }

  export type emails_sincronizadosUncheckedUpdateManyWithoutCuentas_gmail_asociadasNestedInput = {
    create?: XOR<emails_sincronizadosCreateWithoutCuentas_gmail_asociadasInput, emails_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput> | emails_sincronizadosCreateWithoutCuentas_gmail_asociadasInput[] | emails_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput[]
    connectOrCreate?: emails_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput | emails_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput[]
    upsert?: emails_sincronizadosUpsertWithWhereUniqueWithoutCuentas_gmail_asociadasInput | emails_sincronizadosUpsertWithWhereUniqueWithoutCuentas_gmail_asociadasInput[]
    createMany?: emails_sincronizadosCreateManyCuentas_gmail_asociadasInputEnvelope
    set?: emails_sincronizadosWhereUniqueInput | emails_sincronizadosWhereUniqueInput[]
    disconnect?: emails_sincronizadosWhereUniqueInput | emails_sincronizadosWhereUniqueInput[]
    delete?: emails_sincronizadosWhereUniqueInput | emails_sincronizadosWhereUniqueInput[]
    connect?: emails_sincronizadosWhereUniqueInput | emails_sincronizadosWhereUniqueInput[]
    update?: emails_sincronizadosUpdateWithWhereUniqueWithoutCuentas_gmail_asociadasInput | emails_sincronizadosUpdateWithWhereUniqueWithoutCuentas_gmail_asociadasInput[]
    updateMany?: emails_sincronizadosUpdateManyWithWhereWithoutCuentas_gmail_asociadasInput | emails_sincronizadosUpdateManyWithWhereWithoutCuentas_gmail_asociadasInput[]
    deleteMany?: emails_sincronizadosScalarWhereInput | emails_sincronizadosScalarWhereInput[]
  }

  export type emails_sincronizadosCreateetiquetas_gmailInput = {
    set: string[]
  }

  export type cuentas_gmail_asociadasCreateNestedOneWithoutEmails_sincronizadosInput = {
    create?: XOR<cuentas_gmail_asociadasCreateWithoutEmails_sincronizadosInput, cuentas_gmail_asociadasUncheckedCreateWithoutEmails_sincronizadosInput>
    connectOrCreate?: cuentas_gmail_asociadasCreateOrConnectWithoutEmails_sincronizadosInput
    connect?: cuentas_gmail_asociadasWhereUniqueInput
  }

  export type emails_sincronizadosUpdateetiquetas_gmailInput = {
    set?: string[]
    push?: string | string[]
  }

  export type cuentas_gmail_asociadasUpdateOneRequiredWithoutEmails_sincronizadosNestedInput = {
    create?: XOR<cuentas_gmail_asociadasCreateWithoutEmails_sincronizadosInput, cuentas_gmail_asociadasUncheckedCreateWithoutEmails_sincronizadosInput>
    connectOrCreate?: cuentas_gmail_asociadasCreateOrConnectWithoutEmails_sincronizadosInput
    upsert?: cuentas_gmail_asociadasUpsertWithoutEmails_sincronizadosInput
    connect?: cuentas_gmail_asociadasWhereUniqueInput
    update?: XOR<XOR<cuentas_gmail_asociadasUpdateToOneWithWhereWithoutEmails_sincronizadosInput, cuentas_gmail_asociadasUpdateWithoutEmails_sincronizadosInput>, cuentas_gmail_asociadasUncheckedUpdateWithoutEmails_sincronizadosInput>
  }

  export type conversationsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
  }

  export type whatsapp_accountsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<whatsapp_accountsCreateWithoutMessagesInput, whatsapp_accountsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: whatsapp_accountsCreateOrConnectWithoutMessagesInput
    connect?: whatsapp_accountsWhereUniqueInput
  }

  export type conversationsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    upsert?: conversationsUpsertWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
    update?: XOR<XOR<conversationsUpdateToOneWithWhereWithoutMessagesInput, conversationsUpdateWithoutMessagesInput>, conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type whatsapp_accountsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<whatsapp_accountsCreateWithoutMessagesInput, whatsapp_accountsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: whatsapp_accountsCreateOrConnectWithoutMessagesInput
    upsert?: whatsapp_accountsUpsertWithoutMessagesInput
    connect?: whatsapp_accountsWhereUniqueInput
    update?: XOR<XOR<whatsapp_accountsUpdateToOneWithWhereWithoutMessagesInput, whatsapp_accountsUpdateWithoutMessagesInput>, whatsapp_accountsUncheckedUpdateWithoutMessagesInput>
  }

  export type usuarios_principalesCreateNestedOneWithoutSesiones_jwtInput = {
    create?: XOR<usuarios_principalesCreateWithoutSesiones_jwtInput, usuarios_principalesUncheckedCreateWithoutSesiones_jwtInput>
    connectOrCreate?: usuarios_principalesCreateOrConnectWithoutSesiones_jwtInput
    connect?: usuarios_principalesWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usuarios_principalesUpdateOneRequiredWithoutSesiones_jwtNestedInput = {
    create?: XOR<usuarios_principalesCreateWithoutSesiones_jwtInput, usuarios_principalesUncheckedCreateWithoutSesiones_jwtInput>
    connectOrCreate?: usuarios_principalesCreateOrConnectWithoutSesiones_jwtInput
    upsert?: usuarios_principalesUpsertWithoutSesiones_jwtInput
    connect?: usuarios_principalesWhereUniqueInput
    update?: XOR<XOR<usuarios_principalesUpdateToOneWithWhereWithoutSesiones_jwtInput, usuarios_principalesUpdateWithoutSesiones_jwtInput>, usuarios_principalesUncheckedUpdateWithoutSesiones_jwtInput>
  }

  export type cuentas_gmail_asociadasCreateNestedManyWithoutUsuarios_principalesInput = {
    create?: XOR<cuentas_gmail_asociadasCreateWithoutUsuarios_principalesInput, cuentas_gmail_asociadasUncheckedCreateWithoutUsuarios_principalesInput> | cuentas_gmail_asociadasCreateWithoutUsuarios_principalesInput[] | cuentas_gmail_asociadasUncheckedCreateWithoutUsuarios_principalesInput[]
    connectOrCreate?: cuentas_gmail_asociadasCreateOrConnectWithoutUsuarios_principalesInput | cuentas_gmail_asociadasCreateOrConnectWithoutUsuarios_principalesInput[]
    createMany?: cuentas_gmail_asociadasCreateManyUsuarios_principalesInputEnvelope
    connect?: cuentas_gmail_asociadasWhereUniqueInput | cuentas_gmail_asociadasWhereUniqueInput[]
  }

  export type sesiones_jwtCreateNestedManyWithoutUsuarios_principalesInput = {
    create?: XOR<sesiones_jwtCreateWithoutUsuarios_principalesInput, sesiones_jwtUncheckedCreateWithoutUsuarios_principalesInput> | sesiones_jwtCreateWithoutUsuarios_principalesInput[] | sesiones_jwtUncheckedCreateWithoutUsuarios_principalesInput[]
    connectOrCreate?: sesiones_jwtCreateOrConnectWithoutUsuarios_principalesInput | sesiones_jwtCreateOrConnectWithoutUsuarios_principalesInput[]
    createMany?: sesiones_jwtCreateManyUsuarios_principalesInputEnvelope
    connect?: sesiones_jwtWhereUniqueInput | sesiones_jwtWhereUniqueInput[]
  }

  export type whatsapp_accountsCreateNestedManyWithoutUsuarios_principalesInput = {
    create?: XOR<whatsapp_accountsCreateWithoutUsuarios_principalesInput, whatsapp_accountsUncheckedCreateWithoutUsuarios_principalesInput> | whatsapp_accountsCreateWithoutUsuarios_principalesInput[] | whatsapp_accountsUncheckedCreateWithoutUsuarios_principalesInput[]
    connectOrCreate?: whatsapp_accountsCreateOrConnectWithoutUsuarios_principalesInput | whatsapp_accountsCreateOrConnectWithoutUsuarios_principalesInput[]
    createMany?: whatsapp_accountsCreateManyUsuarios_principalesInputEnvelope
    connect?: whatsapp_accountsWhereUniqueInput | whatsapp_accountsWhereUniqueInput[]
  }

  export type cuentas_gmail_asociadasUncheckedCreateNestedManyWithoutUsuarios_principalesInput = {
    create?: XOR<cuentas_gmail_asociadasCreateWithoutUsuarios_principalesInput, cuentas_gmail_asociadasUncheckedCreateWithoutUsuarios_principalesInput> | cuentas_gmail_asociadasCreateWithoutUsuarios_principalesInput[] | cuentas_gmail_asociadasUncheckedCreateWithoutUsuarios_principalesInput[]
    connectOrCreate?: cuentas_gmail_asociadasCreateOrConnectWithoutUsuarios_principalesInput | cuentas_gmail_asociadasCreateOrConnectWithoutUsuarios_principalesInput[]
    createMany?: cuentas_gmail_asociadasCreateManyUsuarios_principalesInputEnvelope
    connect?: cuentas_gmail_asociadasWhereUniqueInput | cuentas_gmail_asociadasWhereUniqueInput[]
  }

  export type sesiones_jwtUncheckedCreateNestedManyWithoutUsuarios_principalesInput = {
    create?: XOR<sesiones_jwtCreateWithoutUsuarios_principalesInput, sesiones_jwtUncheckedCreateWithoutUsuarios_principalesInput> | sesiones_jwtCreateWithoutUsuarios_principalesInput[] | sesiones_jwtUncheckedCreateWithoutUsuarios_principalesInput[]
    connectOrCreate?: sesiones_jwtCreateOrConnectWithoutUsuarios_principalesInput | sesiones_jwtCreateOrConnectWithoutUsuarios_principalesInput[]
    createMany?: sesiones_jwtCreateManyUsuarios_principalesInputEnvelope
    connect?: sesiones_jwtWhereUniqueInput | sesiones_jwtWhereUniqueInput[]
  }

  export type whatsapp_accountsUncheckedCreateNestedManyWithoutUsuarios_principalesInput = {
    create?: XOR<whatsapp_accountsCreateWithoutUsuarios_principalesInput, whatsapp_accountsUncheckedCreateWithoutUsuarios_principalesInput> | whatsapp_accountsCreateWithoutUsuarios_principalesInput[] | whatsapp_accountsUncheckedCreateWithoutUsuarios_principalesInput[]
    connectOrCreate?: whatsapp_accountsCreateOrConnectWithoutUsuarios_principalesInput | whatsapp_accountsCreateOrConnectWithoutUsuarios_principalesInput[]
    createMany?: whatsapp_accountsCreateManyUsuarios_principalesInputEnvelope
    connect?: whatsapp_accountsWhereUniqueInput | whatsapp_accountsWhereUniqueInput[]
  }

  export type cuentas_gmail_asociadasUpdateManyWithoutUsuarios_principalesNestedInput = {
    create?: XOR<cuentas_gmail_asociadasCreateWithoutUsuarios_principalesInput, cuentas_gmail_asociadasUncheckedCreateWithoutUsuarios_principalesInput> | cuentas_gmail_asociadasCreateWithoutUsuarios_principalesInput[] | cuentas_gmail_asociadasUncheckedCreateWithoutUsuarios_principalesInput[]
    connectOrCreate?: cuentas_gmail_asociadasCreateOrConnectWithoutUsuarios_principalesInput | cuentas_gmail_asociadasCreateOrConnectWithoutUsuarios_principalesInput[]
    upsert?: cuentas_gmail_asociadasUpsertWithWhereUniqueWithoutUsuarios_principalesInput | cuentas_gmail_asociadasUpsertWithWhereUniqueWithoutUsuarios_principalesInput[]
    createMany?: cuentas_gmail_asociadasCreateManyUsuarios_principalesInputEnvelope
    set?: cuentas_gmail_asociadasWhereUniqueInput | cuentas_gmail_asociadasWhereUniqueInput[]
    disconnect?: cuentas_gmail_asociadasWhereUniqueInput | cuentas_gmail_asociadasWhereUniqueInput[]
    delete?: cuentas_gmail_asociadasWhereUniqueInput | cuentas_gmail_asociadasWhereUniqueInput[]
    connect?: cuentas_gmail_asociadasWhereUniqueInput | cuentas_gmail_asociadasWhereUniqueInput[]
    update?: cuentas_gmail_asociadasUpdateWithWhereUniqueWithoutUsuarios_principalesInput | cuentas_gmail_asociadasUpdateWithWhereUniqueWithoutUsuarios_principalesInput[]
    updateMany?: cuentas_gmail_asociadasUpdateManyWithWhereWithoutUsuarios_principalesInput | cuentas_gmail_asociadasUpdateManyWithWhereWithoutUsuarios_principalesInput[]
    deleteMany?: cuentas_gmail_asociadasScalarWhereInput | cuentas_gmail_asociadasScalarWhereInput[]
  }

  export type sesiones_jwtUpdateManyWithoutUsuarios_principalesNestedInput = {
    create?: XOR<sesiones_jwtCreateWithoutUsuarios_principalesInput, sesiones_jwtUncheckedCreateWithoutUsuarios_principalesInput> | sesiones_jwtCreateWithoutUsuarios_principalesInput[] | sesiones_jwtUncheckedCreateWithoutUsuarios_principalesInput[]
    connectOrCreate?: sesiones_jwtCreateOrConnectWithoutUsuarios_principalesInput | sesiones_jwtCreateOrConnectWithoutUsuarios_principalesInput[]
    upsert?: sesiones_jwtUpsertWithWhereUniqueWithoutUsuarios_principalesInput | sesiones_jwtUpsertWithWhereUniqueWithoutUsuarios_principalesInput[]
    createMany?: sesiones_jwtCreateManyUsuarios_principalesInputEnvelope
    set?: sesiones_jwtWhereUniqueInput | sesiones_jwtWhereUniqueInput[]
    disconnect?: sesiones_jwtWhereUniqueInput | sesiones_jwtWhereUniqueInput[]
    delete?: sesiones_jwtWhereUniqueInput | sesiones_jwtWhereUniqueInput[]
    connect?: sesiones_jwtWhereUniqueInput | sesiones_jwtWhereUniqueInput[]
    update?: sesiones_jwtUpdateWithWhereUniqueWithoutUsuarios_principalesInput | sesiones_jwtUpdateWithWhereUniqueWithoutUsuarios_principalesInput[]
    updateMany?: sesiones_jwtUpdateManyWithWhereWithoutUsuarios_principalesInput | sesiones_jwtUpdateManyWithWhereWithoutUsuarios_principalesInput[]
    deleteMany?: sesiones_jwtScalarWhereInput | sesiones_jwtScalarWhereInput[]
  }

  export type whatsapp_accountsUpdateManyWithoutUsuarios_principalesNestedInput = {
    create?: XOR<whatsapp_accountsCreateWithoutUsuarios_principalesInput, whatsapp_accountsUncheckedCreateWithoutUsuarios_principalesInput> | whatsapp_accountsCreateWithoutUsuarios_principalesInput[] | whatsapp_accountsUncheckedCreateWithoutUsuarios_principalesInput[]
    connectOrCreate?: whatsapp_accountsCreateOrConnectWithoutUsuarios_principalesInput | whatsapp_accountsCreateOrConnectWithoutUsuarios_principalesInput[]
    upsert?: whatsapp_accountsUpsertWithWhereUniqueWithoutUsuarios_principalesInput | whatsapp_accountsUpsertWithWhereUniqueWithoutUsuarios_principalesInput[]
    createMany?: whatsapp_accountsCreateManyUsuarios_principalesInputEnvelope
    set?: whatsapp_accountsWhereUniqueInput | whatsapp_accountsWhereUniqueInput[]
    disconnect?: whatsapp_accountsWhereUniqueInput | whatsapp_accountsWhereUniqueInput[]
    delete?: whatsapp_accountsWhereUniqueInput | whatsapp_accountsWhereUniqueInput[]
    connect?: whatsapp_accountsWhereUniqueInput | whatsapp_accountsWhereUniqueInput[]
    update?: whatsapp_accountsUpdateWithWhereUniqueWithoutUsuarios_principalesInput | whatsapp_accountsUpdateWithWhereUniqueWithoutUsuarios_principalesInput[]
    updateMany?: whatsapp_accountsUpdateManyWithWhereWithoutUsuarios_principalesInput | whatsapp_accountsUpdateManyWithWhereWithoutUsuarios_principalesInput[]
    deleteMany?: whatsapp_accountsScalarWhereInput | whatsapp_accountsScalarWhereInput[]
  }

  export type cuentas_gmail_asociadasUncheckedUpdateManyWithoutUsuarios_principalesNestedInput = {
    create?: XOR<cuentas_gmail_asociadasCreateWithoutUsuarios_principalesInput, cuentas_gmail_asociadasUncheckedCreateWithoutUsuarios_principalesInput> | cuentas_gmail_asociadasCreateWithoutUsuarios_principalesInput[] | cuentas_gmail_asociadasUncheckedCreateWithoutUsuarios_principalesInput[]
    connectOrCreate?: cuentas_gmail_asociadasCreateOrConnectWithoutUsuarios_principalesInput | cuentas_gmail_asociadasCreateOrConnectWithoutUsuarios_principalesInput[]
    upsert?: cuentas_gmail_asociadasUpsertWithWhereUniqueWithoutUsuarios_principalesInput | cuentas_gmail_asociadasUpsertWithWhereUniqueWithoutUsuarios_principalesInput[]
    createMany?: cuentas_gmail_asociadasCreateManyUsuarios_principalesInputEnvelope
    set?: cuentas_gmail_asociadasWhereUniqueInput | cuentas_gmail_asociadasWhereUniqueInput[]
    disconnect?: cuentas_gmail_asociadasWhereUniqueInput | cuentas_gmail_asociadasWhereUniqueInput[]
    delete?: cuentas_gmail_asociadasWhereUniqueInput | cuentas_gmail_asociadasWhereUniqueInput[]
    connect?: cuentas_gmail_asociadasWhereUniqueInput | cuentas_gmail_asociadasWhereUniqueInput[]
    update?: cuentas_gmail_asociadasUpdateWithWhereUniqueWithoutUsuarios_principalesInput | cuentas_gmail_asociadasUpdateWithWhereUniqueWithoutUsuarios_principalesInput[]
    updateMany?: cuentas_gmail_asociadasUpdateManyWithWhereWithoutUsuarios_principalesInput | cuentas_gmail_asociadasUpdateManyWithWhereWithoutUsuarios_principalesInput[]
    deleteMany?: cuentas_gmail_asociadasScalarWhereInput | cuentas_gmail_asociadasScalarWhereInput[]
  }

  export type sesiones_jwtUncheckedUpdateManyWithoutUsuarios_principalesNestedInput = {
    create?: XOR<sesiones_jwtCreateWithoutUsuarios_principalesInput, sesiones_jwtUncheckedCreateWithoutUsuarios_principalesInput> | sesiones_jwtCreateWithoutUsuarios_principalesInput[] | sesiones_jwtUncheckedCreateWithoutUsuarios_principalesInput[]
    connectOrCreate?: sesiones_jwtCreateOrConnectWithoutUsuarios_principalesInput | sesiones_jwtCreateOrConnectWithoutUsuarios_principalesInput[]
    upsert?: sesiones_jwtUpsertWithWhereUniqueWithoutUsuarios_principalesInput | sesiones_jwtUpsertWithWhereUniqueWithoutUsuarios_principalesInput[]
    createMany?: sesiones_jwtCreateManyUsuarios_principalesInputEnvelope
    set?: sesiones_jwtWhereUniqueInput | sesiones_jwtWhereUniqueInput[]
    disconnect?: sesiones_jwtWhereUniqueInput | sesiones_jwtWhereUniqueInput[]
    delete?: sesiones_jwtWhereUniqueInput | sesiones_jwtWhereUniqueInput[]
    connect?: sesiones_jwtWhereUniqueInput | sesiones_jwtWhereUniqueInput[]
    update?: sesiones_jwtUpdateWithWhereUniqueWithoutUsuarios_principalesInput | sesiones_jwtUpdateWithWhereUniqueWithoutUsuarios_principalesInput[]
    updateMany?: sesiones_jwtUpdateManyWithWhereWithoutUsuarios_principalesInput | sesiones_jwtUpdateManyWithWhereWithoutUsuarios_principalesInput[]
    deleteMany?: sesiones_jwtScalarWhereInput | sesiones_jwtScalarWhereInput[]
  }

  export type whatsapp_accountsUncheckedUpdateManyWithoutUsuarios_principalesNestedInput = {
    create?: XOR<whatsapp_accountsCreateWithoutUsuarios_principalesInput, whatsapp_accountsUncheckedCreateWithoutUsuarios_principalesInput> | whatsapp_accountsCreateWithoutUsuarios_principalesInput[] | whatsapp_accountsUncheckedCreateWithoutUsuarios_principalesInput[]
    connectOrCreate?: whatsapp_accountsCreateOrConnectWithoutUsuarios_principalesInput | whatsapp_accountsCreateOrConnectWithoutUsuarios_principalesInput[]
    upsert?: whatsapp_accountsUpsertWithWhereUniqueWithoutUsuarios_principalesInput | whatsapp_accountsUpsertWithWhereUniqueWithoutUsuarios_principalesInput[]
    createMany?: whatsapp_accountsCreateManyUsuarios_principalesInputEnvelope
    set?: whatsapp_accountsWhereUniqueInput | whatsapp_accountsWhereUniqueInput[]
    disconnect?: whatsapp_accountsWhereUniqueInput | whatsapp_accountsWhereUniqueInput[]
    delete?: whatsapp_accountsWhereUniqueInput | whatsapp_accountsWhereUniqueInput[]
    connect?: whatsapp_accountsWhereUniqueInput | whatsapp_accountsWhereUniqueInput[]
    update?: whatsapp_accountsUpdateWithWhereUniqueWithoutUsuarios_principalesInput | whatsapp_accountsUpdateWithWhereUniqueWithoutUsuarios_principalesInput[]
    updateMany?: whatsapp_accountsUpdateManyWithWhereWithoutUsuarios_principalesInput | whatsapp_accountsUpdateManyWithWhereWithoutUsuarios_principalesInput[]
    deleteMany?: whatsapp_accountsScalarWhereInput | whatsapp_accountsScalarWhereInput[]
  }

  export type conversationsCreateNestedManyWithoutWhatsapp_accountsInput = {
    create?: XOR<conversationsCreateWithoutWhatsapp_accountsInput, conversationsUncheckedCreateWithoutWhatsapp_accountsInput> | conversationsCreateWithoutWhatsapp_accountsInput[] | conversationsUncheckedCreateWithoutWhatsapp_accountsInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutWhatsapp_accountsInput | conversationsCreateOrConnectWithoutWhatsapp_accountsInput[]
    createMany?: conversationsCreateManyWhatsapp_accountsInputEnvelope
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutWhatsapp_accountsInput = {
    create?: XOR<messagesCreateWithoutWhatsapp_accountsInput, messagesUncheckedCreateWithoutWhatsapp_accountsInput> | messagesCreateWithoutWhatsapp_accountsInput[] | messagesUncheckedCreateWithoutWhatsapp_accountsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutWhatsapp_accountsInput | messagesCreateOrConnectWithoutWhatsapp_accountsInput[]
    createMany?: messagesCreateManyWhatsapp_accountsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type usuarios_principalesCreateNestedOneWithoutWhatsapp_accountsInput = {
    create?: XOR<usuarios_principalesCreateWithoutWhatsapp_accountsInput, usuarios_principalesUncheckedCreateWithoutWhatsapp_accountsInput>
    connectOrCreate?: usuarios_principalesCreateOrConnectWithoutWhatsapp_accountsInput
    connect?: usuarios_principalesWhereUniqueInput
  }

  export type conversationsUncheckedCreateNestedManyWithoutWhatsapp_accountsInput = {
    create?: XOR<conversationsCreateWithoutWhatsapp_accountsInput, conversationsUncheckedCreateWithoutWhatsapp_accountsInput> | conversationsCreateWithoutWhatsapp_accountsInput[] | conversationsUncheckedCreateWithoutWhatsapp_accountsInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutWhatsapp_accountsInput | conversationsCreateOrConnectWithoutWhatsapp_accountsInput[]
    createMany?: conversationsCreateManyWhatsapp_accountsInputEnvelope
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutWhatsapp_accountsInput = {
    create?: XOR<messagesCreateWithoutWhatsapp_accountsInput, messagesUncheckedCreateWithoutWhatsapp_accountsInput> | messagesCreateWithoutWhatsapp_accountsInput[] | messagesUncheckedCreateWithoutWhatsapp_accountsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutWhatsapp_accountsInput | messagesCreateOrConnectWithoutWhatsapp_accountsInput[]
    createMany?: messagesCreateManyWhatsapp_accountsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type conversationsUpdateManyWithoutWhatsapp_accountsNestedInput = {
    create?: XOR<conversationsCreateWithoutWhatsapp_accountsInput, conversationsUncheckedCreateWithoutWhatsapp_accountsInput> | conversationsCreateWithoutWhatsapp_accountsInput[] | conversationsUncheckedCreateWithoutWhatsapp_accountsInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutWhatsapp_accountsInput | conversationsCreateOrConnectWithoutWhatsapp_accountsInput[]
    upsert?: conversationsUpsertWithWhereUniqueWithoutWhatsapp_accountsInput | conversationsUpsertWithWhereUniqueWithoutWhatsapp_accountsInput[]
    createMany?: conversationsCreateManyWhatsapp_accountsInputEnvelope
    set?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    disconnect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    delete?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    update?: conversationsUpdateWithWhereUniqueWithoutWhatsapp_accountsInput | conversationsUpdateWithWhereUniqueWithoutWhatsapp_accountsInput[]
    updateMany?: conversationsUpdateManyWithWhereWithoutWhatsapp_accountsInput | conversationsUpdateManyWithWhereWithoutWhatsapp_accountsInput[]
    deleteMany?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutWhatsapp_accountsNestedInput = {
    create?: XOR<messagesCreateWithoutWhatsapp_accountsInput, messagesUncheckedCreateWithoutWhatsapp_accountsInput> | messagesCreateWithoutWhatsapp_accountsInput[] | messagesUncheckedCreateWithoutWhatsapp_accountsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutWhatsapp_accountsInput | messagesCreateOrConnectWithoutWhatsapp_accountsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutWhatsapp_accountsInput | messagesUpsertWithWhereUniqueWithoutWhatsapp_accountsInput[]
    createMany?: messagesCreateManyWhatsapp_accountsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutWhatsapp_accountsInput | messagesUpdateWithWhereUniqueWithoutWhatsapp_accountsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutWhatsapp_accountsInput | messagesUpdateManyWithWhereWithoutWhatsapp_accountsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type usuarios_principalesUpdateOneRequiredWithoutWhatsapp_accountsNestedInput = {
    create?: XOR<usuarios_principalesCreateWithoutWhatsapp_accountsInput, usuarios_principalesUncheckedCreateWithoutWhatsapp_accountsInput>
    connectOrCreate?: usuarios_principalesCreateOrConnectWithoutWhatsapp_accountsInput
    upsert?: usuarios_principalesUpsertWithoutWhatsapp_accountsInput
    connect?: usuarios_principalesWhereUniqueInput
    update?: XOR<XOR<usuarios_principalesUpdateToOneWithWhereWithoutWhatsapp_accountsInput, usuarios_principalesUpdateWithoutWhatsapp_accountsInput>, usuarios_principalesUncheckedUpdateWithoutWhatsapp_accountsInput>
  }

  export type conversationsUncheckedUpdateManyWithoutWhatsapp_accountsNestedInput = {
    create?: XOR<conversationsCreateWithoutWhatsapp_accountsInput, conversationsUncheckedCreateWithoutWhatsapp_accountsInput> | conversationsCreateWithoutWhatsapp_accountsInput[] | conversationsUncheckedCreateWithoutWhatsapp_accountsInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutWhatsapp_accountsInput | conversationsCreateOrConnectWithoutWhatsapp_accountsInput[]
    upsert?: conversationsUpsertWithWhereUniqueWithoutWhatsapp_accountsInput | conversationsUpsertWithWhereUniqueWithoutWhatsapp_accountsInput[]
    createMany?: conversationsCreateManyWhatsapp_accountsInputEnvelope
    set?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    disconnect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    delete?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    update?: conversationsUpdateWithWhereUniqueWithoutWhatsapp_accountsInput | conversationsUpdateWithWhereUniqueWithoutWhatsapp_accountsInput[]
    updateMany?: conversationsUpdateManyWithWhereWithoutWhatsapp_accountsInput | conversationsUpdateManyWithWhereWithoutWhatsapp_accountsInput[]
    deleteMany?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutWhatsapp_accountsNestedInput = {
    create?: XOR<messagesCreateWithoutWhatsapp_accountsInput, messagesUncheckedCreateWithoutWhatsapp_accountsInput> | messagesCreateWithoutWhatsapp_accountsInput[] | messagesUncheckedCreateWithoutWhatsapp_accountsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutWhatsapp_accountsInput | messagesCreateOrConnectWithoutWhatsapp_accountsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutWhatsapp_accountsInput | messagesUpsertWithWhereUniqueWithoutWhatsapp_accountsInput[]
    createMany?: messagesCreateManyWhatsapp_accountsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutWhatsapp_accountsInput | messagesUpdateWithWhereUniqueWithoutWhatsapp_accountsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutWhatsapp_accountsInput | messagesUpdateManyWithWhereWithoutWhatsapp_accountsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type whatsapp_accountsCreateWithoutConversationsInput = {
    id?: string
    phone: string
    nombre_cuenta?: string | null
    token?: string | null
    fecha_conexion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    phone_number_id?: string | null
    token_updated_at?: Date | string | null
    token_expires_at?: Date | string | null
    messages?: messagesCreateNestedManyWithoutWhatsapp_accountsInput
    usuarios_principales: usuarios_principalesCreateNestedOneWithoutWhatsapp_accountsInput
  }

  export type whatsapp_accountsUncheckedCreateWithoutConversationsInput = {
    id?: string
    usuario_principal_id: number
    phone: string
    nombre_cuenta?: string | null
    token?: string | null
    fecha_conexion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    phone_number_id?: string | null
    token_updated_at?: Date | string | null
    token_expires_at?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutWhatsapp_accountsInput
  }

  export type whatsapp_accountsCreateOrConnectWithoutConversationsInput = {
    where: whatsapp_accountsWhereUniqueInput
    create: XOR<whatsapp_accountsCreateWithoutConversationsInput, whatsapp_accountsUncheckedCreateWithoutConversationsInput>
  }

  export type messagesCreateWithoutConversationsInput = {
    id?: string
    phone?: string | null
    message?: string | null
    timestamp?: Date | string | null
    respondido?: boolean | null
    canal?: string | null
    categoria?: string | null
    whatsapp_accounts: whatsapp_accountsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutConversationsInput = {
    id?: string
    whatsapp_account_id: string
    phone?: string | null
    message?: string | null
    timestamp?: Date | string | null
    respondido?: boolean | null
    canal?: string | null
    categoria?: string | null
  }

  export type messagesCreateOrConnectWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
  }

  export type messagesCreateManyConversationsInputEnvelope = {
    data: messagesCreateManyConversationsInput | messagesCreateManyConversationsInput[]
    skipDuplicates?: boolean
  }

  export type whatsapp_accountsUpsertWithoutConversationsInput = {
    update: XOR<whatsapp_accountsUpdateWithoutConversationsInput, whatsapp_accountsUncheckedUpdateWithoutConversationsInput>
    create: XOR<whatsapp_accountsCreateWithoutConversationsInput, whatsapp_accountsUncheckedCreateWithoutConversationsInput>
    where?: whatsapp_accountsWhereInput
  }

  export type whatsapp_accountsUpdateToOneWithWhereWithoutConversationsInput = {
    where?: whatsapp_accountsWhereInput
    data: XOR<whatsapp_accountsUpdateWithoutConversationsInput, whatsapp_accountsUncheckedUpdateWithoutConversationsInput>
  }

  export type whatsapp_accountsUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_id?: NullableStringFieldUpdateOperationsInput | string | null
    token_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUpdateManyWithoutWhatsapp_accountsNestedInput
    usuarios_principales?: usuarios_principalesUpdateOneRequiredWithoutWhatsapp_accountsNestedInput
  }

  export type whatsapp_accountsUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_principal_id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_id?: NullableStringFieldUpdateOperationsInput | string | null
    token_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutWhatsapp_accountsNestedInput
  }

  export type messagesUpsertWithWhereUniqueWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutConversationsInput, messagesUncheckedUpdateWithoutConversationsInput>
    create: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutConversationsInput, messagesUncheckedUpdateWithoutConversationsInput>
  }

  export type messagesUpdateManyWithWhereWithoutConversationsInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutConversationsInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    id?: UuidFilter<"messages"> | string
    conversation_id?: UuidFilter<"messages"> | string
    whatsapp_account_id?: UuidFilter<"messages"> | string
    phone?: StringNullableFilter<"messages"> | string | null
    message?: StringNullableFilter<"messages"> | string | null
    timestamp?: DateTimeNullableFilter<"messages"> | Date | string | null
    respondido?: BoolNullableFilter<"messages"> | boolean | null
    canal?: StringNullableFilter<"messages"> | string | null
    categoria?: StringNullableFilter<"messages"> | string | null
  }

  export type usuarios_principalesCreateWithoutCuentas_gmail_asociadasInput = {
    email: string
    password_hash: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
    sesiones_jwt?: sesiones_jwtCreateNestedManyWithoutUsuarios_principalesInput
    whatsapp_accounts?: whatsapp_accountsCreateNestedManyWithoutUsuarios_principalesInput
  }

  export type usuarios_principalesUncheckedCreateWithoutCuentas_gmail_asociadasInput = {
    id?: number
    email: string
    password_hash: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
    sesiones_jwt?: sesiones_jwtUncheckedCreateNestedManyWithoutUsuarios_principalesInput
    whatsapp_accounts?: whatsapp_accountsUncheckedCreateNestedManyWithoutUsuarios_principalesInput
  }

  export type usuarios_principalesCreateOrConnectWithoutCuentas_gmail_asociadasInput = {
    where: usuarios_principalesWhereUniqueInput
    create: XOR<usuarios_principalesCreateWithoutCuentas_gmail_asociadasInput, usuarios_principalesUncheckedCreateWithoutCuentas_gmail_asociadasInput>
  }

  export type emails_sincronizadosCreateWithoutCuentas_gmail_asociadasInput = {
    gmail_message_id: string
    asunto?: string | null
    remitente_email?: string | null
    remitente_nombre?: string | null
    destinatario_email?: string | null
    fecha_recibido?: Date | string | null
    esta_leido?: boolean | null
    tiene_adjuntos?: boolean | null
    etiquetas_gmail?: emails_sincronizadosCreateetiquetas_gmailInput | string[]
    tamano_bytes?: number | null
    fecha_sincronizado?: Date | string | null
  }

  export type emails_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput = {
    id?: number
    gmail_message_id: string
    asunto?: string | null
    remitente_email?: string | null
    remitente_nombre?: string | null
    destinatario_email?: string | null
    fecha_recibido?: Date | string | null
    esta_leido?: boolean | null
    tiene_adjuntos?: boolean | null
    etiquetas_gmail?: emails_sincronizadosCreateetiquetas_gmailInput | string[]
    tamano_bytes?: number | null
    fecha_sincronizado?: Date | string | null
  }

  export type emails_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput = {
    where: emails_sincronizadosWhereUniqueInput
    create: XOR<emails_sincronizadosCreateWithoutCuentas_gmail_asociadasInput, emails_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput>
  }

  export type emails_sincronizadosCreateManyCuentas_gmail_asociadasInputEnvelope = {
    data: emails_sincronizadosCreateManyCuentas_gmail_asociadasInput | emails_sincronizadosCreateManyCuentas_gmail_asociadasInput[]
    skipDuplicates?: boolean
  }

  export type usuarios_principalesUpsertWithoutCuentas_gmail_asociadasInput = {
    update: XOR<usuarios_principalesUpdateWithoutCuentas_gmail_asociadasInput, usuarios_principalesUncheckedUpdateWithoutCuentas_gmail_asociadasInput>
    create: XOR<usuarios_principalesCreateWithoutCuentas_gmail_asociadasInput, usuarios_principalesUncheckedCreateWithoutCuentas_gmail_asociadasInput>
    where?: usuarios_principalesWhereInput
  }

  export type usuarios_principalesUpdateToOneWithWhereWithoutCuentas_gmail_asociadasInput = {
    where?: usuarios_principalesWhereInput
    data: XOR<usuarios_principalesUpdateWithoutCuentas_gmail_asociadasInput, usuarios_principalesUncheckedUpdateWithoutCuentas_gmail_asociadasInput>
  }

  export type usuarios_principalesUpdateWithoutCuentas_gmail_asociadasInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sesiones_jwt?: sesiones_jwtUpdateManyWithoutUsuarios_principalesNestedInput
    whatsapp_accounts?: whatsapp_accountsUpdateManyWithoutUsuarios_principalesNestedInput
  }

  export type usuarios_principalesUncheckedUpdateWithoutCuentas_gmail_asociadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sesiones_jwt?: sesiones_jwtUncheckedUpdateManyWithoutUsuarios_principalesNestedInput
    whatsapp_accounts?: whatsapp_accountsUncheckedUpdateManyWithoutUsuarios_principalesNestedInput
  }

  export type emails_sincronizadosUpsertWithWhereUniqueWithoutCuentas_gmail_asociadasInput = {
    where: emails_sincronizadosWhereUniqueInput
    update: XOR<emails_sincronizadosUpdateWithoutCuentas_gmail_asociadasInput, emails_sincronizadosUncheckedUpdateWithoutCuentas_gmail_asociadasInput>
    create: XOR<emails_sincronizadosCreateWithoutCuentas_gmail_asociadasInput, emails_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput>
  }

  export type emails_sincronizadosUpdateWithWhereUniqueWithoutCuentas_gmail_asociadasInput = {
    where: emails_sincronizadosWhereUniqueInput
    data: XOR<emails_sincronizadosUpdateWithoutCuentas_gmail_asociadasInput, emails_sincronizadosUncheckedUpdateWithoutCuentas_gmail_asociadasInput>
  }

  export type emails_sincronizadosUpdateManyWithWhereWithoutCuentas_gmail_asociadasInput = {
    where: emails_sincronizadosScalarWhereInput
    data: XOR<emails_sincronizadosUpdateManyMutationInput, emails_sincronizadosUncheckedUpdateManyWithoutCuentas_gmail_asociadasInput>
  }

  export type emails_sincronizadosScalarWhereInput = {
    AND?: emails_sincronizadosScalarWhereInput | emails_sincronizadosScalarWhereInput[]
    OR?: emails_sincronizadosScalarWhereInput[]
    NOT?: emails_sincronizadosScalarWhereInput | emails_sincronizadosScalarWhereInput[]
    id?: IntFilter<"emails_sincronizados"> | number
    cuenta_gmail_id?: IntFilter<"emails_sincronizados"> | number
    gmail_message_id?: StringFilter<"emails_sincronizados"> | string
    asunto?: StringNullableFilter<"emails_sincronizados"> | string | null
    remitente_email?: StringNullableFilter<"emails_sincronizados"> | string | null
    remitente_nombre?: StringNullableFilter<"emails_sincronizados"> | string | null
    destinatario_email?: StringNullableFilter<"emails_sincronizados"> | string | null
    fecha_recibido?: DateTimeNullableFilter<"emails_sincronizados"> | Date | string | null
    esta_leido?: BoolNullableFilter<"emails_sincronizados"> | boolean | null
    tiene_adjuntos?: BoolNullableFilter<"emails_sincronizados"> | boolean | null
    etiquetas_gmail?: StringNullableListFilter<"emails_sincronizados">
    tamano_bytes?: IntNullableFilter<"emails_sincronizados"> | number | null
    fecha_sincronizado?: DateTimeNullableFilter<"emails_sincronizados"> | Date | string | null
  }

  export type cuentas_gmail_asociadasCreateWithoutEmails_sincronizadosInput = {
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    consecutive_zero_syncs?: number | null
    alias_personalizado?: string | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
    usuarios_principales: usuarios_principalesCreateNestedOneWithoutCuentas_gmail_asociadasInput
  }

  export type cuentas_gmail_asociadasUncheckedCreateWithoutEmails_sincronizadosInput = {
    id?: number
    usuario_principal_id: number
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    consecutive_zero_syncs?: number | null
    alias_personalizado?: string | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
  }

  export type cuentas_gmail_asociadasCreateOrConnectWithoutEmails_sincronizadosInput = {
    where: cuentas_gmail_asociadasWhereUniqueInput
    create: XOR<cuentas_gmail_asociadasCreateWithoutEmails_sincronizadosInput, cuentas_gmail_asociadasUncheckedCreateWithoutEmails_sincronizadosInput>
  }

  export type cuentas_gmail_asociadasUpsertWithoutEmails_sincronizadosInput = {
    update: XOR<cuentas_gmail_asociadasUpdateWithoutEmails_sincronizadosInput, cuentas_gmail_asociadasUncheckedUpdateWithoutEmails_sincronizadosInput>
    create: XOR<cuentas_gmail_asociadasCreateWithoutEmails_sincronizadosInput, cuentas_gmail_asociadasUncheckedCreateWithoutEmails_sincronizadosInput>
    where?: cuentas_gmail_asociadasWhereInput
  }

  export type cuentas_gmail_asociadasUpdateToOneWithWhereWithoutEmails_sincronizadosInput = {
    where?: cuentas_gmail_asociadasWhereInput
    data: XOR<cuentas_gmail_asociadasUpdateWithoutEmails_sincronizadosInput, cuentas_gmail_asociadasUncheckedUpdateWithoutEmails_sincronizadosInput>
  }

  export type cuentas_gmail_asociadasUpdateWithoutEmails_sincronizadosInput = {
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios_principales?: usuarios_principalesUpdateOneRequiredWithoutCuentas_gmail_asociadasNestedInput
  }

  export type cuentas_gmail_asociadasUncheckedUpdateWithoutEmails_sincronizadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_principal_id?: IntFieldUpdateOperationsInput | number
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type conversationsCreateWithoutMessagesInput = {
    id?: string
    phone?: string | null
    name?: string | null
    last_message?: string | null
    last_message_date?: Date | string | null
    whatsapp_accounts: whatsapp_accountsCreateNestedOneWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutMessagesInput = {
    id?: string
    whatsapp_account_id: string
    phone?: string | null
    name?: string | null
    last_message?: string | null
    last_message_date?: Date | string | null
  }

  export type conversationsCreateOrConnectWithoutMessagesInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
  }

  export type whatsapp_accountsCreateWithoutMessagesInput = {
    id?: string
    phone: string
    nombre_cuenta?: string | null
    token?: string | null
    fecha_conexion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    phone_number_id?: string | null
    token_updated_at?: Date | string | null
    token_expires_at?: Date | string | null
    conversations?: conversationsCreateNestedManyWithoutWhatsapp_accountsInput
    usuarios_principales: usuarios_principalesCreateNestedOneWithoutWhatsapp_accountsInput
  }

  export type whatsapp_accountsUncheckedCreateWithoutMessagesInput = {
    id?: string
    usuario_principal_id: number
    phone: string
    nombre_cuenta?: string | null
    token?: string | null
    fecha_conexion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    phone_number_id?: string | null
    token_updated_at?: Date | string | null
    token_expires_at?: Date | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutWhatsapp_accountsInput
  }

  export type whatsapp_accountsCreateOrConnectWithoutMessagesInput = {
    where: whatsapp_accountsWhereUniqueInput
    create: XOR<whatsapp_accountsCreateWithoutMessagesInput, whatsapp_accountsUncheckedCreateWithoutMessagesInput>
  }

  export type conversationsUpsertWithoutMessagesInput = {
    update: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    where?: conversationsWhereInput
  }

  export type conversationsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: conversationsWhereInput
    data: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type conversationsUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    whatsapp_accounts?: whatsapp_accountsUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsapp_account_id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type whatsapp_accountsUpsertWithoutMessagesInput = {
    update: XOR<whatsapp_accountsUpdateWithoutMessagesInput, whatsapp_accountsUncheckedUpdateWithoutMessagesInput>
    create: XOR<whatsapp_accountsCreateWithoutMessagesInput, whatsapp_accountsUncheckedCreateWithoutMessagesInput>
    where?: whatsapp_accountsWhereInput
  }

  export type whatsapp_accountsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: whatsapp_accountsWhereInput
    data: XOR<whatsapp_accountsUpdateWithoutMessagesInput, whatsapp_accountsUncheckedUpdateWithoutMessagesInput>
  }

  export type whatsapp_accountsUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_id?: NullableStringFieldUpdateOperationsInput | string | null
    token_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUpdateManyWithoutWhatsapp_accountsNestedInput
    usuarios_principales?: usuarios_principalesUpdateOneRequiredWithoutWhatsapp_accountsNestedInput
  }

  export type whatsapp_accountsUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_principal_id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_id?: NullableStringFieldUpdateOperationsInput | string | null
    token_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutWhatsapp_accountsNestedInput
  }

  export type usuarios_principalesCreateWithoutSesiones_jwtInput = {
    email: string
    password_hash: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasCreateNestedManyWithoutUsuarios_principalesInput
    whatsapp_accounts?: whatsapp_accountsCreateNestedManyWithoutUsuarios_principalesInput
  }

  export type usuarios_principalesUncheckedCreateWithoutSesiones_jwtInput = {
    id?: number
    email: string
    password_hash: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUncheckedCreateNestedManyWithoutUsuarios_principalesInput
    whatsapp_accounts?: whatsapp_accountsUncheckedCreateNestedManyWithoutUsuarios_principalesInput
  }

  export type usuarios_principalesCreateOrConnectWithoutSesiones_jwtInput = {
    where: usuarios_principalesWhereUniqueInput
    create: XOR<usuarios_principalesCreateWithoutSesiones_jwtInput, usuarios_principalesUncheckedCreateWithoutSesiones_jwtInput>
  }

  export type usuarios_principalesUpsertWithoutSesiones_jwtInput = {
    update: XOR<usuarios_principalesUpdateWithoutSesiones_jwtInput, usuarios_principalesUncheckedUpdateWithoutSesiones_jwtInput>
    create: XOR<usuarios_principalesCreateWithoutSesiones_jwtInput, usuarios_principalesUncheckedCreateWithoutSesiones_jwtInput>
    where?: usuarios_principalesWhereInput
  }

  export type usuarios_principalesUpdateToOneWithWhereWithoutSesiones_jwtInput = {
    where?: usuarios_principalesWhereInput
    data: XOR<usuarios_principalesUpdateWithoutSesiones_jwtInput, usuarios_principalesUncheckedUpdateWithoutSesiones_jwtInput>
  }

  export type usuarios_principalesUpdateWithoutSesiones_jwtInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUpdateManyWithoutUsuarios_principalesNestedInput
    whatsapp_accounts?: whatsapp_accountsUpdateManyWithoutUsuarios_principalesNestedInput
  }

  export type usuarios_principalesUncheckedUpdateWithoutSesiones_jwtInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUncheckedUpdateManyWithoutUsuarios_principalesNestedInput
    whatsapp_accounts?: whatsapp_accountsUncheckedUpdateManyWithoutUsuarios_principalesNestedInput
  }

  export type cuentas_gmail_asociadasCreateWithoutUsuarios_principalesInput = {
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    consecutive_zero_syncs?: number | null
    alias_personalizado?: string | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
    emails_sincronizados?: emails_sincronizadosCreateNestedManyWithoutCuentas_gmail_asociadasInput
  }

  export type cuentas_gmail_asociadasUncheckedCreateWithoutUsuarios_principalesInput = {
    id?: number
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    consecutive_zero_syncs?: number | null
    alias_personalizado?: string | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
    emails_sincronizados?: emails_sincronizadosUncheckedCreateNestedManyWithoutCuentas_gmail_asociadasInput
  }

  export type cuentas_gmail_asociadasCreateOrConnectWithoutUsuarios_principalesInput = {
    where: cuentas_gmail_asociadasWhereUniqueInput
    create: XOR<cuentas_gmail_asociadasCreateWithoutUsuarios_principalesInput, cuentas_gmail_asociadasUncheckedCreateWithoutUsuarios_principalesInput>
  }

  export type cuentas_gmail_asociadasCreateManyUsuarios_principalesInputEnvelope = {
    data: cuentas_gmail_asociadasCreateManyUsuarios_principalesInput | cuentas_gmail_asociadasCreateManyUsuarios_principalesInput[]
    skipDuplicates?: boolean
  }

  export type sesiones_jwtCreateWithoutUsuarios_principalesInput = {
    jwt_token: string
    expira_en: Date | string
    fecha_creacion?: Date | string | null
    esta_activa?: boolean | null
    ip_origen?: string | null
    user_agent?: string | null
  }

  export type sesiones_jwtUncheckedCreateWithoutUsuarios_principalesInput = {
    id?: number
    jwt_token: string
    expira_en: Date | string
    fecha_creacion?: Date | string | null
    esta_activa?: boolean | null
    ip_origen?: string | null
    user_agent?: string | null
  }

  export type sesiones_jwtCreateOrConnectWithoutUsuarios_principalesInput = {
    where: sesiones_jwtWhereUniqueInput
    create: XOR<sesiones_jwtCreateWithoutUsuarios_principalesInput, sesiones_jwtUncheckedCreateWithoutUsuarios_principalesInput>
  }

  export type sesiones_jwtCreateManyUsuarios_principalesInputEnvelope = {
    data: sesiones_jwtCreateManyUsuarios_principalesInput | sesiones_jwtCreateManyUsuarios_principalesInput[]
    skipDuplicates?: boolean
  }

  export type whatsapp_accountsCreateWithoutUsuarios_principalesInput = {
    id?: string
    phone: string
    nombre_cuenta?: string | null
    token?: string | null
    fecha_conexion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    phone_number_id?: string | null
    token_updated_at?: Date | string | null
    token_expires_at?: Date | string | null
    conversations?: conversationsCreateNestedManyWithoutWhatsapp_accountsInput
    messages?: messagesCreateNestedManyWithoutWhatsapp_accountsInput
  }

  export type whatsapp_accountsUncheckedCreateWithoutUsuarios_principalesInput = {
    id?: string
    phone: string
    nombre_cuenta?: string | null
    token?: string | null
    fecha_conexion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    phone_number_id?: string | null
    token_updated_at?: Date | string | null
    token_expires_at?: Date | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutWhatsapp_accountsInput
    messages?: messagesUncheckedCreateNestedManyWithoutWhatsapp_accountsInput
  }

  export type whatsapp_accountsCreateOrConnectWithoutUsuarios_principalesInput = {
    where: whatsapp_accountsWhereUniqueInput
    create: XOR<whatsapp_accountsCreateWithoutUsuarios_principalesInput, whatsapp_accountsUncheckedCreateWithoutUsuarios_principalesInput>
  }

  export type whatsapp_accountsCreateManyUsuarios_principalesInputEnvelope = {
    data: whatsapp_accountsCreateManyUsuarios_principalesInput | whatsapp_accountsCreateManyUsuarios_principalesInput[]
    skipDuplicates?: boolean
  }

  export type cuentas_gmail_asociadasUpsertWithWhereUniqueWithoutUsuarios_principalesInput = {
    where: cuentas_gmail_asociadasWhereUniqueInput
    update: XOR<cuentas_gmail_asociadasUpdateWithoutUsuarios_principalesInput, cuentas_gmail_asociadasUncheckedUpdateWithoutUsuarios_principalesInput>
    create: XOR<cuentas_gmail_asociadasCreateWithoutUsuarios_principalesInput, cuentas_gmail_asociadasUncheckedCreateWithoutUsuarios_principalesInput>
  }

  export type cuentas_gmail_asociadasUpdateWithWhereUniqueWithoutUsuarios_principalesInput = {
    where: cuentas_gmail_asociadasWhereUniqueInput
    data: XOR<cuentas_gmail_asociadasUpdateWithoutUsuarios_principalesInput, cuentas_gmail_asociadasUncheckedUpdateWithoutUsuarios_principalesInput>
  }

  export type cuentas_gmail_asociadasUpdateManyWithWhereWithoutUsuarios_principalesInput = {
    where: cuentas_gmail_asociadasScalarWhereInput
    data: XOR<cuentas_gmail_asociadasUpdateManyMutationInput, cuentas_gmail_asociadasUncheckedUpdateManyWithoutUsuarios_principalesInput>
  }

  export type cuentas_gmail_asociadasScalarWhereInput = {
    AND?: cuentas_gmail_asociadasScalarWhereInput | cuentas_gmail_asociadasScalarWhereInput[]
    OR?: cuentas_gmail_asociadasScalarWhereInput[]
    NOT?: cuentas_gmail_asociadasScalarWhereInput | cuentas_gmail_asociadasScalarWhereInput[]
    id?: IntFilter<"cuentas_gmail_asociadas"> | number
    usuario_principal_id?: IntFilter<"cuentas_gmail_asociadas"> | number
    email_gmail?: StringFilter<"cuentas_gmail_asociadas"> | string
    nombre_cuenta?: StringFilter<"cuentas_gmail_asociadas"> | string
    google_id?: StringFilter<"cuentas_gmail_asociadas"> | string
    access_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    refresh_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    token_expira_en?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    fecha_conexion?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    ultima_sincronizacion?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    esta_activa?: BoolNullableFilter<"cuentas_gmail_asociadas"> | boolean | null
    consecutive_zero_syncs?: IntNullableFilter<"cuentas_gmail_asociadas"> | number | null
    alias_personalizado?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    backfill_checkpoint_date?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    backfill_page_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
  }

  export type sesiones_jwtUpsertWithWhereUniqueWithoutUsuarios_principalesInput = {
    where: sesiones_jwtWhereUniqueInput
    update: XOR<sesiones_jwtUpdateWithoutUsuarios_principalesInput, sesiones_jwtUncheckedUpdateWithoutUsuarios_principalesInput>
    create: XOR<sesiones_jwtCreateWithoutUsuarios_principalesInput, sesiones_jwtUncheckedCreateWithoutUsuarios_principalesInput>
  }

  export type sesiones_jwtUpdateWithWhereUniqueWithoutUsuarios_principalesInput = {
    where: sesiones_jwtWhereUniqueInput
    data: XOR<sesiones_jwtUpdateWithoutUsuarios_principalesInput, sesiones_jwtUncheckedUpdateWithoutUsuarios_principalesInput>
  }

  export type sesiones_jwtUpdateManyWithWhereWithoutUsuarios_principalesInput = {
    where: sesiones_jwtScalarWhereInput
    data: XOR<sesiones_jwtUpdateManyMutationInput, sesiones_jwtUncheckedUpdateManyWithoutUsuarios_principalesInput>
  }

  export type sesiones_jwtScalarWhereInput = {
    AND?: sesiones_jwtScalarWhereInput | sesiones_jwtScalarWhereInput[]
    OR?: sesiones_jwtScalarWhereInput[]
    NOT?: sesiones_jwtScalarWhereInput | sesiones_jwtScalarWhereInput[]
    id?: IntFilter<"sesiones_jwt"> | number
    usuario_principal_id?: IntFilter<"sesiones_jwt"> | number
    jwt_token?: StringFilter<"sesiones_jwt"> | string
    expira_en?: DateTimeFilter<"sesiones_jwt"> | Date | string
    fecha_creacion?: DateTimeNullableFilter<"sesiones_jwt"> | Date | string | null
    esta_activa?: BoolNullableFilter<"sesiones_jwt"> | boolean | null
    ip_origen?: StringNullableFilter<"sesiones_jwt"> | string | null
    user_agent?: StringNullableFilter<"sesiones_jwt"> | string | null
  }

  export type whatsapp_accountsUpsertWithWhereUniqueWithoutUsuarios_principalesInput = {
    where: whatsapp_accountsWhereUniqueInput
    update: XOR<whatsapp_accountsUpdateWithoutUsuarios_principalesInput, whatsapp_accountsUncheckedUpdateWithoutUsuarios_principalesInput>
    create: XOR<whatsapp_accountsCreateWithoutUsuarios_principalesInput, whatsapp_accountsUncheckedCreateWithoutUsuarios_principalesInput>
  }

  export type whatsapp_accountsUpdateWithWhereUniqueWithoutUsuarios_principalesInput = {
    where: whatsapp_accountsWhereUniqueInput
    data: XOR<whatsapp_accountsUpdateWithoutUsuarios_principalesInput, whatsapp_accountsUncheckedUpdateWithoutUsuarios_principalesInput>
  }

  export type whatsapp_accountsUpdateManyWithWhereWithoutUsuarios_principalesInput = {
    where: whatsapp_accountsScalarWhereInput
    data: XOR<whatsapp_accountsUpdateManyMutationInput, whatsapp_accountsUncheckedUpdateManyWithoutUsuarios_principalesInput>
  }

  export type whatsapp_accountsScalarWhereInput = {
    AND?: whatsapp_accountsScalarWhereInput | whatsapp_accountsScalarWhereInput[]
    OR?: whatsapp_accountsScalarWhereInput[]
    NOT?: whatsapp_accountsScalarWhereInput | whatsapp_accountsScalarWhereInput[]
    id?: UuidFilter<"whatsapp_accounts"> | string
    usuario_principal_id?: IntFilter<"whatsapp_accounts"> | number
    phone?: StringFilter<"whatsapp_accounts"> | string
    nombre_cuenta?: StringNullableFilter<"whatsapp_accounts"> | string | null
    token?: StringNullableFilter<"whatsapp_accounts"> | string | null
    fecha_conexion?: DateTimeNullableFilter<"whatsapp_accounts"> | Date | string | null
    esta_activa?: BoolNullableFilter<"whatsapp_accounts"> | boolean | null
    alias_personalizado?: StringNullableFilter<"whatsapp_accounts"> | string | null
    phone_number_id?: StringNullableFilter<"whatsapp_accounts"> | string | null
    token_updated_at?: DateTimeNullableFilter<"whatsapp_accounts"> | Date | string | null
    token_expires_at?: DateTimeNullableFilter<"whatsapp_accounts"> | Date | string | null
  }

  export type conversationsCreateWithoutWhatsapp_accountsInput = {
    id?: string
    phone?: string | null
    name?: string | null
    last_message?: string | null
    last_message_date?: Date | string | null
    messages?: messagesCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutWhatsapp_accountsInput = {
    id?: string
    phone?: string | null
    name?: string | null
    last_message?: string | null
    last_message_date?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsCreateOrConnectWithoutWhatsapp_accountsInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutWhatsapp_accountsInput, conversationsUncheckedCreateWithoutWhatsapp_accountsInput>
  }

  export type conversationsCreateManyWhatsapp_accountsInputEnvelope = {
    data: conversationsCreateManyWhatsapp_accountsInput | conversationsCreateManyWhatsapp_accountsInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutWhatsapp_accountsInput = {
    id?: string
    phone?: string | null
    message?: string | null
    timestamp?: Date | string | null
    respondido?: boolean | null
    canal?: string | null
    categoria?: string | null
    conversations: conversationsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutWhatsapp_accountsInput = {
    id?: string
    conversation_id: string
    phone?: string | null
    message?: string | null
    timestamp?: Date | string | null
    respondido?: boolean | null
    canal?: string | null
    categoria?: string | null
  }

  export type messagesCreateOrConnectWithoutWhatsapp_accountsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutWhatsapp_accountsInput, messagesUncheckedCreateWithoutWhatsapp_accountsInput>
  }

  export type messagesCreateManyWhatsapp_accountsInputEnvelope = {
    data: messagesCreateManyWhatsapp_accountsInput | messagesCreateManyWhatsapp_accountsInput[]
    skipDuplicates?: boolean
  }

  export type usuarios_principalesCreateWithoutWhatsapp_accountsInput = {
    email: string
    password_hash: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasCreateNestedManyWithoutUsuarios_principalesInput
    sesiones_jwt?: sesiones_jwtCreateNestedManyWithoutUsuarios_principalesInput
  }

  export type usuarios_principalesUncheckedCreateWithoutWhatsapp_accountsInput = {
    id?: number
    email: string
    password_hash: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUncheckedCreateNestedManyWithoutUsuarios_principalesInput
    sesiones_jwt?: sesiones_jwtUncheckedCreateNestedManyWithoutUsuarios_principalesInput
  }

  export type usuarios_principalesCreateOrConnectWithoutWhatsapp_accountsInput = {
    where: usuarios_principalesWhereUniqueInput
    create: XOR<usuarios_principalesCreateWithoutWhatsapp_accountsInput, usuarios_principalesUncheckedCreateWithoutWhatsapp_accountsInput>
  }

  export type conversationsUpsertWithWhereUniqueWithoutWhatsapp_accountsInput = {
    where: conversationsWhereUniqueInput
    update: XOR<conversationsUpdateWithoutWhatsapp_accountsInput, conversationsUncheckedUpdateWithoutWhatsapp_accountsInput>
    create: XOR<conversationsCreateWithoutWhatsapp_accountsInput, conversationsUncheckedCreateWithoutWhatsapp_accountsInput>
  }

  export type conversationsUpdateWithWhereUniqueWithoutWhatsapp_accountsInput = {
    where: conversationsWhereUniqueInput
    data: XOR<conversationsUpdateWithoutWhatsapp_accountsInput, conversationsUncheckedUpdateWithoutWhatsapp_accountsInput>
  }

  export type conversationsUpdateManyWithWhereWithoutWhatsapp_accountsInput = {
    where: conversationsScalarWhereInput
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyWithoutWhatsapp_accountsInput>
  }

  export type conversationsScalarWhereInput = {
    AND?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
    OR?: conversationsScalarWhereInput[]
    NOT?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
    id?: UuidFilter<"conversations"> | string
    whatsapp_account_id?: UuidFilter<"conversations"> | string
    phone?: StringNullableFilter<"conversations"> | string | null
    name?: StringNullableFilter<"conversations"> | string | null
    last_message?: StringNullableFilter<"conversations"> | string | null
    last_message_date?: DateTimeNullableFilter<"conversations"> | Date | string | null
  }

  export type messagesUpsertWithWhereUniqueWithoutWhatsapp_accountsInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutWhatsapp_accountsInput, messagesUncheckedUpdateWithoutWhatsapp_accountsInput>
    create: XOR<messagesCreateWithoutWhatsapp_accountsInput, messagesUncheckedCreateWithoutWhatsapp_accountsInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutWhatsapp_accountsInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutWhatsapp_accountsInput, messagesUncheckedUpdateWithoutWhatsapp_accountsInput>
  }

  export type messagesUpdateManyWithWhereWithoutWhatsapp_accountsInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutWhatsapp_accountsInput>
  }

  export type usuarios_principalesUpsertWithoutWhatsapp_accountsInput = {
    update: XOR<usuarios_principalesUpdateWithoutWhatsapp_accountsInput, usuarios_principalesUncheckedUpdateWithoutWhatsapp_accountsInput>
    create: XOR<usuarios_principalesCreateWithoutWhatsapp_accountsInput, usuarios_principalesUncheckedCreateWithoutWhatsapp_accountsInput>
    where?: usuarios_principalesWhereInput
  }

  export type usuarios_principalesUpdateToOneWithWhereWithoutWhatsapp_accountsInput = {
    where?: usuarios_principalesWhereInput
    data: XOR<usuarios_principalesUpdateWithoutWhatsapp_accountsInput, usuarios_principalesUncheckedUpdateWithoutWhatsapp_accountsInput>
  }

  export type usuarios_principalesUpdateWithoutWhatsapp_accountsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUpdateManyWithoutUsuarios_principalesNestedInput
    sesiones_jwt?: sesiones_jwtUpdateManyWithoutUsuarios_principalesNestedInput
  }

  export type usuarios_principalesUncheckedUpdateWithoutWhatsapp_accountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUncheckedUpdateManyWithoutUsuarios_principalesNestedInput
    sesiones_jwt?: sesiones_jwtUncheckedUpdateManyWithoutUsuarios_principalesNestedInput
  }

  export type messagesCreateManyConversationsInput = {
    id?: string
    whatsapp_account_id: string
    phone?: string | null
    message?: string | null
    timestamp?: Date | string | null
    respondido?: boolean | null
    canal?: string | null
    categoria?: string | null
  }

  export type messagesUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canal?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_accounts?: whatsapp_accountsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsapp_account_id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canal?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesUncheckedUpdateManyWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsapp_account_id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canal?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type emails_sincronizadosCreateManyCuentas_gmail_asociadasInput = {
    id?: number
    gmail_message_id: string
    asunto?: string | null
    remitente_email?: string | null
    remitente_nombre?: string | null
    destinatario_email?: string | null
    fecha_recibido?: Date | string | null
    esta_leido?: boolean | null
    tiene_adjuntos?: boolean | null
    etiquetas_gmail?: emails_sincronizadosCreateetiquetas_gmailInput | string[]
    tamano_bytes?: number | null
    fecha_sincronizado?: Date | string | null
  }

  export type emails_sincronizadosUpdateWithoutCuentas_gmail_asociadasInput = {
    gmail_message_id?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    remitente_email?: NullableStringFieldUpdateOperationsInput | string | null
    remitente_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    destinatario_email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tiene_adjuntos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    etiquetas_gmail?: emails_sincronizadosUpdateetiquetas_gmailInput | string[]
    tamano_bytes?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_sincronizado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type emails_sincronizadosUncheckedUpdateWithoutCuentas_gmail_asociadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    gmail_message_id?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    remitente_email?: NullableStringFieldUpdateOperationsInput | string | null
    remitente_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    destinatario_email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tiene_adjuntos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    etiquetas_gmail?: emails_sincronizadosUpdateetiquetas_gmailInput | string[]
    tamano_bytes?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_sincronizado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type emails_sincronizadosUncheckedUpdateManyWithoutCuentas_gmail_asociadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    gmail_message_id?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    remitente_email?: NullableStringFieldUpdateOperationsInput | string | null
    remitente_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    destinatario_email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tiene_adjuntos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    etiquetas_gmail?: emails_sincronizadosUpdateetiquetas_gmailInput | string[]
    tamano_bytes?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_sincronizado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cuentas_gmail_asociadasCreateManyUsuarios_principalesInput = {
    id?: number
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    consecutive_zero_syncs?: number | null
    alias_personalizado?: string | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
  }

  export type sesiones_jwtCreateManyUsuarios_principalesInput = {
    id?: number
    jwt_token: string
    expira_en: Date | string
    fecha_creacion?: Date | string | null
    esta_activa?: boolean | null
    ip_origen?: string | null
    user_agent?: string | null
  }

  export type whatsapp_accountsCreateManyUsuarios_principalesInput = {
    id?: string
    phone: string
    nombre_cuenta?: string | null
    token?: string | null
    fecha_conexion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    phone_number_id?: string | null
    token_updated_at?: Date | string | null
    token_expires_at?: Date | string | null
  }

  export type cuentas_gmail_asociadasUpdateWithoutUsuarios_principalesInput = {
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
    emails_sincronizados?: emails_sincronizadosUpdateManyWithoutCuentas_gmail_asociadasNestedInput
  }

  export type cuentas_gmail_asociadasUncheckedUpdateWithoutUsuarios_principalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
    emails_sincronizados?: emails_sincronizadosUncheckedUpdateManyWithoutCuentas_gmail_asociadasNestedInput
  }

  export type cuentas_gmail_asociadasUncheckedUpdateManyWithoutUsuarios_principalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sesiones_jwtUpdateWithoutUsuarios_principalesInput = {
    jwt_token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ip_origen?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sesiones_jwtUncheckedUpdateWithoutUsuarios_principalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    jwt_token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ip_origen?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sesiones_jwtUncheckedUpdateManyWithoutUsuarios_principalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    jwt_token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ip_origen?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type whatsapp_accountsUpdateWithoutUsuarios_principalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_id?: NullableStringFieldUpdateOperationsInput | string | null
    token_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUpdateManyWithoutWhatsapp_accountsNestedInput
    messages?: messagesUpdateManyWithoutWhatsapp_accountsNestedInput
  }

  export type whatsapp_accountsUncheckedUpdateWithoutUsuarios_principalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_id?: NullableStringFieldUpdateOperationsInput | string | null
    token_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutWhatsapp_accountsNestedInput
    messages?: messagesUncheckedUpdateManyWithoutWhatsapp_accountsNestedInput
  }

  export type whatsapp_accountsUncheckedUpdateManyWithoutUsuarios_principalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_id?: NullableStringFieldUpdateOperationsInput | string | null
    token_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type conversationsCreateManyWhatsapp_accountsInput = {
    id?: string
    phone?: string | null
    name?: string | null
    last_message?: string | null
    last_message_date?: Date | string | null
  }

  export type messagesCreateManyWhatsapp_accountsInput = {
    id?: string
    conversation_id: string
    phone?: string | null
    message?: string | null
    timestamp?: Date | string | null
    respondido?: boolean | null
    canal?: string | null
    categoria?: string | null
  }

  export type conversationsUpdateWithoutWhatsapp_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutWhatsapp_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateManyWithoutWhatsapp_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUpdateWithoutWhatsapp_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canal?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutWhatsapp_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canal?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesUncheckedUpdateManyWithoutWhatsapp_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canal?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
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