// 1
var number = 0
while(number < 50) {
  number++
  console.log(number)
}

// 2
var numero = 1 
while(numero <= 100) {
  if(numero % 2 == 0) {
    console.log(`Par ${numero}`)
  }
  numero += 1
}

// 3
var contador = 1
while(contador <= 11) {
  console.log("Ola Mundo")
  contador++
}

// 4
var novoNumero = 1 
while(novoNumero <= 60) {
  if(novoNumero % 7 == 0 && !novoNumero % 5 == 0) {
    console.log(novoNumero)
  }
  novoNumero += 1
}

// 5
var numeroFatorial = 14
var total = numeroFatorial
//atribuindo o numeroFatorial ao total pois sera utilizado em uma multiplicacao
for (var x = 1; x < numeroFatorial; x++) {
  total *= x
  // 14 * 13 * 12 * 11 ...
}
console.log(`Resultado do fatorial de ${numeroFatorial} e ${total}`)