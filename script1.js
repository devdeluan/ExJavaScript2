console.log("Exercício 1");

let prompt = require("prompt-sync")();

let nome = prompt("Digite o nome de usuário: ");
let senha = prompt("Digite a senha: ");


if (nome == "admin" && senha == "senha123") {
  console.log("Login aprovado");
} else {
  console.log("Login reprovado");
}