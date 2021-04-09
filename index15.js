// Pegadinha
// Analisem bem o código e entendam o que está acontecendo em cada linha rsrs

const p = new Promise((resolve) => {
  resolve(1);
});

p
  .then((x) => x + 1)
  .then((x) => { throw new Error('My Error') })
  .catch(() => 1)
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .catch(console.error);