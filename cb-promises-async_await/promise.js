// Promises

// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
// https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2

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

function callbackReaderOnLine(text) {
  request
    .get(`https://github.com/search?q=${text}`)
    .then((response) => {
      return promiseRequestGet(response, text);
    })
    .catch((err) => {
      console.log(`Erro ao obter o resultado para o termo "${text}"`);
    });
}

reader.on('line', callbackReaderOnLine);