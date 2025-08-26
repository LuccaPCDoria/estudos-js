/** Crie um programa que:
 *  
 *  Tenha duas variáveis: numero1 e numero2.
 *  Tenha uma variável chamada operacao que pode ser: "soma", "subtracao", "multiplicacao", "divisao".
 *  Use if para verificar a operaçao escolhida e mostrar o resultado correto no console.log.
 */

function mostrarTarefa5(){

let numero1 = 7;
let numero2 = 10;
let operacao = "soma";
let resultado = "";

if(operacao == "soma"){
    resultado = numero1 + numero2;
}else if(operacao == "subtracao"){
    console.log(numero1 - numero2);
}else if(operacao == "multiplicacao"){
    console.log(numero1 * numero2);
}else if(operacao == "divisao"){
    console.log(numero1 / numero2);
}else {
    console.log("Metodo de operação não reconhecido"); 
}
document.getElementById("resultado").innerHTML =
`
<p>Operação = ${operacao}</p>
<p>Resultado = ${resultado}</p>`;
document.getElementById("estrutura").innerHTML = 
`
<p>
 Estrutura:<br><br>
 let numero1 = ${numero1};<br>
 let numero2 = ${numero2};<br>
 let operacao = "${operacao}";<br><br>

 if(operacao == "soma"){<br>
 &numsp;&numsp;console.log(numero1 + numero2);<br>
 }else if(operacao == "subtracao"){<br>
 &numsp;&numsp;console.log(numero1 - numero2);<br>
 }else if(operacao == "multiplicacao"){<br>
 &numsp;&numsp;console.log(numero1 * numero2);<br>
 }else if(operacao == "divisao"){<br>
 &numsp;&numsp;console.log(numero1 / numero2);<br>
 }else {<br>
 &numsp;&numsp;console.log("Metodo de operação não reconhecido");<br>
 }<br>
</p>
`;
}