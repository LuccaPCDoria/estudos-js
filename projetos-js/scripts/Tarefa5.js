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

document.getElementById("tarefas").innerHTML = 
`
<div class="problema">
    <span>Problema:</span>
    <ul>
        <li>
            Crie um programa que:
            <ul>
                <li>Tenha duas variáveis: numero1 e numero2.</li>
                <li>Tenha uma variável chamada operacao que pode ser: "soma", "subtracao", "multiplicacao", "divisao".</li>
                <li>Use if para verificar a operaçao escolhida e mostrar o resultado correto no console.log.</li>
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
let operacao = "${operacao}";

if(operacao == "soma"){
    console.log(numero1 + numero2);
}else if(operacao == "subtracao"){
    console.log(numero1 - numero2);
}else if(operacao == "multiplicacao"){
    console.log(numero1 * numero2);
}else if(operacao == "divisao"){
    console.log(numero1 / numero2);
}else {
    console.log("Metodo de operação não reconhecido"); 
}
</code></pre>    
</div>
<div class="resultado">
    <span>Resultado:</span>
    <p class="saida">
        <p class="saida">Numero 1 = ${numero1} <br> Numero 2 = ${numero2}</p>
        <p class="saida">Operação = ${operacao}</p>
        <p class="saida">Resultado = ${resultado}</p>
    </p>
</div>
`;
}