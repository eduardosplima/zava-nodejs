// Callback, promisses e async await
// http://callbackhell.com/

const { readFile } = require('fs');

// readFile('/etc/passwd', (err, data1) => {
//   if (err) throw err;
//   readFile('/etc/passwd', (err, data2) => {
//     if (err) throw err;
//     readFile('/etc/passwd', (err, data3) => {
//       if (err) throw err;
//       console.log(data1.toString('utf8'));
//       console.log(data2.toString('utf8'));
//       console.log(data3.toString('utf8'));
//     });
//   });
// });

async function readFileDoZava(path) {
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err) reject(err);
      else resolve(data.toString('utf-8'));
    });
  });
}

async function main() {
  let result;
  
  result = await readFileDoZava('/etc/passwd');
  console.log(result);
  
  result = await readFileDoZava('/etc/passwd');
  console.log(result);
  
  result = await readFileDoZava('/etc/passwd');
  console.log(result);
  
  result = await readFileDoZava('/etc/passwd');
  console.log(result);
  
  result = await readFileDoZava('/etc/passwd');
  console.log(result);
}

main().catch(console.error);