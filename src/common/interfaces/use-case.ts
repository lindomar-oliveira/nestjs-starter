type MaybePromise<T> = T | Promise<T>;

export interface UseCase {
  execute(...args: unknown[]): MaybePromise<unknown>;
}
