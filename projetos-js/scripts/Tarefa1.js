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
    <p>Problema:</p>
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
    <p>Resultado:</p>
    <p class="saida">Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.</p>
</div>
`

}

// Perfect
// Sem duvidas
