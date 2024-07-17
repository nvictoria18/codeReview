// 18 




function throttle(func, wait) {
  let timeout;
  let previous = 0;

  return function (...args) {
    const context = this;
    const current = Date.now();

    if (current - previous >= wait) {
      func.apply(context, args);
      previous = current;
    } else {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        func.apply(context, args);
        previous = Date.now();
      }, wait);
    }
  };
}
