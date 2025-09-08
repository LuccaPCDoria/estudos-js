// Peça um número n.
// Use um while para somar todos os números de 1 até n.
// Exiba o resultado final.
// Exemplo:
// Se n = 5, o programa deve mostrar 15 (pois 1 + 2 + 3 + 4 + 5 = 15).

// 1) importa o módulo readline, que fornece ferramentas para ler/ escrever no terminal
const readline = require("readline");

// 2) cria uma "interface" de leitura/escrita conectada ao stdin (entrada) e stdout (saída)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// // Função genérica para texto
// function perguntarString(mensagem, callback) {
//   rl.question(mensagem, function(resposta) {
//     let string = resposta; // recebe o texto
//     callback(string); // chama a lógica que o usuário passar
//   });
// }

// Função genérica para numero
function perguntarNumero(mensagem, callback) {
  rl.question(mensagem, function(resposta) {
    let numero = parseInt(resposta, 10); // converte para número
    callback(numero); // chama a lógica que o usuário passar
  });
}

// 3) pergunta ao usuário (texto aparece no terminal) e registra um callback que será executado
perguntarNumero("Digite um número: ", function(numero) {
  let resultado = 0;
  for (let i = 1; i <= numero; i++) {
    resultado += i;
  }
 
  // 5) saída no terminal com o resultado
  console.log(`A soma de 1 até ${numero} é = ${resultado}`);

  // 6) fecha a interface readline (importante para terminar o programa)
  rl.close();
});
