// 18 

function throttle(func, wait) {
  let timeout;
  let previous = 0;

  return (...args) => {
    const current = Date.now();

    if (current - previous >= wait) {
      func(...args);
      previous = current;
    } else {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        func(...args);
        previous = Date.now();
      }, wait);
    }
  };
}
