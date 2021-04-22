// Async e await

// https://blog.risingstack.com/mastering-async-await-in-nodejs/
// https://medium.com/free-code-camp/how-to-master-async-await-with-this-real-world-example-19107e7558ad

const fs = require('fs');
const readline = require('readline');
const request = require('superagent');

const stream = fs.createReadStream('termos.txt');
const reader = readline.createInterface({
  input: stream,
  crlfDelay: Infinity,
});

async function promiseRequestGet(response, text) {
  return new Promise((resolve, reject) => {
    const html = response.text;
    const repositories = /(.*)(\d*)(\srepository\sresults)(.*)/g.exec(html)[1].trim();
    fs.appendFile('resultados.txt', `${repositories} repositórios para o termo ${text}\n`, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

async function callbackReaderOnLine(text) {
  try {
    const response = await request.get(`https://github.com/search?q=${text}`);
    await promiseRequestGet(response, text);
    // return promiseRequestGet(response, text);
  } catch (error) {
    console.log(`Erro ao obter o resultado para o termo "${text}"`);
  }
}

// callbackReaderOnLine('ruby')
//   .then(() => console.log('Foi'))
//   .catch((err) => console.error(err.message));
reader.on('line', callbackReaderOnLine);