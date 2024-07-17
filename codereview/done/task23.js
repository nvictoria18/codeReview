// 23

let obj = {};

function createCopy(data) {
  const setting = data.setting || { title: '' };
  const copy = {
    meta: {...data.meta},
    age: data.age,
    setting: {...setting}
  };
  copy.setting.title = `new copy ${setting.title}`;
  return copy;
}

console.log(createCopy(obj))