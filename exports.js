// stringUtilis.js
const { reverse1, reverse2, capitalize, truncate } = require('./stringUtils');

console.log(reverse1('abc'));
console.log(reverse2('abc'));
console.log(capitalize('hi....'));
console.log(truncate('Hello my name is Davo', 20));

// mathOperations.js

const { add, subtract, multiply, divide } = require('./mathOperations');

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(multiply(2, 7));
console.log(divide(100, 20));

// arrayUtilis.js

const { unique, flatten, chunk } = require('./arrayUtils');

console.log(unique([1, 2, 2, 3, 4, 4, 5]));
console.log(flatten([12, 3, [2, 4, 5, [3, 4, 5], 4]]));
console.log(chunk([1, 2, 3, 4, 5], 2));

// dateUtilis.js
const { formatDate, isWeekend, daysBetween } = require('./dateUtils');

const now = new Date();
console.log(formatDate(now, 'YYYY-MM-DD'));

console.log(isWeekend(new Date('2024-12-07')));

console.log(daysBetween(new Date('2024-12-01'), new Date('2024-12-05')));