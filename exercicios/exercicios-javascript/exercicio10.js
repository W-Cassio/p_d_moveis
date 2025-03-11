let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numerosPares = numeros.filter(num => num % 2 === 0)
console.log("Números pares:", numerosPares)

let numerosMultiplicados = numeros.map(num => num * 2)
console.log("Números multiplicados por 2:", numerosMultiplicados)

let soma = numeros.reduce((acumulador, num) => acumulador + num, 0)
console.log("Soma de todos os números obtidos:", soma)