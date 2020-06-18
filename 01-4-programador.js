const dadosProgramador = {
    nome: "Carlos",
    idade: 32,
    tecnologias: [
        {nome: 'C++', especialidade: 'Desktop'},
        {nome: 'Python', especialidade: 'Data Science'},
        {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
}

console.log(`O usuario ${dadosProgramador.nome} tem ${dadosProgramador.idade} anos e usa a tecnologia ${dadosProgramador.tecnologias[0].nome} como especialidade em Dektop.`);
console.log(`Também usa a tecnologia ${dadosProgramador.tecnologias[1].nome} como especialidade em Data Science.`);
console.log(`E ${dadosProgramador.tecnologias[2].nome} como especialidade em Web/Mobile.`);