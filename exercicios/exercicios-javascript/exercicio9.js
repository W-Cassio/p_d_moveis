let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R. Tolkien",
    ano: 1954
};

let { titulo, autor } = livro
console.log("Título:", titulo)
console.log("Autor:", autor)   

function teste(livro) {
    let { titulo, autor } = livro;
    return `Livro: ${titulo} escrito por ${autor}.`
}

console.log(teste(livro))