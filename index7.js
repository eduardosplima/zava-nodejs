// Destructuring e Spread Operators

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

const obj1 = {
  a: 1,
  b: 2
};

// const obj2 = {
//   a: obj1.a,
//   b: obj1.b
// };

// const obj2 = { ...obj1 };
// obj2.c = 3;

const obj2 = { ...obj1, c: 3 };

// console.log(obj1);
// console.log(obj2);

// const a = obj1.a;
// const b = obj1.b;
const { a, b } = obj1;

console.log(a);
console.log(b);