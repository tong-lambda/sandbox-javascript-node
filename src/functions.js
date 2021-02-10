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

//Function scope
let num1 = 1;
let num2 = 2;
const name = "globalName";

export function canAccessGlobalVar() {
  return num1 * num2;
}

//Recursive function
export const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

//Closure
//Function scope local variables change global value
export function getScore() {
  num1 = 100;
  num2 = 600;
  function add() {
    return name + " scored " + (num1 + num2);
  }
  return add();
}

export function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

//Function inside can acess function outside's  arguments and variables
//When calling outside function, x is preserved when inside is returned
export function outside(x) {
  function inside(y) {
    return x / y;
  }
  return inside;
}

//Multiple-nested functions
//B forms a closure including A (B can access A's arguments and variables)
//C forms a closure including B (C can access both B and A's arguments and variables)
export function A(x) {
  function B(y) {
    function C(z) {
      return x + y + z;
    }
    return C;
  }
  return B;
}

//When there's naming conflicts, the inner-most scope takes the highest precedence
export function namingConflict() {
  let x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

//Another closure example
export let createPet = function (name) {
  var sex;

  return {
    setName: function (newName) {
      name = newName;
    },

    getName: function () {
      return name;
    },

    getSex: function () {
      return sex;
    },

    setSex: function (newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };
};
