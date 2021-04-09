// Exemplo teórico async await

async function conectar(comErro) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('conectar');
      if (comErro) reject(new Error('ferrou'));
      else resolve();
    }, 1000);
  });
}

async function executarQueryComConexao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('executarQueryComConexao');
      resolve();
    }, 2000);
  });
}

async function enviarEmailResultadoQuery() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('enviarEmailResultadoQuery');
      resolve('Envio realizado com sucesso');
    }, 1000);
  });
}

async function main() {
  const conexao = await conectar();
  const resultadoQuery = await executarQueryComConexao(/* conexao */);
  return enviarEmailResultadoQuery(/* resultadoQuery */);
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log('acabou'));

console.log('zava');