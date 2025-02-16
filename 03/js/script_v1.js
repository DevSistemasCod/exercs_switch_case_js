function clicarNoBotao() {
  let codigoEscolhido = document.getElementById('codigoProduto');
  let resultado = document.getElementById('resultado');
  //prettier-ignore
  let classificacao, codigo = 0;

  if (codigoEscolhido instanceof HTMLInputElement) {
    codigo = parseInt(codigoEscolhido.value);
  }

  switch (true) {
    //prettier-ignore
    case (codigo === 1):
      classificacao = 'Alimento não-perecível';
      break;
    //prettier-ignore
    case ((codigo === 2) || (codigo === 3) || (codigo === 4)):
      classificacao = 'Alimento perecível';
      break;
    //prettier-ignore
    case ((codigo === 5) || (codigo === 6)):
      classificacao = 'Vestuário';
      break;
    //prettier-ignore
    case (codigo === 7):
      classificacao = 'Higiene Pessoal';
      break;
    //prettier-ignore
    case ((codigo >= 8) && (codigo <= 15)):
      classificacao = 'Limpeza e Utensílios Domésticos';
      break;
    default:
      classificacao = 'Código inválido!';
      break;
  }
  if (resultado instanceof HTMLElement) {
    resultado.textContent = classificacao;
  }
}

function iniciar() {
  let verificarBtn = document.getElementById('verificarBtn');

  if (verificarBtn != null) {
    verificarBtn.addEventListener('click', clicarNoBotao);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
