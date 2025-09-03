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
  `;
}
// Perfect
// Sem duvidas