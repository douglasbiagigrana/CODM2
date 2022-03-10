//1 
let altura = 1.75

//2
console.log(typeof altura)
// tipo number

//3
let Empregado = {
  nome: "Douglas",
  idade: 21,
  salario: 1000000,
  possuiRegisto: true
}
console.log(Empregado)

//4
//let pessoa = {}
//é um objeto vazio

//5
let pessoa = Empregado
console.log(`${pessoa.nome}, de idade ${pessoa.idade} e recebe um salario de R$${pessoa.salario}`)

//6
let pecas = [
  "processador",
  "fonteDeAlimentacao",
  "placaMae",
  "memoria",
  "discoRigido",
  "waterCooler",
  "gabinete"
]

//7
console.log(pecas[3])

//8
//console.log(a)
//var a = 1

//ira printar algo sem valor, pois como nao tivemos a variavel declarada a cima e sim em baixo
//ele vai reconhecer a variavel porem ela sem valor declarado a baixo