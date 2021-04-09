// Promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

const p1 = new Promise((resolve, reject) => {
  // conectei no banco
  // ...
  setTimeout(() => {
    resolve(1);
  }, 1000)
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('erro')
    // resolve(2);
  }, 1500)
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 1000)
});

function imprime(valor) {
  console.log(valor);
}

// p1.then((resultado) => imprime(resultado));
// p1.then(imprime);

p1
  .then((resultado) => {
    imprime(resultado);
    return p2;
  })
  .then((resultado) => {
    imprime(resultado);
    return p3;
  })
  .then((resultado) => {
    imprime(resultado);
  })
  .catch((err) => {
    imprime(err);
  })