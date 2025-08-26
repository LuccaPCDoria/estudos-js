/** Crie uma variável nota (de 0 a 10)
 * 
 *  Use if para verificar:
 *  Se a nota for maior ou igual a 7 -> mostre "Aprovado".
 *  Se for entre 5 e 6 -> mostre "Recuperação".
 *  Se for menor que 5 -> mostre "Reprovado".
 */

function mostrarTarefa3(){

  let nota = 8;
  let resultado = ""; // variável para armazenar o texto do resultado

  if(nota >= 7 && nota <= 10){
      resultado = "Aprovado";
  }else if(nota >= 5 && nota <= 6){
      resultado = "Recuperação";
  }else if(nota >= 0 && nota < 5){
      resultado = "Reprovado";
  }else{
      resultado = "Erro ao apresentar o resultado";
  }

  console.log(resultado);

  // Mostrando o resultado na tela
  document.getElementById("resultado").innerHTML =
  `<p>Nota: ${nota} <br><br> Resultado: ${resultado}</p>`;

  // Mostrando a estrutura do código
  document.getElementById("estrutura").innerHTML = 
  `
  <p>
   Estrutura:<br><br>
   let nota = ${nota};<br><br>

   if(nota >= 7 && nota <= 10){<br>
   &numsp;&numsp;console.log("Aprovado");<br>
   }else if(nota >= 5 && nota <= 6){<br>
   &numsp;&numsp;console.log("Recuperação");<br>
   }else if(nota >= 0 && nota < 5){<br>
   &numsp;&numsp;console.log("Reprovado");<br>
   }else{<br>
   &numsp;&numsp;console.log("Erro ao apresentar o resultado");<br>
   }
  </p>
  `;
}
// Perfect
// Sem duvidas