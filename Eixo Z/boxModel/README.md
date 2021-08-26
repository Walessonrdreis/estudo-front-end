Border
A propriedade border controla as bordas de uma caixa. Ela se divide em três sub-propriedades que são  <border-width, border-style, border-color>
<Boder-width:> Propriedade que usamos para controlar a espessura da borda, pode ser em valores numérico, geralmente em pixel, além dos valores especias:      thin, medium e thick ou seja : border-top-width:5px ou thin;

<Borde-style> : Essa sub-propriedade de border controla o estilo da borda, Exitem oito opções de estilo 1. solid  2. dotted  3. dashed 4. double 5. groove 6.ridge 7.inset e 8.outset ex: border-style:solid; ou em lugares especificos border-top-style:dashed; que seria a borda do topo possuiria essa caracteristica apenas ela
<Border-color> como o prprio nome ja diz serve para mudar a cor da borda assim como as duas outras propriedades tem a opção de escolher se toda borda ira possuir a mesma cor ou apenas algumas
Temos tambem a versão curata  da propriedade border que nos permite passar a espessura, estilo e cor da borda de uma única vez, chamada de Shorthand ex: 
<p { 
    border:4px dotted #000;
}>
Para remover a borda padrão definida como por exemplo input e buttom.  Para remover a borda desses elementos utilizamos o valor NONE como visto aseguir <
input, buttom {
    border: none;
}>