let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"]

let maiusculas = frutas.map((fruta) => fruta.toUpperCase())
console.log(maiusculas);

let filtreA = frutas.filter((fruta) => fruta.includes("A"))
console.log(filtreA);

let comprimento = frutas.map((fruta) => fruta.length)

console.log(comprimento);

