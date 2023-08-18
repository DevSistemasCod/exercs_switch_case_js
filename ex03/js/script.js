// Função para verificar e exibir a classificação do produto
function verificarClassificacao() {
    let codigo = parseInt(document.getElementById("codigoInput").value);
    let resultado = "";

    switch (codigo) {
        case 1:
            resultado = "Alimento não-perecível";
            break;
        case 2:
        case 3:
        case 4:
            resultado = "Alimento perecível";
            break;
        case 5:
        case 6:
            resultado = "Vestuário";
            break;
        case 7:
            resultado = "Higiene Pessoal";
            break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            resultado = "Limpeza e Utensílios Domésticos";
            break;
        default:
            resultado = "Código inválido";
            break;
    }

    let saida = document.getElementById("resultado");
    saida.innerText = `Classificação do Produto: ${resultado}`;
}

// Função principal que é chamada quando a página é carregada
function iniciar() {
    let verificarBtn = document.getElementById("verificarBtn");

    verificarBtn.addEventListener("click", function () {
        verificarClassificacao();
    });
}

// Adiciona um ouvinte de evento para quando a página estiver carregada
document.addEventListener("DOMContentLoaded", iniciar);
