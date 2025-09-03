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

document.getElementById("tarefas").innerHTML = 
`
<div class="problema">
    <span>Problema:</span>
    <ul>
        <li>Crie duas variáveis numero1 e numero2</li>
        <li>
            Faça um programa mostrar no console:
            <ul>
                <li>Qual numero é maior</li>
                <li>Qual numero é menor</li>
                <li>Se são iguais</li>
            <ul>
        </li>
    </ul>
</div>
<div class="algoritimo">
<div>
    <span>Algoritimo:</span>
    <div class="bolinhas">
        <div class="bolinha-vermelha"></div>
        <div class="bolinha-amarela"></div>
        <div class="bolinha-verde"></div>
    </div>
</div>
<pre><code class="language-javascript">let numero1 = ${numero1};
let numero2 = ${numero2};

if(numero1 > numero2){
    console.log("O numero " +  numero1 + " é maior que o numero " + numero2)
}else if(numero1 == numero2){
        console.log("O numero " +  numero1 + " é igual o numero" + numero2)
}else {
    console.log("O numero " +  numero1 + " é menor que o numero " + numero2)
}
</code></pre>    
</div>
<div class="resultado">
    <span>Resultado:</span>
    <p class="saida">
        ${resultado}
    </p>
</div>
`;
}