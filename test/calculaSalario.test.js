const calculaSalario = require('../lib/calculaSalario');

describe('Calcular Salário', () => {
  test('Realizando teste com base no salario do desenvolvedor', () => {

    const funcionario = {
      nome: "Teste1",
      email: "teste@teste.com",
      salarioBase: 2000,
      cargo: "Desenvolvedor"
    }

    result = calculaSalario(funcionario);

    expect(result.desconto).toBe(200);
    expect(result.taxa).toBe(0.1);
    expect(result.liquido).toBe(1800);
  });

  test('Realizando teste com base no salario para DBA', () => {

    const funcionario = {
      nome: "Teste2",
      email: "teste@teste.com",
      salarioBase: 4000,
      cargo: "DBA"
    }

    result = calculaSalario(funcionario);

    expect(result.desconto).toBe(1000);
    expect(result.taxa).toBe(0.25);
    expect(result.liquido).toBe(3000);
  });


  test('Realizando teste com base no salario para Testador', () => {

    const funcionario = {
      nome: "Teste3",
      email: "teste@teste.com",
      salarioBase: 3000,
      cargo: "Testador"
    }

    result = calculaSalario(funcionario);

    expect(result.desconto).toBe(750);
    expect(result.taxa).toBe(0.25);
    expect(result.liquido).toBe(2250);
  });

});