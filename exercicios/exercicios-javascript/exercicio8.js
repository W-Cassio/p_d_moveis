
let pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "São Paulo"
};

pessoa.uf = "São Paulo" //Adicionado uma nova propriedade ao objeto.
console.log(pessoa)

delete pessoa.idade //Removendo uma propriedade do objeto.
console.log(pessoa)

console.log("Propriedades do objeto:",Object.keys(pessoa))
