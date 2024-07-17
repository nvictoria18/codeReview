// 1 

const endPoints = [
  'https://jsonplaceholder.typicode.com/users?name=Leanne%20Graham',
  'https://jsonplaceholder.typicode.com/todos?userId=',
  'https://jsonplaceholder.typicode.com/todos/'
]

async function fetchData() {
  try {
    const response1 = await fetch(endPoints[0]);
    const data1 = await response1.json();

    const response2 = await fetch(endPoints[1] + data1[0].id);
    const data2 = await response2.json();
    const response3 = await fetch(endPoints[2] + data2[data2.length - 1].id)
    const data3 = await response3.json();
    console.log(data1, data2, data3);
  } catch (error) {
    console.error(error);
  }
}

fetchData();