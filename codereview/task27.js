// 27
let __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function promiseAll(promises) {
    return promises.reduce(function (accumulator, promise) {
        return accumulator.then(function (results) {
            return Promise.resolve(promise).then(function (value) { return __spreadArray(__spreadArray([], results, true), [value], false); });
        });
    }, Promise.resolve([]));
}
function promiseAllSettled(promises) {
    return promises.reduce(function (accumulator, promise) {
        return accumulator.then(function (results) {
            return Promise.resolve(promise).then(function (value) { return __spreadArray(__spreadArray([], results, true), [{ status: "fulfilled", value: value }], false); }, function (reason) { return __spreadArray(__spreadArray([], results, true), [{ status: "rejected", reason: reason }], false); });
        });
    }, Promise.resolve([]));
}
