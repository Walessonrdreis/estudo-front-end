//variáveis
var demo = document.getElementById('demo');
var demo1 = document.getElementById('demo1');
var demo2 = document.getElementById('demo2');
var demo3 = document.getElementById('demo3');
var demo4 = document.getElementById('demo4');
var demo5 = document.getElementById('demo5');
var demo6 = document.getElementById('demo6');
var demo7 = document.getElementById('demo7');
var demo8 = document.getElementById('demo8');
var demo9 = document.getElementById('demo9');
var demo10 = document.getElementById('demo10');

/* for 
*/
let text = "";
for ( let contador = 0; contador <= 10; contador++ ){
    
    text += "O número é: " + contador + "<br>";

}
demo.innerHTML = text;
/* while*/
let contador = 0;
let text1 = "";

while ( contador < 5 ) {
    //o mesmo que text1 = text1 + contador...
    text1 += contador + " é menor que 5" + "<br>" ;

    contador ++;

}
demo1.innerHTML = text1;
//total de parcelas e valor da parcela individual
 let valor_produto = 500;
 let text2 = "";

for ( let contador = 1; contador <= 6; contador++ )
{
    let valor_parcela = valor_produto / contador;
    text2 += "Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2) +"<br>";
}
demo2.innerHTML = text2;
//
let valor_produto1 = 500;
let text3 = "";
let total_parcelas = 4; // valor informado pelo usuário

for ( let contador = 1; contador <= total_parcelas; contador++ )
{
    let valor_parcela = valor_produto1 / contador;
    text3 += "Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2)+"<br>";
}
demo3.innerHTML = text3;

// Nº de parcelas: 1 - Valor da parcela: R$500.00
// Nº de parcelas: 2 - Valor da parcela: R$250.00
// Nº de parcelas: 3 - Valor da parcela: R$166.67
// Nº de parcelas: 4 - Valor da parcela: R$125.00


//exemplo documentação Mozilla
function howMany(selectObject) {
    var numeroSelecionadas = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numeroSelecionadas++;
      }
    }
    return numeroSelecionadas;
  }
  
  var btn = document.getElementById("btn");
  btn.addEventListener("click", function(){
    alert('Total de opções selecionadas: ' + howMany(document.selectForm.tipoMusica))
  });