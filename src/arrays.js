// A few ways of creating array
export const array1 = [1, 2, 3, 4, 5];
export const array2 = Array(1, 2, 3);
export const array3 = new Array(1, 2, 3);

//Assign array to a property of an object
export let obj1 = {};
obj1.prop = [1, 2, 3];
export let obj2 = { prop: [1, 2, 3] };

//Creating array with float/fractional
export const fractionalArray1 = Array.of(9.3);
export const fractionalArray2 = [9.3];

//Array iteration common usage
let colors1 = ["red", "green", "blue"];
for (let i = 0; i < colors1.length; i++) {
  console.log(colors1[i]);
}

//Array iteration using forEach()
let colors2 = ["red", "green", "blue"];
colors2.forEach(function (color) {
  console.log(color);
});

//An alternative way using arrow functions
let colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
