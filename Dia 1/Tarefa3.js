/** Crie uma variável nota (de 0 a 10)
 * 
 *  Use if para verificar:
 *  Se a nota for maior ou igual a 7 -> mostre "Aprovado".
 *  Se for entre 5 e 6 -> mostre "Recuperação".
 *  Se for menor que 5 -> mostre "Reprovado".
 */

let nota = 20;

if(nota >= 7 && nota <= 10){
    console.log("Aprovado");
}else if(nota >= 5 && nota <= 6){
    console.log("Recuperação");
}else if(nota >= 0 && nota < 5){
    console.log("Reprovado");
}else{
    console.log("Erro ao apresentar o resultado");
}

// Perfect
// Sem duvidas