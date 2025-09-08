// Peça um numero (fixo no código por enquanto)
// Use um for para exibir a tabuada desse numero (de 0 a 10).
// Mostre o resultado na tela do (DOM)

let numero = 1;
tabuada = "";

for(let i = 0; i <= 10; i++){
    let resultado = numero * i; 
    console.log(`${numero} x ${i} = ${resultado}`)
    tabuada += `<p>${numero} x ${i} = ${resultado}</p>`
}



