const { test, expect } = require('@jest/globals');
const totalizar = require('./totalizar.js');

const casosDeTeste = [
  { operador: '+', n1: 2, n2: 1, resultado: 3 },
  { operador: '+', n1: 2, n2: 0.5, resultado: 2.5 },
  { operador: '-', n1: 1, n2: 2, resultado: -1 },
  { operador: '-', n1: 2, n2: 1, resultado: 1 },
  { operador: '-', n1: 2, n2: 0.5, resultado: 1.5 },
  { operador: '*', n1: 2, n2: 0, resultado: 0 },
  { operador: '*', n1: 2, n2: 2, resultado: 4 },
  { operador: '*', n1: 2, n2: 2.5, resultado: 5 },
  { operador: '/', n1: 10, n2: 2, resultado: 5 },
  { operador: '/', n1: 10, n2: 2.5, resultado: 4 },
  { operador: '/', n1: 10, n2: 0, resultado: 0 },
];

casosDeTeste.forEach(({ operador, n1, n2, resultado }) => {
  test(`Operação: ${n1} ${operador} ${n2}`, () => {
    const resultadoCalculado = totalizar(n1, n2, operador);
    expect(resultadoCalculado).toBe(resultado);
  });
});
