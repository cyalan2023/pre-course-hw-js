const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];
let num1 = numbers.map((num) =>{
  return num.filter(n => n % 2 === 0)})
console.log(num1)