// Exemplo teórico callback

function conectar(cb) {
  setTimeout(() => {
    console.log('conectar');
    cb();
  }, 1000);
}

function executarQueryComConexao(cb) {
  setTimeout(() => {
    console.log('executarQueryComConexao');
    cb();
  }, 2000);
}

function enviarEmailResultadoQuery() {
  setTimeout(() => {
    console.log('enviarEmailResultadoQuery');
  }, 1000);
}

conectar(() => {
  executarQueryComConexao(() => {
    enviarEmailResultadoQuery();
  });
});
