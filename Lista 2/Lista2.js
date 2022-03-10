//1
console.log("QUESTAO 1")
var letra = "a"

if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
  console.log(`${letra} é uma vogal`)
} else {
  console.log(`${letra} é uma consoante`)
}

//2
console.log("QUESTAO 2")
var nota1 = 5
var nota2 = 5
var soma = (nota1 + nota2) / 2

if(soma == 10) {
  console.log("Aprovado com Distinção")
} else if (soma >= 7) {
  console.log("Aprovado")
} else {
  console.log("Reprovado")
}

//3
console.log("QUESTAO 3")
var a = 1001
var b = 100
var c = 15

if(a > b && a > c) {
  console.log(a)
} else if(b > a && b > c) {
  console.log(b)
} else {
  console.log(c)
}

//4
console.log("QUESTAO 4")
var categoria = 1
switch (categoria) {
  case 1:
    console.log("Domingo")
    break;
  case 2:
    console.log("Segunda")
    break;
  case 3:
    console.log("Terça")
    break;
  case 4:
    console.log("Quarta")
    break;
  case 5:
    console.log("Quinta")
    break;
  case 6:
    console.log("Sexta")
    break;
  case 7:
    console.log("Sábado")
    break;

  default:
    console.log("Entrada Invalida")
    break;
}

//5
console.log("QUESTAO 5")
var jogo = 6

if(jogo % 2 == 0) {
  console.log(`${jogo} e par`)
} else {
  console.log(`${jogo} e impar`)
}