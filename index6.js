// Verbosidade declarando funções

function x() {
  return 'pncc';
}

const y = () => {
  return 'pncc';
}

const z = () => 'pncc';


// Verbosidade na prática, com array.forEach

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const a = [1, 2, 3];

// a.forEach(function exec(item) {
//   console.log(item);
// });

// a.forEach(function (item) {
//   console.log(item);
// });

// a.forEach((item) => {
//   console.log(item);
// });

// a.forEach((item) => console.log(item));

a.forEach(item => console.log(item));