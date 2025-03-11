let idade = 70

function verificarIdade(idade) {
    if (idade < 18) {
        console.log("Menor de idade")
    } else if (idade >= 18 && idade <65) {
        console.log("Maior de idade")
    } else {
        console.log("Idosa")
    }
}

verificarIdade(idade)