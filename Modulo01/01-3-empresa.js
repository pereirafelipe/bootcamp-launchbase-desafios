const usuario = {
    nome: 'Diego',
    empresa: {
        nome: "Rocketseat",
        cor: "roxo",
        foco: "programação",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        }
    }
}

console.log(`A empresa ${usuario.empresa.nome} está localizada na ${usuario.empresa.endereco.rua}, Nº${usuario.empresa.endereco.numero}`)
