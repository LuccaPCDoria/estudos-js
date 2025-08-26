/** Crie um programa que:
 *  
 *  Tenha duas variáveis: numero1 e numero2.
 *  Tenha uma variável chamada operacao que pode ser: "soma", "subtracao", "multiplicacao", "divisao".
 *  Use if para verificar a operaçao escolhida e mostrar o resultado correto no console.log.
 */

let numero1 = 7;
let numero2 = 10;
let operacao = "não sei";

if(operacao == "soma"){
    console.log(numero1 + numero2);
}else if(operacao == "subtracao"){
    console.log(numero1 - numero2);
}else if(operacao == "multiplicacao"){
    console.log(numero1 * numero2);
}else if(operacao == "divisao"){
    console.log(numero1 / numero2);
}else {
    console.log("Metodo de operação não reconhecido"); 
}
