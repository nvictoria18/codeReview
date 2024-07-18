// 23

// найти и исправить как можно больше ошибок, функция должна создавать полную копию объекта

// function createCopy (data){
//   const copy = {
//     meta: data.meta, 
//     age : data.age,
//     setting : data.setting
//   }
//   const title = `new copy ${data.setting.title}`
//   copy.setting.title = title
//   return copy;
// }

let obj = {};

function createCopy(data) {
  // cоздаем константу setting, чтобы гарантировать наличие свойства title
  const setting = data.setting || { title: '' };

  const copy = {
    meta: data.meta,
    age: data.age,
    // Создаем копию объекта setting
    setting: {...setting} 
  };

  // Изменяем свойство title в скопированном объекте
  copy.setting.title = `new copy ${setting.title}`;

  return copy;
}

console.log(createCopy(obj));
