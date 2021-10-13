const verificaCargo = require('../lib/verificaCargo');

function calculaSalario(funcionario) {

  const { salarioBase } = funcionario;
  const { taxa, desconto } = verificaCargo(funcionario);

  liquido = salarioBase - desconto;

  return { liquido, desconto, taxa }

}

module.exports = calculaSalario;