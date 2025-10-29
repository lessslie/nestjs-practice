
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
 * Model usuarios_principales
 * 
 */
export type usuarios_principales = $Result.DefaultSelection<Prisma.$usuarios_principalesPayload>
/**
 * Model cuentas_gmail_asociadas
 * 
 */
export type cuentas_gmail_asociadas = $Result.DefaultSelection<Prisma.$cuentas_gmail_asociadasPayload>
/**
 * Model events_sincronizados
 * 
 */
export type events_sincronizados = $Result.DefaultSelection<Prisma.$events_sincronizadosPayload>
/**
 * Model sesiones_jwt
 * 
 */
export type sesiones_jwt = $Result.DefaultSelection<Prisma.$sesiones_jwtPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios_principales
 * const usuarios_principales = await prisma.usuarios_principales.findMany()
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
   * // Fetch zero or more Usuarios_principales
   * const usuarios_principales = await prisma.usuarios_principales.findMany()
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
   * `prisma.usuarios_principales`: Exposes CRUD operations for the **usuarios_principales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios_principales
    * const usuarios_principales = await prisma.usuarios_principales.findMany()
    * ```
    */
  get usuarios_principales(): Prisma.usuarios_principalesDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.events_sincronizados`: Exposes CRUD operations for the **events_sincronizados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events_sincronizados
    * const events_sincronizados = await prisma.events_sincronizados.findMany()
    * ```
    */
  get events_sincronizados(): Prisma.events_sincronizadosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sesiones_jwt`: Exposes CRUD operations for the **sesiones_jwt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sesiones_jwts
    * const sesiones_jwts = await prisma.sesiones_jwt.findMany()
    * ```
    */
  get sesiones_jwt(): Prisma.sesiones_jwtDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    usuarios_principales: 'usuarios_principales',
    cuentas_gmail_asociadas: 'cuentas_gmail_asociadas',
    events_sincronizados: 'events_sincronizados',
    sesiones_jwt: 'sesiones_jwt'
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
      modelProps: "usuarios_principales" | "cuentas_gmail_asociadas" | "events_sincronizados" | "sesiones_jwt"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      events_sincronizados: {
        payload: Prisma.$events_sincronizadosPayload<ExtArgs>
        fields: Prisma.events_sincronizadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.events_sincronizadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_sincronizadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.events_sincronizadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_sincronizadosPayload>
          }
          findFirst: {
            args: Prisma.events_sincronizadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_sincronizadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.events_sincronizadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_sincronizadosPayload>
          }
          findMany: {
            args: Prisma.events_sincronizadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_sincronizadosPayload>[]
          }
          create: {
            args: Prisma.events_sincronizadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_sincronizadosPayload>
          }
          createMany: {
            args: Prisma.events_sincronizadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.events_sincronizadosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_sincronizadosPayload>[]
          }
          delete: {
            args: Prisma.events_sincronizadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_sincronizadosPayload>
          }
          update: {
            args: Prisma.events_sincronizadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_sincronizadosPayload>
          }
          deleteMany: {
            args: Prisma.events_sincronizadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.events_sincronizadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.events_sincronizadosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_sincronizadosPayload>[]
          }
          upsert: {
            args: Prisma.events_sincronizadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$events_sincronizadosPayload>
          }
          aggregate: {
            args: Prisma.Events_sincronizadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents_sincronizados>
          }
          groupBy: {
            args: Prisma.events_sincronizadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Events_sincronizadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.events_sincronizadosCountArgs<ExtArgs>
            result: $Utils.Optional<Events_sincronizadosCountAggregateOutputType> | number
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
    usuarios_principales?: usuarios_principalesOmit
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasOmit
    events_sincronizados?: events_sincronizadosOmit
    sesiones_jwt?: sesiones_jwtOmit
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
   * Count Type Usuarios_principalesCountOutputType
   */

  export type Usuarios_principalesCountOutputType = {
    cuentas_gmail_asociadas: number
    sesiones_jwt: number
  }

  export type Usuarios_principalesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuentas_gmail_asociadas?: boolean | Usuarios_principalesCountOutputTypeCountCuentas_gmail_asociadasArgs
    sesiones_jwt?: boolean | Usuarios_principalesCountOutputTypeCountSesiones_jwtArgs
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
   * Count Type Cuentas_gmail_asociadasCountOutputType
   */

  export type Cuentas_gmail_asociadasCountOutputType = {
    events_sincronizados: number
  }

  export type Cuentas_gmail_asociadasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events_sincronizados?: boolean | Cuentas_gmail_asociadasCountOutputTypeCountEvents_sincronizadosArgs
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
  export type Cuentas_gmail_asociadasCountOutputTypeCountEvents_sincronizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: events_sincronizadosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model usuarios_principales
   */

  export type AggregateUsuarios_principales = {
    _count: Usuarios_principalesCountAggregateOutputType | null
    _min: Usuarios_principalesMinAggregateOutputType | null
    _max: Usuarios_principalesMaxAggregateOutputType | null
  }

  export type Usuarios_principalesMinAggregateOutputType = {
    id: string | null
    email: string | null
    nombre: string | null
    fecha_registro: Date | null
    ultima_actualizacion: Date | null
    estado: string | null
    email_verificado: boolean | null
  }

  export type Usuarios_principalesMaxAggregateOutputType = {
    id: string | null
    email: string | null
    nombre: string | null
    fecha_registro: Date | null
    ultima_actualizacion: Date | null
    estado: string | null
    email_verificado: boolean | null
  }

  export type Usuarios_principalesCountAggregateOutputType = {
    id: number
    email: number
    nombre: number
    fecha_registro: number
    ultima_actualizacion: number
    estado: number
    email_verificado: number
    _all: number
  }


  export type Usuarios_principalesMinAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    fecha_registro?: true
    ultima_actualizacion?: true
    estado?: true
    email_verificado?: true
  }

  export type Usuarios_principalesMaxAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    fecha_registro?: true
    ultima_actualizacion?: true
    estado?: true
    email_verificado?: true
  }

  export type Usuarios_principalesCountAggregateInputType = {
    id?: true
    email?: true
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
    _min?: Usuarios_principalesMinAggregateInputType
    _max?: Usuarios_principalesMaxAggregateInputType
  }

  export type Usuarios_principalesGroupByOutputType = {
    id: string
    email: string
    nombre: string
    fecha_registro: Date | null
    ultima_actualizacion: Date | null
    estado: string | null
    email_verificado: boolean | null
    _count: Usuarios_principalesCountAggregateOutputType | null
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
    nombre?: boolean
    fecha_registro?: boolean
    ultima_actualizacion?: boolean
    estado?: boolean
    email_verificado?: boolean
    cuentas_gmail_asociadas?: boolean | usuarios_principales$cuentas_gmail_asociadasArgs<ExtArgs>
    sesiones_jwt?: boolean | usuarios_principales$sesiones_jwtArgs<ExtArgs>
    _count?: boolean | Usuarios_principalesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios_principales"]>

  export type usuarios_principalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nombre?: boolean
    fecha_registro?: boolean
    ultima_actualizacion?: boolean
    estado?: boolean
    email_verificado?: boolean
  }, ExtArgs["result"]["usuarios_principales"]>

  export type usuarios_principalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nombre?: boolean
    fecha_registro?: boolean
    ultima_actualizacion?: boolean
    estado?: boolean
    email_verificado?: boolean
  }, ExtArgs["result"]["usuarios_principales"]>

  export type usuarios_principalesSelectScalar = {
    id?: boolean
    email?: boolean
    nombre?: boolean
    fecha_registro?: boolean
    ultima_actualizacion?: boolean
    estado?: boolean
    email_verificado?: boolean
  }

  export type usuarios_principalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nombre" | "fecha_registro" | "ultima_actualizacion" | "estado" | "email_verificado", ExtArgs["result"]["usuarios_principales"]>
  export type usuarios_principalesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuentas_gmail_asociadas?: boolean | usuarios_principales$cuentas_gmail_asociadasArgs<ExtArgs>
    sesiones_jwt?: boolean | usuarios_principales$sesiones_jwtArgs<ExtArgs>
    _count?: boolean | Usuarios_principalesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuarios_principalesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuarios_principalesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuarios_principalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios_principales"
    objects: {
      cuentas_gmail_asociadas: Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>[]
      sesiones_jwt: Prisma.$sesiones_jwtPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
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
    readonly id: FieldRef<"usuarios_principales", 'String'>
    readonly email: FieldRef<"usuarios_principales", 'String'>
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
    consecutive_zero_syncs: number | null
  }

  export type Cuentas_gmail_asociadasSumAggregateOutputType = {
    consecutive_zero_syncs: number | null
  }

  export type Cuentas_gmail_asociadasMinAggregateOutputType = {
    id: string | null
    usuario_principal_id: string | null
    email_gmail: string | null
    nombre_cuenta: string | null
    google_id: string | null
    access_token: string | null
    refresh_token: string | null
    token_expira_en: Date | null
    fecha_conexion: Date | null
    ultima_sincronizacion: Date | null
    esta_activa: boolean | null
    alias_personalizado: string | null
    consecutive_zero_syncs: number | null
    backfill_checkpoint_date: Date | null
    backfill_page_token: string | null
  }

  export type Cuentas_gmail_asociadasMaxAggregateOutputType = {
    id: string | null
    usuario_principal_id: string | null
    email_gmail: string | null
    nombre_cuenta: string | null
    google_id: string | null
    access_token: string | null
    refresh_token: string | null
    token_expira_en: Date | null
    fecha_conexion: Date | null
    ultima_sincronizacion: Date | null
    esta_activa: boolean | null
    alias_personalizado: string | null
    consecutive_zero_syncs: number | null
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
    alias_personalizado: number
    consecutive_zero_syncs: number
    backfill_checkpoint_date: number
    backfill_page_token: number
    _all: number
  }


  export type Cuentas_gmail_asociadasAvgAggregateInputType = {
    consecutive_zero_syncs?: true
  }

  export type Cuentas_gmail_asociadasSumAggregateInputType = {
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
    alias_personalizado?: true
    consecutive_zero_syncs?: true
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
    alias_personalizado?: true
    consecutive_zero_syncs?: true
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
    alias_personalizado?: true
    consecutive_zero_syncs?: true
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
    id: string
    usuario_principal_id: string | null
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token: string | null
    refresh_token: string | null
    token_expira_en: Date | null
    fecha_conexion: Date | null
    ultima_sincronizacion: Date | null
    esta_activa: boolean | null
    alias_personalizado: string | null
    consecutive_zero_syncs: number | null
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
    alias_personalizado?: boolean
    consecutive_zero_syncs?: boolean
    backfill_checkpoint_date?: boolean
    backfill_page_token?: boolean
    usuarios_principales?: boolean | cuentas_gmail_asociadas$usuarios_principalesArgs<ExtArgs>
    events_sincronizados?: boolean | cuentas_gmail_asociadas$events_sincronizadosArgs<ExtArgs>
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
    alias_personalizado?: boolean
    consecutive_zero_syncs?: boolean
    backfill_checkpoint_date?: boolean
    backfill_page_token?: boolean
    usuarios_principales?: boolean | cuentas_gmail_asociadas$usuarios_principalesArgs<ExtArgs>
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
    alias_personalizado?: boolean
    consecutive_zero_syncs?: boolean
    backfill_checkpoint_date?: boolean
    backfill_page_token?: boolean
    usuarios_principales?: boolean | cuentas_gmail_asociadas$usuarios_principalesArgs<ExtArgs>
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
    alias_personalizado?: boolean
    consecutive_zero_syncs?: boolean
    backfill_checkpoint_date?: boolean
    backfill_page_token?: boolean
  }

  export type cuentas_gmail_asociadasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_principal_id" | "email_gmail" | "nombre_cuenta" | "google_id" | "access_token" | "refresh_token" | "token_expira_en" | "fecha_conexion" | "ultima_sincronizacion" | "esta_activa" | "alias_personalizado" | "consecutive_zero_syncs" | "backfill_checkpoint_date" | "backfill_page_token", ExtArgs["result"]["cuentas_gmail_asociadas"]>
  export type cuentas_gmail_asociadasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_principales?: boolean | cuentas_gmail_asociadas$usuarios_principalesArgs<ExtArgs>
    events_sincronizados?: boolean | cuentas_gmail_asociadas$events_sincronizadosArgs<ExtArgs>
    _count?: boolean | Cuentas_gmail_asociadasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cuentas_gmail_asociadasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_principales?: boolean | cuentas_gmail_asociadas$usuarios_principalesArgs<ExtArgs>
  }
  export type cuentas_gmail_asociadasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_principales?: boolean | cuentas_gmail_asociadas$usuarios_principalesArgs<ExtArgs>
  }

  export type $cuentas_gmail_asociadasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cuentas_gmail_asociadas"
    objects: {
      usuarios_principales: Prisma.$usuarios_principalesPayload<ExtArgs> | null
      events_sincronizados: Prisma.$events_sincronizadosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuario_principal_id: string | null
      email_gmail: string
      nombre_cuenta: string
      google_id: string
      access_token: string | null
      refresh_token: string | null
      token_expira_en: Date | null
      fecha_conexion: Date | null
      ultima_sincronizacion: Date | null
      esta_activa: boolean | null
      alias_personalizado: string | null
      consecutive_zero_syncs: number | null
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
    usuarios_principales<T extends cuentas_gmail_asociadas$usuarios_principalesArgs<ExtArgs> = {}>(args?: Subset<T, cuentas_gmail_asociadas$usuarios_principalesArgs<ExtArgs>>): Prisma__usuarios_principalesClient<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    events_sincronizados<T extends cuentas_gmail_asociadas$events_sincronizadosArgs<ExtArgs> = {}>(args?: Subset<T, cuentas_gmail_asociadas$events_sincronizadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$events_sincronizadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"cuentas_gmail_asociadas", 'String'>
    readonly usuario_principal_id: FieldRef<"cuentas_gmail_asociadas", 'String'>
    readonly email_gmail: FieldRef<"cuentas_gmail_asociadas", 'String'>
    readonly nombre_cuenta: FieldRef<"cuentas_gmail_asociadas", 'String'>
    readonly google_id: FieldRef<"cuentas_gmail_asociadas", 'String'>
    readonly access_token: FieldRef<"cuentas_gmail_asociadas", 'String'>
    readonly refresh_token: FieldRef<"cuentas_gmail_asociadas", 'String'>
    readonly token_expira_en: FieldRef<"cuentas_gmail_asociadas", 'DateTime'>
    readonly fecha_conexion: FieldRef<"cuentas_gmail_asociadas", 'DateTime'>
    readonly ultima_sincronizacion: FieldRef<"cuentas_gmail_asociadas", 'DateTime'>
    readonly esta_activa: FieldRef<"cuentas_gmail_asociadas", 'Boolean'>
    readonly alias_personalizado: FieldRef<"cuentas_gmail_asociadas", 'String'>
    readonly consecutive_zero_syncs: FieldRef<"cuentas_gmail_asociadas", 'Int'>
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
   * cuentas_gmail_asociadas.usuarios_principales
   */
  export type cuentas_gmail_asociadas$usuarios_principalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: usuarios_principalesWhereInput
  }

  /**
   * cuentas_gmail_asociadas.events_sincronizados
   */
  export type cuentas_gmail_asociadas$events_sincronizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_sincronizados
     */
    select?: events_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_sincronizados
     */
    omit?: events_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_sincronizadosInclude<ExtArgs> | null
    where?: events_sincronizadosWhereInput
    orderBy?: events_sincronizadosOrderByWithRelationInput | events_sincronizadosOrderByWithRelationInput[]
    cursor?: events_sincronizadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Events_sincronizadosScalarFieldEnum | Events_sincronizadosScalarFieldEnum[]
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
   * Model events_sincronizados
   */

  export type AggregateEvents_sincronizados = {
    _count: Events_sincronizadosCountAggregateOutputType | null
    _min: Events_sincronizadosMinAggregateOutputType | null
    _max: Events_sincronizadosMaxAggregateOutputType | null
  }

  export type Events_sincronizadosMinAggregateOutputType = {
    id: string | null
    cuenta_gmail_id: string | null
    google_event_id: string | null
    summary: string | null
    location: string | null
    description: string | null
    start_time: Date | null
    end_time: Date | null
    fecha_sincronizado: Date | null
  }

  export type Events_sincronizadosMaxAggregateOutputType = {
    id: string | null
    cuenta_gmail_id: string | null
    google_event_id: string | null
    summary: string | null
    location: string | null
    description: string | null
    start_time: Date | null
    end_time: Date | null
    fecha_sincronizado: Date | null
  }

  export type Events_sincronizadosCountAggregateOutputType = {
    id: number
    cuenta_gmail_id: number
    google_event_id: number
    summary: number
    location: number
    description: number
    start_time: number
    end_time: number
    attendees: number
    fecha_sincronizado: number
    _all: number
  }


  export type Events_sincronizadosMinAggregateInputType = {
    id?: true
    cuenta_gmail_id?: true
    google_event_id?: true
    summary?: true
    location?: true
    description?: true
    start_time?: true
    end_time?: true
    fecha_sincronizado?: true
  }

  export type Events_sincronizadosMaxAggregateInputType = {
    id?: true
    cuenta_gmail_id?: true
    google_event_id?: true
    summary?: true
    location?: true
    description?: true
    start_time?: true
    end_time?: true
    fecha_sincronizado?: true
  }

  export type Events_sincronizadosCountAggregateInputType = {
    id?: true
    cuenta_gmail_id?: true
    google_event_id?: true
    summary?: true
    location?: true
    description?: true
    start_time?: true
    end_time?: true
    attendees?: true
    fecha_sincronizado?: true
    _all?: true
  }

  export type Events_sincronizadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events_sincronizados to aggregate.
     */
    where?: events_sincronizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events_sincronizados to fetch.
     */
    orderBy?: events_sincronizadosOrderByWithRelationInput | events_sincronizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: events_sincronizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events_sincronizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events_sincronizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events_sincronizados
    **/
    _count?: true | Events_sincronizadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Events_sincronizadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Events_sincronizadosMaxAggregateInputType
  }

  export type GetEvents_sincronizadosAggregateType<T extends Events_sincronizadosAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents_sincronizados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents_sincronizados[P]>
      : GetScalarType<T[P], AggregateEvents_sincronizados[P]>
  }




  export type events_sincronizadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: events_sincronizadosWhereInput
    orderBy?: events_sincronizadosOrderByWithAggregationInput | events_sincronizadosOrderByWithAggregationInput[]
    by: Events_sincronizadosScalarFieldEnum[] | Events_sincronizadosScalarFieldEnum
    having?: events_sincronizadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Events_sincronizadosCountAggregateInputType | true
    _min?: Events_sincronizadosMinAggregateInputType
    _max?: Events_sincronizadosMaxAggregateInputType
  }

  export type Events_sincronizadosGroupByOutputType = {
    id: string
    cuenta_gmail_id: string | null
    google_event_id: string
    summary: string | null
    location: string | null
    description: string | null
    start_time: Date | null
    end_time: Date | null
    attendees: string[]
    fecha_sincronizado: Date | null
    _count: Events_sincronizadosCountAggregateOutputType | null
    _min: Events_sincronizadosMinAggregateOutputType | null
    _max: Events_sincronizadosMaxAggregateOutputType | null
  }

  type GetEvents_sincronizadosGroupByPayload<T extends events_sincronizadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Events_sincronizadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Events_sincronizadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Events_sincronizadosGroupByOutputType[P]>
            : GetScalarType<T[P], Events_sincronizadosGroupByOutputType[P]>
        }
      >
    >


  export type events_sincronizadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cuenta_gmail_id?: boolean
    google_event_id?: boolean
    summary?: boolean
    location?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    attendees?: boolean
    fecha_sincronizado?: boolean
    cuentas_gmail_asociadas?: boolean | events_sincronizados$cuentas_gmail_asociadasArgs<ExtArgs>
  }, ExtArgs["result"]["events_sincronizados"]>

  export type events_sincronizadosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cuenta_gmail_id?: boolean
    google_event_id?: boolean
    summary?: boolean
    location?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    attendees?: boolean
    fecha_sincronizado?: boolean
    cuentas_gmail_asociadas?: boolean | events_sincronizados$cuentas_gmail_asociadasArgs<ExtArgs>
  }, ExtArgs["result"]["events_sincronizados"]>

  export type events_sincronizadosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cuenta_gmail_id?: boolean
    google_event_id?: boolean
    summary?: boolean
    location?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    attendees?: boolean
    fecha_sincronizado?: boolean
    cuentas_gmail_asociadas?: boolean | events_sincronizados$cuentas_gmail_asociadasArgs<ExtArgs>
  }, ExtArgs["result"]["events_sincronizados"]>

  export type events_sincronizadosSelectScalar = {
    id?: boolean
    cuenta_gmail_id?: boolean
    google_event_id?: boolean
    summary?: boolean
    location?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    attendees?: boolean
    fecha_sincronizado?: boolean
  }

  export type events_sincronizadosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cuenta_gmail_id" | "google_event_id" | "summary" | "location" | "description" | "start_time" | "end_time" | "attendees" | "fecha_sincronizado", ExtArgs["result"]["events_sincronizados"]>
  export type events_sincronizadosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuentas_gmail_asociadas?: boolean | events_sincronizados$cuentas_gmail_asociadasArgs<ExtArgs>
  }
  export type events_sincronizadosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuentas_gmail_asociadas?: boolean | events_sincronizados$cuentas_gmail_asociadasArgs<ExtArgs>
  }
  export type events_sincronizadosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuentas_gmail_asociadas?: boolean | events_sincronizados$cuentas_gmail_asociadasArgs<ExtArgs>
  }

  export type $events_sincronizadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events_sincronizados"
    objects: {
      cuentas_gmail_asociadas: Prisma.$cuentas_gmail_asociadasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cuenta_gmail_id: string | null
      google_event_id: string
      summary: string | null
      location: string | null
      description: string | null
      start_time: Date | null
      end_time: Date | null
      attendees: string[]
      fecha_sincronizado: Date | null
    }, ExtArgs["result"]["events_sincronizados"]>
    composites: {}
  }

  type events_sincronizadosGetPayload<S extends boolean | null | undefined | events_sincronizadosDefaultArgs> = $Result.GetResult<Prisma.$events_sincronizadosPayload, S>

  type events_sincronizadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<events_sincronizadosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Events_sincronizadosCountAggregateInputType | true
    }

  export interface events_sincronizadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events_sincronizados'], meta: { name: 'events_sincronizados' } }
    /**
     * Find zero or one Events_sincronizados that matches the filter.
     * @param {events_sincronizadosFindUniqueArgs} args - Arguments to find a Events_sincronizados
     * @example
     * // Get one Events_sincronizados
     * const events_sincronizados = await prisma.events_sincronizados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends events_sincronizadosFindUniqueArgs>(args: SelectSubset<T, events_sincronizadosFindUniqueArgs<ExtArgs>>): Prisma__events_sincronizadosClient<$Result.GetResult<Prisma.$events_sincronizadosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events_sincronizados that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {events_sincronizadosFindUniqueOrThrowArgs} args - Arguments to find a Events_sincronizados
     * @example
     * // Get one Events_sincronizados
     * const events_sincronizados = await prisma.events_sincronizados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends events_sincronizadosFindUniqueOrThrowArgs>(args: SelectSubset<T, events_sincronizadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__events_sincronizadosClient<$Result.GetResult<Prisma.$events_sincronizadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events_sincronizados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {events_sincronizadosFindFirstArgs} args - Arguments to find a Events_sincronizados
     * @example
     * // Get one Events_sincronizados
     * const events_sincronizados = await prisma.events_sincronizados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends events_sincronizadosFindFirstArgs>(args?: SelectSubset<T, events_sincronizadosFindFirstArgs<ExtArgs>>): Prisma__events_sincronizadosClient<$Result.GetResult<Prisma.$events_sincronizadosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events_sincronizados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {events_sincronizadosFindFirstOrThrowArgs} args - Arguments to find a Events_sincronizados
     * @example
     * // Get one Events_sincronizados
     * const events_sincronizados = await prisma.events_sincronizados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends events_sincronizadosFindFirstOrThrowArgs>(args?: SelectSubset<T, events_sincronizadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__events_sincronizadosClient<$Result.GetResult<Prisma.$events_sincronizadosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events_sincronizados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {events_sincronizadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events_sincronizados
     * const events_sincronizados = await prisma.events_sincronizados.findMany()
     * 
     * // Get first 10 Events_sincronizados
     * const events_sincronizados = await prisma.events_sincronizados.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const events_sincronizadosWithIdOnly = await prisma.events_sincronizados.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends events_sincronizadosFindManyArgs>(args?: SelectSubset<T, events_sincronizadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$events_sincronizadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events_sincronizados.
     * @param {events_sincronizadosCreateArgs} args - Arguments to create a Events_sincronizados.
     * @example
     * // Create one Events_sincronizados
     * const Events_sincronizados = await prisma.events_sincronizados.create({
     *   data: {
     *     // ... data to create a Events_sincronizados
     *   }
     * })
     * 
     */
    create<T extends events_sincronizadosCreateArgs>(args: SelectSubset<T, events_sincronizadosCreateArgs<ExtArgs>>): Prisma__events_sincronizadosClient<$Result.GetResult<Prisma.$events_sincronizadosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events_sincronizados.
     * @param {events_sincronizadosCreateManyArgs} args - Arguments to create many Events_sincronizados.
     * @example
     * // Create many Events_sincronizados
     * const events_sincronizados = await prisma.events_sincronizados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends events_sincronizadosCreateManyArgs>(args?: SelectSubset<T, events_sincronizadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events_sincronizados and returns the data saved in the database.
     * @param {events_sincronizadosCreateManyAndReturnArgs} args - Arguments to create many Events_sincronizados.
     * @example
     * // Create many Events_sincronizados
     * const events_sincronizados = await prisma.events_sincronizados.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events_sincronizados and only return the `id`
     * const events_sincronizadosWithIdOnly = await prisma.events_sincronizados.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends events_sincronizadosCreateManyAndReturnArgs>(args?: SelectSubset<T, events_sincronizadosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$events_sincronizadosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events_sincronizados.
     * @param {events_sincronizadosDeleteArgs} args - Arguments to delete one Events_sincronizados.
     * @example
     * // Delete one Events_sincronizados
     * const Events_sincronizados = await prisma.events_sincronizados.delete({
     *   where: {
     *     // ... filter to delete one Events_sincronizados
     *   }
     * })
     * 
     */
    delete<T extends events_sincronizadosDeleteArgs>(args: SelectSubset<T, events_sincronizadosDeleteArgs<ExtArgs>>): Prisma__events_sincronizadosClient<$Result.GetResult<Prisma.$events_sincronizadosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events_sincronizados.
     * @param {events_sincronizadosUpdateArgs} args - Arguments to update one Events_sincronizados.
     * @example
     * // Update one Events_sincronizados
     * const events_sincronizados = await prisma.events_sincronizados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends events_sincronizadosUpdateArgs>(args: SelectSubset<T, events_sincronizadosUpdateArgs<ExtArgs>>): Prisma__events_sincronizadosClient<$Result.GetResult<Prisma.$events_sincronizadosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events_sincronizados.
     * @param {events_sincronizadosDeleteManyArgs} args - Arguments to filter Events_sincronizados to delete.
     * @example
     * // Delete a few Events_sincronizados
     * const { count } = await prisma.events_sincronizados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends events_sincronizadosDeleteManyArgs>(args?: SelectSubset<T, events_sincronizadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events_sincronizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {events_sincronizadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events_sincronizados
     * const events_sincronizados = await prisma.events_sincronizados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends events_sincronizadosUpdateManyArgs>(args: SelectSubset<T, events_sincronizadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events_sincronizados and returns the data updated in the database.
     * @param {events_sincronizadosUpdateManyAndReturnArgs} args - Arguments to update many Events_sincronizados.
     * @example
     * // Update many Events_sincronizados
     * const events_sincronizados = await prisma.events_sincronizados.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events_sincronizados and only return the `id`
     * const events_sincronizadosWithIdOnly = await prisma.events_sincronizados.updateManyAndReturn({
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
    updateManyAndReturn<T extends events_sincronizadosUpdateManyAndReturnArgs>(args: SelectSubset<T, events_sincronizadosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$events_sincronizadosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events_sincronizados.
     * @param {events_sincronizadosUpsertArgs} args - Arguments to update or create a Events_sincronizados.
     * @example
     * // Update or create a Events_sincronizados
     * const events_sincronizados = await prisma.events_sincronizados.upsert({
     *   create: {
     *     // ... data to create a Events_sincronizados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events_sincronizados we want to update
     *   }
     * })
     */
    upsert<T extends events_sincronizadosUpsertArgs>(args: SelectSubset<T, events_sincronizadosUpsertArgs<ExtArgs>>): Prisma__events_sincronizadosClient<$Result.GetResult<Prisma.$events_sincronizadosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events_sincronizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {events_sincronizadosCountArgs} args - Arguments to filter Events_sincronizados to count.
     * @example
     * // Count the number of Events_sincronizados
     * const count = await prisma.events_sincronizados.count({
     *   where: {
     *     // ... the filter for the Events_sincronizados we want to count
     *   }
     * })
    **/
    count<T extends events_sincronizadosCountArgs>(
      args?: Subset<T, events_sincronizadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Events_sincronizadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events_sincronizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Events_sincronizadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Events_sincronizadosAggregateArgs>(args: Subset<T, Events_sincronizadosAggregateArgs>): Prisma.PrismaPromise<GetEvents_sincronizadosAggregateType<T>>

    /**
     * Group by Events_sincronizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {events_sincronizadosGroupByArgs} args - Group by arguments.
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
      T extends events_sincronizadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: events_sincronizadosGroupByArgs['orderBy'] }
        : { orderBy?: events_sincronizadosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, events_sincronizadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvents_sincronizadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events_sincronizados model
   */
  readonly fields: events_sincronizadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events_sincronizados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__events_sincronizadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuentas_gmail_asociadas<T extends events_sincronizados$cuentas_gmail_asociadasArgs<ExtArgs> = {}>(args?: Subset<T, events_sincronizados$cuentas_gmail_asociadasArgs<ExtArgs>>): Prisma__cuentas_gmail_asociadasClient<$Result.GetResult<Prisma.$cuentas_gmail_asociadasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the events_sincronizados model
   */
  interface events_sincronizadosFieldRefs {
    readonly id: FieldRef<"events_sincronizados", 'String'>
    readonly cuenta_gmail_id: FieldRef<"events_sincronizados", 'String'>
    readonly google_event_id: FieldRef<"events_sincronizados", 'String'>
    readonly summary: FieldRef<"events_sincronizados", 'String'>
    readonly location: FieldRef<"events_sincronizados", 'String'>
    readonly description: FieldRef<"events_sincronizados", 'String'>
    readonly start_time: FieldRef<"events_sincronizados", 'DateTime'>
    readonly end_time: FieldRef<"events_sincronizados", 'DateTime'>
    readonly attendees: FieldRef<"events_sincronizados", 'String[]'>
    readonly fecha_sincronizado: FieldRef<"events_sincronizados", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * events_sincronizados findUnique
   */
  export type events_sincronizadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_sincronizados
     */
    select?: events_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_sincronizados
     */
    omit?: events_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_sincronizadosInclude<ExtArgs> | null
    /**
     * Filter, which events_sincronizados to fetch.
     */
    where: events_sincronizadosWhereUniqueInput
  }

  /**
   * events_sincronizados findUniqueOrThrow
   */
  export type events_sincronizadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_sincronizados
     */
    select?: events_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_sincronizados
     */
    omit?: events_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_sincronizadosInclude<ExtArgs> | null
    /**
     * Filter, which events_sincronizados to fetch.
     */
    where: events_sincronizadosWhereUniqueInput
  }

  /**
   * events_sincronizados findFirst
   */
  export type events_sincronizadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_sincronizados
     */
    select?: events_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_sincronizados
     */
    omit?: events_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_sincronizadosInclude<ExtArgs> | null
    /**
     * Filter, which events_sincronizados to fetch.
     */
    where?: events_sincronizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events_sincronizados to fetch.
     */
    orderBy?: events_sincronizadosOrderByWithRelationInput | events_sincronizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events_sincronizados.
     */
    cursor?: events_sincronizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events_sincronizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events_sincronizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events_sincronizados.
     */
    distinct?: Events_sincronizadosScalarFieldEnum | Events_sincronizadosScalarFieldEnum[]
  }

  /**
   * events_sincronizados findFirstOrThrow
   */
  export type events_sincronizadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_sincronizados
     */
    select?: events_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_sincronizados
     */
    omit?: events_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_sincronizadosInclude<ExtArgs> | null
    /**
     * Filter, which events_sincronizados to fetch.
     */
    where?: events_sincronizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events_sincronizados to fetch.
     */
    orderBy?: events_sincronizadosOrderByWithRelationInput | events_sincronizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events_sincronizados.
     */
    cursor?: events_sincronizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events_sincronizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events_sincronizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events_sincronizados.
     */
    distinct?: Events_sincronizadosScalarFieldEnum | Events_sincronizadosScalarFieldEnum[]
  }

  /**
   * events_sincronizados findMany
   */
  export type events_sincronizadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_sincronizados
     */
    select?: events_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_sincronizados
     */
    omit?: events_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_sincronizadosInclude<ExtArgs> | null
    /**
     * Filter, which events_sincronizados to fetch.
     */
    where?: events_sincronizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events_sincronizados to fetch.
     */
    orderBy?: events_sincronizadosOrderByWithRelationInput | events_sincronizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events_sincronizados.
     */
    cursor?: events_sincronizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events_sincronizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events_sincronizados.
     */
    skip?: number
    distinct?: Events_sincronizadosScalarFieldEnum | Events_sincronizadosScalarFieldEnum[]
  }

  /**
   * events_sincronizados create
   */
  export type events_sincronizadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_sincronizados
     */
    select?: events_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_sincronizados
     */
    omit?: events_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_sincronizadosInclude<ExtArgs> | null
    /**
     * The data needed to create a events_sincronizados.
     */
    data: XOR<events_sincronizadosCreateInput, events_sincronizadosUncheckedCreateInput>
  }

  /**
   * events_sincronizados createMany
   */
  export type events_sincronizadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events_sincronizados.
     */
    data: events_sincronizadosCreateManyInput | events_sincronizadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events_sincronizados createManyAndReturn
   */
  export type events_sincronizadosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_sincronizados
     */
    select?: events_sincronizadosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events_sincronizados
     */
    omit?: events_sincronizadosOmit<ExtArgs> | null
    /**
     * The data used to create many events_sincronizados.
     */
    data: events_sincronizadosCreateManyInput | events_sincronizadosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_sincronizadosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * events_sincronizados update
   */
  export type events_sincronizadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_sincronizados
     */
    select?: events_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_sincronizados
     */
    omit?: events_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_sincronizadosInclude<ExtArgs> | null
    /**
     * The data needed to update a events_sincronizados.
     */
    data: XOR<events_sincronizadosUpdateInput, events_sincronizadosUncheckedUpdateInput>
    /**
     * Choose, which events_sincronizados to update.
     */
    where: events_sincronizadosWhereUniqueInput
  }

  /**
   * events_sincronizados updateMany
   */
  export type events_sincronizadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events_sincronizados.
     */
    data: XOR<events_sincronizadosUpdateManyMutationInput, events_sincronizadosUncheckedUpdateManyInput>
    /**
     * Filter which events_sincronizados to update
     */
    where?: events_sincronizadosWhereInput
    /**
     * Limit how many events_sincronizados to update.
     */
    limit?: number
  }

  /**
   * events_sincronizados updateManyAndReturn
   */
  export type events_sincronizadosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_sincronizados
     */
    select?: events_sincronizadosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events_sincronizados
     */
    omit?: events_sincronizadosOmit<ExtArgs> | null
    /**
     * The data used to update events_sincronizados.
     */
    data: XOR<events_sincronizadosUpdateManyMutationInput, events_sincronizadosUncheckedUpdateManyInput>
    /**
     * Filter which events_sincronizados to update
     */
    where?: events_sincronizadosWhereInput
    /**
     * Limit how many events_sincronizados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_sincronizadosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * events_sincronizados upsert
   */
  export type events_sincronizadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_sincronizados
     */
    select?: events_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_sincronizados
     */
    omit?: events_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_sincronizadosInclude<ExtArgs> | null
    /**
     * The filter to search for the events_sincronizados to update in case it exists.
     */
    where: events_sincronizadosWhereUniqueInput
    /**
     * In case the events_sincronizados found by the `where` argument doesn't exist, create a new events_sincronizados with this data.
     */
    create: XOR<events_sincronizadosCreateInput, events_sincronizadosUncheckedCreateInput>
    /**
     * In case the events_sincronizados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<events_sincronizadosUpdateInput, events_sincronizadosUncheckedUpdateInput>
  }

  /**
   * events_sincronizados delete
   */
  export type events_sincronizadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_sincronizados
     */
    select?: events_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_sincronizados
     */
    omit?: events_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_sincronizadosInclude<ExtArgs> | null
    /**
     * Filter which events_sincronizados to delete.
     */
    where: events_sincronizadosWhereUniqueInput
  }

  /**
   * events_sincronizados deleteMany
   */
  export type events_sincronizadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events_sincronizados to delete
     */
    where?: events_sincronizadosWhereInput
    /**
     * Limit how many events_sincronizados to delete.
     */
    limit?: number
  }

  /**
   * events_sincronizados.cuentas_gmail_asociadas
   */
  export type events_sincronizados$cuentas_gmail_asociadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * events_sincronizados without action
   */
  export type events_sincronizadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events_sincronizados
     */
    select?: events_sincronizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events_sincronizados
     */
    omit?: events_sincronizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: events_sincronizadosInclude<ExtArgs> | null
  }


  /**
   * Model sesiones_jwt
   */

  export type AggregateSesiones_jwt = {
    _count: Sesiones_jwtCountAggregateOutputType | null
    _min: Sesiones_jwtMinAggregateOutputType | null
    _max: Sesiones_jwtMaxAggregateOutputType | null
  }

  export type Sesiones_jwtMinAggregateOutputType = {
    id: string | null
    usuario_principal_id: string | null
    jwt_token: string | null
    expira_en: Date | null
    fecha_creacion: Date | null
    esta_activa: boolean | null
    ip_origen: string | null
    user_agent: string | null
  }

  export type Sesiones_jwtMaxAggregateOutputType = {
    id: string | null
    usuario_principal_id: string | null
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
    _min?: Sesiones_jwtMinAggregateInputType
    _max?: Sesiones_jwtMaxAggregateInputType
  }

  export type Sesiones_jwtGroupByOutputType = {
    id: string
    usuario_principal_id: string | null
    jwt_token: string
    expira_en: Date
    fecha_creacion: Date | null
    esta_activa: boolean | null
    ip_origen: string | null
    user_agent: string | null
    _count: Sesiones_jwtCountAggregateOutputType | null
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
    usuarios_principales?: boolean | sesiones_jwt$usuarios_principalesArgs<ExtArgs>
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
    usuarios_principales?: boolean | sesiones_jwt$usuarios_principalesArgs<ExtArgs>
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
    usuarios_principales?: boolean | sesiones_jwt$usuarios_principalesArgs<ExtArgs>
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
    usuarios_principales?: boolean | sesiones_jwt$usuarios_principalesArgs<ExtArgs>
  }
  export type sesiones_jwtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_principales?: boolean | sesiones_jwt$usuarios_principalesArgs<ExtArgs>
  }
  export type sesiones_jwtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_principales?: boolean | sesiones_jwt$usuarios_principalesArgs<ExtArgs>
  }

  export type $sesiones_jwtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sesiones_jwt"
    objects: {
      usuarios_principales: Prisma.$usuarios_principalesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuario_principal_id: string | null
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
    usuarios_principales<T extends sesiones_jwt$usuarios_principalesArgs<ExtArgs> = {}>(args?: Subset<T, sesiones_jwt$usuarios_principalesArgs<ExtArgs>>): Prisma__usuarios_principalesClient<$Result.GetResult<Prisma.$usuarios_principalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"sesiones_jwt", 'String'>
    readonly usuario_principal_id: FieldRef<"sesiones_jwt", 'String'>
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
   * sesiones_jwt.usuarios_principales
   */
  export type sesiones_jwt$usuarios_principalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: usuarios_principalesWhereInput
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Usuarios_principalesScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nombre: 'nombre',
    fecha_registro: 'fecha_registro',
    ultima_actualizacion: 'ultima_actualizacion',
    estado: 'estado',
    email_verificado: 'email_verificado'
  };

  export type Usuarios_principalesScalarFieldEnum = (typeof Usuarios_principalesScalarFieldEnum)[keyof typeof Usuarios_principalesScalarFieldEnum]


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
    alias_personalizado: 'alias_personalizado',
    consecutive_zero_syncs: 'consecutive_zero_syncs',
    backfill_checkpoint_date: 'backfill_checkpoint_date',
    backfill_page_token: 'backfill_page_token'
  };

  export type Cuentas_gmail_asociadasScalarFieldEnum = (typeof Cuentas_gmail_asociadasScalarFieldEnum)[keyof typeof Cuentas_gmail_asociadasScalarFieldEnum]


  export const Events_sincronizadosScalarFieldEnum: {
    id: 'id',
    cuenta_gmail_id: 'cuenta_gmail_id',
    google_event_id: 'google_event_id',
    summary: 'summary',
    location: 'location',
    description: 'description',
    start_time: 'start_time',
    end_time: 'end_time',
    attendees: 'attendees',
    fecha_sincronizado: 'fecha_sincronizado'
  };

  export type Events_sincronizadosScalarFieldEnum = (typeof Events_sincronizadosScalarFieldEnum)[keyof typeof Events_sincronizadosScalarFieldEnum]


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


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type usuarios_principalesWhereInput = {
    AND?: usuarios_principalesWhereInput | usuarios_principalesWhereInput[]
    OR?: usuarios_principalesWhereInput[]
    NOT?: usuarios_principalesWhereInput | usuarios_principalesWhereInput[]
    id?: UuidFilter<"usuarios_principales"> | string
    email?: StringFilter<"usuarios_principales"> | string
    nombre?: StringFilter<"usuarios_principales"> | string
    fecha_registro?: DateTimeNullableFilter<"usuarios_principales"> | Date | string | null
    ultima_actualizacion?: DateTimeNullableFilter<"usuarios_principales"> | Date | string | null
    estado?: StringNullableFilter<"usuarios_principales"> | string | null
    email_verificado?: BoolNullableFilter<"usuarios_principales"> | boolean | null
    cuentas_gmail_asociadas?: Cuentas_gmail_asociadasListRelationFilter
    sesiones_jwt?: Sesiones_jwtListRelationFilter
  }

  export type usuarios_principalesOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    ultima_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    email_verificado?: SortOrderInput | SortOrder
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasOrderByRelationAggregateInput
    sesiones_jwt?: sesiones_jwtOrderByRelationAggregateInput
  }

  export type usuarios_principalesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usuarios_principalesWhereInput | usuarios_principalesWhereInput[]
    OR?: usuarios_principalesWhereInput[]
    NOT?: usuarios_principalesWhereInput | usuarios_principalesWhereInput[]
    nombre?: StringFilter<"usuarios_principales"> | string
    fecha_registro?: DateTimeNullableFilter<"usuarios_principales"> | Date | string | null
    ultima_actualizacion?: DateTimeNullableFilter<"usuarios_principales"> | Date | string | null
    estado?: StringNullableFilter<"usuarios_principales"> | string | null
    email_verificado?: BoolNullableFilter<"usuarios_principales"> | boolean | null
    cuentas_gmail_asociadas?: Cuentas_gmail_asociadasListRelationFilter
    sesiones_jwt?: Sesiones_jwtListRelationFilter
  }, "id" | "email">

  export type usuarios_principalesOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    ultima_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    email_verificado?: SortOrderInput | SortOrder
    _count?: usuarios_principalesCountOrderByAggregateInput
    _max?: usuarios_principalesMaxOrderByAggregateInput
    _min?: usuarios_principalesMinOrderByAggregateInput
  }

  export type usuarios_principalesScalarWhereWithAggregatesInput = {
    AND?: usuarios_principalesScalarWhereWithAggregatesInput | usuarios_principalesScalarWhereWithAggregatesInput[]
    OR?: usuarios_principalesScalarWhereWithAggregatesInput[]
    NOT?: usuarios_principalesScalarWhereWithAggregatesInput | usuarios_principalesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"usuarios_principales"> | string
    email?: StringWithAggregatesFilter<"usuarios_principales"> | string
    nombre?: StringWithAggregatesFilter<"usuarios_principales"> | string
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"usuarios_principales"> | Date | string | null
    ultima_actualizacion?: DateTimeNullableWithAggregatesFilter<"usuarios_principales"> | Date | string | null
    estado?: StringNullableWithAggregatesFilter<"usuarios_principales"> | string | null
    email_verificado?: BoolNullableWithAggregatesFilter<"usuarios_principales"> | boolean | null
  }

  export type cuentas_gmail_asociadasWhereInput = {
    AND?: cuentas_gmail_asociadasWhereInput | cuentas_gmail_asociadasWhereInput[]
    OR?: cuentas_gmail_asociadasWhereInput[]
    NOT?: cuentas_gmail_asociadasWhereInput | cuentas_gmail_asociadasWhereInput[]
    id?: UuidFilter<"cuentas_gmail_asociadas"> | string
    usuario_principal_id?: UuidNullableFilter<"cuentas_gmail_asociadas"> | string | null
    email_gmail?: StringFilter<"cuentas_gmail_asociadas"> | string
    nombre_cuenta?: StringFilter<"cuentas_gmail_asociadas"> | string
    google_id?: StringFilter<"cuentas_gmail_asociadas"> | string
    access_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    refresh_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    token_expira_en?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    fecha_conexion?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    ultima_sincronizacion?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    esta_activa?: BoolNullableFilter<"cuentas_gmail_asociadas"> | boolean | null
    alias_personalizado?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    consecutive_zero_syncs?: IntNullableFilter<"cuentas_gmail_asociadas"> | number | null
    backfill_checkpoint_date?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    backfill_page_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    usuarios_principales?: XOR<Usuarios_principalesNullableScalarRelationFilter, usuarios_principalesWhereInput> | null
    events_sincronizados?: Events_sincronizadosListRelationFilter
  }

  export type cuentas_gmail_asociadasOrderByWithRelationInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrderInput | SortOrder
    email_gmail?: SortOrder
    nombre_cuenta?: SortOrder
    google_id?: SortOrder
    access_token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    token_expira_en?: SortOrderInput | SortOrder
    fecha_conexion?: SortOrderInput | SortOrder
    ultima_sincronizacion?: SortOrderInput | SortOrder
    esta_activa?: SortOrderInput | SortOrder
    alias_personalizado?: SortOrderInput | SortOrder
    consecutive_zero_syncs?: SortOrderInput | SortOrder
    backfill_checkpoint_date?: SortOrderInput | SortOrder
    backfill_page_token?: SortOrderInput | SortOrder
    usuarios_principales?: usuarios_principalesOrderByWithRelationInput
    events_sincronizados?: events_sincronizadosOrderByRelationAggregateInput
  }

  export type cuentas_gmail_asociadasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    google_id?: string
    usuario_principal_id_email_gmail?: cuentas_gmail_asociadasUsuario_principal_idEmail_gmailCompoundUniqueInput
    AND?: cuentas_gmail_asociadasWhereInput | cuentas_gmail_asociadasWhereInput[]
    OR?: cuentas_gmail_asociadasWhereInput[]
    NOT?: cuentas_gmail_asociadasWhereInput | cuentas_gmail_asociadasWhereInput[]
    usuario_principal_id?: UuidNullableFilter<"cuentas_gmail_asociadas"> | string | null
    email_gmail?: StringFilter<"cuentas_gmail_asociadas"> | string
    nombre_cuenta?: StringFilter<"cuentas_gmail_asociadas"> | string
    access_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    refresh_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    token_expira_en?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    fecha_conexion?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    ultima_sincronizacion?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    esta_activa?: BoolNullableFilter<"cuentas_gmail_asociadas"> | boolean | null
    alias_personalizado?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    consecutive_zero_syncs?: IntNullableFilter<"cuentas_gmail_asociadas"> | number | null
    backfill_checkpoint_date?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    backfill_page_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    usuarios_principales?: XOR<Usuarios_principalesNullableScalarRelationFilter, usuarios_principalesWhereInput> | null
    events_sincronizados?: Events_sincronizadosListRelationFilter
  }, "id" | "google_id" | "usuario_principal_id_email_gmail">

  export type cuentas_gmail_asociadasOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrderInput | SortOrder
    email_gmail?: SortOrder
    nombre_cuenta?: SortOrder
    google_id?: SortOrder
    access_token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    token_expira_en?: SortOrderInput | SortOrder
    fecha_conexion?: SortOrderInput | SortOrder
    ultima_sincronizacion?: SortOrderInput | SortOrder
    esta_activa?: SortOrderInput | SortOrder
    alias_personalizado?: SortOrderInput | SortOrder
    consecutive_zero_syncs?: SortOrderInput | SortOrder
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
    id?: UuidWithAggregatesFilter<"cuentas_gmail_asociadas"> | string
    usuario_principal_id?: UuidNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | string | null
    email_gmail?: StringWithAggregatesFilter<"cuentas_gmail_asociadas"> | string
    nombre_cuenta?: StringWithAggregatesFilter<"cuentas_gmail_asociadas"> | string
    google_id?: StringWithAggregatesFilter<"cuentas_gmail_asociadas"> | string
    access_token?: StringNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | string | null
    token_expira_en?: DateTimeNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | Date | string | null
    fecha_conexion?: DateTimeNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | Date | string | null
    ultima_sincronizacion?: DateTimeNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | Date | string | null
    esta_activa?: BoolNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | boolean | null
    alias_personalizado?: StringNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | string | null
    consecutive_zero_syncs?: IntNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | number | null
    backfill_checkpoint_date?: DateTimeNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | Date | string | null
    backfill_page_token?: StringNullableWithAggregatesFilter<"cuentas_gmail_asociadas"> | string | null
  }

  export type events_sincronizadosWhereInput = {
    AND?: events_sincronizadosWhereInput | events_sincronizadosWhereInput[]
    OR?: events_sincronizadosWhereInput[]
    NOT?: events_sincronizadosWhereInput | events_sincronizadosWhereInput[]
    id?: UuidFilter<"events_sincronizados"> | string
    cuenta_gmail_id?: UuidNullableFilter<"events_sincronizados"> | string | null
    google_event_id?: StringFilter<"events_sincronizados"> | string
    summary?: StringNullableFilter<"events_sincronizados"> | string | null
    location?: StringNullableFilter<"events_sincronizados"> | string | null
    description?: StringNullableFilter<"events_sincronizados"> | string | null
    start_time?: DateTimeNullableFilter<"events_sincronizados"> | Date | string | null
    end_time?: DateTimeNullableFilter<"events_sincronizados"> | Date | string | null
    attendees?: StringNullableListFilter<"events_sincronizados">
    fecha_sincronizado?: DateTimeNullableFilter<"events_sincronizados"> | Date | string | null
    cuentas_gmail_asociadas?: XOR<Cuentas_gmail_asociadasNullableScalarRelationFilter, cuentas_gmail_asociadasWhereInput> | null
  }

  export type events_sincronizadosOrderByWithRelationInput = {
    id?: SortOrder
    cuenta_gmail_id?: SortOrderInput | SortOrder
    google_event_id?: SortOrder
    summary?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    attendees?: SortOrder
    fecha_sincronizado?: SortOrderInput | SortOrder
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasOrderByWithRelationInput
  }

  export type events_sincronizadosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cuenta_gmail_id_google_event_id?: events_sincronizadosCuenta_gmail_idGoogle_event_idCompoundUniqueInput
    AND?: events_sincronizadosWhereInput | events_sincronizadosWhereInput[]
    OR?: events_sincronizadosWhereInput[]
    NOT?: events_sincronizadosWhereInput | events_sincronizadosWhereInput[]
    cuenta_gmail_id?: UuidNullableFilter<"events_sincronizados"> | string | null
    google_event_id?: StringFilter<"events_sincronizados"> | string
    summary?: StringNullableFilter<"events_sincronizados"> | string | null
    location?: StringNullableFilter<"events_sincronizados"> | string | null
    description?: StringNullableFilter<"events_sincronizados"> | string | null
    start_time?: DateTimeNullableFilter<"events_sincronizados"> | Date | string | null
    end_time?: DateTimeNullableFilter<"events_sincronizados"> | Date | string | null
    attendees?: StringNullableListFilter<"events_sincronizados">
    fecha_sincronizado?: DateTimeNullableFilter<"events_sincronizados"> | Date | string | null
    cuentas_gmail_asociadas?: XOR<Cuentas_gmail_asociadasNullableScalarRelationFilter, cuentas_gmail_asociadasWhereInput> | null
  }, "id" | "cuenta_gmail_id_google_event_id">

  export type events_sincronizadosOrderByWithAggregationInput = {
    id?: SortOrder
    cuenta_gmail_id?: SortOrderInput | SortOrder
    google_event_id?: SortOrder
    summary?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    attendees?: SortOrder
    fecha_sincronizado?: SortOrderInput | SortOrder
    _count?: events_sincronizadosCountOrderByAggregateInput
    _max?: events_sincronizadosMaxOrderByAggregateInput
    _min?: events_sincronizadosMinOrderByAggregateInput
  }

  export type events_sincronizadosScalarWhereWithAggregatesInput = {
    AND?: events_sincronizadosScalarWhereWithAggregatesInput | events_sincronizadosScalarWhereWithAggregatesInput[]
    OR?: events_sincronizadosScalarWhereWithAggregatesInput[]
    NOT?: events_sincronizadosScalarWhereWithAggregatesInput | events_sincronizadosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"events_sincronizados"> | string
    cuenta_gmail_id?: UuidNullableWithAggregatesFilter<"events_sincronizados"> | string | null
    google_event_id?: StringWithAggregatesFilter<"events_sincronizados"> | string
    summary?: StringNullableWithAggregatesFilter<"events_sincronizados"> | string | null
    location?: StringNullableWithAggregatesFilter<"events_sincronizados"> | string | null
    description?: StringNullableWithAggregatesFilter<"events_sincronizados"> | string | null
    start_time?: DateTimeNullableWithAggregatesFilter<"events_sincronizados"> | Date | string | null
    end_time?: DateTimeNullableWithAggregatesFilter<"events_sincronizados"> | Date | string | null
    attendees?: StringNullableListFilter<"events_sincronizados">
    fecha_sincronizado?: DateTimeNullableWithAggregatesFilter<"events_sincronizados"> | Date | string | null
  }

  export type sesiones_jwtWhereInput = {
    AND?: sesiones_jwtWhereInput | sesiones_jwtWhereInput[]
    OR?: sesiones_jwtWhereInput[]
    NOT?: sesiones_jwtWhereInput | sesiones_jwtWhereInput[]
    id?: UuidFilter<"sesiones_jwt"> | string
    usuario_principal_id?: UuidNullableFilter<"sesiones_jwt"> | string | null
    jwt_token?: StringFilter<"sesiones_jwt"> | string
    expira_en?: DateTimeFilter<"sesiones_jwt"> | Date | string
    fecha_creacion?: DateTimeNullableFilter<"sesiones_jwt"> | Date | string | null
    esta_activa?: BoolNullableFilter<"sesiones_jwt"> | boolean | null
    ip_origen?: StringNullableFilter<"sesiones_jwt"> | string | null
    user_agent?: StringNullableFilter<"sesiones_jwt"> | string | null
    usuarios_principales?: XOR<Usuarios_principalesNullableScalarRelationFilter, usuarios_principalesWhereInput> | null
  }

  export type sesiones_jwtOrderByWithRelationInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrderInput | SortOrder
    jwt_token?: SortOrder
    expira_en?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    esta_activa?: SortOrderInput | SortOrder
    ip_origen?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    usuarios_principales?: usuarios_principalesOrderByWithRelationInput
  }

  export type sesiones_jwtWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sesiones_jwtWhereInput | sesiones_jwtWhereInput[]
    OR?: sesiones_jwtWhereInput[]
    NOT?: sesiones_jwtWhereInput | sesiones_jwtWhereInput[]
    usuario_principal_id?: UuidNullableFilter<"sesiones_jwt"> | string | null
    jwt_token?: StringFilter<"sesiones_jwt"> | string
    expira_en?: DateTimeFilter<"sesiones_jwt"> | Date | string
    fecha_creacion?: DateTimeNullableFilter<"sesiones_jwt"> | Date | string | null
    esta_activa?: BoolNullableFilter<"sesiones_jwt"> | boolean | null
    ip_origen?: StringNullableFilter<"sesiones_jwt"> | string | null
    user_agent?: StringNullableFilter<"sesiones_jwt"> | string | null
    usuarios_principales?: XOR<Usuarios_principalesNullableScalarRelationFilter, usuarios_principalesWhereInput> | null
  }, "id">

  export type sesiones_jwtOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_principal_id?: SortOrderInput | SortOrder
    jwt_token?: SortOrder
    expira_en?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    esta_activa?: SortOrderInput | SortOrder
    ip_origen?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    _count?: sesiones_jwtCountOrderByAggregateInput
    _max?: sesiones_jwtMaxOrderByAggregateInput
    _min?: sesiones_jwtMinOrderByAggregateInput
  }

  export type sesiones_jwtScalarWhereWithAggregatesInput = {
    AND?: sesiones_jwtScalarWhereWithAggregatesInput | sesiones_jwtScalarWhereWithAggregatesInput[]
    OR?: sesiones_jwtScalarWhereWithAggregatesInput[]
    NOT?: sesiones_jwtScalarWhereWithAggregatesInput | sesiones_jwtScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"sesiones_jwt"> | string
    usuario_principal_id?: UuidNullableWithAggregatesFilter<"sesiones_jwt"> | string | null
    jwt_token?: StringWithAggregatesFilter<"sesiones_jwt"> | string
    expira_en?: DateTimeWithAggregatesFilter<"sesiones_jwt"> | Date | string
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"sesiones_jwt"> | Date | string | null
    esta_activa?: BoolNullableWithAggregatesFilter<"sesiones_jwt"> | boolean | null
    ip_origen?: StringNullableWithAggregatesFilter<"sesiones_jwt"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"sesiones_jwt"> | string | null
  }

  export type usuarios_principalesCreateInput = {
    id?: string
    email: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasCreateNestedManyWithoutUsuarios_principalesInput
    sesiones_jwt?: sesiones_jwtCreateNestedManyWithoutUsuarios_principalesInput
  }

  export type usuarios_principalesUncheckedCreateInput = {
    id?: string
    email: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUncheckedCreateNestedManyWithoutUsuarios_principalesInput
    sesiones_jwt?: sesiones_jwtUncheckedCreateNestedManyWithoutUsuarios_principalesInput
  }

  export type usuarios_principalesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUpdateManyWithoutUsuarios_principalesNestedInput
    sesiones_jwt?: sesiones_jwtUpdateManyWithoutUsuarios_principalesNestedInput
  }

  export type usuarios_principalesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUncheckedUpdateManyWithoutUsuarios_principalesNestedInput
    sesiones_jwt?: sesiones_jwtUncheckedUpdateManyWithoutUsuarios_principalesNestedInput
  }

  export type usuarios_principalesCreateManyInput = {
    id?: string
    email: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
  }

  export type usuarios_principalesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usuarios_principalesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type cuentas_gmail_asociadasCreateInput = {
    id?: string
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    consecutive_zero_syncs?: number | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
    usuarios_principales?: usuarios_principalesCreateNestedOneWithoutCuentas_gmail_asociadasInput
    events_sincronizados?: events_sincronizadosCreateNestedManyWithoutCuentas_gmail_asociadasInput
  }

  export type cuentas_gmail_asociadasUncheckedCreateInput = {
    id?: string
    usuario_principal_id?: string | null
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    consecutive_zero_syncs?: number | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
    events_sincronizados?: events_sincronizadosUncheckedCreateNestedManyWithoutCuentas_gmail_asociadasInput
  }

  export type cuentas_gmail_asociadasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios_principales?: usuarios_principalesUpdateOneWithoutCuentas_gmail_asociadasNestedInput
    events_sincronizados?: events_sincronizadosUpdateManyWithoutCuentas_gmail_asociadasNestedInput
  }

  export type cuentas_gmail_asociadasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_principal_id?: NullableStringFieldUpdateOperationsInput | string | null
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
    events_sincronizados?: events_sincronizadosUncheckedUpdateManyWithoutCuentas_gmail_asociadasNestedInput
  }

  export type cuentas_gmail_asociadasCreateManyInput = {
    id?: string
    usuario_principal_id?: string | null
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    consecutive_zero_syncs?: number | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
  }

  export type cuentas_gmail_asociadasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cuentas_gmail_asociadasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_principal_id?: NullableStringFieldUpdateOperationsInput | string | null
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type events_sincronizadosCreateInput = {
    id?: string
    google_event_id: string
    summary?: string | null
    location?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    attendees?: events_sincronizadosCreateattendeesInput | string[]
    fecha_sincronizado?: Date | string | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasCreateNestedOneWithoutEvents_sincronizadosInput
  }

  export type events_sincronizadosUncheckedCreateInput = {
    id?: string
    cuenta_gmail_id?: string | null
    google_event_id: string
    summary?: string | null
    location?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    attendees?: events_sincronizadosCreateattendeesInput | string[]
    fecha_sincronizado?: Date | string | null
  }

  export type events_sincronizadosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_event_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendees?: events_sincronizadosUpdateattendeesInput | string[]
    fecha_sincronizado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUpdateOneWithoutEvents_sincronizadosNestedInput
  }

  export type events_sincronizadosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cuenta_gmail_id?: NullableStringFieldUpdateOperationsInput | string | null
    google_event_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendees?: events_sincronizadosUpdateattendeesInput | string[]
    fecha_sincronizado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type events_sincronizadosCreateManyInput = {
    id?: string
    cuenta_gmail_id?: string | null
    google_event_id: string
    summary?: string | null
    location?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    attendees?: events_sincronizadosCreateattendeesInput | string[]
    fecha_sincronizado?: Date | string | null
  }

  export type events_sincronizadosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_event_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendees?: events_sincronizadosUpdateattendeesInput | string[]
    fecha_sincronizado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type events_sincronizadosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cuenta_gmail_id?: NullableStringFieldUpdateOperationsInput | string | null
    google_event_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendees?: events_sincronizadosUpdateattendeesInput | string[]
    fecha_sincronizado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sesiones_jwtCreateInput = {
    id?: string
    jwt_token: string
    expira_en: Date | string
    fecha_creacion?: Date | string | null
    esta_activa?: boolean | null
    ip_origen?: string | null
    user_agent?: string | null
    usuarios_principales?: usuarios_principalesCreateNestedOneWithoutSesiones_jwtInput
  }

  export type sesiones_jwtUncheckedCreateInput = {
    id?: string
    usuario_principal_id?: string | null
    jwt_token: string
    expira_en: Date | string
    fecha_creacion?: Date | string | null
    esta_activa?: boolean | null
    ip_origen?: string | null
    user_agent?: string | null
  }

  export type sesiones_jwtUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jwt_token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ip_origen?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios_principales?: usuarios_principalesUpdateOneWithoutSesiones_jwtNestedInput
  }

  export type sesiones_jwtUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_principal_id?: NullableStringFieldUpdateOperationsInput | string | null
    jwt_token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ip_origen?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sesiones_jwtCreateManyInput = {
    id?: string
    usuario_principal_id?: string | null
    jwt_token: string
    expira_en: Date | string
    fecha_creacion?: Date | string | null
    esta_activa?: boolean | null
    ip_origen?: string | null
    user_agent?: string | null
  }

  export type sesiones_jwtUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jwt_token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ip_origen?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sesiones_jwtUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_principal_id?: NullableStringFieldUpdateOperationsInput | string | null
    jwt_token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ip_origen?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cuentas_gmail_asociadasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sesiones_jwtOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarios_principalesCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    fecha_registro?: SortOrder
    ultima_actualizacion?: SortOrder
    estado?: SortOrder
    email_verificado?: SortOrder
  }

  export type usuarios_principalesMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    fecha_registro?: SortOrder
    ultima_actualizacion?: SortOrder
    estado?: SortOrder
    email_verificado?: SortOrder
  }

  export type usuarios_principalesMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    fecha_registro?: SortOrder
    ultima_actualizacion?: SortOrder
    estado?: SortOrder
    email_verificado?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type Usuarios_principalesNullableScalarRelationFilter = {
    is?: usuarios_principalesWhereInput | null
    isNot?: usuarios_principalesWhereInput | null
  }

  export type Events_sincronizadosListRelationFilter = {
    every?: events_sincronizadosWhereInput
    some?: events_sincronizadosWhereInput
    none?: events_sincronizadosWhereInput
  }

  export type events_sincronizadosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cuentas_gmail_asociadasUsuario_principal_idEmail_gmailCompoundUniqueInput = {
    usuario_principal_id: string
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
    alias_personalizado?: SortOrder
    consecutive_zero_syncs?: SortOrder
    backfill_checkpoint_date?: SortOrder
    backfill_page_token?: SortOrder
  }

  export type cuentas_gmail_asociadasAvgOrderByAggregateInput = {
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
    alias_personalizado?: SortOrder
    consecutive_zero_syncs?: SortOrder
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
    alias_personalizado?: SortOrder
    consecutive_zero_syncs?: SortOrder
    backfill_checkpoint_date?: SortOrder
    backfill_page_token?: SortOrder
  }

  export type cuentas_gmail_asociadasSumOrderByAggregateInput = {
    consecutive_zero_syncs?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type Cuentas_gmail_asociadasNullableScalarRelationFilter = {
    is?: cuentas_gmail_asociadasWhereInput | null
    isNot?: cuentas_gmail_asociadasWhereInput | null
  }

  export type events_sincronizadosCuenta_gmail_idGoogle_event_idCompoundUniqueInput = {
    cuenta_gmail_id: string
    google_event_id: string
  }

  export type events_sincronizadosCountOrderByAggregateInput = {
    id?: SortOrder
    cuenta_gmail_id?: SortOrder
    google_event_id?: SortOrder
    summary?: SortOrder
    location?: SortOrder
    description?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    attendees?: SortOrder
    fecha_sincronizado?: SortOrder
  }

  export type events_sincronizadosMaxOrderByAggregateInput = {
    id?: SortOrder
    cuenta_gmail_id?: SortOrder
    google_event_id?: SortOrder
    summary?: SortOrder
    location?: SortOrder
    description?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    fecha_sincronizado?: SortOrder
  }

  export type events_sincronizadosMinOrderByAggregateInput = {
    id?: SortOrder
    cuenta_gmail_id?: SortOrder
    google_event_id?: SortOrder
    summary?: SortOrder
    location?: SortOrder
    description?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    fecha_sincronizado?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
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

  export type usuarios_principalesCreateNestedOneWithoutCuentas_gmail_asociadasInput = {
    create?: XOR<usuarios_principalesCreateWithoutCuentas_gmail_asociadasInput, usuarios_principalesUncheckedCreateWithoutCuentas_gmail_asociadasInput>
    connectOrCreate?: usuarios_principalesCreateOrConnectWithoutCuentas_gmail_asociadasInput
    connect?: usuarios_principalesWhereUniqueInput
  }

  export type events_sincronizadosCreateNestedManyWithoutCuentas_gmail_asociadasInput = {
    create?: XOR<events_sincronizadosCreateWithoutCuentas_gmail_asociadasInput, events_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput> | events_sincronizadosCreateWithoutCuentas_gmail_asociadasInput[] | events_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput[]
    connectOrCreate?: events_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput | events_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput[]
    createMany?: events_sincronizadosCreateManyCuentas_gmail_asociadasInputEnvelope
    connect?: events_sincronizadosWhereUniqueInput | events_sincronizadosWhereUniqueInput[]
  }

  export type events_sincronizadosUncheckedCreateNestedManyWithoutCuentas_gmail_asociadasInput = {
    create?: XOR<events_sincronizadosCreateWithoutCuentas_gmail_asociadasInput, events_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput> | events_sincronizadosCreateWithoutCuentas_gmail_asociadasInput[] | events_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput[]
    connectOrCreate?: events_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput | events_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput[]
    createMany?: events_sincronizadosCreateManyCuentas_gmail_asociadasInputEnvelope
    connect?: events_sincronizadosWhereUniqueInput | events_sincronizadosWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usuarios_principalesUpdateOneWithoutCuentas_gmail_asociadasNestedInput = {
    create?: XOR<usuarios_principalesCreateWithoutCuentas_gmail_asociadasInput, usuarios_principalesUncheckedCreateWithoutCuentas_gmail_asociadasInput>
    connectOrCreate?: usuarios_principalesCreateOrConnectWithoutCuentas_gmail_asociadasInput
    upsert?: usuarios_principalesUpsertWithoutCuentas_gmail_asociadasInput
    disconnect?: usuarios_principalesWhereInput | boolean
    delete?: usuarios_principalesWhereInput | boolean
    connect?: usuarios_principalesWhereUniqueInput
    update?: XOR<XOR<usuarios_principalesUpdateToOneWithWhereWithoutCuentas_gmail_asociadasInput, usuarios_principalesUpdateWithoutCuentas_gmail_asociadasInput>, usuarios_principalesUncheckedUpdateWithoutCuentas_gmail_asociadasInput>
  }

  export type events_sincronizadosUpdateManyWithoutCuentas_gmail_asociadasNestedInput = {
    create?: XOR<events_sincronizadosCreateWithoutCuentas_gmail_asociadasInput, events_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput> | events_sincronizadosCreateWithoutCuentas_gmail_asociadasInput[] | events_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput[]
    connectOrCreate?: events_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput | events_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput[]
    upsert?: events_sincronizadosUpsertWithWhereUniqueWithoutCuentas_gmail_asociadasInput | events_sincronizadosUpsertWithWhereUniqueWithoutCuentas_gmail_asociadasInput[]
    createMany?: events_sincronizadosCreateManyCuentas_gmail_asociadasInputEnvelope
    set?: events_sincronizadosWhereUniqueInput | events_sincronizadosWhereUniqueInput[]
    disconnect?: events_sincronizadosWhereUniqueInput | events_sincronizadosWhereUniqueInput[]
    delete?: events_sincronizadosWhereUniqueInput | events_sincronizadosWhereUniqueInput[]
    connect?: events_sincronizadosWhereUniqueInput | events_sincronizadosWhereUniqueInput[]
    update?: events_sincronizadosUpdateWithWhereUniqueWithoutCuentas_gmail_asociadasInput | events_sincronizadosUpdateWithWhereUniqueWithoutCuentas_gmail_asociadasInput[]
    updateMany?: events_sincronizadosUpdateManyWithWhereWithoutCuentas_gmail_asociadasInput | events_sincronizadosUpdateManyWithWhereWithoutCuentas_gmail_asociadasInput[]
    deleteMany?: events_sincronizadosScalarWhereInput | events_sincronizadosScalarWhereInput[]
  }

  export type events_sincronizadosUncheckedUpdateManyWithoutCuentas_gmail_asociadasNestedInput = {
    create?: XOR<events_sincronizadosCreateWithoutCuentas_gmail_asociadasInput, events_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput> | events_sincronizadosCreateWithoutCuentas_gmail_asociadasInput[] | events_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput[]
    connectOrCreate?: events_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput | events_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput[]
    upsert?: events_sincronizadosUpsertWithWhereUniqueWithoutCuentas_gmail_asociadasInput | events_sincronizadosUpsertWithWhereUniqueWithoutCuentas_gmail_asociadasInput[]
    createMany?: events_sincronizadosCreateManyCuentas_gmail_asociadasInputEnvelope
    set?: events_sincronizadosWhereUniqueInput | events_sincronizadosWhereUniqueInput[]
    disconnect?: events_sincronizadosWhereUniqueInput | events_sincronizadosWhereUniqueInput[]
    delete?: events_sincronizadosWhereUniqueInput | events_sincronizadosWhereUniqueInput[]
    connect?: events_sincronizadosWhereUniqueInput | events_sincronizadosWhereUniqueInput[]
    update?: events_sincronizadosUpdateWithWhereUniqueWithoutCuentas_gmail_asociadasInput | events_sincronizadosUpdateWithWhereUniqueWithoutCuentas_gmail_asociadasInput[]
    updateMany?: events_sincronizadosUpdateManyWithWhereWithoutCuentas_gmail_asociadasInput | events_sincronizadosUpdateManyWithWhereWithoutCuentas_gmail_asociadasInput[]
    deleteMany?: events_sincronizadosScalarWhereInput | events_sincronizadosScalarWhereInput[]
  }

  export type events_sincronizadosCreateattendeesInput = {
    set: string[]
  }

  export type cuentas_gmail_asociadasCreateNestedOneWithoutEvents_sincronizadosInput = {
    create?: XOR<cuentas_gmail_asociadasCreateWithoutEvents_sincronizadosInput, cuentas_gmail_asociadasUncheckedCreateWithoutEvents_sincronizadosInput>
    connectOrCreate?: cuentas_gmail_asociadasCreateOrConnectWithoutEvents_sincronizadosInput
    connect?: cuentas_gmail_asociadasWhereUniqueInput
  }

  export type events_sincronizadosUpdateattendeesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type cuentas_gmail_asociadasUpdateOneWithoutEvents_sincronizadosNestedInput = {
    create?: XOR<cuentas_gmail_asociadasCreateWithoutEvents_sincronizadosInput, cuentas_gmail_asociadasUncheckedCreateWithoutEvents_sincronizadosInput>
    connectOrCreate?: cuentas_gmail_asociadasCreateOrConnectWithoutEvents_sincronizadosInput
    upsert?: cuentas_gmail_asociadasUpsertWithoutEvents_sincronizadosInput
    disconnect?: cuentas_gmail_asociadasWhereInput | boolean
    delete?: cuentas_gmail_asociadasWhereInput | boolean
    connect?: cuentas_gmail_asociadasWhereUniqueInput
    update?: XOR<XOR<cuentas_gmail_asociadasUpdateToOneWithWhereWithoutEvents_sincronizadosInput, cuentas_gmail_asociadasUpdateWithoutEvents_sincronizadosInput>, cuentas_gmail_asociadasUncheckedUpdateWithoutEvents_sincronizadosInput>
  }

  export type usuarios_principalesCreateNestedOneWithoutSesiones_jwtInput = {
    create?: XOR<usuarios_principalesCreateWithoutSesiones_jwtInput, usuarios_principalesUncheckedCreateWithoutSesiones_jwtInput>
    connectOrCreate?: usuarios_principalesCreateOrConnectWithoutSesiones_jwtInput
    connect?: usuarios_principalesWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usuarios_principalesUpdateOneWithoutSesiones_jwtNestedInput = {
    create?: XOR<usuarios_principalesCreateWithoutSesiones_jwtInput, usuarios_principalesUncheckedCreateWithoutSesiones_jwtInput>
    connectOrCreate?: usuarios_principalesCreateOrConnectWithoutSesiones_jwtInput
    upsert?: usuarios_principalesUpsertWithoutSesiones_jwtInput
    disconnect?: usuarios_principalesWhereInput | boolean
    delete?: usuarios_principalesWhereInput | boolean
    connect?: usuarios_principalesWhereUniqueInput
    update?: XOR<XOR<usuarios_principalesUpdateToOneWithWhereWithoutSesiones_jwtInput, usuarios_principalesUpdateWithoutSesiones_jwtInput>, usuarios_principalesUncheckedUpdateWithoutSesiones_jwtInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
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

  export type cuentas_gmail_asociadasCreateWithoutUsuarios_principalesInput = {
    id?: string
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    consecutive_zero_syncs?: number | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
    events_sincronizados?: events_sincronizadosCreateNestedManyWithoutCuentas_gmail_asociadasInput
  }

  export type cuentas_gmail_asociadasUncheckedCreateWithoutUsuarios_principalesInput = {
    id?: string
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    consecutive_zero_syncs?: number | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
    events_sincronizados?: events_sincronizadosUncheckedCreateNestedManyWithoutCuentas_gmail_asociadasInput
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
    id?: string
    jwt_token: string
    expira_en: Date | string
    fecha_creacion?: Date | string | null
    esta_activa?: boolean | null
    ip_origen?: string | null
    user_agent?: string | null
  }

  export type sesiones_jwtUncheckedCreateWithoutUsuarios_principalesInput = {
    id?: string
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
    id?: UuidFilter<"cuentas_gmail_asociadas"> | string
    usuario_principal_id?: UuidNullableFilter<"cuentas_gmail_asociadas"> | string | null
    email_gmail?: StringFilter<"cuentas_gmail_asociadas"> | string
    nombre_cuenta?: StringFilter<"cuentas_gmail_asociadas"> | string
    google_id?: StringFilter<"cuentas_gmail_asociadas"> | string
    access_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    refresh_token?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    token_expira_en?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    fecha_conexion?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    ultima_sincronizacion?: DateTimeNullableFilter<"cuentas_gmail_asociadas"> | Date | string | null
    esta_activa?: BoolNullableFilter<"cuentas_gmail_asociadas"> | boolean | null
    alias_personalizado?: StringNullableFilter<"cuentas_gmail_asociadas"> | string | null
    consecutive_zero_syncs?: IntNullableFilter<"cuentas_gmail_asociadas"> | number | null
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
    id?: UuidFilter<"sesiones_jwt"> | string
    usuario_principal_id?: UuidNullableFilter<"sesiones_jwt"> | string | null
    jwt_token?: StringFilter<"sesiones_jwt"> | string
    expira_en?: DateTimeFilter<"sesiones_jwt"> | Date | string
    fecha_creacion?: DateTimeNullableFilter<"sesiones_jwt"> | Date | string | null
    esta_activa?: BoolNullableFilter<"sesiones_jwt"> | boolean | null
    ip_origen?: StringNullableFilter<"sesiones_jwt"> | string | null
    user_agent?: StringNullableFilter<"sesiones_jwt"> | string | null
  }

  export type usuarios_principalesCreateWithoutCuentas_gmail_asociadasInput = {
    id?: string
    email: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
    sesiones_jwt?: sesiones_jwtCreateNestedManyWithoutUsuarios_principalesInput
  }

  export type usuarios_principalesUncheckedCreateWithoutCuentas_gmail_asociadasInput = {
    id?: string
    email: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
    sesiones_jwt?: sesiones_jwtUncheckedCreateNestedManyWithoutUsuarios_principalesInput
  }

  export type usuarios_principalesCreateOrConnectWithoutCuentas_gmail_asociadasInput = {
    where: usuarios_principalesWhereUniqueInput
    create: XOR<usuarios_principalesCreateWithoutCuentas_gmail_asociadasInput, usuarios_principalesUncheckedCreateWithoutCuentas_gmail_asociadasInput>
  }

  export type events_sincronizadosCreateWithoutCuentas_gmail_asociadasInput = {
    id?: string
    google_event_id: string
    summary?: string | null
    location?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    attendees?: events_sincronizadosCreateattendeesInput | string[]
    fecha_sincronizado?: Date | string | null
  }

  export type events_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput = {
    id?: string
    google_event_id: string
    summary?: string | null
    location?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    attendees?: events_sincronizadosCreateattendeesInput | string[]
    fecha_sincronizado?: Date | string | null
  }

  export type events_sincronizadosCreateOrConnectWithoutCuentas_gmail_asociadasInput = {
    where: events_sincronizadosWhereUniqueInput
    create: XOR<events_sincronizadosCreateWithoutCuentas_gmail_asociadasInput, events_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput>
  }

  export type events_sincronizadosCreateManyCuentas_gmail_asociadasInputEnvelope = {
    data: events_sincronizadosCreateManyCuentas_gmail_asociadasInput | events_sincronizadosCreateManyCuentas_gmail_asociadasInput[]
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
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sesiones_jwt?: sesiones_jwtUpdateManyWithoutUsuarios_principalesNestedInput
  }

  export type usuarios_principalesUncheckedUpdateWithoutCuentas_gmail_asociadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sesiones_jwt?: sesiones_jwtUncheckedUpdateManyWithoutUsuarios_principalesNestedInput
  }

  export type events_sincronizadosUpsertWithWhereUniqueWithoutCuentas_gmail_asociadasInput = {
    where: events_sincronizadosWhereUniqueInput
    update: XOR<events_sincronizadosUpdateWithoutCuentas_gmail_asociadasInput, events_sincronizadosUncheckedUpdateWithoutCuentas_gmail_asociadasInput>
    create: XOR<events_sincronizadosCreateWithoutCuentas_gmail_asociadasInput, events_sincronizadosUncheckedCreateWithoutCuentas_gmail_asociadasInput>
  }

  export type events_sincronizadosUpdateWithWhereUniqueWithoutCuentas_gmail_asociadasInput = {
    where: events_sincronizadosWhereUniqueInput
    data: XOR<events_sincronizadosUpdateWithoutCuentas_gmail_asociadasInput, events_sincronizadosUncheckedUpdateWithoutCuentas_gmail_asociadasInput>
  }

  export type events_sincronizadosUpdateManyWithWhereWithoutCuentas_gmail_asociadasInput = {
    where: events_sincronizadosScalarWhereInput
    data: XOR<events_sincronizadosUpdateManyMutationInput, events_sincronizadosUncheckedUpdateManyWithoutCuentas_gmail_asociadasInput>
  }

  export type events_sincronizadosScalarWhereInput = {
    AND?: events_sincronizadosScalarWhereInput | events_sincronizadosScalarWhereInput[]
    OR?: events_sincronizadosScalarWhereInput[]
    NOT?: events_sincronizadosScalarWhereInput | events_sincronizadosScalarWhereInput[]
    id?: UuidFilter<"events_sincronizados"> | string
    cuenta_gmail_id?: UuidNullableFilter<"events_sincronizados"> | string | null
    google_event_id?: StringFilter<"events_sincronizados"> | string
    summary?: StringNullableFilter<"events_sincronizados"> | string | null
    location?: StringNullableFilter<"events_sincronizados"> | string | null
    description?: StringNullableFilter<"events_sincronizados"> | string | null
    start_time?: DateTimeNullableFilter<"events_sincronizados"> | Date | string | null
    end_time?: DateTimeNullableFilter<"events_sincronizados"> | Date | string | null
    attendees?: StringNullableListFilter<"events_sincronizados">
    fecha_sincronizado?: DateTimeNullableFilter<"events_sincronizados"> | Date | string | null
  }

  export type cuentas_gmail_asociadasCreateWithoutEvents_sincronizadosInput = {
    id?: string
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    consecutive_zero_syncs?: number | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
    usuarios_principales?: usuarios_principalesCreateNestedOneWithoutCuentas_gmail_asociadasInput
  }

  export type cuentas_gmail_asociadasUncheckedCreateWithoutEvents_sincronizadosInput = {
    id?: string
    usuario_principal_id?: string | null
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    consecutive_zero_syncs?: number | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
  }

  export type cuentas_gmail_asociadasCreateOrConnectWithoutEvents_sincronizadosInput = {
    where: cuentas_gmail_asociadasWhereUniqueInput
    create: XOR<cuentas_gmail_asociadasCreateWithoutEvents_sincronizadosInput, cuentas_gmail_asociadasUncheckedCreateWithoutEvents_sincronizadosInput>
  }

  export type cuentas_gmail_asociadasUpsertWithoutEvents_sincronizadosInput = {
    update: XOR<cuentas_gmail_asociadasUpdateWithoutEvents_sincronizadosInput, cuentas_gmail_asociadasUncheckedUpdateWithoutEvents_sincronizadosInput>
    create: XOR<cuentas_gmail_asociadasCreateWithoutEvents_sincronizadosInput, cuentas_gmail_asociadasUncheckedCreateWithoutEvents_sincronizadosInput>
    where?: cuentas_gmail_asociadasWhereInput
  }

  export type cuentas_gmail_asociadasUpdateToOneWithWhereWithoutEvents_sincronizadosInput = {
    where?: cuentas_gmail_asociadasWhereInput
    data: XOR<cuentas_gmail_asociadasUpdateWithoutEvents_sincronizadosInput, cuentas_gmail_asociadasUncheckedUpdateWithoutEvents_sincronizadosInput>
  }

  export type cuentas_gmail_asociadasUpdateWithoutEvents_sincronizadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios_principales?: usuarios_principalesUpdateOneWithoutCuentas_gmail_asociadasNestedInput
  }

  export type cuentas_gmail_asociadasUncheckedUpdateWithoutEvents_sincronizadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_principal_id?: NullableStringFieldUpdateOperationsInput | string | null
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarios_principalesCreateWithoutSesiones_jwtInput = {
    id?: string
    email: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasCreateNestedManyWithoutUsuarios_principalesInput
  }

  export type usuarios_principalesUncheckedCreateWithoutSesiones_jwtInput = {
    id?: string
    email: string
    nombre: string
    fecha_registro?: Date | string | null
    ultima_actualizacion?: Date | string | null
    estado?: string | null
    email_verificado?: boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUncheckedCreateNestedManyWithoutUsuarios_principalesInput
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
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUpdateManyWithoutUsuarios_principalesNestedInput
  }

  export type usuarios_principalesUncheckedUpdateWithoutSesiones_jwtInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    email_verificado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cuentas_gmail_asociadas?: cuentas_gmail_asociadasUncheckedUpdateManyWithoutUsuarios_principalesNestedInput
  }

  export type cuentas_gmail_asociadasCreateManyUsuarios_principalesInput = {
    id?: string
    email_gmail: string
    nombre_cuenta: string
    google_id: string
    access_token?: string | null
    refresh_token?: string | null
    token_expira_en?: Date | string | null
    fecha_conexion?: Date | string | null
    ultima_sincronizacion?: Date | string | null
    esta_activa?: boolean | null
    alias_personalizado?: string | null
    consecutive_zero_syncs?: number | null
    backfill_checkpoint_date?: Date | string | null
    backfill_page_token?: string | null
  }

  export type sesiones_jwtCreateManyUsuarios_principalesInput = {
    id?: string
    jwt_token: string
    expira_en: Date | string
    fecha_creacion?: Date | string | null
    esta_activa?: boolean | null
    ip_origen?: string | null
    user_agent?: string | null
  }

  export type cuentas_gmail_asociadasUpdateWithoutUsuarios_principalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
    events_sincronizados?: events_sincronizadosUpdateManyWithoutCuentas_gmail_asociadasNestedInput
  }

  export type cuentas_gmail_asociadasUncheckedUpdateWithoutUsuarios_principalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
    events_sincronizados?: events_sincronizadosUncheckedUpdateManyWithoutCuentas_gmail_asociadasNestedInput
  }

  export type cuentas_gmail_asociadasUncheckedUpdateManyWithoutUsuarios_principalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email_gmail?: StringFieldUpdateOperationsInput | string
    nombre_cuenta?: StringFieldUpdateOperationsInput | string
    google_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_sincronizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alias_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    consecutive_zero_syncs?: NullableIntFieldUpdateOperationsInput | number | null
    backfill_checkpoint_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backfill_page_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sesiones_jwtUpdateWithoutUsuarios_principalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    jwt_token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ip_origen?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sesiones_jwtUncheckedUpdateWithoutUsuarios_principalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    jwt_token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ip_origen?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sesiones_jwtUncheckedUpdateManyWithoutUsuarios_principalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    jwt_token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esta_activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ip_origen?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type events_sincronizadosCreateManyCuentas_gmail_asociadasInput = {
    id?: string
    google_event_id: string
    summary?: string | null
    location?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    attendees?: events_sincronizadosCreateattendeesInput | string[]
    fecha_sincronizado?: Date | string | null
  }

  export type events_sincronizadosUpdateWithoutCuentas_gmail_asociadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_event_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendees?: events_sincronizadosUpdateattendeesInput | string[]
    fecha_sincronizado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type events_sincronizadosUncheckedUpdateWithoutCuentas_gmail_asociadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_event_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendees?: events_sincronizadosUpdateattendeesInput | string[]
    fecha_sincronizado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type events_sincronizadosUncheckedUpdateManyWithoutCuentas_gmail_asociadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_event_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendees?: events_sincronizadosUpdateattendeesInput | string[]
    fecha_sincronizado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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