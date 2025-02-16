function realizarOperacao() {
  let entradaNum1 = document.getElementById('numero1');
  let entradaNum2 = document.getElementById('numero2');
  let entradaOperacao = document.getElementById('operacao');

  let resultado;
  //prettier-ignore
  let numero1 = 0, numero2 = 0, operacao = 0;

  if (entradaNum1 instanceof HTMLInputElement) {
    numero1 = parseFloat(entradaNum1.value);
  }
  if (entradaNum2 instanceof HTMLInputElement) {
    numero2 = parseFloat(entradaNum2.value);
  }
  if (entradaOperacao instanceof HTMLInputElement) {
    operacao = parseInt(entradaOperacao.value);
  }
  switch (operacao) {
    case 1:
      resultado = (numero1 + numero2) / 2;
      break;
    case 2:
      resultado = numero1 - numero2;
      break;
    case 3:
      resultado = numero1 * numero2;
      break;
    case 4:
      if (numero2 !== 0) {
        resultado = numero1 / numero2;
      } else {
        resultado = 'Erro: Divisão por zero!';
      }
      break;
    default:
      resultado = 'Escolha inválida. Por favor, insira um número de 1 a 4.';
  }
  return resultado;
}

function exibirResultado(resultado) {
  let saida = document.getElementById('resultado');

  if (saida instanceof HTMLElement) {
    saida.textContent = 'Resultado: ' + resultado;
  }
}

function clicarNoBotao() {
  let resultado = realizarOperacao();
  exibirResultado(resultado);
}

function iniciar() {
  let calcularBtn = document.getElementById('calcularBtn');

  if (calcularBtn != null) {
    calcularBtn.addEventListener('click', clicarNoBotao);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
