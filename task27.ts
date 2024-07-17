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
  return new Promise((resolve, reject) => {
    const results: Array<PromiseResult<T>> = [];

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (value) => {
          results[index] = value as PromiseResult<T>;

          if (results.length === promises.length) {
            resolve(results);
          }
        },
        (error) => {
          reject(error);
        },
      );
    });
  });
}

function promiseAllSettled<T>(promises: Array<T | Promise<T>>): Promise<Array<PromiseAllSettledResults<T>>> {
  return new Promise((resolve) => {
    const results: Array<PromiseAllSettledResults<T>> = [];

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (value) => {
          results[index] = { status: 'fulfilled', value: value as T };

          if (results.length === promises.length) {
            resolve(results);
          }
        },
        (reason) => {
          results[index] = { status: 'rejected', reason };

          if (results.length === promises.length) {
            resolve(results);
          }
        },
      );
    });
  });
}

