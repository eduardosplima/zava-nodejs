// Callback

// https://nodejs.org/api/fs.html
// https://nodejs.org/api/readline.html
// https://visionmedia.github.io/superagent/

const fs = require('fs');
const readline = require('readline');
const request = require('superagent');

const stream = fs.createReadStream('termos.txt');
const reader = readline.createInterface({
  input: stream,
  crlfDelay: Infinity,
});

reader.on('line', (text) => {
  request.get(`https://github.com/search?q=${text}`, (err, response) => {
    if (err) {
      console.log(`Erro ao obter o resultado para o termo "${text}"`);
    } else {
      const html = response.text;
      const repositories = /(.*)(\d*)(\srepository\sresults)(.*)/g.exec(html)[1].trim();
      fs.appendFile('resultados.txt', `${repositories} repositórios para o termo ${text}\n`, (err) => {
        if (err) console.log(err);
      });
    }
  })
});