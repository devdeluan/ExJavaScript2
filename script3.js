console.log("Exercício 5");

let prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número: "));
let numero2 = parseInt(prompt("Digite um número: "));
let numero3 = parseInt(prompt("Digite um número: "));

if (numero < numero2 && numero2 > numero3) {
  console.log ("Os números estao em ordem crescente!!") 
} else {
  console.log ("Os números nao estao em ordem crescente") 
}