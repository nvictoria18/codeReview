const arr = [
  { date: '10.01.2016' },
  { date: '11.01.2017' },
  { date: '05.11.2016' },
  { date: '21.12.2002' }
];

function arrSort(dates) {
   let date = [];
   let years = [];
   let mounth;
   let num;
   dates.forEach((el, i, arr) => date.push(Object.values(el).join()))
   for (let i = 0; i < date.length; i++) {
       if (date[i]) {
           console.log(date[i].split(".")) 
           console.log("yea")
           years.push(i)
           console.log(years)
       }
   }
   return date;
}
console.log(arrSort(arr));