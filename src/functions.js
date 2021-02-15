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
//Function scope change global var value
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

//Arguments object
export function useArgumentsObject(separator) {
  // separator will only take the first param
  let result = "";
  let i;
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

//Function parameters
//With default params
export function useDefaultParams(a, b = 1) {
  return a * b;
}

//With rest params
export function useRestParams(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

//Arrow functions
// Arrow functions does not have its own this, arguments, super, or new.target
// and are always anonymus
export function useArrowFunction(words) {
  return words.map((s) => s.length);
}

export const functionObject = {
  x: 2,
  y: 3,
  arrowFunction: () => {
    return this.x + this.y;
  },
  standardFunction: function () {
    return this.x + this.y;
  },
  arrowThisInheritance: function () {
    const values = [5, 6];
    return values.map((v) => v * this.x);
  },
  standardThisInheritance: function () {
    const values = [5, 6];
    return values.map(function (v) {
      v * this.x; // this.x is not valid because `this` is not passed down in a standard function
    });
  },
};

export class FunctionClass {
  constructor() {
    this.x = 2;
    this.y = 3;
    // this.arrowFunction = () => {
    //   return this.x + this.y;
    // };
  }
  arrowFunction = () => {
    return this.x + this.y;
  };
  standardFunction() {
    return this.x + this.y;
  }
  arrowThisInheritance() {
    const values = [5, 6];
    return values.map((v) => v * this.x);
  }
  standardThisInheritance() {
    const values = [5, 6];
    return values.map(function (v) {
      v * this.x; // this.x is not valid because `this` is not passed down in a standard function
    });
  }
}

//Variable hosting
export function variableHoisting() {
  function something() {
    return x;
  }
  let x = 6;
  return something;
}

//Function hosting
// In the case of functions, only function declarations
// are hoisted—but not the function expressions.
function functionDeclaration() {
  console.log("This is a function declaration.");
}

let functionExpression = function () {
  console.log("This is a function expression.");
};
//Calling functionExpression() should through TypeError: baz is not a function

export function convertStringToNumbers(a, b) {
  return { ingeter: parseInt(a), float: parseFloat(b) };
}
