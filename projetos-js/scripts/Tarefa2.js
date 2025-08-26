/** Crie duas variáveis numero1 e numero2
 * 
 * Mostre no console:
 *  A soma dos dois
 *  A subtração
 *  A multiplicação
 *  A divisão
 */

function mostrarTarefa2(){

let numero1 = 5;
let numero2 = 3;

console.log(numero1 + " + " + numero2 + " = " + (numero1 + numero2));
console.log(numero1 + " - " + numero2 + " = " + (numero1 - numero2));
console.log(numero1 + " * " + numero2 + " = " + (numero1 * numero2));
console.log(numero1 + " / " + numero2 + " = " + (numero1 / numero2));

document.getElementById("resultado").innerHTML =
`
<p>${numero1} + ${numero2} = ${numero1 + numero2}</p>
<p>${numero1} - ${numero2} = ${numero1 - numero2}</p>
<p>${numero1} * ${numero2} = ${numero1 * numero2}</p>
<p>${numero1} / ${numero2} = ${numero1 / numero2}</p>

`;
document.getElementById("estrutura").innerHTML = 
`
<p>
 Estrutura:<br><br>
 let numero1 = ${numero1};<br>
 let numero2 = ${numero2};<br><br>

 console.log(numero1 + " + " + numero2 + " = " + (numero1 + numero2));<br>
 console.log(numero1 + " - " + numero2 + " = " + (numero1 - numero2));<br>
 console.log(numero1 + " * " + numero2 + " = " + (numero1 * numero2));<br>
 console.log(numero1 + " / " + numero2 + " = " + (numero1 / numero2));<br>
</p>
`;
}
// Perfect
// Sem duvidas
