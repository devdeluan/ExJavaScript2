console.log("Exercício 1");

let prompt = require("prompt-sync")();

let nome = prompt("Digite o nome de usuário: ");
let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "));


if (anoNascimento >= 2005) {
  console.log(nome + " Menor de idade!!");
} else {
  console.log(nome + " Maior de idade!! ");
}