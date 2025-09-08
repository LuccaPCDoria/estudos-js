// Use Math.random() para gerar um número entre 1 e 100.
// Mostre esse número.
// Depois use if/else para dizer:
// Se for menor que 50 → "Número baixo"
// Se for 50 ou maior → "Número alto".

let numero = Math.floor(Math.random() * 100);

console.log(numero);

if(numero < 50){
    console.log("Número Baixo.");
}else{
    console.log("Número alto.");
}