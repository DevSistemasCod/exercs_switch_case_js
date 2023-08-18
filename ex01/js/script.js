// Função que exibe informações sobre a estação com base no número fornecido
function exibirInformacoes(estacao) {
    // Obtém o elemento de saída onde as informações serão exibidas
    let saida = document.getElementById("resultado");

    // Usa um switch case para determinar a informação da estação com base no número
    switch (estacao) {
        case 1:
            saida.innerText = "Primeira: É a estação das flores e renovação.";
            break;
        case 2:
            saida.innerText = "Verão: A estação mais quente do ano, com dias ensolarados.";
            break;
        case 3:
            saida.innerText = "Outono: As folhas caem e o clima começa a esfriar.";
            break;
        case 4:
            saida.innerText = "Inverno: O frio predomina e algumas regiões podem ter neve.";
            break;
        default:
            saida.innerText = "Número inválido. Insira um número de 1 a 4.";
            break;
    }
}

// Função de inicialização 
function iniciar() {
    let exibirBtn = document.getElementById("exibirBtn");
    exibirBtn.addEventListener("click", function () {
        // Obtém o valor inserido pelo usuário e converte para um número inteiro
        let estacaoInput = parseInt(document.getElementById("estacaoInput").value);

        // Chama a função exibirInformacoes para mostrar as informações correspondentes
        exibirInformacoes(estacaoInput);
    });
}

// Adiciona um ouvinte de evento ao evento "DOMContentLoaded" para iniciar a função "principal"
document.addEventListener("DOMContentLoaded", iniciar);

