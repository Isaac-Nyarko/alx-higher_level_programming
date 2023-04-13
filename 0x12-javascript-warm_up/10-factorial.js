#!/usr/bin/node
const factorial = (n) => {
  if (isNaN(n)) {
    console.log(1);
  } else if (n < 0) {
    console.log("Can't calculate factorial of a negative number");
  } else if (n == 0) {
    console.log(1);
  } else {
    console.log(n * factorial(n - 1));
  }
};
factorial(5);
