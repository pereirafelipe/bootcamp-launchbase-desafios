// Manuseia funções, metodos
// e estrutura de repetições

const usuarios = [
    {nome: 'Carlos', tencnologias: ["HTML", "CSS"]},
    {nome: 'Jasmine', tencnologias: ["JavaScript", "CSS"]},
    {nome: 'Felipe', tencnologias: ["HTML", "Node.js"]}
];

for (let usuario of usuarios){
    console.log(`${usuario.nome} trabalha com ${usuario.tencnologias.join(', ')}`)
}

function checaSeUsuarioUsaCSS(usuario){
    for (let tencnologia of usuario.tencnologias){
        if (tencnologia == 'CSS')
            return true 
    }
    return false
}

for (let i = 0; i < usuarios.length; i++){
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if (usuarioTrabalhaComCSS){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}