//Soma
const soma = (a, b) => a + b;

// Subtração
const subtracao = (a, b) => a - b;

// Multiplicação
const multiplicacao = (a, b) => a * b;

// Divisão
const divisao = (a, b) => {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero");
  }
  return a / b;
};

export { soma, subtracao, multiplicacao, divisao };
