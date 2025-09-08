// Peça um número n.
// Use um while para somar todos os números de 1 até n.
// Exiba o resultado final.
// Exemplo:
// Se n = 5, o programa deve mostrar 15 (pois 1 + 2 + 3 + 4 + 5 = 15).


let numero = 5;
let num = 1;
let resultado = 0;

while (num <= numero) {
    resultado = resultado +   num;
    num++;
}
console.log(resultado)