const calculaSalario = require('../lib/calculaSalario');

describe('Calcular Salário', () => {
  test('Realizando teste com base no salario do desenvolvedor', () => {

    const funcionario = {
      nome: "Mayshara",
      email: "teste@teste.com",
      salarioBase: 2000,
      cargo: "Desenvolvedor"
    }

    result = calculaSalario(funcionario);

    expect(result.desconto).toBe(500);
    expect(result.taxa).toBe(0.1);
    expect(result.liquido).toBe(1800);
  });


});