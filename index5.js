// Arrow function / EventEmitter

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// https://flaviocopes.com/node-event-emitter/

const { EventEmitter } = require('events');
const ee = new EventEmitter();

class PNCC {
  constructor(type)   {
    this.n = 0;
    this.ee = new EventEmitter();

    if (type === 'makeXGH') {
      this.ee.on('xgh', this.makeXGH);
    } else if (type === 'makeMoreXGH') {
      this.ee.on('xgh', this.makeMoreXGH);
    }
  }

  makeXGH() {
    console.log(++this.n);
  }

  makeMoreXGH = () => {
    console.log(++this.n);
  }
}

const pncc1 = new PNCC('makeXGH');
const pncc2 = new PNCC('makeMoreXGH');

console.log('pncc1 - emit 1');
pncc1.ee.emit('xgh');
console.log('pncc1 - emit 2');
pncc1.ee.emit('xgh');
console.log('pncc1 - emit 3');
pncc1.ee.emit('xgh');
console.log('pncc2 - emit 1');
pncc2.ee.emit('xgh');
console.log('pncc2 - emit 2');
pncc2.ee.emit('xgh');
console.log('pncc2 - emit 3');
pncc2.ee.emit('xgh');
