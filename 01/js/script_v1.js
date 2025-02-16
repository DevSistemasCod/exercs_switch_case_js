function clicarNoBotao() {
  let resultado = document.getElementById('resultado');
  let entradaNumero = document.getElementById('estacaoInput');

  if (entradaNumero instanceof HTMLInputElement) {
    let numero = parseInt(entradaNumero.value);
    let mensagem;

    switch (numero) {
      case 1:
        mensagem = 'A Primeira estação do ano é a Primavera.';
        break;
      case 2:
        mensagem = 'O Verão é a estação mais quente do ano.';
        break;
      case 3:
        mensagem = 'O Outono é caracterizado pela queda das folhas.';
        break;
      case 4:
        mensagem = 'O Inverno é a estação mais fria do ano.';
        break;
      default:
        mensagem = 'Número inválido. Por favor, insira um número de 1 a 4.';
    }
    if (resultado instanceof HTMLElement) {
      resultado.textContent = mensagem;
    }
  }
}

function iniciar() {
  let verificarBtn = document.getElementById('verificarBtn');

  if (verificarBtn != null) {
    verificarBtn.addEventListener('click', clicarNoBotao);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
