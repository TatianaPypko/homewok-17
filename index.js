const numbers = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// One
// const pairedNumbers = numbers.reduce(
//   (accum, number) => {
//     if (number > 0) {
//       accum.amountPairedNumbers++;
//       accum.sumPairedNumbers += number;
//     }
//     return accum;
//   },
//   { sumPairedNumbers: 0, amountPairedNumbers: 0}
// );
// console.log(pairedNumbers);

// Two
// const dataResult = numbers.reduce(
//   (accum, number, index, arr) => {
//     accum.minNumber = Math.min(accum.minNumber, number);
//     accum.oderNumber = numbers.indexOf(accum.minNumber) + 1;
//     return accum;
//   }, { minNumber: 0, oderNumber: 0 }
// );
// console.log(dataResult);

// Three
// const maxNumberAndOrder = numbers.reduce(
//   (accumulator, number, index, arr) => {
//     accumulator.maxNumber = Math.max(accumulator.maxNumber, number);
//     accumulator.orderMaxNumber = arr.indexOf(accumulator.maxNumber) + 1;
//     return accumulator;
//   }, { maxNumber: 0, orderMaxNumber: 0 }
// );
// console.log(maxNumberAndOrder);

// Four
// const amountOfNegativeNumbers = numbers.reduce(
//   (amount, number) => {
//     if (number < 0) {
//       amount++;
//     }
//     return amount;
//   }, 0);
// console.log(amountOfNegativeNumbers);

// Five
// const amountOfPositiveNumbers = numbers.reduce(
//   (sum, number) => {
//     if (number > 0 && number % 2 === 1) {
//       sum++;
//     }
//     return sum;
//   }, 0);
// console.log(amountOfPositiveNumbers);

// Six
// const amountOfPairedNumbers = numbers.reduce(
//   (sum, number) => {
//     if (number > 0 && number % 2 === 0) {
//       sum++;
//     }
//     return sum;
//   }, 0);
// console.log(amountOfPairedNumbers);

// Seven
// const sumOfPositiveNumbers = numbers.reduce(
//   (sum, number) => {
//     if (number > 0 && number % 2 === 0) {
//       sum += number;
//     }
//     return sum;
//   }, 0);
// console.log(sumOfPositiveNumbers);

// Eight
// const sumOfNegativeNumbers = numbers.reduce(
//   (sum, number) => {
//     if (number > 0 && number % 2 === 1) {
//       sum += number;
//     }
//     return sum;
//   }, 0);
// console.log(sumOfNegativeNumbers);

// Nine;
// const multiplePositiveNumbers = numbers.reduce((multiple, number) => {
//   if (number > 0) {
//     multiple *= number;
//   }
//   return multiple;
// }, 1);
// console.log(multiplePositiveNumbers);

// Ten
// const maxNumber = Math.max(...numbers);
// const result = numbers.map(number => number === maxNumber ? number : 0);
//  console.log(result);