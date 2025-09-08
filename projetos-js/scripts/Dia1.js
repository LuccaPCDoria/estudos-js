// =======================================
// ALGORITIMO 1
// =======================================
// Criar três variaveis
// saida: Meu nome é X, tenho Y anos e moro em Z.

function mostrarTarefa1(){
    
let nome = "Lucca"; 
let idade = 18;
let cidade = "João Pessoa";

console.log("Meu nome é " + nome + ", tenho " + idade + " anos e moro em " + cidade);

document.getElementById("tarefas").innerHTML = 
`
<div class="problema">
    <span>Problema:</span>
    <ul>
        <li>Criar três variaveis</li>
        <li>saida: Meu nome é X, tenho Y anos e moro em Z.</li>
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
    <pre><code class="language-javascript">let nome = "${nome}"; 
let idade = ${idade};
let cidade = "${cidade}";

console.log("Meu nome é " + nome + ", tenho " + idade + " anos e moro em " + cidade);
</code></pre>    
</div>
<div class="resultado">
    <span>Resultado:</span>
    <p class="saida">Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.</p>
</div>
`
Prism.highlightAll();

}

// Perfect
// Sem duvidas


// =======================================
// ALGORITIMO 2
// =======================================

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


// =======================================
// ALGORITIMO 3
// =======================================

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

  // Mostrando a estrutura do código
  document.getElementById("tarefas").innerHTML = 
  `
  <div class="problema">
    <span>Problema:</span>
    <ul>
        <li>Crie uma variável nota (de 0 a 10)</li>
        <li>
            Use if para verificar:
            <ul>
                <li>Se a nota for maior ou igual a 7 -> mostre "Aprovado".</li>
                <li>Se for entre 5 e 6 -> mostre "Recuperação".</li>
                <li>Se for menor que 5 -> mostre "Reprovado".</li>
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
<pre><code class="language-javascript">let nota = ${nota};

if(nota >= 7 && nota <= 10){
    console.log("Aprovado");
}else if(nota >= 5 && nota <= 6){
    console.log("Recuperação");
}else if(nota >= 0 && nota < 5){
    console.log("Reprovado");
}else{
    console.log("Erro ao apresentar o resultado");
}
</code></pre>    
</div>
<div class="resultado">
    <span>Resultado:</span>
    <p class="saida">
        <p class="saida">Nota: ${nota}</p>
        <p class="saida">Resultado: ${resultado}</p> 
    </p>
</div>
`
Prism.highlightAll();
}
// Perfect
// Sem duvidas

// =======================================
// ALGORITIMO 4
// =======================================

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
`
Prism.highlightAll();
}

// =======================================
// ALGORITIMO 5
// =======================================

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
`
Prism.highlightAll();
}