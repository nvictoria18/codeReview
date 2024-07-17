// 27

function promiseAll(promises) {
    return new Promise(function (resolve, reject) {
        var results = [];
        promises.forEach(function (promise, index) {
            Promise.resolve(promise).then(function (value) {
                results[index] = value;
                if (results.length === promises.length) {
                    resolve(results);
                }
            }, function (error) {
                reject(error);
            });
        });
    });
}
function promiseAllSettled(promises) {
    return new Promise(function (resolve) {
        var results = [];
        promises.forEach(function (promise, index) {
            Promise.resolve(promise).then(function (value) {
                results[index] = { status: 'fulfilled', value: value };
                if (results.length === promises.length) {
                    resolve(results);
                }
            }, function (reason) {
                results[index] = { status: 'rejected', reason: reason };
                if (results.length === promises.length) {
                    resolve(results);
                }
            });
        });
    });
}
