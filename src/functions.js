// Named function
function square(number) {
  return number * number;
}

//Function that passes in an object
function canTakeObject(theObject) {
  theObject.make = "Toyota";
}

//Assign function to variable and anonymus function
const calculateSquare = function (number) {
  return number * number;
};

//Recursive function
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

//Function that passes in as an argument
function map(f, a) {
  let result = [];
  let i;
  for (i = 0; i != a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const f = function (x) {
  return x * x * x;
};

export { square, canTakeObject, calculateSquare, factorial, map, f };
