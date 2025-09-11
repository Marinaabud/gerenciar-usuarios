const usuarios = [
    
    { 
        nome: 'Matheus'
        email: 'matheus@gospel.com'
    },
    {
        nome: 'Marcos'
        email: 'marcos@gospel.com'

    },
    {
        nome: 'Lucas'
        email: 'lucas@gospel.com'

    },
    {
        nome: 'João'
        email: 'joao@gospel.com'

    }
 ];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);
}

function capturarPropriedadeDoUsuario(indiceDoUsuario, propriedade) {
    return usuarios.at(indiceDoUsuario) [propriedade];
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario

}