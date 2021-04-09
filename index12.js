// Exemplo teórico promise

function conectar(comErro) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('conectar');
      if (comErro) reject(new Error('ferrou'));
      else resolve();
    }, 1000);
  });
}

function executarQueryComConexao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('executarQueryComConexao');
      resolve();
    }, 2000);
  });
}

function enviarEmailResultadoQuery() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('enviarEmailResultadoQuery');
      resolve('Envio realizado com sucesso');
    }, 1000);
  });
}

// conectar()
//   .then(() => {
//     return executarQueryComConexao();
//   })
//   .then(() => {
//     return enviarEmailResultadoQuery();
//   })
//   .then((resultado) => {
//     console.log(resultado);
//   });

// Descomentar o "true" para ver o catch funcionando
conectar(/* true */)
  .then(executarQueryComConexao)
  .then(enviarEmailResultadoQuery)
  .catch((err) => {
    return err.message;
  })
  .then(console.log)
  .finally(() => console.log('acabou'));

console.log('zava');