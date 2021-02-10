// Named function
export function square(number) {
  return number * number;
}

//Function that passes in an object
export function canTakeObject(theObject) {
  theObject.make = "Toyota";
}

//Assign function to variable and anonymus function
export const calculateSquare = function (number) {
  return number * number;
};

//Recursive function
export const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

//Function that passes in as an argument
export function map(f, a) {
  let result = [];
  let i;
  for (i = 0; i != a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

export const f = function (x) {
  return x * x * x;
};
