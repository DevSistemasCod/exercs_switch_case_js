// Função para realizar a operação com base na escolha do usuário
function realizarOperacao(operacao, num1, num2) {
    switch (operacao) {
        case "1":
            // Média entre os números digitados
            return ((num1 + num2) / 2);
        case "2":
            // Diferença entre os números
            return (num1 - num2);
        case "3":
            // Produto entre os números digitados
            return (num1 * num2);
        case "4":
            // Divisão do primeiro número pelo segundo número
            return (num1 / num2);
        default:
            // Caso a operação seja inválida
            return "Operação inválida.";
    }
}

// Função para exibir o resultado na página
function exibirResultado(resultado) {
    let saida = document.getElementById("resultado");
    saida.innerText = "Resultado: " + resultado;
}

// Função principal que é chamada quando a página é carregada
function iniciar() {
    // Captura o botão de calcular
    let calcularBtn = document.getElementById("calcularBtn");

    // Adiciona um evento de clique ao botão
    calcularBtn.addEventListener("click", function () {
        // Obtém os valores digitados pelo usuário
        let numero1 = parseFloat(document.getElementById("numero1").value);
        let numero2 = parseFloat(document.getElementById("numero2").value);
        let operacao = document.getElementById("operacao").value;

        // Realiza a operação e obtém o resultado
        let resultado = realizarOperacao(operacao, numero1, numero2);

        // Exibe o resultado na página
        exibirResultado(resultado);
    });
}

// Adiciona um ouvinte de evento para quando a página estiver carregada
document.addEventListener("DOMContentLoaded", iniciar);
