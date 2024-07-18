// 1 

const endPoints = [
  'https://jsonplaceholder.typicode.com/users?name=Leanne%20Graham',
  'https://jsonplaceholder.typicode.com/todos?userId=',
  'https://jsonplaceholder.typicode.com/todos/'
]

async function fetchData(endPoint) {
  let result = [];
  try {
    for (let i = 0; i < endPoint.length; i++) {
      const response = await fetch(endPoint[i]);
      const data = await response.json();
      result.push(data);
      if (i < endPoint.length - 1) {
        endPoint[i + 1] += data[data.length - 1].id;
      }
    }
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchData(endPoints);

