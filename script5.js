console.log("Exercício 7");

let prompt = require("prompt-sync")();

let valorCompra = parseFloat(prompt("Digite o valor da compra: "));

let desconto = valorCompra * 0;
let desconto2 = valorCompra * 0.1;
let desconto3 = valorCompra * 0.2;

if (valorCompra > 100.01 && valorCompra <= 200.00) {
    valorCompra = valorCompra - desconto2;
    console.log("Valor da compra com 10% de desconto: " + valorCompra );
} else if (valorCompra > 200.00) {
    valorCompra = valorCompra - desconto3;
    console.log("Valor da compra com 20% de desconto: " + valorCompra );
} else if (valorCompra <= 100.00) {
    valorCompra = valorCompra - desconto;
    console.log("Valor da compra: " + valorCompra);
}