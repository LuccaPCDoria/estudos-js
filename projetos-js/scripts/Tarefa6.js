// Peça um numero (fixo no código por enquanto)
// Use um for para exibir a tabuada desse numero (de 0 a 10).
// Mostre o resultado na tela do (DOM)



function mostrarTarefa6() {
let numero = 1;
tabuada = "";
let i = 0;
let resultado = 0;
for(i = 0; i <= 10; i++){

    let resultado = numero * i; 
    console.log(`${numero} x ${i} = ${resultado}`)
    tabuada += `<p>${numero} x ${i} = ${resultado}</p>` 

}

document.getElementById("tarefas").innerHTML = 
`
<div class="problema">
    <span>Problema:</span>
    <ul>
        <li>Peça um numero (fixo no código por enquanto)</li>
        <li>Use um for para exibir a tabuada desse numero (de 0 a 10).</li>
        <li>Mostre o resultado na tela do (DOM)</li>
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
<pre><code class="language-javascript">let numero = ${numero};

for(let i = 0; i <= 10; i++){
    let resultado = numero * i; 
    console.log(numero " x " i " = " resultado)
}
</code></pre>    
</div>
<div class="resultado">
    <span>Resultado:</span>
    <p class="saida">${tabuada}</p>
</div>
`
Prism.highlightAll();

}  
    

