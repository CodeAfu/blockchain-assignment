import { Address, Hash } from "viem";

type Success<T> = {
  data: T;
  error: null;
};

type Failure<E> = {
  data: null;
  error: E;
};

export type Result<T, E = Error> = Success<T> | Failure<E>;

export interface MediaItem {
  title: string;
  owner: Address;
  ipfsHash: string;
  timestamp: bigint;
  royaltyFee: bigint;
}

export interface MediaRegisteredEvent {
  mediaId: Hash;
  owner: Address;
  title: string;
  ipfsHash: string;
  royaltyFee: bigint;
}

export interface MediaAccessedEvent {
  mediaId: Hash;
  user: Address;
  amountPaid: bigint;
}