function identificarItem() {
  let codigoEscolhido = document.getElementById('codigoProduto');

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
  return classificacao;
}

function exibirResultado(mensagem) {
  let saida = document.getElementById('resultado');

  if (saida instanceof HTMLElement) {
    saida.textContent = mensagem;
  }
}

function clicarNoBotao() {
  let mensagem = identificarItem();
  exibirResultado(mensagem);
}

function iniciar() {
  let verificarBtn = document.getElementById('verificarBtn');

  if (verificarBtn != null) {
    verificarBtn.addEventListener('click', clicarNoBotao);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
