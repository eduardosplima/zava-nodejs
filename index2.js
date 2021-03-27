// ==
// ===

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness

console.log(1 == '1');
console.log(0 == false);
console.log('' == false);

console.log(1 === '1');
console.log(0 === false);
console.log('' === false);

let x = {
  a: 1,
  b: 2,
};
if (x) {
  console.log('x');
}

let y = 0;
if (y) {
  console.log('y');
}

let z = '';
if (z) {
  console.log('z');
}