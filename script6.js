console.log ("Exercício 8 ");

let prompt = require("prompt-sync")();

let peso = parseInt(prompt("Digite seu peso: "))
let altura = parseFloat(prompt("Digite sua altura: "))
let imc = peso / (altura * altura)

if (imc <= 18.5) 
{
    console.log ("====================")
    console.log ("Seu IMC É: "+ imc.toFixed(1))
    console.log ("Voce está abaixo do peso ")
    console.log ("====================")
}


else if (imc >= 18.5 && imc <= 24.9 ) 
{
    console.log ("====================")
    console.log ("Seu IMC É: "+ imc.toFixed(1))
    console.log ("Seu peso está normal!! ")
    console.log ("====================")
}


else if (imc >= 25.0 && imc <= 29.9 ) 
{
    console.log ("====================")
    console.log ("Seu IMC É: "+ imc.toFixed(1))
    console.log ("Voce está com sobrepeso!! ")
    console.log ("====================")
}


else if (imc >= 30.0 && imc <= 34.9 ) 
{
    console.log ("====================")
    console.log ("Seu IMC É: "+ imc.toFixed(1))
    console.log ("Voce está com obesidade grau 1 ")
    console.log ("====================")
}

else if (imc >= 35.0 && imc <= 39.9 ) 
{
    console.log ("====================")
    console.log ("Seu IMC É: "+ imc.toFixed(1))
    console.log ("Voce está com obesidade grau 2 ")
    console.log ("====================")
}

else if (imc >= 40.0)
{
    console.log ("====================")
    console.log ("Seu IMC É: "+ imc.toFixed(1))
    console.log ("Voce está com obesidade grau 3 ")
    console.log ("====================") 
}