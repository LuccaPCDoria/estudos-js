// Crie um programa que conte de 1 até 20.
// Se o número for par, escreva "X é par".
// Se for ímpar, escreva "X é ímpar".



for (let i = 1; i <= 20; i++) {
    let resultado = i % 2;
    if(resultado == 0){
        console.log(`${i} é par.`)
    }else{
        console.log(`${i} é impar.`)
    }
}