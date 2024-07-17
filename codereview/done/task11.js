// 11

// const arr = [50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60];

// function binarySearch(arr, num) {
//   let left = 0;
//   let right = arr.length - 1;
//   let mid;

//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);

//     if (arr[mid] === num) {
//       return mid;
//     }

//     if (arr[mid] < num) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return -1;
// }


// console.log(binarySearch(arr, 58)); 
// console.log(binarySearch(arr, 100)); 