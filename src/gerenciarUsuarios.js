/*
    Exemplo:
    {
        primeiroPropriedade: 'Valor',
        segundaPropriedade: 'Valor'
    }
*/

const usuarios = [
    {
        nome: 'Matheus',
        email: 'Matheus@gospel.com'
    },
    {
        nome: 'Marcos',
        email: 'Marcos@gospel.com'
    },
    {
        nome: 'Lucas',
        email: 'Lucas@gospel.com'
    },
    {
        nome: 'Joao',
        email: 'Joao@gospel.com'
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}