// programa que amazena os dados da empresa
// construção de objetos

const usuario = {
    nome: "Diego",
    empresa: {
        nome: "Rocketseat",
        cor: "Roxo",
        foco: "Programação",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 260


        }
    }
}

console.log(`A empresa ${usuario.empresa.nome} está localizada na ${usuario.empresa.endereco.rua}, Nº ${usuario.empresa.endereco.numero}`)