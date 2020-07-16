//Take anumber from a user and write a function which checks whether the number is even or odd. Assign the result to a variable and log that variable in the console.

let oddEven = function (num) {
  if (num % 2 == 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
};
let result = oddEven(4);
console.log(result);
