// Crie uma função que receba nome como parâmetro.
// Quando chamada, a função deve retornar:
// "Bem-vindo, [nome]! Espero que aprenda muito JS!".
// Mostre o resultado no DOM.



function mostrarTarefa9(nomePessoa){
    let mensagem = `Bem-vindo, ${nomePessoa}! Espero que aprenda muito JS!`;
    console.log(mensagem);
    return mensagem;
}

// exemplo de chamada
mostrarTarefa9("Vanessa");