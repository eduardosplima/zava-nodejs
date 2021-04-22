// Promises combinators

// https://v8.dev/features/promise-combinators

const fs = require('fs');
const readline = require('readline');
const request = require('superagent');

const stream = fs.createReadStream('termos.txt');
const reader = readline.createInterface({
  input: stream,
  crlfDelay: Infinity,
});

function promiseRequestGet(response, text) {
  return new Promise((resolve, reject) => {
    const html = response.text;
    const repositories = /(.*)(\d*)(\srepository\sresults)(.*)/g.exec(html)[1].trim();
    fs.appendFile('resultados.txt', `${repositories} repositórios para o termo ${text}\n`, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

async function promiseReaderOnLine(text) {
  return request
    .get(`https://github.com/search?q=${text}`)
    .then((response) => {
      return promiseRequestGet(response, text);
    });
}

const termos = [];
async function readFile() {
  return new Promise((resolve) => {
    reader.on('line', (line) => termos.push(line));
    reader.on('close', resolve);
  });
}

// Execução sequencial
Promise.resolve()
  .then(() => readFile())
  .then(() => promiseReaderOnLine(termos[0]))
  .then(() => promiseReaderOnLine(termos[1]))
  .then(() => promiseReaderOnLine(termos[2]))
  .then(() => promiseReaderOnLine(termos[3]))
  .then(() => promiseReaderOnLine(termos[4]))
  .catch((err) => console.log(err.message));

// Execução paralela
// Promise.resolve()
//   .then(() => readFile())
//   .then(() => {
//     return Promise.all([
//       promiseReaderOnLine(termos[0]),
//       promiseReaderOnLine(termos[1]),
//       promiseReaderOnLine(termos[2]),
//       promiseReaderOnLine(termos[3]),
//       promiseReaderOnLine(termos[4]),
//     ]);
//   })
//   .catch((err) => console.log(err.message));
