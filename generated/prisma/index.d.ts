
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
 * Model MediaNFT
 * 
 */
export type MediaNFT = $Result.DefaultSelection<Prisma.$MediaNFTPayload>
/**
 * Model MediaAccessLog
 * 
 */
export type MediaAccessLog = $Result.DefaultSelection<Prisma.$MediaAccessLogPayload>
/**
 * Model MediaTransfer
 * 
 */
export type MediaTransfer = $Result.DefaultSelection<Prisma.$MediaTransferPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FileType: {
  IMAGE: 'IMAGE',
  AUDIO: 'AUDIO',
  VIDEO: 'VIDEO'
};

export type FileType = (typeof FileType)[keyof typeof FileType]

}

export type FileType = $Enums.FileType

export const FileType: typeof $Enums.FileType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MediaNFTS
 * const mediaNFTS = await prisma.mediaNFT.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more MediaNFTS
   * const mediaNFTS = await prisma.mediaNFT.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.mediaNFT`: Exposes CRUD operations for the **MediaNFT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaNFTS
    * const mediaNFTS = await prisma.mediaNFT.findMany()
    * ```
    */
  get mediaNFT(): Prisma.MediaNFTDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaAccessLog`: Exposes CRUD operations for the **MediaAccessLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaAccessLogs
    * const mediaAccessLogs = await prisma.mediaAccessLog.findMany()
    * ```
    */
  get mediaAccessLog(): Prisma.MediaAccessLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaTransfer`: Exposes CRUD operations for the **MediaTransfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaTransfers
    * const mediaTransfers = await prisma.mediaTransfer.findMany()
    * ```
    */
  get mediaTransfer(): Prisma.MediaTransferDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
    MediaNFT: 'MediaNFT',
    MediaAccessLog: 'MediaAccessLog',
    MediaTransfer: 'MediaTransfer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "mediaNFT" | "mediaAccessLog" | "mediaTransfer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MediaNFT: {
        payload: Prisma.$MediaNFTPayload<ExtArgs>
        fields: Prisma.MediaNFTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaNFTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaNFTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaNFTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaNFTPayload>
          }
          findFirst: {
            args: Prisma.MediaNFTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaNFTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaNFTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaNFTPayload>
          }
          findMany: {
            args: Prisma.MediaNFTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaNFTPayload>[]
          }
          create: {
            args: Prisma.MediaNFTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaNFTPayload>
          }
          createMany: {
            args: Prisma.MediaNFTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaNFTCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaNFTPayload>[]
          }
          delete: {
            args: Prisma.MediaNFTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaNFTPayload>
          }
          update: {
            args: Prisma.MediaNFTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaNFTPayload>
          }
          deleteMany: {
            args: Prisma.MediaNFTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaNFTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaNFTUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaNFTPayload>[]
          }
          upsert: {
            args: Prisma.MediaNFTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaNFTPayload>
          }
          aggregate: {
            args: Prisma.MediaNFTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaNFT>
          }
          groupBy: {
            args: Prisma.MediaNFTGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaNFTGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaNFTCountArgs<ExtArgs>
            result: $Utils.Optional<MediaNFTCountAggregateOutputType> | number
          }
        }
      }
      MediaAccessLog: {
        payload: Prisma.$MediaAccessLogPayload<ExtArgs>
        fields: Prisma.MediaAccessLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaAccessLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAccessLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaAccessLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAccessLogPayload>
          }
          findFirst: {
            args: Prisma.MediaAccessLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAccessLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaAccessLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAccessLogPayload>
          }
          findMany: {
            args: Prisma.MediaAccessLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAccessLogPayload>[]
          }
          create: {
            args: Prisma.MediaAccessLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAccessLogPayload>
          }
          createMany: {
            args: Prisma.MediaAccessLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaAccessLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAccessLogPayload>[]
          }
          delete: {
            args: Prisma.MediaAccessLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAccessLogPayload>
          }
          update: {
            args: Prisma.MediaAccessLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAccessLogPayload>
          }
          deleteMany: {
            args: Prisma.MediaAccessLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaAccessLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaAccessLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAccessLogPayload>[]
          }
          upsert: {
            args: Prisma.MediaAccessLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAccessLogPayload>
          }
          aggregate: {
            args: Prisma.MediaAccessLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaAccessLog>
          }
          groupBy: {
            args: Prisma.MediaAccessLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaAccessLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaAccessLogCountArgs<ExtArgs>
            result: $Utils.Optional<MediaAccessLogCountAggregateOutputType> | number
          }
        }
      }
      MediaTransfer: {
        payload: Prisma.$MediaTransferPayload<ExtArgs>
        fields: Prisma.MediaTransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaTransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaTransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTransferPayload>
          }
          findFirst: {
            args: Prisma.MediaTransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaTransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTransferPayload>
          }
          findMany: {
            args: Prisma.MediaTransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTransferPayload>[]
          }
          create: {
            args: Prisma.MediaTransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTransferPayload>
          }
          createMany: {
            args: Prisma.MediaTransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaTransferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTransferPayload>[]
          }
          delete: {
            args: Prisma.MediaTransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTransferPayload>
          }
          update: {
            args: Prisma.MediaTransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTransferPayload>
          }
          deleteMany: {
            args: Prisma.MediaTransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaTransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaTransferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTransferPayload>[]
          }
          upsert: {
            args: Prisma.MediaTransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTransferPayload>
          }
          aggregate: {
            args: Prisma.MediaTransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaTransfer>
          }
          groupBy: {
            args: Prisma.MediaTransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaTransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaTransferCountArgs<ExtArgs>
            result: $Utils.Optional<MediaTransferCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    mediaNFT?: MediaNFTOmit
    mediaAccessLog?: MediaAccessLogOmit
    mediaTransfer?: MediaTransferOmit
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type MediaNFTCountOutputType
   */

  export type MediaNFTCountOutputType = {
    accessLogs: number
    transfers: number
  }

  export type MediaNFTCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessLogs?: boolean | MediaNFTCountOutputTypeCountAccessLogsArgs
    transfers?: boolean | MediaNFTCountOutputTypeCountTransfersArgs
  }

  // Custom InputTypes
  /**
   * MediaNFTCountOutputType without action
   */
  export type MediaNFTCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaNFTCountOutputType
     */
    select?: MediaNFTCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaNFTCountOutputType without action
   */
  export type MediaNFTCountOutputTypeCountAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaAccessLogWhereInput
  }

  /**
   * MediaNFTCountOutputType without action
   */
  export type MediaNFTCountOutputTypeCountTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaTransferWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MediaNFT
   */

  export type AggregateMediaNFT = {
    _count: MediaNFTCountAggregateOutputType | null
    _avg: MediaNFTAvgAggregateOutputType | null
    _sum: MediaNFTSumAggregateOutputType | null
    _min: MediaNFTMinAggregateOutputType | null
    _max: MediaNFTMaxAggregateOutputType | null
  }

  export type MediaNFTAvgAggregateOutputType = {
    tokenId: number | null
    royaltyFee: number | null
    fileSize: number | null
  }

  export type MediaNFTSumAggregateOutputType = {
    tokenId: number | null
    royaltyFee: bigint | null
    fileSize: bigint | null
  }

  export type MediaNFTMinAggregateOutputType = {
    id: string | null
    tokenId: number | null
    creatorAddress: string | null
    ownerAddress: string | null
    title: string | null
    description: string | null
    cid: string | null
    royaltyFee: bigint | null
    category: string | null
    fileType: $Enums.FileType | null
    fileSize: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaNFTMaxAggregateOutputType = {
    id: string | null
    tokenId: number | null
    creatorAddress: string | null
    ownerAddress: string | null
    title: string | null
    description: string | null
    cid: string | null
    royaltyFee: bigint | null
    category: string | null
    fileType: $Enums.FileType | null
    fileSize: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaNFTCountAggregateOutputType = {
    id: number
    tokenId: number
    creatorAddress: number
    ownerAddress: number
    title: number
    description: number
    cid: number
    royaltyFee: number
    category: number
    tags: number
    fileType: number
    fileSize: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MediaNFTAvgAggregateInputType = {
    tokenId?: true
    royaltyFee?: true
    fileSize?: true
  }

  export type MediaNFTSumAggregateInputType = {
    tokenId?: true
    royaltyFee?: true
    fileSize?: true
  }

  export type MediaNFTMinAggregateInputType = {
    id?: true
    tokenId?: true
    creatorAddress?: true
    ownerAddress?: true
    title?: true
    description?: true
    cid?: true
    royaltyFee?: true
    category?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaNFTMaxAggregateInputType = {
    id?: true
    tokenId?: true
    creatorAddress?: true
    ownerAddress?: true
    title?: true
    description?: true
    cid?: true
    royaltyFee?: true
    category?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaNFTCountAggregateInputType = {
    id?: true
    tokenId?: true
    creatorAddress?: true
    ownerAddress?: true
    title?: true
    description?: true
    cid?: true
    royaltyFee?: true
    category?: true
    tags?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MediaNFTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaNFT to aggregate.
     */
    where?: MediaNFTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaNFTS to fetch.
     */
    orderBy?: MediaNFTOrderByWithRelationInput | MediaNFTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaNFTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaNFTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaNFTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaNFTS
    **/
    _count?: true | MediaNFTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaNFTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaNFTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaNFTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaNFTMaxAggregateInputType
  }

  export type GetMediaNFTAggregateType<T extends MediaNFTAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaNFT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaNFT[P]>
      : GetScalarType<T[P], AggregateMediaNFT[P]>
  }




  export type MediaNFTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaNFTWhereInput
    orderBy?: MediaNFTOrderByWithAggregationInput | MediaNFTOrderByWithAggregationInput[]
    by: MediaNFTScalarFieldEnum[] | MediaNFTScalarFieldEnum
    having?: MediaNFTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaNFTCountAggregateInputType | true
    _avg?: MediaNFTAvgAggregateInputType
    _sum?: MediaNFTSumAggregateInputType
    _min?: MediaNFTMinAggregateInputType
    _max?: MediaNFTMaxAggregateInputType
  }

  export type MediaNFTGroupByOutputType = {
    id: string
    tokenId: number
    creatorAddress: string
    ownerAddress: string
    title: string
    description: string | null
    cid: string
    royaltyFee: bigint
    category: string | null
    tags: string[]
    fileType: $Enums.FileType | null
    fileSize: bigint | null
    createdAt: Date
    updatedAt: Date
    _count: MediaNFTCountAggregateOutputType | null
    _avg: MediaNFTAvgAggregateOutputType | null
    _sum: MediaNFTSumAggregateOutputType | null
    _min: MediaNFTMinAggregateOutputType | null
    _max: MediaNFTMaxAggregateOutputType | null
  }

  type GetMediaNFTGroupByPayload<T extends MediaNFTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaNFTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaNFTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaNFTGroupByOutputType[P]>
            : GetScalarType<T[P], MediaNFTGroupByOutputType[P]>
        }
      >
    >


  export type MediaNFTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    creatorAddress?: boolean
    ownerAddress?: boolean
    title?: boolean
    description?: boolean
    cid?: boolean
    royaltyFee?: boolean
    category?: boolean
    tags?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessLogs?: boolean | MediaNFT$accessLogsArgs<ExtArgs>
    transfers?: boolean | MediaNFT$transfersArgs<ExtArgs>
    _count?: boolean | MediaNFTCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaNFT"]>

  export type MediaNFTSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    creatorAddress?: boolean
    ownerAddress?: boolean
    title?: boolean
    description?: boolean
    cid?: boolean
    royaltyFee?: boolean
    category?: boolean
    tags?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mediaNFT"]>

  export type MediaNFTSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    creatorAddress?: boolean
    ownerAddress?: boolean
    title?: boolean
    description?: boolean
    cid?: boolean
    royaltyFee?: boolean
    category?: boolean
    tags?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mediaNFT"]>

  export type MediaNFTSelectScalar = {
    id?: boolean
    tokenId?: boolean
    creatorAddress?: boolean
    ownerAddress?: boolean
    title?: boolean
    description?: boolean
    cid?: boolean
    royaltyFee?: boolean
    category?: boolean
    tags?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MediaNFTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenId" | "creatorAddress" | "ownerAddress" | "title" | "description" | "cid" | "royaltyFee" | "category" | "tags" | "fileType" | "fileSize" | "createdAt" | "updatedAt", ExtArgs["result"]["mediaNFT"]>
  export type MediaNFTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessLogs?: boolean | MediaNFT$accessLogsArgs<ExtArgs>
    transfers?: boolean | MediaNFT$transfersArgs<ExtArgs>
    _count?: boolean | MediaNFTCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MediaNFTIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MediaNFTIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MediaNFTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaNFT"
    objects: {
      accessLogs: Prisma.$MediaAccessLogPayload<ExtArgs>[]
      transfers: Prisma.$MediaTransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenId: number
      creatorAddress: string
      ownerAddress: string
      title: string
      description: string | null
      cid: string
      royaltyFee: bigint
      category: string | null
      tags: string[]
      fileType: $Enums.FileType | null
      fileSize: bigint | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mediaNFT"]>
    composites: {}
  }

  type MediaNFTGetPayload<S extends boolean | null | undefined | MediaNFTDefaultArgs> = $Result.GetResult<Prisma.$MediaNFTPayload, S>

  type MediaNFTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaNFTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaNFTCountAggregateInputType | true
    }

  export interface MediaNFTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaNFT'], meta: { name: 'MediaNFT' } }
    /**
     * Find zero or one MediaNFT that matches the filter.
     * @param {MediaNFTFindUniqueArgs} args - Arguments to find a MediaNFT
     * @example
     * // Get one MediaNFT
     * const mediaNFT = await prisma.mediaNFT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaNFTFindUniqueArgs>(args: SelectSubset<T, MediaNFTFindUniqueArgs<ExtArgs>>): Prisma__MediaNFTClient<$Result.GetResult<Prisma.$MediaNFTPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MediaNFT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaNFTFindUniqueOrThrowArgs} args - Arguments to find a MediaNFT
     * @example
     * // Get one MediaNFT
     * const mediaNFT = await prisma.mediaNFT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaNFTFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaNFTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaNFTClient<$Result.GetResult<Prisma.$MediaNFTPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MediaNFT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaNFTFindFirstArgs} args - Arguments to find a MediaNFT
     * @example
     * // Get one MediaNFT
     * const mediaNFT = await prisma.mediaNFT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaNFTFindFirstArgs>(args?: SelectSubset<T, MediaNFTFindFirstArgs<ExtArgs>>): Prisma__MediaNFTClient<$Result.GetResult<Prisma.$MediaNFTPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MediaNFT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaNFTFindFirstOrThrowArgs} args - Arguments to find a MediaNFT
     * @example
     * // Get one MediaNFT
     * const mediaNFT = await prisma.mediaNFT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaNFTFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaNFTFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaNFTClient<$Result.GetResult<Prisma.$MediaNFTPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MediaNFTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaNFTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaNFTS
     * const mediaNFTS = await prisma.mediaNFT.findMany()
     * 
     * // Get first 10 MediaNFTS
     * const mediaNFTS = await prisma.mediaNFT.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaNFTWithIdOnly = await prisma.mediaNFT.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaNFTFindManyArgs>(args?: SelectSubset<T, MediaNFTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaNFTPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MediaNFT.
     * @param {MediaNFTCreateArgs} args - Arguments to create a MediaNFT.
     * @example
     * // Create one MediaNFT
     * const MediaNFT = await prisma.mediaNFT.create({
     *   data: {
     *     // ... data to create a MediaNFT
     *   }
     * })
     * 
     */
    create<T extends MediaNFTCreateArgs>(args: SelectSubset<T, MediaNFTCreateArgs<ExtArgs>>): Prisma__MediaNFTClient<$Result.GetResult<Prisma.$MediaNFTPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MediaNFTS.
     * @param {MediaNFTCreateManyArgs} args - Arguments to create many MediaNFTS.
     * @example
     * // Create many MediaNFTS
     * const mediaNFT = await prisma.mediaNFT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaNFTCreateManyArgs>(args?: SelectSubset<T, MediaNFTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaNFTS and returns the data saved in the database.
     * @param {MediaNFTCreateManyAndReturnArgs} args - Arguments to create many MediaNFTS.
     * @example
     * // Create many MediaNFTS
     * const mediaNFT = await prisma.mediaNFT.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaNFTS and only return the `id`
     * const mediaNFTWithIdOnly = await prisma.mediaNFT.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaNFTCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaNFTCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaNFTPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a MediaNFT.
     * @param {MediaNFTDeleteArgs} args - Arguments to delete one MediaNFT.
     * @example
     * // Delete one MediaNFT
     * const MediaNFT = await prisma.mediaNFT.delete({
     *   where: {
     *     // ... filter to delete one MediaNFT
     *   }
     * })
     * 
     */
    delete<T extends MediaNFTDeleteArgs>(args: SelectSubset<T, MediaNFTDeleteArgs<ExtArgs>>): Prisma__MediaNFTClient<$Result.GetResult<Prisma.$MediaNFTPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MediaNFT.
     * @param {MediaNFTUpdateArgs} args - Arguments to update one MediaNFT.
     * @example
     * // Update one MediaNFT
     * const mediaNFT = await prisma.mediaNFT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaNFTUpdateArgs>(args: SelectSubset<T, MediaNFTUpdateArgs<ExtArgs>>): Prisma__MediaNFTClient<$Result.GetResult<Prisma.$MediaNFTPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MediaNFTS.
     * @param {MediaNFTDeleteManyArgs} args - Arguments to filter MediaNFTS to delete.
     * @example
     * // Delete a few MediaNFTS
     * const { count } = await prisma.mediaNFT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaNFTDeleteManyArgs>(args?: SelectSubset<T, MediaNFTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaNFTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaNFTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaNFTS
     * const mediaNFT = await prisma.mediaNFT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaNFTUpdateManyArgs>(args: SelectSubset<T, MediaNFTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaNFTS and returns the data updated in the database.
     * @param {MediaNFTUpdateManyAndReturnArgs} args - Arguments to update many MediaNFTS.
     * @example
     * // Update many MediaNFTS
     * const mediaNFT = await prisma.mediaNFT.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaNFTS and only return the `id`
     * const mediaNFTWithIdOnly = await prisma.mediaNFT.updateManyAndReturn({
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
    updateManyAndReturn<T extends MediaNFTUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaNFTUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaNFTPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one MediaNFT.
     * @param {MediaNFTUpsertArgs} args - Arguments to update or create a MediaNFT.
     * @example
     * // Update or create a MediaNFT
     * const mediaNFT = await prisma.mediaNFT.upsert({
     *   create: {
     *     // ... data to create a MediaNFT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaNFT we want to update
     *   }
     * })
     */
    upsert<T extends MediaNFTUpsertArgs>(args: SelectSubset<T, MediaNFTUpsertArgs<ExtArgs>>): Prisma__MediaNFTClient<$Result.GetResult<Prisma.$MediaNFTPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MediaNFTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaNFTCountArgs} args - Arguments to filter MediaNFTS to count.
     * @example
     * // Count the number of MediaNFTS
     * const count = await prisma.mediaNFT.count({
     *   where: {
     *     // ... the filter for the MediaNFTS we want to count
     *   }
     * })
    **/
    count<T extends MediaNFTCountArgs>(
      args?: Subset<T, MediaNFTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaNFTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaNFT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaNFTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaNFTAggregateArgs>(args: Subset<T, MediaNFTAggregateArgs>): Prisma.PrismaPromise<GetMediaNFTAggregateType<T>>

    /**
     * Group by MediaNFT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaNFTGroupByArgs} args - Group by arguments.
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
      T extends MediaNFTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaNFTGroupByArgs['orderBy'] }
        : { orderBy?: MediaNFTGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaNFTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaNFTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaNFT model
   */
  readonly fields: MediaNFTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaNFT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaNFTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accessLogs<T extends MediaNFT$accessLogsArgs<ExtArgs> = {}>(args?: Subset<T, MediaNFT$accessLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAccessLogPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    transfers<T extends MediaNFT$transfersArgs<ExtArgs> = {}>(args?: Subset<T, MediaNFT$transfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaTransferPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the MediaNFT model
   */ 
  interface MediaNFTFieldRefs {
    readonly id: FieldRef<"MediaNFT", 'String'>
    readonly tokenId: FieldRef<"MediaNFT", 'Int'>
    readonly creatorAddress: FieldRef<"MediaNFT", 'String'>
    readonly ownerAddress: FieldRef<"MediaNFT", 'String'>
    readonly title: FieldRef<"MediaNFT", 'String'>
    readonly description: FieldRef<"MediaNFT", 'String'>
    readonly cid: FieldRef<"MediaNFT", 'String'>
    readonly royaltyFee: FieldRef<"MediaNFT", 'BigInt'>
    readonly category: FieldRef<"MediaNFT", 'String'>
    readonly tags: FieldRef<"MediaNFT", 'String[]'>
    readonly fileType: FieldRef<"MediaNFT", 'FileType'>
    readonly fileSize: FieldRef<"MediaNFT", 'BigInt'>
    readonly createdAt: FieldRef<"MediaNFT", 'DateTime'>
    readonly updatedAt: FieldRef<"MediaNFT", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediaNFT findUnique
   */
  export type MediaNFTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaNFT
     */
    select?: MediaNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaNFT
     */
    omit?: MediaNFTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaNFTInclude<ExtArgs> | null
    /**
     * Filter, which MediaNFT to fetch.
     */
    where: MediaNFTWhereUniqueInput
  }

  /**
   * MediaNFT findUniqueOrThrow
   */
  export type MediaNFTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaNFT
     */
    select?: MediaNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaNFT
     */
    omit?: MediaNFTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaNFTInclude<ExtArgs> | null
    /**
     * Filter, which MediaNFT to fetch.
     */
    where: MediaNFTWhereUniqueInput
  }

  /**
   * MediaNFT findFirst
   */
  export type MediaNFTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaNFT
     */
    select?: MediaNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaNFT
     */
    omit?: MediaNFTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaNFTInclude<ExtArgs> | null
    /**
     * Filter, which MediaNFT to fetch.
     */
    where?: MediaNFTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaNFTS to fetch.
     */
    orderBy?: MediaNFTOrderByWithRelationInput | MediaNFTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaNFTS.
     */
    cursor?: MediaNFTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaNFTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaNFTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaNFTS.
     */
    distinct?: MediaNFTScalarFieldEnum | MediaNFTScalarFieldEnum[]
  }

  /**
   * MediaNFT findFirstOrThrow
   */
  export type MediaNFTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaNFT
     */
    select?: MediaNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaNFT
     */
    omit?: MediaNFTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaNFTInclude<ExtArgs> | null
    /**
     * Filter, which MediaNFT to fetch.
     */
    where?: MediaNFTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaNFTS to fetch.
     */
    orderBy?: MediaNFTOrderByWithRelationInput | MediaNFTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaNFTS.
     */
    cursor?: MediaNFTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaNFTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaNFTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaNFTS.
     */
    distinct?: MediaNFTScalarFieldEnum | MediaNFTScalarFieldEnum[]
  }

  /**
   * MediaNFT findMany
   */
  export type MediaNFTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaNFT
     */
    select?: MediaNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaNFT
     */
    omit?: MediaNFTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaNFTInclude<ExtArgs> | null
    /**
     * Filter, which MediaNFTS to fetch.
     */
    where?: MediaNFTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaNFTS to fetch.
     */
    orderBy?: MediaNFTOrderByWithRelationInput | MediaNFTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaNFTS.
     */
    cursor?: MediaNFTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaNFTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaNFTS.
     */
    skip?: number
    distinct?: MediaNFTScalarFieldEnum | MediaNFTScalarFieldEnum[]
  }

  /**
   * MediaNFT create
   */
  export type MediaNFTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaNFT
     */
    select?: MediaNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaNFT
     */
    omit?: MediaNFTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaNFTInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaNFT.
     */
    data: XOR<MediaNFTCreateInput, MediaNFTUncheckedCreateInput>
  }

  /**
   * MediaNFT createMany
   */
  export type MediaNFTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaNFTS.
     */
    data: MediaNFTCreateManyInput | MediaNFTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaNFT createManyAndReturn
   */
  export type MediaNFTCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaNFT
     */
    select?: MediaNFTSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaNFT
     */
    omit?: MediaNFTOmit<ExtArgs> | null
    /**
     * The data used to create many MediaNFTS.
     */
    data: MediaNFTCreateManyInput | MediaNFTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaNFT update
   */
  export type MediaNFTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaNFT
     */
    select?: MediaNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaNFT
     */
    omit?: MediaNFTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaNFTInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaNFT.
     */
    data: XOR<MediaNFTUpdateInput, MediaNFTUncheckedUpdateInput>
    /**
     * Choose, which MediaNFT to update.
     */
    where: MediaNFTWhereUniqueInput
  }

  /**
   * MediaNFT updateMany
   */
  export type MediaNFTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaNFTS.
     */
    data: XOR<MediaNFTUpdateManyMutationInput, MediaNFTUncheckedUpdateManyInput>
    /**
     * Filter which MediaNFTS to update
     */
    where?: MediaNFTWhereInput
    /**
     * Limit how many MediaNFTS to update.
     */
    limit?: number
  }

  /**
   * MediaNFT updateManyAndReturn
   */
  export type MediaNFTUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaNFT
     */
    select?: MediaNFTSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaNFT
     */
    omit?: MediaNFTOmit<ExtArgs> | null
    /**
     * The data used to update MediaNFTS.
     */
    data: XOR<MediaNFTUpdateManyMutationInput, MediaNFTUncheckedUpdateManyInput>
    /**
     * Filter which MediaNFTS to update
     */
    where?: MediaNFTWhereInput
    /**
     * Limit how many MediaNFTS to update.
     */
    limit?: number
  }

  /**
   * MediaNFT upsert
   */
  export type MediaNFTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaNFT
     */
    select?: MediaNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaNFT
     */
    omit?: MediaNFTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaNFTInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaNFT to update in case it exists.
     */
    where: MediaNFTWhereUniqueInput
    /**
     * In case the MediaNFT found by the `where` argument doesn't exist, create a new MediaNFT with this data.
     */
    create: XOR<MediaNFTCreateInput, MediaNFTUncheckedCreateInput>
    /**
     * In case the MediaNFT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaNFTUpdateInput, MediaNFTUncheckedUpdateInput>
  }

  /**
   * MediaNFT delete
   */
  export type MediaNFTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaNFT
     */
    select?: MediaNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaNFT
     */
    omit?: MediaNFTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaNFTInclude<ExtArgs> | null
    /**
     * Filter which MediaNFT to delete.
     */
    where: MediaNFTWhereUniqueInput
  }

  /**
   * MediaNFT deleteMany
   */
  export type MediaNFTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaNFTS to delete
     */
    where?: MediaNFTWhereInput
    /**
     * Limit how many MediaNFTS to delete.
     */
    limit?: number
  }

  /**
   * MediaNFT.accessLogs
   */
  export type MediaNFT$accessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAccessLog
     */
    select?: MediaAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAccessLog
     */
    omit?: MediaAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAccessLogInclude<ExtArgs> | null
    where?: MediaAccessLogWhereInput
    orderBy?: MediaAccessLogOrderByWithRelationInput | MediaAccessLogOrderByWithRelationInput[]
    cursor?: MediaAccessLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaAccessLogScalarFieldEnum | MediaAccessLogScalarFieldEnum[]
  }

  /**
   * MediaNFT.transfers
   */
  export type MediaNFT$transfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTransfer
     */
    select?: MediaTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaTransfer
     */
    omit?: MediaTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTransferInclude<ExtArgs> | null
    where?: MediaTransferWhereInput
    orderBy?: MediaTransferOrderByWithRelationInput | MediaTransferOrderByWithRelationInput[]
    cursor?: MediaTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaTransferScalarFieldEnum | MediaTransferScalarFieldEnum[]
  }

  /**
   * MediaNFT without action
   */
  export type MediaNFTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaNFT
     */
    select?: MediaNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaNFT
     */
    omit?: MediaNFTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaNFTInclude<ExtArgs> | null
  }


  /**
   * Model MediaAccessLog
   */

  export type AggregateMediaAccessLog = {
    _count: MediaAccessLogCountAggregateOutputType | null
    _avg: MediaAccessLogAvgAggregateOutputType | null
    _sum: MediaAccessLogSumAggregateOutputType | null
    _min: MediaAccessLogMinAggregateOutputType | null
    _max: MediaAccessLogMaxAggregateOutputType | null
  }

  export type MediaAccessLogAvgAggregateOutputType = {
    tokenId: number | null
    amountPaid: number | null
  }

  export type MediaAccessLogSumAggregateOutputType = {
    tokenId: number | null
    amountPaid: bigint | null
  }

  export type MediaAccessLogMinAggregateOutputType = {
    id: string | null
    tokenId: number | null
    buyerAddress: string | null
    amountPaid: bigint | null
    transactionHash: string | null
    accessedAt: Date | null
  }

  export type MediaAccessLogMaxAggregateOutputType = {
    id: string | null
    tokenId: number | null
    buyerAddress: string | null
    amountPaid: bigint | null
    transactionHash: string | null
    accessedAt: Date | null
  }

  export type MediaAccessLogCountAggregateOutputType = {
    id: number
    tokenId: number
    buyerAddress: number
    amountPaid: number
    transactionHash: number
    accessedAt: number
    _all: number
  }


  export type MediaAccessLogAvgAggregateInputType = {
    tokenId?: true
    amountPaid?: true
  }

  export type MediaAccessLogSumAggregateInputType = {
    tokenId?: true
    amountPaid?: true
  }

  export type MediaAccessLogMinAggregateInputType = {
    id?: true
    tokenId?: true
    buyerAddress?: true
    amountPaid?: true
    transactionHash?: true
    accessedAt?: true
  }

  export type MediaAccessLogMaxAggregateInputType = {
    id?: true
    tokenId?: true
    buyerAddress?: true
    amountPaid?: true
    transactionHash?: true
    accessedAt?: true
  }

  export type MediaAccessLogCountAggregateInputType = {
    id?: true
    tokenId?: true
    buyerAddress?: true
    amountPaid?: true
    transactionHash?: true
    accessedAt?: true
    _all?: true
  }

  export type MediaAccessLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaAccessLog to aggregate.
     */
    where?: MediaAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAccessLogs to fetch.
     */
    orderBy?: MediaAccessLogOrderByWithRelationInput | MediaAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaAccessLogs
    **/
    _count?: true | MediaAccessLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAccessLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaAccessLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaAccessLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaAccessLogMaxAggregateInputType
  }

  export type GetMediaAccessLogAggregateType<T extends MediaAccessLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaAccessLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaAccessLog[P]>
      : GetScalarType<T[P], AggregateMediaAccessLog[P]>
  }




  export type MediaAccessLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaAccessLogWhereInput
    orderBy?: MediaAccessLogOrderByWithAggregationInput | MediaAccessLogOrderByWithAggregationInput[]
    by: MediaAccessLogScalarFieldEnum[] | MediaAccessLogScalarFieldEnum
    having?: MediaAccessLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaAccessLogCountAggregateInputType | true
    _avg?: MediaAccessLogAvgAggregateInputType
    _sum?: MediaAccessLogSumAggregateInputType
    _min?: MediaAccessLogMinAggregateInputType
    _max?: MediaAccessLogMaxAggregateInputType
  }

  export type MediaAccessLogGroupByOutputType = {
    id: string
    tokenId: number
    buyerAddress: string
    amountPaid: bigint
    transactionHash: string | null
    accessedAt: Date
    _count: MediaAccessLogCountAggregateOutputType | null
    _avg: MediaAccessLogAvgAggregateOutputType | null
    _sum: MediaAccessLogSumAggregateOutputType | null
    _min: MediaAccessLogMinAggregateOutputType | null
    _max: MediaAccessLogMaxAggregateOutputType | null
  }

  type GetMediaAccessLogGroupByPayload<T extends MediaAccessLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaAccessLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaAccessLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaAccessLogGroupByOutputType[P]>
            : GetScalarType<T[P], MediaAccessLogGroupByOutputType[P]>
        }
      >
    >


  export type MediaAccessLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    buyerAddress?: boolean
    amountPaid?: boolean
    transactionHash?: boolean
    accessedAt?: boolean
    mediaNFT?: boolean | MediaNFTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaAccessLog"]>

  export type MediaAccessLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    buyerAddress?: boolean
    amountPaid?: boolean
    transactionHash?: boolean
    accessedAt?: boolean
    mediaNFT?: boolean | MediaNFTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaAccessLog"]>

  export type MediaAccessLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    buyerAddress?: boolean
    amountPaid?: boolean
    transactionHash?: boolean
    accessedAt?: boolean
    mediaNFT?: boolean | MediaNFTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaAccessLog"]>

  export type MediaAccessLogSelectScalar = {
    id?: boolean
    tokenId?: boolean
    buyerAddress?: boolean
    amountPaid?: boolean
    transactionHash?: boolean
    accessedAt?: boolean
  }

  export type MediaAccessLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenId" | "buyerAddress" | "amountPaid" | "transactionHash" | "accessedAt", ExtArgs["result"]["mediaAccessLog"]>
  export type MediaAccessLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaNFT?: boolean | MediaNFTDefaultArgs<ExtArgs>
  }
  export type MediaAccessLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaNFT?: boolean | MediaNFTDefaultArgs<ExtArgs>
  }
  export type MediaAccessLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaNFT?: boolean | MediaNFTDefaultArgs<ExtArgs>
  }

  export type $MediaAccessLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaAccessLog"
    objects: {
      mediaNFT: Prisma.$MediaNFTPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenId: number
      buyerAddress: string
      amountPaid: bigint
      transactionHash: string | null
      accessedAt: Date
    }, ExtArgs["result"]["mediaAccessLog"]>
    composites: {}
  }

  type MediaAccessLogGetPayload<S extends boolean | null | undefined | MediaAccessLogDefaultArgs> = $Result.GetResult<Prisma.$MediaAccessLogPayload, S>

  type MediaAccessLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaAccessLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaAccessLogCountAggregateInputType | true
    }

  export interface MediaAccessLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaAccessLog'], meta: { name: 'MediaAccessLog' } }
    /**
     * Find zero or one MediaAccessLog that matches the filter.
     * @param {MediaAccessLogFindUniqueArgs} args - Arguments to find a MediaAccessLog
     * @example
     * // Get one MediaAccessLog
     * const mediaAccessLog = await prisma.mediaAccessLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaAccessLogFindUniqueArgs>(args: SelectSubset<T, MediaAccessLogFindUniqueArgs<ExtArgs>>): Prisma__MediaAccessLogClient<$Result.GetResult<Prisma.$MediaAccessLogPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MediaAccessLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaAccessLogFindUniqueOrThrowArgs} args - Arguments to find a MediaAccessLog
     * @example
     * // Get one MediaAccessLog
     * const mediaAccessLog = await prisma.mediaAccessLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaAccessLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaAccessLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaAccessLogClient<$Result.GetResult<Prisma.$MediaAccessLogPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MediaAccessLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAccessLogFindFirstArgs} args - Arguments to find a MediaAccessLog
     * @example
     * // Get one MediaAccessLog
     * const mediaAccessLog = await prisma.mediaAccessLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaAccessLogFindFirstArgs>(args?: SelectSubset<T, MediaAccessLogFindFirstArgs<ExtArgs>>): Prisma__MediaAccessLogClient<$Result.GetResult<Prisma.$MediaAccessLogPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MediaAccessLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAccessLogFindFirstOrThrowArgs} args - Arguments to find a MediaAccessLog
     * @example
     * // Get one MediaAccessLog
     * const mediaAccessLog = await prisma.mediaAccessLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaAccessLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaAccessLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaAccessLogClient<$Result.GetResult<Prisma.$MediaAccessLogPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MediaAccessLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAccessLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaAccessLogs
     * const mediaAccessLogs = await prisma.mediaAccessLog.findMany()
     * 
     * // Get first 10 MediaAccessLogs
     * const mediaAccessLogs = await prisma.mediaAccessLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaAccessLogWithIdOnly = await prisma.mediaAccessLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaAccessLogFindManyArgs>(args?: SelectSubset<T, MediaAccessLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAccessLogPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MediaAccessLog.
     * @param {MediaAccessLogCreateArgs} args - Arguments to create a MediaAccessLog.
     * @example
     * // Create one MediaAccessLog
     * const MediaAccessLog = await prisma.mediaAccessLog.create({
     *   data: {
     *     // ... data to create a MediaAccessLog
     *   }
     * })
     * 
     */
    create<T extends MediaAccessLogCreateArgs>(args: SelectSubset<T, MediaAccessLogCreateArgs<ExtArgs>>): Prisma__MediaAccessLogClient<$Result.GetResult<Prisma.$MediaAccessLogPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MediaAccessLogs.
     * @param {MediaAccessLogCreateManyArgs} args - Arguments to create many MediaAccessLogs.
     * @example
     * // Create many MediaAccessLogs
     * const mediaAccessLog = await prisma.mediaAccessLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaAccessLogCreateManyArgs>(args?: SelectSubset<T, MediaAccessLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaAccessLogs and returns the data saved in the database.
     * @param {MediaAccessLogCreateManyAndReturnArgs} args - Arguments to create many MediaAccessLogs.
     * @example
     * // Create many MediaAccessLogs
     * const mediaAccessLog = await prisma.mediaAccessLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaAccessLogs and only return the `id`
     * const mediaAccessLogWithIdOnly = await prisma.mediaAccessLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaAccessLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaAccessLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAccessLogPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a MediaAccessLog.
     * @param {MediaAccessLogDeleteArgs} args - Arguments to delete one MediaAccessLog.
     * @example
     * // Delete one MediaAccessLog
     * const MediaAccessLog = await prisma.mediaAccessLog.delete({
     *   where: {
     *     // ... filter to delete one MediaAccessLog
     *   }
     * })
     * 
     */
    delete<T extends MediaAccessLogDeleteArgs>(args: SelectSubset<T, MediaAccessLogDeleteArgs<ExtArgs>>): Prisma__MediaAccessLogClient<$Result.GetResult<Prisma.$MediaAccessLogPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MediaAccessLog.
     * @param {MediaAccessLogUpdateArgs} args - Arguments to update one MediaAccessLog.
     * @example
     * // Update one MediaAccessLog
     * const mediaAccessLog = await prisma.mediaAccessLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaAccessLogUpdateArgs>(args: SelectSubset<T, MediaAccessLogUpdateArgs<ExtArgs>>): Prisma__MediaAccessLogClient<$Result.GetResult<Prisma.$MediaAccessLogPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MediaAccessLogs.
     * @param {MediaAccessLogDeleteManyArgs} args - Arguments to filter MediaAccessLogs to delete.
     * @example
     * // Delete a few MediaAccessLogs
     * const { count } = await prisma.mediaAccessLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaAccessLogDeleteManyArgs>(args?: SelectSubset<T, MediaAccessLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaAccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAccessLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaAccessLogs
     * const mediaAccessLog = await prisma.mediaAccessLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaAccessLogUpdateManyArgs>(args: SelectSubset<T, MediaAccessLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaAccessLogs and returns the data updated in the database.
     * @param {MediaAccessLogUpdateManyAndReturnArgs} args - Arguments to update many MediaAccessLogs.
     * @example
     * // Update many MediaAccessLogs
     * const mediaAccessLog = await prisma.mediaAccessLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaAccessLogs and only return the `id`
     * const mediaAccessLogWithIdOnly = await prisma.mediaAccessLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends MediaAccessLogUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaAccessLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAccessLogPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one MediaAccessLog.
     * @param {MediaAccessLogUpsertArgs} args - Arguments to update or create a MediaAccessLog.
     * @example
     * // Update or create a MediaAccessLog
     * const mediaAccessLog = await prisma.mediaAccessLog.upsert({
     *   create: {
     *     // ... data to create a MediaAccessLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaAccessLog we want to update
     *   }
     * })
     */
    upsert<T extends MediaAccessLogUpsertArgs>(args: SelectSubset<T, MediaAccessLogUpsertArgs<ExtArgs>>): Prisma__MediaAccessLogClient<$Result.GetResult<Prisma.$MediaAccessLogPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MediaAccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAccessLogCountArgs} args - Arguments to filter MediaAccessLogs to count.
     * @example
     * // Count the number of MediaAccessLogs
     * const count = await prisma.mediaAccessLog.count({
     *   where: {
     *     // ... the filter for the MediaAccessLogs we want to count
     *   }
     * })
    **/
    count<T extends MediaAccessLogCountArgs>(
      args?: Subset<T, MediaAccessLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaAccessLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaAccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAccessLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaAccessLogAggregateArgs>(args: Subset<T, MediaAccessLogAggregateArgs>): Prisma.PrismaPromise<GetMediaAccessLogAggregateType<T>>

    /**
     * Group by MediaAccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAccessLogGroupByArgs} args - Group by arguments.
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
      T extends MediaAccessLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaAccessLogGroupByArgs['orderBy'] }
        : { orderBy?: MediaAccessLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaAccessLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaAccessLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaAccessLog model
   */
  readonly fields: MediaAccessLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaAccessLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaAccessLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mediaNFT<T extends MediaNFTDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaNFTDefaultArgs<ExtArgs>>): Prisma__MediaNFTClient<$Result.GetResult<Prisma.$MediaNFTPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the MediaAccessLog model
   */ 
  interface MediaAccessLogFieldRefs {
    readonly id: FieldRef<"MediaAccessLog", 'String'>
    readonly tokenId: FieldRef<"MediaAccessLog", 'Int'>
    readonly buyerAddress: FieldRef<"MediaAccessLog", 'String'>
    readonly amountPaid: FieldRef<"MediaAccessLog", 'BigInt'>
    readonly transactionHash: FieldRef<"MediaAccessLog", 'String'>
    readonly accessedAt: FieldRef<"MediaAccessLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediaAccessLog findUnique
   */
  export type MediaAccessLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAccessLog
     */
    select?: MediaAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAccessLog
     */
    omit?: MediaAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which MediaAccessLog to fetch.
     */
    where: MediaAccessLogWhereUniqueInput
  }

  /**
   * MediaAccessLog findUniqueOrThrow
   */
  export type MediaAccessLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAccessLog
     */
    select?: MediaAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAccessLog
     */
    omit?: MediaAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which MediaAccessLog to fetch.
     */
    where: MediaAccessLogWhereUniqueInput
  }

  /**
   * MediaAccessLog findFirst
   */
  export type MediaAccessLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAccessLog
     */
    select?: MediaAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAccessLog
     */
    omit?: MediaAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which MediaAccessLog to fetch.
     */
    where?: MediaAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAccessLogs to fetch.
     */
    orderBy?: MediaAccessLogOrderByWithRelationInput | MediaAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaAccessLogs.
     */
    cursor?: MediaAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaAccessLogs.
     */
    distinct?: MediaAccessLogScalarFieldEnum | MediaAccessLogScalarFieldEnum[]
  }

  /**
   * MediaAccessLog findFirstOrThrow
   */
  export type MediaAccessLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAccessLog
     */
    select?: MediaAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAccessLog
     */
    omit?: MediaAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which MediaAccessLog to fetch.
     */
    where?: MediaAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAccessLogs to fetch.
     */
    orderBy?: MediaAccessLogOrderByWithRelationInput | MediaAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaAccessLogs.
     */
    cursor?: MediaAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaAccessLogs.
     */
    distinct?: MediaAccessLogScalarFieldEnum | MediaAccessLogScalarFieldEnum[]
  }

  /**
   * MediaAccessLog findMany
   */
  export type MediaAccessLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAccessLog
     */
    select?: MediaAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAccessLog
     */
    omit?: MediaAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which MediaAccessLogs to fetch.
     */
    where?: MediaAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAccessLogs to fetch.
     */
    orderBy?: MediaAccessLogOrderByWithRelationInput | MediaAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaAccessLogs.
     */
    cursor?: MediaAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAccessLogs.
     */
    skip?: number
    distinct?: MediaAccessLogScalarFieldEnum | MediaAccessLogScalarFieldEnum[]
  }

  /**
   * MediaAccessLog create
   */
  export type MediaAccessLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAccessLog
     */
    select?: MediaAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAccessLog
     */
    omit?: MediaAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAccessLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaAccessLog.
     */
    data: XOR<MediaAccessLogCreateInput, MediaAccessLogUncheckedCreateInput>
  }

  /**
   * MediaAccessLog createMany
   */
  export type MediaAccessLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaAccessLogs.
     */
    data: MediaAccessLogCreateManyInput | MediaAccessLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaAccessLog createManyAndReturn
   */
  export type MediaAccessLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAccessLog
     */
    select?: MediaAccessLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAccessLog
     */
    omit?: MediaAccessLogOmit<ExtArgs> | null
    /**
     * The data used to create many MediaAccessLogs.
     */
    data: MediaAccessLogCreateManyInput | MediaAccessLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAccessLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaAccessLog update
   */
  export type MediaAccessLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAccessLog
     */
    select?: MediaAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAccessLog
     */
    omit?: MediaAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAccessLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaAccessLog.
     */
    data: XOR<MediaAccessLogUpdateInput, MediaAccessLogUncheckedUpdateInput>
    /**
     * Choose, which MediaAccessLog to update.
     */
    where: MediaAccessLogWhereUniqueInput
  }

  /**
   * MediaAccessLog updateMany
   */
  export type MediaAccessLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaAccessLogs.
     */
    data: XOR<MediaAccessLogUpdateManyMutationInput, MediaAccessLogUncheckedUpdateManyInput>
    /**
     * Filter which MediaAccessLogs to update
     */
    where?: MediaAccessLogWhereInput
    /**
     * Limit how many MediaAccessLogs to update.
     */
    limit?: number
  }

  /**
   * MediaAccessLog updateManyAndReturn
   */
  export type MediaAccessLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAccessLog
     */
    select?: MediaAccessLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAccessLog
     */
    omit?: MediaAccessLogOmit<ExtArgs> | null
    /**
     * The data used to update MediaAccessLogs.
     */
    data: XOR<MediaAccessLogUpdateManyMutationInput, MediaAccessLogUncheckedUpdateManyInput>
    /**
     * Filter which MediaAccessLogs to update
     */
    where?: MediaAccessLogWhereInput
    /**
     * Limit how many MediaAccessLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAccessLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaAccessLog upsert
   */
  export type MediaAccessLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAccessLog
     */
    select?: MediaAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAccessLog
     */
    omit?: MediaAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAccessLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaAccessLog to update in case it exists.
     */
    where: MediaAccessLogWhereUniqueInput
    /**
     * In case the MediaAccessLog found by the `where` argument doesn't exist, create a new MediaAccessLog with this data.
     */
    create: XOR<MediaAccessLogCreateInput, MediaAccessLogUncheckedCreateInput>
    /**
     * In case the MediaAccessLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaAccessLogUpdateInput, MediaAccessLogUncheckedUpdateInput>
  }

  /**
   * MediaAccessLog delete
   */
  export type MediaAccessLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAccessLog
     */
    select?: MediaAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAccessLog
     */
    omit?: MediaAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAccessLogInclude<ExtArgs> | null
    /**
     * Filter which MediaAccessLog to delete.
     */
    where: MediaAccessLogWhereUniqueInput
  }

  /**
   * MediaAccessLog deleteMany
   */
  export type MediaAccessLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaAccessLogs to delete
     */
    where?: MediaAccessLogWhereInput
    /**
     * Limit how many MediaAccessLogs to delete.
     */
    limit?: number
  }

  /**
   * MediaAccessLog without action
   */
  export type MediaAccessLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAccessLog
     */
    select?: MediaAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAccessLog
     */
    omit?: MediaAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAccessLogInclude<ExtArgs> | null
  }


  /**
   * Model MediaTransfer
   */

  export type AggregateMediaTransfer = {
    _count: MediaTransferCountAggregateOutputType | null
    _avg: MediaTransferAvgAggregateOutputType | null
    _sum: MediaTransferSumAggregateOutputType | null
    _min: MediaTransferMinAggregateOutputType | null
    _max: MediaTransferMaxAggregateOutputType | null
  }

  export type MediaTransferAvgAggregateOutputType = {
    tokenId: number | null
  }

  export type MediaTransferSumAggregateOutputType = {
    tokenId: number | null
  }

  export type MediaTransferMinAggregateOutputType = {
    id: string | null
    tokenId: number | null
    fromAddress: string | null
    toAddress: string | null
    transactionHash: string | null
    transferredAt: Date | null
  }

  export type MediaTransferMaxAggregateOutputType = {
    id: string | null
    tokenId: number | null
    fromAddress: string | null
    toAddress: string | null
    transactionHash: string | null
    transferredAt: Date | null
  }

  export type MediaTransferCountAggregateOutputType = {
    id: number
    tokenId: number
    fromAddress: number
    toAddress: number
    transactionHash: number
    transferredAt: number
    _all: number
  }


  export type MediaTransferAvgAggregateInputType = {
    tokenId?: true
  }

  export type MediaTransferSumAggregateInputType = {
    tokenId?: true
  }

  export type MediaTransferMinAggregateInputType = {
    id?: true
    tokenId?: true
    fromAddress?: true
    toAddress?: true
    transactionHash?: true
    transferredAt?: true
  }

  export type MediaTransferMaxAggregateInputType = {
    id?: true
    tokenId?: true
    fromAddress?: true
    toAddress?: true
    transactionHash?: true
    transferredAt?: true
  }

  export type MediaTransferCountAggregateInputType = {
    id?: true
    tokenId?: true
    fromAddress?: true
    toAddress?: true
    transactionHash?: true
    transferredAt?: true
    _all?: true
  }

  export type MediaTransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaTransfer to aggregate.
     */
    where?: MediaTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaTransfers to fetch.
     */
    orderBy?: MediaTransferOrderByWithRelationInput | MediaTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaTransfers
    **/
    _count?: true | MediaTransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaTransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaTransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaTransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaTransferMaxAggregateInputType
  }

  export type GetMediaTransferAggregateType<T extends MediaTransferAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaTransfer[P]>
      : GetScalarType<T[P], AggregateMediaTransfer[P]>
  }




  export type MediaTransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaTransferWhereInput
    orderBy?: MediaTransferOrderByWithAggregationInput | MediaTransferOrderByWithAggregationInput[]
    by: MediaTransferScalarFieldEnum[] | MediaTransferScalarFieldEnum
    having?: MediaTransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaTransferCountAggregateInputType | true
    _avg?: MediaTransferAvgAggregateInputType
    _sum?: MediaTransferSumAggregateInputType
    _min?: MediaTransferMinAggregateInputType
    _max?: MediaTransferMaxAggregateInputType
  }

  export type MediaTransferGroupByOutputType = {
    id: string
    tokenId: number
    fromAddress: string
    toAddress: string
    transactionHash: string | null
    transferredAt: Date
    _count: MediaTransferCountAggregateOutputType | null
    _avg: MediaTransferAvgAggregateOutputType | null
    _sum: MediaTransferSumAggregateOutputType | null
    _min: MediaTransferMinAggregateOutputType | null
    _max: MediaTransferMaxAggregateOutputType | null
  }

  type GetMediaTransferGroupByPayload<T extends MediaTransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaTransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaTransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaTransferGroupByOutputType[P]>
            : GetScalarType<T[P], MediaTransferGroupByOutputType[P]>
        }
      >
    >


  export type MediaTransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    fromAddress?: boolean
    toAddress?: boolean
    transactionHash?: boolean
    transferredAt?: boolean
    mediaNFT?: boolean | MediaNFTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaTransfer"]>

  export type MediaTransferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    fromAddress?: boolean
    toAddress?: boolean
    transactionHash?: boolean
    transferredAt?: boolean
    mediaNFT?: boolean | MediaNFTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaTransfer"]>

  export type MediaTransferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    fromAddress?: boolean
    toAddress?: boolean
    transactionHash?: boolean
    transferredAt?: boolean
    mediaNFT?: boolean | MediaNFTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaTransfer"]>

  export type MediaTransferSelectScalar = {
    id?: boolean
    tokenId?: boolean
    fromAddress?: boolean
    toAddress?: boolean
    transactionHash?: boolean
    transferredAt?: boolean
  }

  export type MediaTransferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenId" | "fromAddress" | "toAddress" | "transactionHash" | "transferredAt", ExtArgs["result"]["mediaTransfer"]>
  export type MediaTransferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaNFT?: boolean | MediaNFTDefaultArgs<ExtArgs>
  }
  export type MediaTransferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaNFT?: boolean | MediaNFTDefaultArgs<ExtArgs>
  }
  export type MediaTransferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaNFT?: boolean | MediaNFTDefaultArgs<ExtArgs>
  }

  export type $MediaTransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaTransfer"
    objects: {
      mediaNFT: Prisma.$MediaNFTPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenId: number
      fromAddress: string
      toAddress: string
      transactionHash: string | null
      transferredAt: Date
    }, ExtArgs["result"]["mediaTransfer"]>
    composites: {}
  }

  type MediaTransferGetPayload<S extends boolean | null | undefined | MediaTransferDefaultArgs> = $Result.GetResult<Prisma.$MediaTransferPayload, S>

  type MediaTransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaTransferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaTransferCountAggregateInputType | true
    }

  export interface MediaTransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaTransfer'], meta: { name: 'MediaTransfer' } }
    /**
     * Find zero or one MediaTransfer that matches the filter.
     * @param {MediaTransferFindUniqueArgs} args - Arguments to find a MediaTransfer
     * @example
     * // Get one MediaTransfer
     * const mediaTransfer = await prisma.mediaTransfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaTransferFindUniqueArgs>(args: SelectSubset<T, MediaTransferFindUniqueArgs<ExtArgs>>): Prisma__MediaTransferClient<$Result.GetResult<Prisma.$MediaTransferPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MediaTransfer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaTransferFindUniqueOrThrowArgs} args - Arguments to find a MediaTransfer
     * @example
     * // Get one MediaTransfer
     * const mediaTransfer = await prisma.mediaTransfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaTransferFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaTransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaTransferClient<$Result.GetResult<Prisma.$MediaTransferPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MediaTransfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTransferFindFirstArgs} args - Arguments to find a MediaTransfer
     * @example
     * // Get one MediaTransfer
     * const mediaTransfer = await prisma.mediaTransfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaTransferFindFirstArgs>(args?: SelectSubset<T, MediaTransferFindFirstArgs<ExtArgs>>): Prisma__MediaTransferClient<$Result.GetResult<Prisma.$MediaTransferPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MediaTransfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTransferFindFirstOrThrowArgs} args - Arguments to find a MediaTransfer
     * @example
     * // Get one MediaTransfer
     * const mediaTransfer = await prisma.mediaTransfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaTransferFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaTransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaTransferClient<$Result.GetResult<Prisma.$MediaTransferPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MediaTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaTransfers
     * const mediaTransfers = await prisma.mediaTransfer.findMany()
     * 
     * // Get first 10 MediaTransfers
     * const mediaTransfers = await prisma.mediaTransfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaTransferWithIdOnly = await prisma.mediaTransfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaTransferFindManyArgs>(args?: SelectSubset<T, MediaTransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaTransferPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MediaTransfer.
     * @param {MediaTransferCreateArgs} args - Arguments to create a MediaTransfer.
     * @example
     * // Create one MediaTransfer
     * const MediaTransfer = await prisma.mediaTransfer.create({
     *   data: {
     *     // ... data to create a MediaTransfer
     *   }
     * })
     * 
     */
    create<T extends MediaTransferCreateArgs>(args: SelectSubset<T, MediaTransferCreateArgs<ExtArgs>>): Prisma__MediaTransferClient<$Result.GetResult<Prisma.$MediaTransferPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MediaTransfers.
     * @param {MediaTransferCreateManyArgs} args - Arguments to create many MediaTransfers.
     * @example
     * // Create many MediaTransfers
     * const mediaTransfer = await prisma.mediaTransfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaTransferCreateManyArgs>(args?: SelectSubset<T, MediaTransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaTransfers and returns the data saved in the database.
     * @param {MediaTransferCreateManyAndReturnArgs} args - Arguments to create many MediaTransfers.
     * @example
     * // Create many MediaTransfers
     * const mediaTransfer = await prisma.mediaTransfer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaTransfers and only return the `id`
     * const mediaTransferWithIdOnly = await prisma.mediaTransfer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaTransferCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaTransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaTransferPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a MediaTransfer.
     * @param {MediaTransferDeleteArgs} args - Arguments to delete one MediaTransfer.
     * @example
     * // Delete one MediaTransfer
     * const MediaTransfer = await prisma.mediaTransfer.delete({
     *   where: {
     *     // ... filter to delete one MediaTransfer
     *   }
     * })
     * 
     */
    delete<T extends MediaTransferDeleteArgs>(args: SelectSubset<T, MediaTransferDeleteArgs<ExtArgs>>): Prisma__MediaTransferClient<$Result.GetResult<Prisma.$MediaTransferPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MediaTransfer.
     * @param {MediaTransferUpdateArgs} args - Arguments to update one MediaTransfer.
     * @example
     * // Update one MediaTransfer
     * const mediaTransfer = await prisma.mediaTransfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaTransferUpdateArgs>(args: SelectSubset<T, MediaTransferUpdateArgs<ExtArgs>>): Prisma__MediaTransferClient<$Result.GetResult<Prisma.$MediaTransferPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MediaTransfers.
     * @param {MediaTransferDeleteManyArgs} args - Arguments to filter MediaTransfers to delete.
     * @example
     * // Delete a few MediaTransfers
     * const { count } = await prisma.mediaTransfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaTransferDeleteManyArgs>(args?: SelectSubset<T, MediaTransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaTransfers
     * const mediaTransfer = await prisma.mediaTransfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaTransferUpdateManyArgs>(args: SelectSubset<T, MediaTransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaTransfers and returns the data updated in the database.
     * @param {MediaTransferUpdateManyAndReturnArgs} args - Arguments to update many MediaTransfers.
     * @example
     * // Update many MediaTransfers
     * const mediaTransfer = await prisma.mediaTransfer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaTransfers and only return the `id`
     * const mediaTransferWithIdOnly = await prisma.mediaTransfer.updateManyAndReturn({
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
    updateManyAndReturn<T extends MediaTransferUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaTransferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaTransferPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one MediaTransfer.
     * @param {MediaTransferUpsertArgs} args - Arguments to update or create a MediaTransfer.
     * @example
     * // Update or create a MediaTransfer
     * const mediaTransfer = await prisma.mediaTransfer.upsert({
     *   create: {
     *     // ... data to create a MediaTransfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaTransfer we want to update
     *   }
     * })
     */
    upsert<T extends MediaTransferUpsertArgs>(args: SelectSubset<T, MediaTransferUpsertArgs<ExtArgs>>): Prisma__MediaTransferClient<$Result.GetResult<Prisma.$MediaTransferPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MediaTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTransferCountArgs} args - Arguments to filter MediaTransfers to count.
     * @example
     * // Count the number of MediaTransfers
     * const count = await prisma.mediaTransfer.count({
     *   where: {
     *     // ... the filter for the MediaTransfers we want to count
     *   }
     * })
    **/
    count<T extends MediaTransferCountArgs>(
      args?: Subset<T, MediaTransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaTransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaTransferAggregateArgs>(args: Subset<T, MediaTransferAggregateArgs>): Prisma.PrismaPromise<GetMediaTransferAggregateType<T>>

    /**
     * Group by MediaTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTransferGroupByArgs} args - Group by arguments.
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
      T extends MediaTransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaTransferGroupByArgs['orderBy'] }
        : { orderBy?: MediaTransferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaTransfer model
   */
  readonly fields: MediaTransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaTransfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaTransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mediaNFT<T extends MediaNFTDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaNFTDefaultArgs<ExtArgs>>): Prisma__MediaNFTClient<$Result.GetResult<Prisma.$MediaNFTPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the MediaTransfer model
   */ 
  interface MediaTransferFieldRefs {
    readonly id: FieldRef<"MediaTransfer", 'String'>
    readonly tokenId: FieldRef<"MediaTransfer", 'Int'>
    readonly fromAddress: FieldRef<"MediaTransfer", 'String'>
    readonly toAddress: FieldRef<"MediaTransfer", 'String'>
    readonly transactionHash: FieldRef<"MediaTransfer", 'String'>
    readonly transferredAt: FieldRef<"MediaTransfer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediaTransfer findUnique
   */
  export type MediaTransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTransfer
     */
    select?: MediaTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaTransfer
     */
    omit?: MediaTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTransferInclude<ExtArgs> | null
    /**
     * Filter, which MediaTransfer to fetch.
     */
    where: MediaTransferWhereUniqueInput
  }

  /**
   * MediaTransfer findUniqueOrThrow
   */
  export type MediaTransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTransfer
     */
    select?: MediaTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaTransfer
     */
    omit?: MediaTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTransferInclude<ExtArgs> | null
    /**
     * Filter, which MediaTransfer to fetch.
     */
    where: MediaTransferWhereUniqueInput
  }

  /**
   * MediaTransfer findFirst
   */
  export type MediaTransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTransfer
     */
    select?: MediaTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaTransfer
     */
    omit?: MediaTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTransferInclude<ExtArgs> | null
    /**
     * Filter, which MediaTransfer to fetch.
     */
    where?: MediaTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaTransfers to fetch.
     */
    orderBy?: MediaTransferOrderByWithRelationInput | MediaTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaTransfers.
     */
    cursor?: MediaTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaTransfers.
     */
    distinct?: MediaTransferScalarFieldEnum | MediaTransferScalarFieldEnum[]
  }

  /**
   * MediaTransfer findFirstOrThrow
   */
  export type MediaTransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTransfer
     */
    select?: MediaTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaTransfer
     */
    omit?: MediaTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTransferInclude<ExtArgs> | null
    /**
     * Filter, which MediaTransfer to fetch.
     */
    where?: MediaTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaTransfers to fetch.
     */
    orderBy?: MediaTransferOrderByWithRelationInput | MediaTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaTransfers.
     */
    cursor?: MediaTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaTransfers.
     */
    distinct?: MediaTransferScalarFieldEnum | MediaTransferScalarFieldEnum[]
  }

  /**
   * MediaTransfer findMany
   */
  export type MediaTransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTransfer
     */
    select?: MediaTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaTransfer
     */
    omit?: MediaTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTransferInclude<ExtArgs> | null
    /**
     * Filter, which MediaTransfers to fetch.
     */
    where?: MediaTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaTransfers to fetch.
     */
    orderBy?: MediaTransferOrderByWithRelationInput | MediaTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaTransfers.
     */
    cursor?: MediaTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaTransfers.
     */
    skip?: number
    distinct?: MediaTransferScalarFieldEnum | MediaTransferScalarFieldEnum[]
  }

  /**
   * MediaTransfer create
   */
  export type MediaTransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTransfer
     */
    select?: MediaTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaTransfer
     */
    omit?: MediaTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTransferInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaTransfer.
     */
    data: XOR<MediaTransferCreateInput, MediaTransferUncheckedCreateInput>
  }

  /**
   * MediaTransfer createMany
   */
  export type MediaTransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaTransfers.
     */
    data: MediaTransferCreateManyInput | MediaTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaTransfer createManyAndReturn
   */
  export type MediaTransferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTransfer
     */
    select?: MediaTransferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaTransfer
     */
    omit?: MediaTransferOmit<ExtArgs> | null
    /**
     * The data used to create many MediaTransfers.
     */
    data: MediaTransferCreateManyInput | MediaTransferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTransferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaTransfer update
   */
  export type MediaTransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTransfer
     */
    select?: MediaTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaTransfer
     */
    omit?: MediaTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTransferInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaTransfer.
     */
    data: XOR<MediaTransferUpdateInput, MediaTransferUncheckedUpdateInput>
    /**
     * Choose, which MediaTransfer to update.
     */
    where: MediaTransferWhereUniqueInput
  }

  /**
   * MediaTransfer updateMany
   */
  export type MediaTransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaTransfers.
     */
    data: XOR<MediaTransferUpdateManyMutationInput, MediaTransferUncheckedUpdateManyInput>
    /**
     * Filter which MediaTransfers to update
     */
    where?: MediaTransferWhereInput
    /**
     * Limit how many MediaTransfers to update.
     */
    limit?: number
  }

  /**
   * MediaTransfer updateManyAndReturn
   */
  export type MediaTransferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTransfer
     */
    select?: MediaTransferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaTransfer
     */
    omit?: MediaTransferOmit<ExtArgs> | null
    /**
     * The data used to update MediaTransfers.
     */
    data: XOR<MediaTransferUpdateManyMutationInput, MediaTransferUncheckedUpdateManyInput>
    /**
     * Filter which MediaTransfers to update
     */
    where?: MediaTransferWhereInput
    /**
     * Limit how many MediaTransfers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTransferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaTransfer upsert
   */
  export type MediaTransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTransfer
     */
    select?: MediaTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaTransfer
     */
    omit?: MediaTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTransferInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaTransfer to update in case it exists.
     */
    where: MediaTransferWhereUniqueInput
    /**
     * In case the MediaTransfer found by the `where` argument doesn't exist, create a new MediaTransfer with this data.
     */
    create: XOR<MediaTransferCreateInput, MediaTransferUncheckedCreateInput>
    /**
     * In case the MediaTransfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaTransferUpdateInput, MediaTransferUncheckedUpdateInput>
  }

  /**
   * MediaTransfer delete
   */
  export type MediaTransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTransfer
     */
    select?: MediaTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaTransfer
     */
    omit?: MediaTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTransferInclude<ExtArgs> | null
    /**
     * Filter which MediaTransfer to delete.
     */
    where: MediaTransferWhereUniqueInput
  }

  /**
   * MediaTransfer deleteMany
   */
  export type MediaTransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaTransfers to delete
     */
    where?: MediaTransferWhereInput
    /**
     * Limit how many MediaTransfers to delete.
     */
    limit?: number
  }

  /**
   * MediaTransfer without action
   */
  export type MediaTransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTransfer
     */
    select?: MediaTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaTransfer
     */
    omit?: MediaTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTransferInclude<ExtArgs> | null
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


  export const MediaNFTScalarFieldEnum: {
    id: 'id',
    tokenId: 'tokenId',
    creatorAddress: 'creatorAddress',
    ownerAddress: 'ownerAddress',
    title: 'title',
    description: 'description',
    cid: 'cid',
    royaltyFee: 'royaltyFee',
    category: 'category',
    tags: 'tags',
    fileType: 'fileType',
    fileSize: 'fileSize',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MediaNFTScalarFieldEnum = (typeof MediaNFTScalarFieldEnum)[keyof typeof MediaNFTScalarFieldEnum]


  export const MediaAccessLogScalarFieldEnum: {
    id: 'id',
    tokenId: 'tokenId',
    buyerAddress: 'buyerAddress',
    amountPaid: 'amountPaid',
    transactionHash: 'transactionHash',
    accessedAt: 'accessedAt'
  };

  export type MediaAccessLogScalarFieldEnum = (typeof MediaAccessLogScalarFieldEnum)[keyof typeof MediaAccessLogScalarFieldEnum]


  export const MediaTransferScalarFieldEnum: {
    id: 'id',
    tokenId: 'tokenId',
    fromAddress: 'fromAddress',
    toAddress: 'toAddress',
    transactionHash: 'transactionHash',
    transferredAt: 'transferredAt'
  };

  export type MediaTransferScalarFieldEnum = (typeof MediaTransferScalarFieldEnum)[keyof typeof MediaTransferScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'FileType'
   */
  export type EnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType'>
    


  /**
   * Reference to a field of type 'FileType[]'
   */
  export type ListEnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type MediaNFTWhereInput = {
    AND?: MediaNFTWhereInput | MediaNFTWhereInput[]
    OR?: MediaNFTWhereInput[]
    NOT?: MediaNFTWhereInput | MediaNFTWhereInput[]
    id?: StringFilter<"MediaNFT"> | string
    tokenId?: IntFilter<"MediaNFT"> | number
    creatorAddress?: StringFilter<"MediaNFT"> | string
    ownerAddress?: StringFilter<"MediaNFT"> | string
    title?: StringFilter<"MediaNFT"> | string
    description?: StringNullableFilter<"MediaNFT"> | string | null
    cid?: StringFilter<"MediaNFT"> | string
    royaltyFee?: BigIntFilter<"MediaNFT"> | bigint | number
    category?: StringNullableFilter<"MediaNFT"> | string | null
    tags?: StringNullableListFilter<"MediaNFT">
    fileType?: EnumFileTypeNullableFilter<"MediaNFT"> | $Enums.FileType | null
    fileSize?: BigIntNullableFilter<"MediaNFT"> | bigint | number | null
    createdAt?: DateTimeFilter<"MediaNFT"> | Date | string
    updatedAt?: DateTimeFilter<"MediaNFT"> | Date | string
    accessLogs?: MediaAccessLogListRelationFilter
    transfers?: MediaTransferListRelationFilter
  }

  export type MediaNFTOrderByWithRelationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    creatorAddress?: SortOrder
    ownerAddress?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    cid?: SortOrder
    royaltyFee?: SortOrder
    category?: SortOrderInput | SortOrder
    tags?: SortOrder
    fileType?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessLogs?: MediaAccessLogOrderByRelationAggregateInput
    transfers?: MediaTransferOrderByRelationAggregateInput
  }

  export type MediaNFTWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenId?: number
    AND?: MediaNFTWhereInput | MediaNFTWhereInput[]
    OR?: MediaNFTWhereInput[]
    NOT?: MediaNFTWhereInput | MediaNFTWhereInput[]
    creatorAddress?: StringFilter<"MediaNFT"> | string
    ownerAddress?: StringFilter<"MediaNFT"> | string
    title?: StringFilter<"MediaNFT"> | string
    description?: StringNullableFilter<"MediaNFT"> | string | null
    cid?: StringFilter<"MediaNFT"> | string
    royaltyFee?: BigIntFilter<"MediaNFT"> | bigint | number
    category?: StringNullableFilter<"MediaNFT"> | string | null
    tags?: StringNullableListFilter<"MediaNFT">
    fileType?: EnumFileTypeNullableFilter<"MediaNFT"> | $Enums.FileType | null
    fileSize?: BigIntNullableFilter<"MediaNFT"> | bigint | number | null
    createdAt?: DateTimeFilter<"MediaNFT"> | Date | string
    updatedAt?: DateTimeFilter<"MediaNFT"> | Date | string
    accessLogs?: MediaAccessLogListRelationFilter
    transfers?: MediaTransferListRelationFilter
  }, "id" | "tokenId">

  export type MediaNFTOrderByWithAggregationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    creatorAddress?: SortOrder
    ownerAddress?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    cid?: SortOrder
    royaltyFee?: SortOrder
    category?: SortOrderInput | SortOrder
    tags?: SortOrder
    fileType?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MediaNFTCountOrderByAggregateInput
    _avg?: MediaNFTAvgOrderByAggregateInput
    _max?: MediaNFTMaxOrderByAggregateInput
    _min?: MediaNFTMinOrderByAggregateInput
    _sum?: MediaNFTSumOrderByAggregateInput
  }

  export type MediaNFTScalarWhereWithAggregatesInput = {
    AND?: MediaNFTScalarWhereWithAggregatesInput | MediaNFTScalarWhereWithAggregatesInput[]
    OR?: MediaNFTScalarWhereWithAggregatesInput[]
    NOT?: MediaNFTScalarWhereWithAggregatesInput | MediaNFTScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaNFT"> | string
    tokenId?: IntWithAggregatesFilter<"MediaNFT"> | number
    creatorAddress?: StringWithAggregatesFilter<"MediaNFT"> | string
    ownerAddress?: StringWithAggregatesFilter<"MediaNFT"> | string
    title?: StringWithAggregatesFilter<"MediaNFT"> | string
    description?: StringNullableWithAggregatesFilter<"MediaNFT"> | string | null
    cid?: StringWithAggregatesFilter<"MediaNFT"> | string
    royaltyFee?: BigIntWithAggregatesFilter<"MediaNFT"> | bigint | number
    category?: StringNullableWithAggregatesFilter<"MediaNFT"> | string | null
    tags?: StringNullableListFilter<"MediaNFT">
    fileType?: EnumFileTypeNullableWithAggregatesFilter<"MediaNFT"> | $Enums.FileType | null
    fileSize?: BigIntNullableWithAggregatesFilter<"MediaNFT"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MediaNFT"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MediaNFT"> | Date | string
  }

  export type MediaAccessLogWhereInput = {
    AND?: MediaAccessLogWhereInput | MediaAccessLogWhereInput[]
    OR?: MediaAccessLogWhereInput[]
    NOT?: MediaAccessLogWhereInput | MediaAccessLogWhereInput[]
    id?: StringFilter<"MediaAccessLog"> | string
    tokenId?: IntFilter<"MediaAccessLog"> | number
    buyerAddress?: StringFilter<"MediaAccessLog"> | string
    amountPaid?: BigIntFilter<"MediaAccessLog"> | bigint | number
    transactionHash?: StringNullableFilter<"MediaAccessLog"> | string | null
    accessedAt?: DateTimeFilter<"MediaAccessLog"> | Date | string
    mediaNFT?: XOR<MediaNFTScalarRelationFilter, MediaNFTWhereInput>
  }

  export type MediaAccessLogOrderByWithRelationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    buyerAddress?: SortOrder
    amountPaid?: SortOrder
    transactionHash?: SortOrderInput | SortOrder
    accessedAt?: SortOrder
    mediaNFT?: MediaNFTOrderByWithRelationInput
  }

  export type MediaAccessLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaAccessLogWhereInput | MediaAccessLogWhereInput[]
    OR?: MediaAccessLogWhereInput[]
    NOT?: MediaAccessLogWhereInput | MediaAccessLogWhereInput[]
    tokenId?: IntFilter<"MediaAccessLog"> | number
    buyerAddress?: StringFilter<"MediaAccessLog"> | string
    amountPaid?: BigIntFilter<"MediaAccessLog"> | bigint | number
    transactionHash?: StringNullableFilter<"MediaAccessLog"> | string | null
    accessedAt?: DateTimeFilter<"MediaAccessLog"> | Date | string
    mediaNFT?: XOR<MediaNFTScalarRelationFilter, MediaNFTWhereInput>
  }, "id">

  export type MediaAccessLogOrderByWithAggregationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    buyerAddress?: SortOrder
    amountPaid?: SortOrder
    transactionHash?: SortOrderInput | SortOrder
    accessedAt?: SortOrder
    _count?: MediaAccessLogCountOrderByAggregateInput
    _avg?: MediaAccessLogAvgOrderByAggregateInput
    _max?: MediaAccessLogMaxOrderByAggregateInput
    _min?: MediaAccessLogMinOrderByAggregateInput
    _sum?: MediaAccessLogSumOrderByAggregateInput
  }

  export type MediaAccessLogScalarWhereWithAggregatesInput = {
    AND?: MediaAccessLogScalarWhereWithAggregatesInput | MediaAccessLogScalarWhereWithAggregatesInput[]
    OR?: MediaAccessLogScalarWhereWithAggregatesInput[]
    NOT?: MediaAccessLogScalarWhereWithAggregatesInput | MediaAccessLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaAccessLog"> | string
    tokenId?: IntWithAggregatesFilter<"MediaAccessLog"> | number
    buyerAddress?: StringWithAggregatesFilter<"MediaAccessLog"> | string
    amountPaid?: BigIntWithAggregatesFilter<"MediaAccessLog"> | bigint | number
    transactionHash?: StringNullableWithAggregatesFilter<"MediaAccessLog"> | string | null
    accessedAt?: DateTimeWithAggregatesFilter<"MediaAccessLog"> | Date | string
  }

  export type MediaTransferWhereInput = {
    AND?: MediaTransferWhereInput | MediaTransferWhereInput[]
    OR?: MediaTransferWhereInput[]
    NOT?: MediaTransferWhereInput | MediaTransferWhereInput[]
    id?: StringFilter<"MediaTransfer"> | string
    tokenId?: IntFilter<"MediaTransfer"> | number
    fromAddress?: StringFilter<"MediaTransfer"> | string
    toAddress?: StringFilter<"MediaTransfer"> | string
    transactionHash?: StringNullableFilter<"MediaTransfer"> | string | null
    transferredAt?: DateTimeFilter<"MediaTransfer"> | Date | string
    mediaNFT?: XOR<MediaNFTScalarRelationFilter, MediaNFTWhereInput>
  }

  export type MediaTransferOrderByWithRelationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    fromAddress?: SortOrder
    toAddress?: SortOrder
    transactionHash?: SortOrderInput | SortOrder
    transferredAt?: SortOrder
    mediaNFT?: MediaNFTOrderByWithRelationInput
  }

  export type MediaTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaTransferWhereInput | MediaTransferWhereInput[]
    OR?: MediaTransferWhereInput[]
    NOT?: MediaTransferWhereInput | MediaTransferWhereInput[]
    tokenId?: IntFilter<"MediaTransfer"> | number
    fromAddress?: StringFilter<"MediaTransfer"> | string
    toAddress?: StringFilter<"MediaTransfer"> | string
    transactionHash?: StringNullableFilter<"MediaTransfer"> | string | null
    transferredAt?: DateTimeFilter<"MediaTransfer"> | Date | string
    mediaNFT?: XOR<MediaNFTScalarRelationFilter, MediaNFTWhereInput>
  }, "id">

  export type MediaTransferOrderByWithAggregationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    fromAddress?: SortOrder
    toAddress?: SortOrder
    transactionHash?: SortOrderInput | SortOrder
    transferredAt?: SortOrder
    _count?: MediaTransferCountOrderByAggregateInput
    _avg?: MediaTransferAvgOrderByAggregateInput
    _max?: MediaTransferMaxOrderByAggregateInput
    _min?: MediaTransferMinOrderByAggregateInput
    _sum?: MediaTransferSumOrderByAggregateInput
  }

  export type MediaTransferScalarWhereWithAggregatesInput = {
    AND?: MediaTransferScalarWhereWithAggregatesInput | MediaTransferScalarWhereWithAggregatesInput[]
    OR?: MediaTransferScalarWhereWithAggregatesInput[]
    NOT?: MediaTransferScalarWhereWithAggregatesInput | MediaTransferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaTransfer"> | string
    tokenId?: IntWithAggregatesFilter<"MediaTransfer"> | number
    fromAddress?: StringWithAggregatesFilter<"MediaTransfer"> | string
    toAddress?: StringWithAggregatesFilter<"MediaTransfer"> | string
    transactionHash?: StringNullableWithAggregatesFilter<"MediaTransfer"> | string | null
    transferredAt?: DateTimeWithAggregatesFilter<"MediaTransfer"> | Date | string
  }

  export type MediaNFTCreateInput = {
    id?: string
    tokenId: number
    creatorAddress: string
    ownerAddress: string
    title: string
    description?: string | null
    cid: string
    royaltyFee: bigint | number
    category?: string | null
    tags?: MediaNFTCreatetagsInput | string[]
    fileType?: $Enums.FileType | null
    fileSize?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessLogs?: MediaAccessLogCreateNestedManyWithoutMediaNFTInput
    transfers?: MediaTransferCreateNestedManyWithoutMediaNFTInput
  }

  export type MediaNFTUncheckedCreateInput = {
    id?: string
    tokenId: number
    creatorAddress: string
    ownerAddress: string
    title: string
    description?: string | null
    cid: string
    royaltyFee: bigint | number
    category?: string | null
    tags?: MediaNFTCreatetagsInput | string[]
    fileType?: $Enums.FileType | null
    fileSize?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessLogs?: MediaAccessLogUncheckedCreateNestedManyWithoutMediaNFTInput
    transfers?: MediaTransferUncheckedCreateNestedManyWithoutMediaNFTInput
  }

  export type MediaNFTUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    creatorAddress?: StringFieldUpdateOperationsInput | string
    ownerAddress?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: StringFieldUpdateOperationsInput | string
    royaltyFee?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: MediaNFTUpdatetagsInput | string[]
    fileType?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessLogs?: MediaAccessLogUpdateManyWithoutMediaNFTNestedInput
    transfers?: MediaTransferUpdateManyWithoutMediaNFTNestedInput
  }

  export type MediaNFTUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    creatorAddress?: StringFieldUpdateOperationsInput | string
    ownerAddress?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: StringFieldUpdateOperationsInput | string
    royaltyFee?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: MediaNFTUpdatetagsInput | string[]
    fileType?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessLogs?: MediaAccessLogUncheckedUpdateManyWithoutMediaNFTNestedInput
    transfers?: MediaTransferUncheckedUpdateManyWithoutMediaNFTNestedInput
  }

  export type MediaNFTCreateManyInput = {
    id?: string
    tokenId: number
    creatorAddress: string
    ownerAddress: string
    title: string
    description?: string | null
    cid: string
    royaltyFee: bigint | number
    category?: string | null
    tags?: MediaNFTCreatetagsInput | string[]
    fileType?: $Enums.FileType | null
    fileSize?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaNFTUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    creatorAddress?: StringFieldUpdateOperationsInput | string
    ownerAddress?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: StringFieldUpdateOperationsInput | string
    royaltyFee?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: MediaNFTUpdatetagsInput | string[]
    fileType?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaNFTUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    creatorAddress?: StringFieldUpdateOperationsInput | string
    ownerAddress?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: StringFieldUpdateOperationsInput | string
    royaltyFee?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: MediaNFTUpdatetagsInput | string[]
    fileType?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAccessLogCreateInput = {
    id?: string
    buyerAddress: string
    amountPaid: bigint | number
    transactionHash?: string | null
    accessedAt?: Date | string
    mediaNFT: MediaNFTCreateNestedOneWithoutAccessLogsInput
  }

  export type MediaAccessLogUncheckedCreateInput = {
    id?: string
    tokenId: number
    buyerAddress: string
    amountPaid: bigint | number
    transactionHash?: string | null
    accessedAt?: Date | string
  }

  export type MediaAccessLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerAddress?: StringFieldUpdateOperationsInput | string
    amountPaid?: BigIntFieldUpdateOperationsInput | bigint | number
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaNFT?: MediaNFTUpdateOneRequiredWithoutAccessLogsNestedInput
  }

  export type MediaAccessLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    buyerAddress?: StringFieldUpdateOperationsInput | string
    amountPaid?: BigIntFieldUpdateOperationsInput | bigint | number
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAccessLogCreateManyInput = {
    id?: string
    tokenId: number
    buyerAddress: string
    amountPaid: bigint | number
    transactionHash?: string | null
    accessedAt?: Date | string
  }

  export type MediaAccessLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerAddress?: StringFieldUpdateOperationsInput | string
    amountPaid?: BigIntFieldUpdateOperationsInput | bigint | number
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAccessLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    buyerAddress?: StringFieldUpdateOperationsInput | string
    amountPaid?: BigIntFieldUpdateOperationsInput | bigint | number
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaTransferCreateInput = {
    id?: string
    fromAddress: string
    toAddress: string
    transactionHash?: string | null
    transferredAt?: Date | string
    mediaNFT: MediaNFTCreateNestedOneWithoutTransfersInput
  }

  export type MediaTransferUncheckedCreateInput = {
    id?: string
    tokenId: number
    fromAddress: string
    toAddress: string
    transactionHash?: string | null
    transferredAt?: Date | string
  }

  export type MediaTransferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    transferredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaNFT?: MediaNFTUpdateOneRequiredWithoutTransfersNestedInput
  }

  export type MediaTransferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    transferredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaTransferCreateManyInput = {
    id?: string
    tokenId: number
    fromAddress: string
    toAddress: string
    transactionHash?: string | null
    transferredAt?: Date | string
  }

  export type MediaTransferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    transferredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaTransferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    transferredAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumFileTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFileTypeNullableFilter<$PrismaModel> | $Enums.FileType | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type MediaAccessLogListRelationFilter = {
    every?: MediaAccessLogWhereInput
    some?: MediaAccessLogWhereInput
    none?: MediaAccessLogWhereInput
  }

  export type MediaTransferListRelationFilter = {
    every?: MediaTransferWhereInput
    some?: MediaTransferWhereInput
    none?: MediaTransferWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MediaAccessLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaTransferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaNFTCountOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    creatorAddress?: SortOrder
    ownerAddress?: SortOrder
    title?: SortOrder
    description?: SortOrder
    cid?: SortOrder
    royaltyFee?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaNFTAvgOrderByAggregateInput = {
    tokenId?: SortOrder
    royaltyFee?: SortOrder
    fileSize?: SortOrder
  }

  export type MediaNFTMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    creatorAddress?: SortOrder
    ownerAddress?: SortOrder
    title?: SortOrder
    description?: SortOrder
    cid?: SortOrder
    royaltyFee?: SortOrder
    category?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaNFTMinOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    creatorAddress?: SortOrder
    ownerAddress?: SortOrder
    title?: SortOrder
    description?: SortOrder
    cid?: SortOrder
    royaltyFee?: SortOrder
    category?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaNFTSumOrderByAggregateInput = {
    tokenId?: SortOrder
    royaltyFee?: SortOrder
    fileSize?: SortOrder
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumFileTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFileTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.FileType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFileTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumFileTypeNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type MediaNFTScalarRelationFilter = {
    is?: MediaNFTWhereInput
    isNot?: MediaNFTWhereInput
  }

  export type MediaAccessLogCountOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    buyerAddress?: SortOrder
    amountPaid?: SortOrder
    transactionHash?: SortOrder
    accessedAt?: SortOrder
  }

  export type MediaAccessLogAvgOrderByAggregateInput = {
    tokenId?: SortOrder
    amountPaid?: SortOrder
  }

  export type MediaAccessLogMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    buyerAddress?: SortOrder
    amountPaid?: SortOrder
    transactionHash?: SortOrder
    accessedAt?: SortOrder
  }

  export type MediaAccessLogMinOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    buyerAddress?: SortOrder
    amountPaid?: SortOrder
    transactionHash?: SortOrder
    accessedAt?: SortOrder
  }

  export type MediaAccessLogSumOrderByAggregateInput = {
    tokenId?: SortOrder
    amountPaid?: SortOrder
  }

  export type MediaTransferCountOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    fromAddress?: SortOrder
    toAddress?: SortOrder
    transactionHash?: SortOrder
    transferredAt?: SortOrder
  }

  export type MediaTransferAvgOrderByAggregateInput = {
    tokenId?: SortOrder
  }

  export type MediaTransferMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    fromAddress?: SortOrder
    toAddress?: SortOrder
    transactionHash?: SortOrder
    transferredAt?: SortOrder
  }

  export type MediaTransferMinOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    fromAddress?: SortOrder
    toAddress?: SortOrder
    transactionHash?: SortOrder
    transferredAt?: SortOrder
  }

  export type MediaTransferSumOrderByAggregateInput = {
    tokenId?: SortOrder
  }

  export type MediaNFTCreatetagsInput = {
    set: string[]
  }

  export type MediaAccessLogCreateNestedManyWithoutMediaNFTInput = {
    create?: XOR<MediaAccessLogCreateWithoutMediaNFTInput, MediaAccessLogUncheckedCreateWithoutMediaNFTInput> | MediaAccessLogCreateWithoutMediaNFTInput[] | MediaAccessLogUncheckedCreateWithoutMediaNFTInput[]
    connectOrCreate?: MediaAccessLogCreateOrConnectWithoutMediaNFTInput | MediaAccessLogCreateOrConnectWithoutMediaNFTInput[]
    createMany?: MediaAccessLogCreateManyMediaNFTInputEnvelope
    connect?: MediaAccessLogWhereUniqueInput | MediaAccessLogWhereUniqueInput[]
  }

  export type MediaTransferCreateNestedManyWithoutMediaNFTInput = {
    create?: XOR<MediaTransferCreateWithoutMediaNFTInput, MediaTransferUncheckedCreateWithoutMediaNFTInput> | MediaTransferCreateWithoutMediaNFTInput[] | MediaTransferUncheckedCreateWithoutMediaNFTInput[]
    connectOrCreate?: MediaTransferCreateOrConnectWithoutMediaNFTInput | MediaTransferCreateOrConnectWithoutMediaNFTInput[]
    createMany?: MediaTransferCreateManyMediaNFTInputEnvelope
    connect?: MediaTransferWhereUniqueInput | MediaTransferWhereUniqueInput[]
  }

  export type MediaAccessLogUncheckedCreateNestedManyWithoutMediaNFTInput = {
    create?: XOR<MediaAccessLogCreateWithoutMediaNFTInput, MediaAccessLogUncheckedCreateWithoutMediaNFTInput> | MediaAccessLogCreateWithoutMediaNFTInput[] | MediaAccessLogUncheckedCreateWithoutMediaNFTInput[]
    connectOrCreate?: MediaAccessLogCreateOrConnectWithoutMediaNFTInput | MediaAccessLogCreateOrConnectWithoutMediaNFTInput[]
    createMany?: MediaAccessLogCreateManyMediaNFTInputEnvelope
    connect?: MediaAccessLogWhereUniqueInput | MediaAccessLogWhereUniqueInput[]
  }

  export type MediaTransferUncheckedCreateNestedManyWithoutMediaNFTInput = {
    create?: XOR<MediaTransferCreateWithoutMediaNFTInput, MediaTransferUncheckedCreateWithoutMediaNFTInput> | MediaTransferCreateWithoutMediaNFTInput[] | MediaTransferUncheckedCreateWithoutMediaNFTInput[]
    connectOrCreate?: MediaTransferCreateOrConnectWithoutMediaNFTInput | MediaTransferCreateOrConnectWithoutMediaNFTInput[]
    createMany?: MediaTransferCreateManyMediaNFTInputEnvelope
    connect?: MediaTransferWhereUniqueInput | MediaTransferWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type MediaNFTUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableEnumFileTypeFieldUpdateOperationsInput = {
    set?: $Enums.FileType | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MediaAccessLogUpdateManyWithoutMediaNFTNestedInput = {
    create?: XOR<MediaAccessLogCreateWithoutMediaNFTInput, MediaAccessLogUncheckedCreateWithoutMediaNFTInput> | MediaAccessLogCreateWithoutMediaNFTInput[] | MediaAccessLogUncheckedCreateWithoutMediaNFTInput[]
    connectOrCreate?: MediaAccessLogCreateOrConnectWithoutMediaNFTInput | MediaAccessLogCreateOrConnectWithoutMediaNFTInput[]
    upsert?: MediaAccessLogUpsertWithWhereUniqueWithoutMediaNFTInput | MediaAccessLogUpsertWithWhereUniqueWithoutMediaNFTInput[]
    createMany?: MediaAccessLogCreateManyMediaNFTInputEnvelope
    set?: MediaAccessLogWhereUniqueInput | MediaAccessLogWhereUniqueInput[]
    disconnect?: MediaAccessLogWhereUniqueInput | MediaAccessLogWhereUniqueInput[]
    delete?: MediaAccessLogWhereUniqueInput | MediaAccessLogWhereUniqueInput[]
    connect?: MediaAccessLogWhereUniqueInput | MediaAccessLogWhereUniqueInput[]
    update?: MediaAccessLogUpdateWithWhereUniqueWithoutMediaNFTInput | MediaAccessLogUpdateWithWhereUniqueWithoutMediaNFTInput[]
    updateMany?: MediaAccessLogUpdateManyWithWhereWithoutMediaNFTInput | MediaAccessLogUpdateManyWithWhereWithoutMediaNFTInput[]
    deleteMany?: MediaAccessLogScalarWhereInput | MediaAccessLogScalarWhereInput[]
  }

  export type MediaTransferUpdateManyWithoutMediaNFTNestedInput = {
    create?: XOR<MediaTransferCreateWithoutMediaNFTInput, MediaTransferUncheckedCreateWithoutMediaNFTInput> | MediaTransferCreateWithoutMediaNFTInput[] | MediaTransferUncheckedCreateWithoutMediaNFTInput[]
    connectOrCreate?: MediaTransferCreateOrConnectWithoutMediaNFTInput | MediaTransferCreateOrConnectWithoutMediaNFTInput[]
    upsert?: MediaTransferUpsertWithWhereUniqueWithoutMediaNFTInput | MediaTransferUpsertWithWhereUniqueWithoutMediaNFTInput[]
    createMany?: MediaTransferCreateManyMediaNFTInputEnvelope
    set?: MediaTransferWhereUniqueInput | MediaTransferWhereUniqueInput[]
    disconnect?: MediaTransferWhereUniqueInput | MediaTransferWhereUniqueInput[]
    delete?: MediaTransferWhereUniqueInput | MediaTransferWhereUniqueInput[]
    connect?: MediaTransferWhereUniqueInput | MediaTransferWhereUniqueInput[]
    update?: MediaTransferUpdateWithWhereUniqueWithoutMediaNFTInput | MediaTransferUpdateWithWhereUniqueWithoutMediaNFTInput[]
    updateMany?: MediaTransferUpdateManyWithWhereWithoutMediaNFTInput | MediaTransferUpdateManyWithWhereWithoutMediaNFTInput[]
    deleteMany?: MediaTransferScalarWhereInput | MediaTransferScalarWhereInput[]
  }

  export type MediaAccessLogUncheckedUpdateManyWithoutMediaNFTNestedInput = {
    create?: XOR<MediaAccessLogCreateWithoutMediaNFTInput, MediaAccessLogUncheckedCreateWithoutMediaNFTInput> | MediaAccessLogCreateWithoutMediaNFTInput[] | MediaAccessLogUncheckedCreateWithoutMediaNFTInput[]
    connectOrCreate?: MediaAccessLogCreateOrConnectWithoutMediaNFTInput | MediaAccessLogCreateOrConnectWithoutMediaNFTInput[]
    upsert?: MediaAccessLogUpsertWithWhereUniqueWithoutMediaNFTInput | MediaAccessLogUpsertWithWhereUniqueWithoutMediaNFTInput[]
    createMany?: MediaAccessLogCreateManyMediaNFTInputEnvelope
    set?: MediaAccessLogWhereUniqueInput | MediaAccessLogWhereUniqueInput[]
    disconnect?: MediaAccessLogWhereUniqueInput | MediaAccessLogWhereUniqueInput[]
    delete?: MediaAccessLogWhereUniqueInput | MediaAccessLogWhereUniqueInput[]
    connect?: MediaAccessLogWhereUniqueInput | MediaAccessLogWhereUniqueInput[]
    update?: MediaAccessLogUpdateWithWhereUniqueWithoutMediaNFTInput | MediaAccessLogUpdateWithWhereUniqueWithoutMediaNFTInput[]
    updateMany?: MediaAccessLogUpdateManyWithWhereWithoutMediaNFTInput | MediaAccessLogUpdateManyWithWhereWithoutMediaNFTInput[]
    deleteMany?: MediaAccessLogScalarWhereInput | MediaAccessLogScalarWhereInput[]
  }

  export type MediaTransferUncheckedUpdateManyWithoutMediaNFTNestedInput = {
    create?: XOR<MediaTransferCreateWithoutMediaNFTInput, MediaTransferUncheckedCreateWithoutMediaNFTInput> | MediaTransferCreateWithoutMediaNFTInput[] | MediaTransferUncheckedCreateWithoutMediaNFTInput[]
    connectOrCreate?: MediaTransferCreateOrConnectWithoutMediaNFTInput | MediaTransferCreateOrConnectWithoutMediaNFTInput[]
    upsert?: MediaTransferUpsertWithWhereUniqueWithoutMediaNFTInput | MediaTransferUpsertWithWhereUniqueWithoutMediaNFTInput[]
    createMany?: MediaTransferCreateManyMediaNFTInputEnvelope
    set?: MediaTransferWhereUniqueInput | MediaTransferWhereUniqueInput[]
    disconnect?: MediaTransferWhereUniqueInput | MediaTransferWhereUniqueInput[]
    delete?: MediaTransferWhereUniqueInput | MediaTransferWhereUniqueInput[]
    connect?: MediaTransferWhereUniqueInput | MediaTransferWhereUniqueInput[]
    update?: MediaTransferUpdateWithWhereUniqueWithoutMediaNFTInput | MediaTransferUpdateWithWhereUniqueWithoutMediaNFTInput[]
    updateMany?: MediaTransferUpdateManyWithWhereWithoutMediaNFTInput | MediaTransferUpdateManyWithWhereWithoutMediaNFTInput[]
    deleteMany?: MediaTransferScalarWhereInput | MediaTransferScalarWhereInput[]
  }

  export type MediaNFTCreateNestedOneWithoutAccessLogsInput = {
    create?: XOR<MediaNFTCreateWithoutAccessLogsInput, MediaNFTUncheckedCreateWithoutAccessLogsInput>
    connectOrCreate?: MediaNFTCreateOrConnectWithoutAccessLogsInput
    connect?: MediaNFTWhereUniqueInput
  }

  export type MediaNFTUpdateOneRequiredWithoutAccessLogsNestedInput = {
    create?: XOR<MediaNFTCreateWithoutAccessLogsInput, MediaNFTUncheckedCreateWithoutAccessLogsInput>
    connectOrCreate?: MediaNFTCreateOrConnectWithoutAccessLogsInput
    upsert?: MediaNFTUpsertWithoutAccessLogsInput
    connect?: MediaNFTWhereUniqueInput
    update?: XOR<XOR<MediaNFTUpdateToOneWithWhereWithoutAccessLogsInput, MediaNFTUpdateWithoutAccessLogsInput>, MediaNFTUncheckedUpdateWithoutAccessLogsInput>
  }

  export type MediaNFTCreateNestedOneWithoutTransfersInput = {
    create?: XOR<MediaNFTCreateWithoutTransfersInput, MediaNFTUncheckedCreateWithoutTransfersInput>
    connectOrCreate?: MediaNFTCreateOrConnectWithoutTransfersInput
    connect?: MediaNFTWhereUniqueInput
  }

  export type MediaNFTUpdateOneRequiredWithoutTransfersNestedInput = {
    create?: XOR<MediaNFTCreateWithoutTransfersInput, MediaNFTUncheckedCreateWithoutTransfersInput>
    connectOrCreate?: MediaNFTCreateOrConnectWithoutTransfersInput
    upsert?: MediaNFTUpsertWithoutTransfersInput
    connect?: MediaNFTWhereUniqueInput
    update?: XOR<XOR<MediaNFTUpdateToOneWithWhereWithoutTransfersInput, MediaNFTUpdateWithoutTransfersInput>, MediaNFTUncheckedUpdateWithoutTransfersInput>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumFileTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFileTypeNullableFilter<$PrismaModel> | $Enums.FileType | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumFileTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFileTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.FileType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFileTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumFileTypeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type MediaAccessLogCreateWithoutMediaNFTInput = {
    id?: string
    buyerAddress: string
    amountPaid: bigint | number
    transactionHash?: string | null
    accessedAt?: Date | string
  }

  export type MediaAccessLogUncheckedCreateWithoutMediaNFTInput = {
    id?: string
    buyerAddress: string
    amountPaid: bigint | number
    transactionHash?: string | null
    accessedAt?: Date | string
  }

  export type MediaAccessLogCreateOrConnectWithoutMediaNFTInput = {
    where: MediaAccessLogWhereUniqueInput
    create: XOR<MediaAccessLogCreateWithoutMediaNFTInput, MediaAccessLogUncheckedCreateWithoutMediaNFTInput>
  }

  export type MediaAccessLogCreateManyMediaNFTInputEnvelope = {
    data: MediaAccessLogCreateManyMediaNFTInput | MediaAccessLogCreateManyMediaNFTInput[]
    skipDuplicates?: boolean
  }

  export type MediaTransferCreateWithoutMediaNFTInput = {
    id?: string
    fromAddress: string
    toAddress: string
    transactionHash?: string | null
    transferredAt?: Date | string
  }

  export type MediaTransferUncheckedCreateWithoutMediaNFTInput = {
    id?: string
    fromAddress: string
    toAddress: string
    transactionHash?: string | null
    transferredAt?: Date | string
  }

  export type MediaTransferCreateOrConnectWithoutMediaNFTInput = {
    where: MediaTransferWhereUniqueInput
    create: XOR<MediaTransferCreateWithoutMediaNFTInput, MediaTransferUncheckedCreateWithoutMediaNFTInput>
  }

  export type MediaTransferCreateManyMediaNFTInputEnvelope = {
    data: MediaTransferCreateManyMediaNFTInput | MediaTransferCreateManyMediaNFTInput[]
    skipDuplicates?: boolean
  }

  export type MediaAccessLogUpsertWithWhereUniqueWithoutMediaNFTInput = {
    where: MediaAccessLogWhereUniqueInput
    update: XOR<MediaAccessLogUpdateWithoutMediaNFTInput, MediaAccessLogUncheckedUpdateWithoutMediaNFTInput>
    create: XOR<MediaAccessLogCreateWithoutMediaNFTInput, MediaAccessLogUncheckedCreateWithoutMediaNFTInput>
  }

  export type MediaAccessLogUpdateWithWhereUniqueWithoutMediaNFTInput = {
    where: MediaAccessLogWhereUniqueInput
    data: XOR<MediaAccessLogUpdateWithoutMediaNFTInput, MediaAccessLogUncheckedUpdateWithoutMediaNFTInput>
  }

  export type MediaAccessLogUpdateManyWithWhereWithoutMediaNFTInput = {
    where: MediaAccessLogScalarWhereInput
    data: XOR<MediaAccessLogUpdateManyMutationInput, MediaAccessLogUncheckedUpdateManyWithoutMediaNFTInput>
  }

  export type MediaAccessLogScalarWhereInput = {
    AND?: MediaAccessLogScalarWhereInput | MediaAccessLogScalarWhereInput[]
    OR?: MediaAccessLogScalarWhereInput[]
    NOT?: MediaAccessLogScalarWhereInput | MediaAccessLogScalarWhereInput[]
    id?: StringFilter<"MediaAccessLog"> | string
    tokenId?: IntFilter<"MediaAccessLog"> | number
    buyerAddress?: StringFilter<"MediaAccessLog"> | string
    amountPaid?: BigIntFilter<"MediaAccessLog"> | bigint | number
    transactionHash?: StringNullableFilter<"MediaAccessLog"> | string | null
    accessedAt?: DateTimeFilter<"MediaAccessLog"> | Date | string
  }

  export type MediaTransferUpsertWithWhereUniqueWithoutMediaNFTInput = {
    where: MediaTransferWhereUniqueInput
    update: XOR<MediaTransferUpdateWithoutMediaNFTInput, MediaTransferUncheckedUpdateWithoutMediaNFTInput>
    create: XOR<MediaTransferCreateWithoutMediaNFTInput, MediaTransferUncheckedCreateWithoutMediaNFTInput>
  }

  export type MediaTransferUpdateWithWhereUniqueWithoutMediaNFTInput = {
    where: MediaTransferWhereUniqueInput
    data: XOR<MediaTransferUpdateWithoutMediaNFTInput, MediaTransferUncheckedUpdateWithoutMediaNFTInput>
  }

  export type MediaTransferUpdateManyWithWhereWithoutMediaNFTInput = {
    where: MediaTransferScalarWhereInput
    data: XOR<MediaTransferUpdateManyMutationInput, MediaTransferUncheckedUpdateManyWithoutMediaNFTInput>
  }

  export type MediaTransferScalarWhereInput = {
    AND?: MediaTransferScalarWhereInput | MediaTransferScalarWhereInput[]
    OR?: MediaTransferScalarWhereInput[]
    NOT?: MediaTransferScalarWhereInput | MediaTransferScalarWhereInput[]
    id?: StringFilter<"MediaTransfer"> | string
    tokenId?: IntFilter<"MediaTransfer"> | number
    fromAddress?: StringFilter<"MediaTransfer"> | string
    toAddress?: StringFilter<"MediaTransfer"> | string
    transactionHash?: StringNullableFilter<"MediaTransfer"> | string | null
    transferredAt?: DateTimeFilter<"MediaTransfer"> | Date | string
  }

  export type MediaNFTCreateWithoutAccessLogsInput = {
    id?: string
    tokenId: number
    creatorAddress: string
    ownerAddress: string
    title: string
    description?: string | null
    cid: string
    royaltyFee: bigint | number
    category?: string | null
    tags?: MediaNFTCreatetagsInput | string[]
    fileType?: $Enums.FileType | null
    fileSize?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transfers?: MediaTransferCreateNestedManyWithoutMediaNFTInput
  }

  export type MediaNFTUncheckedCreateWithoutAccessLogsInput = {
    id?: string
    tokenId: number
    creatorAddress: string
    ownerAddress: string
    title: string
    description?: string | null
    cid: string
    royaltyFee: bigint | number
    category?: string | null
    tags?: MediaNFTCreatetagsInput | string[]
    fileType?: $Enums.FileType | null
    fileSize?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transfers?: MediaTransferUncheckedCreateNestedManyWithoutMediaNFTInput
  }

  export type MediaNFTCreateOrConnectWithoutAccessLogsInput = {
    where: MediaNFTWhereUniqueInput
    create: XOR<MediaNFTCreateWithoutAccessLogsInput, MediaNFTUncheckedCreateWithoutAccessLogsInput>
  }

  export type MediaNFTUpsertWithoutAccessLogsInput = {
    update: XOR<MediaNFTUpdateWithoutAccessLogsInput, MediaNFTUncheckedUpdateWithoutAccessLogsInput>
    create: XOR<MediaNFTCreateWithoutAccessLogsInput, MediaNFTUncheckedCreateWithoutAccessLogsInput>
    where?: MediaNFTWhereInput
  }

  export type MediaNFTUpdateToOneWithWhereWithoutAccessLogsInput = {
    where?: MediaNFTWhereInput
    data: XOR<MediaNFTUpdateWithoutAccessLogsInput, MediaNFTUncheckedUpdateWithoutAccessLogsInput>
  }

  export type MediaNFTUpdateWithoutAccessLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    creatorAddress?: StringFieldUpdateOperationsInput | string
    ownerAddress?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: StringFieldUpdateOperationsInput | string
    royaltyFee?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: MediaNFTUpdatetagsInput | string[]
    fileType?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transfers?: MediaTransferUpdateManyWithoutMediaNFTNestedInput
  }

  export type MediaNFTUncheckedUpdateWithoutAccessLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    creatorAddress?: StringFieldUpdateOperationsInput | string
    ownerAddress?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: StringFieldUpdateOperationsInput | string
    royaltyFee?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: MediaNFTUpdatetagsInput | string[]
    fileType?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transfers?: MediaTransferUncheckedUpdateManyWithoutMediaNFTNestedInput
  }

  export type MediaNFTCreateWithoutTransfersInput = {
    id?: string
    tokenId: number
    creatorAddress: string
    ownerAddress: string
    title: string
    description?: string | null
    cid: string
    royaltyFee: bigint | number
    category?: string | null
    tags?: MediaNFTCreatetagsInput | string[]
    fileType?: $Enums.FileType | null
    fileSize?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessLogs?: MediaAccessLogCreateNestedManyWithoutMediaNFTInput
  }

  export type MediaNFTUncheckedCreateWithoutTransfersInput = {
    id?: string
    tokenId: number
    creatorAddress: string
    ownerAddress: string
    title: string
    description?: string | null
    cid: string
    royaltyFee: bigint | number
    category?: string | null
    tags?: MediaNFTCreatetagsInput | string[]
    fileType?: $Enums.FileType | null
    fileSize?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessLogs?: MediaAccessLogUncheckedCreateNestedManyWithoutMediaNFTInput
  }

  export type MediaNFTCreateOrConnectWithoutTransfersInput = {
    where: MediaNFTWhereUniqueInput
    create: XOR<MediaNFTCreateWithoutTransfersInput, MediaNFTUncheckedCreateWithoutTransfersInput>
  }

  export type MediaNFTUpsertWithoutTransfersInput = {
    update: XOR<MediaNFTUpdateWithoutTransfersInput, MediaNFTUncheckedUpdateWithoutTransfersInput>
    create: XOR<MediaNFTCreateWithoutTransfersInput, MediaNFTUncheckedCreateWithoutTransfersInput>
    where?: MediaNFTWhereInput
  }

  export type MediaNFTUpdateToOneWithWhereWithoutTransfersInput = {
    where?: MediaNFTWhereInput
    data: XOR<MediaNFTUpdateWithoutTransfersInput, MediaNFTUncheckedUpdateWithoutTransfersInput>
  }

  export type MediaNFTUpdateWithoutTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    creatorAddress?: StringFieldUpdateOperationsInput | string
    ownerAddress?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: StringFieldUpdateOperationsInput | string
    royaltyFee?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: MediaNFTUpdatetagsInput | string[]
    fileType?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessLogs?: MediaAccessLogUpdateManyWithoutMediaNFTNestedInput
  }

  export type MediaNFTUncheckedUpdateWithoutTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    creatorAddress?: StringFieldUpdateOperationsInput | string
    ownerAddress?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: StringFieldUpdateOperationsInput | string
    royaltyFee?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: MediaNFTUpdatetagsInput | string[]
    fileType?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessLogs?: MediaAccessLogUncheckedUpdateManyWithoutMediaNFTNestedInput
  }

  export type MediaAccessLogCreateManyMediaNFTInput = {
    id?: string
    buyerAddress: string
    amountPaid: bigint | number
    transactionHash?: string | null
    accessedAt?: Date | string
  }

  export type MediaTransferCreateManyMediaNFTInput = {
    id?: string
    fromAddress: string
    toAddress: string
    transactionHash?: string | null
    transferredAt?: Date | string
  }

  export type MediaAccessLogUpdateWithoutMediaNFTInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerAddress?: StringFieldUpdateOperationsInput | string
    amountPaid?: BigIntFieldUpdateOperationsInput | bigint | number
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAccessLogUncheckedUpdateWithoutMediaNFTInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerAddress?: StringFieldUpdateOperationsInput | string
    amountPaid?: BigIntFieldUpdateOperationsInput | bigint | number
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAccessLogUncheckedUpdateManyWithoutMediaNFTInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerAddress?: StringFieldUpdateOperationsInput | string
    amountPaid?: BigIntFieldUpdateOperationsInput | bigint | number
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaTransferUpdateWithoutMediaNFTInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    transferredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaTransferUncheckedUpdateWithoutMediaNFTInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    transferredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaTransferUncheckedUpdateManyWithoutMediaNFTInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    transferredAt?: DateTimeFieldUpdateOperationsInput | Date | string
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