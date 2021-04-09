// Callback
// https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/

// function exibe(cb) {
//   console.log(cb());
// }

// function soma() {
//   return 1 + 2;
// }

// exibe(soma);

function imprimeTexto(text, cbImpressao) {
  cbImpressao(text + ' world');
}

function imprime(valor) {
  console.log(valor);
}

function logAsync(text, cbGeraTexto, cbImpressao) {
  setTimeout(() => {
    cbGeraTexto(text, cbImpressao);
  }, 1500);
}

logAsync('hello', imprimeTexto, imprime);

function conectar() {
  // Conectou no banco
  return null;
}

function executaQuery(cbConectar) {
  const conexao = cbConectar();
  // Processa
  return null;
}

function enviaEmail(cbProcessamento) {
  const resultado = executaQuery()
  return 'ok';
}

function nomexpto(callbackXpto) {
  // ...
  callbackXpto(err, resultado);
}