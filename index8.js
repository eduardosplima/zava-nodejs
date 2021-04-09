// Destructuring e Spread Operators

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

const obj1 = ['zava', 'Eduardo Lima', 'pncc'];

const [login, username, pswd] = obj1;
// console.log(login);
// console.log(username);
// console.log(pswd);

const [a, ...b] = obj1;
console.log(a);
console.log(b);