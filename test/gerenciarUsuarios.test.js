const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funçoes de Gestao de usuarios', function () {
    it('Validar que posso adicionar um novo nome de usuario na lista', function() {
        //1.Adicionar um novo nome na lista de usuarios
        adicionarNovoUsuario({
            nome: 'Maria',
            email: 'maria@gospel.com'
        });

        //2.retornar a lista de usuariosna caixa 
        const listaDeUsuarios = retornarUsuarios();

        //3. comparar se o novo nome esta no fim da lista de usuarios
        //expect(listaDeUsuarios.at(-1).nome).to.equal('Maria');
        //expect(listaDeUsuarios.at(-1).email).to.equal('maria@gospel.com');
        expect(listaDeUsuarios.at(-1)).to.eql({ //to.deep.equal
            nome: 'Maria',
            email: 'maria@gospel.com'
         });

    })
});