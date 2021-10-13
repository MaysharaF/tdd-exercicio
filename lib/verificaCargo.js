function verificaCargo(funcionario) {
  switch (funcionario.cargo) {
    case 'Desenvolvedor': taxa = funcionario.salarioBase >= 3000 ? 0.2 : 0.1;
      break;

    case 'DBA': taxa = funcionario.salarioBase >= 2000 ? 0.25 : 0.15;
      break;

    case 'Testador': taxa = funcionario.salarioBase >= 2000 ? 0.25 : 0.15;
      break;

    default: taxa = 0;
      break;
  }

  return ({
    desconto: funcionario.salarioBase * taxa,
    taxa: taxa
  });
}


module.exports = verificaCargo;