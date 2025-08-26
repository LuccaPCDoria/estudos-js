/** Crie duas variáveis numero1 e numero2
 * 
 * Faça um programa mostrar no console:
 *  Qual numero é maior
 *  Qual numero é menor
 *  Se são iguais 
 */

function mostrarTarefa4(){

let numero1 = 2;
let numero2 = 7;
let resultado = ""; // variável para armazenar o texto do resultado

if(numero1 > numero2){
    resultado = "O numero " +  numero1 + " é maior que o numero " + numero2;
}else if(numero1 == numero2){
    resultado = "O numero " +  numero1 + " é igual o numero " + numero2;
}else {
    resultado = "O numero " +  numero1 + " é menor que o numero " + numero2;
}

console.log(resultado);

document.getElementById("resultado").innerHTML =
`<p>${resultado}.</p>`;
document.getElementById("estrutura").innerHTML = 
`
<p>
 Estrutura:<br><br>
 let numero1 = ${numero1};<br>
 let numero2 = ${numero2};<br><br>

if(numero1 > numero2){<br>
&numsp;&numsp;console.log("O numero " +  numero1 + " é maior que o numero " + numero2);<br>
}else if(numero1 == numero2){<br>
&numsp;&numsp;console.log("O numero " +  numero1 + " é igual o numero " + numero2);<br>
}else {<br>
&numsp;&numsp;console.log("O numero " +  numero1 + " é menor que o numero " + numero2);<br>
}
</p>
`;
}