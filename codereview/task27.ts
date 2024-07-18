// 27

type PromiseResult<T> = T extends Promise<infer U> ? U : T;

interface PromiseAllSettledResult<T> {
  status: 'fulfilled';
  value: T;
}

interface PromiseAllSettledRejectedResult {
  status: 'rejected';
  reason: any;
}

type PromiseAllSettledResults<T> =
  | PromiseAllSettledResult<T>
  | PromiseAllSettledRejectedResult;

function promiseAll<T>(promises: Array<T | Promise<T>>): Promise<Array<PromiseResult<T>>> {
  return promises.reduce<Promise<Array<PromiseResult<T>>>>(
    (accumulator, promise) =>
      accumulator.then((results) =>
        Promise.resolve(promise).then((value) => [...results, value as PromiseResult<T>])
      ),
    Promise.resolve([])
  );
}

function promiseAllSettled<T>(promises: Array<T | Promise<T>>): Promise<Array<PromiseAllSettledResults<T>>> {
  return promises.reduce<Promise<Array<PromiseAllSettledResults<T>>>>(
    (accumulator, promise) =>
      accumulator.then((results) =>
        Promise.resolve(promise).then(
          (value) => [...results, { status: "fulfilled", value: value as T }],
          (reason) => [...results, { status: "rejected", reason }]
        )
      ),
    Promise.resolve([])
  );
}
