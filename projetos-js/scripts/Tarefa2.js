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

document.getElementById("tarefas").innerHTML = 
`
<div class="problema">
    <span>Problema:</span>
    <ul>
        <li>Crie duas variáveis numero1 e numero2</li>
        <li>
            Mostre no console:
            <ul>
                <li>A soma dos dois</li>
                <li>A subtração</li>
                <li>A multiplicação</li>
                <li>A divisão</li>
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

console.log(numero1 + " + " + numero2 + " = " + (numero1 + numero2))
console.log(numero1 + " - " + numero2 + " = " + (numero1 - numero2))
console.log(numero1 + " * " + numero2 + " = " + (numero1 * numero2))
console.log(numero1 + " / " + numero2 + " = " + (numero1 / numero2))
</code></pre>    
</div>
<div class="resultado">
    <span>Resultado:</span>
    <p class="saida">
        <p class="saida">${numero1} + ${numero2} = ${numero1 + numero2}</p>
        <p class="saida">${numero1} - ${numero2} = ${numero1 - numero2}</p>
        <p class="saida">${numero1} * ${numero2} = ${numero1 * numero2}</p>
        <p class="saida">${numero1} / ${numero2} = ${numero1 / numero2}</p>
    </p>
</div>
`
Prism.highlightAll();
}
// Perfect
// Sem duvidas
