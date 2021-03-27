// ?.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Optional_chaining

let obj = {
  a: {
    a1: 'a'
  },
  b: undefined,
  c: {
    c1: 'c1'
  }
};

console.log(obj.b?.b1);
console.log(obj.c?.c1);