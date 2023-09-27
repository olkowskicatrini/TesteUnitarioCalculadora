function totalizar(n1, n2, operador) {
  const operacoes = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (b === 0 ? 0 : a / b),
  };

  if (typeof operacoes[operador] === 'function') {
    return operacoes[operador](n1, n2);
  } else {
    throw new Error(`Operador não suportado: ${operador}`);
  }
}

module.exports = totalizar;
