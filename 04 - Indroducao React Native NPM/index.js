// Modulos ES6 -> Exportando
import { calcularIMC, TabaleIMC } from "./CalculadoraIMC.js"

console.log("Calculo do IMC")


console.log(">>> Tabela do IMC <<<")
console.table(TabaleIMC)

const peso = 80
const altura = 1.70

const resultado = calcularIMC(peso, altura)

console.log("Resultado do IMC")
console.log(`IMC: ${resultado.toFixed(2)}`)

// Importando lib moment e usando
import moment from "moment"

const hoje = moment().locale('pt-br')


console.log("Hoe é: ")
console.log(hoje.format('DD//MM/yyy'))