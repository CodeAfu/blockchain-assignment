import { Failure, Success } from "./result";

export const methodTypes = ["GET", "POST", "PUT", "DEL"] as const;

export type MethodType = (typeof methodTypes)[number];

export type APIResponse<T, E = Error> =
  | (Success<T> & { status: number })
  | (Failure<E> & { status: number });



