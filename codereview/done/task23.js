// 23




let obj = {};

function createCopy(data) {
  const setting = data.setting || { title: '' };
  const copy = {
    meta: {...data.meta},
    age: data.age,
    setting: {...setting}
  };
  const title = `new copy ${setting.title}`;
  copy.setting.title = title;
  return copy;
}

console.log(createCopy(obj))