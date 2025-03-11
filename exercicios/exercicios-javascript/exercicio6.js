let numeros = [10, 20, 30, 40, 50];

numeros.push(99) //Adiciona um número ao final do array.
console.log(numeros) 

numeros.shift() //Remove o primeiro número do array.
console.log(numeros) 

console.log(Math.max(...numeros)) //Encontra o maior número do array.

console.log(Math.min(...numeros)) //Encontra o menor número do array.
