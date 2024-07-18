// 10 

const tree = {
  value: 1,
  next: [
    {
      value: 2,
      next: null,
    },
    {
      value: 2,
      next: {
        value2: 4,
        next: null,
      },
    },
  ],
  foo: {
    bar: {
      baz: [
        { value: 9 },
        {
          value: 2,
          next: {
            value: 4,
            next: null,
          },
        },
      ],
    },
    baz: 33,
    value: 1,
  },
};

function sum(obj, key) {
  let total = 0;

  if (obj && typeof obj === 'object') {
    const { [key]: value, ...rest } = obj;
    total += value || 0;
    for (const prop in rest) {
      total += sum(rest[prop], key);
    }
  }

  return total;
}

console.log(sum(tree, 'value')); // 21