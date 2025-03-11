// Sistemas de Modulos (ES6) -> Exportando

export const TabaleIMC = [
    { limite: 18.5, classificacao: "Magreza"},
    { limite: 18.5, classificacao: "Normal"},
    { limite: 18.5, classificacao: "Sobrepeso"},
    { limite: 18.5, classificacao: "Obesidade Grau I"},
    { limite: 18.5, classificacao: "Obesidade Grau II"},
    { limite: 18.5, classificacao: "Obesidade Grau III"},
]
    

 export const calcularIMC = (peso, altura) => {
    return peso / (altura * altura)
}