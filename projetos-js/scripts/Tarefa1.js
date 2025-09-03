// Criar três variaveis
// saida: Meu nome é X, tenho Y anos e moro em Z.

function mostrarTarefa1(){
    
let nome = "Lucca"; 
let idade = 18;
let cidade = "João Pessoa";

console.log("Meu nome é " + nome + ", tenho " + idade + " anos e moro em " + cidade);

document.getElementById("questao").innerHTML = 
`
<h2>Criar três variaveis</h2>
<h2>Saida: Meu nome é X, tenho Y anos e moro em Z. </h2>
`

document.getElementById("resultado").innerHTML =
`<p style="border-top: 2px solid black;">Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.</p>`;
document.getElementById("estrutura").innerHTML = 
`
<p style="border-top: 2px solid black;">
 Estrutura:<br><br>
 let nome = "${nome}";<br>
 let idade = ${idade};<br>
 let cidade = "${cidade}";<br><br>

 console.log("Meu nome é " + nome + ", tenho " + idade + " anos e moro em " + cidade);
</p>
`;

}

// Perfect
// Sem duvidas
