const moment =  require('moment');

// Jan 1st 1970 00:00:00 am

// let date = new Date();
// console.log(date.getMonth());

// let date = moment();
// date.add(2, 'year');
// date.add(1, 'years').subtract(9, 'month');
// console.log(date.format('MMM Do YYYY'));

let date = moment();
console.log(date.format('h:mm a'))

let someTimestamp = moment().valueOf();
console.log(someTimestamp);
