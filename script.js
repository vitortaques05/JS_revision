function verificaIdade() {
    let idade = parseInt(prompt("Por favor, digite sua idade:"));

    (idade >= 18) ? alert("Entrada permitida"): alert("Desculpe, você não tem idade suficiente para entrar na festa.");
}

function calculadoraIMC() {
    let peso = parseFloat(prompt("Digite o seu peso (em kg):"));
    let altura = parseFloat(prompt("Digite a sua altura (em metros):"));

    let imc = peso / (altura ** 2);

    if (imc < 18.5) {
        alert("Você está abaixo do peso.");
    } else if (imc >= 18.5 && imc < 24.9) {
        alert("Você está no peso ideal.");
    } else {
        alert("Você está acima do peso.");
    }

    alert(`\nSeu IMC é: ${imc}`);


}

function converteMoeda() {

    const valorEmReais = parseFloat(prompt("Digite o valor em reais:"));

    const valorEmDolares = valorEmReais / 5; // taxa de cambio = 5

    alert(`R$${valorEmReais.toFixed(2)} em dólares é igual a $${valorEmDolares}`);

}

function verificaEstoque() {
    const estoque = 30;

    const quantidadeDesejada = parseInt(prompt("Informe a quantidade de produto desejado"));

    (quantidadeDesejada <= estoque) ? alert("Produto disponível!"): alert("Sem estoque!");
    alert(`Estoque: ${estoque} produtos `);
}

function calcularMediaPonderada() {
    let somaNotas = 0;
    let somaPesos = 0;

    for (let i = 1; i <= 3; i++) {
        const nota = parseFloat(prompt(`Digite a nota da prova ${i}:`));
        const peso = parseFloat(prompt(`Digite o peso da prova ${i}:`));

        somaNotas += nota * peso;
        somaPesos += peso;
    }

    alert(`A média ponderada das notas é: ${(somaNotas / somaPesos)}`); // media ponderada = somanotas / soma
}

function fazerListaCompras() {
    const lista = prompt("Informe a lista de compras (separe os itens com vírgula): ").split(',');

    for (let i = 0; i < lista.length; i++) {
        alert(lista[i]);
    }
}

function verificadorLogin() {
    const credenciais = {
        login: "usuario",
        senha: "senha123"
    };

    const login = prompt("Digite seu login: ");
    const senha = prompt("Digite sua senha: ");

    const loginCorreto = login === credenciais.login && senha === credenciais.senha;

    alert(loginCorreto ? "Login bem-sucedido!" : "Nome de usuário ou senha incorretos. Tente novamente.");

}

function calculaDesconto() {
    const valorOriginal = parseFloat(prompt("Digite o valor original do produto:"));
    const percentualDesconto = parseFloat(prompt("Digite o percentual de desconto (%):"));

    if (percentualDesconto < 0 || percentualDesconto > 100) {
        alert("O percentual de desconto deve estar entre 0 e 100.");
    } else {
        const desconto = (valorOriginal * percentualDesconto) / 100;
        const valorComDesconto = valorOriginal - desconto;

        alert(`O desconto é de R$${desconto.toFixed(2)}. O valor com desconto é R$${valorComDesconto.toFixed(2)}.`);
    }
}

// Eventos de clique de botão

document.getElementById("botao1").addEventListener("click", verificaIdade);
document.getElementById("botao2").addEventListener("click", calculadoraIMC);
document.getElementById("botao3").addEventListener("click", converteMoeda);
document.getElementById("botao4").addEventListener("click", verificaEstoque);
document.getElementById("botao5").addEventListener("click", calcularMediaPonderada);
document.getElementById("botao6").addEventListener("click", fazerListaCompras);
document.getElementById("botao7").addEventListener("click", verificadorLogin);
document.getElementById("botao8").addEventListener("click", calculaDesconto);