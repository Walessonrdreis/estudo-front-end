# Documentação CSS
<hr/>
<h2>Links Úteis:</h2>
<ul>
<li><strong><a href="https://www.w3schools.com/cssref/">Documentacao W3Scools</a></strong></li>
<li><strong><a href="https://developer.mozilla.org/pt-BR/">Documentacao MDN web monzilla</a></strong></li>
<li><strong><a href="https://fonts.google.com/">Fontes: Google Fonts</a></strong></li>

</ul>
<hr/>


1. <strong><code>transition:</code></strong> Permite definir a transição entre dois estados de um elemento, hover e outros como focus, active etc. no estado principal ele anima tanto na ida quant na volta(estado antes do hover etc)
___
2. <strong><code>filter</code></strong> usados para adicionar efeitos de filtro

## **FLEXBOX** ##
___
1. <strong><code>Display: flex</code></strong>
2. `flex-direction`
 alinha itens, pode receber valores: <strong><em>column: Posiciona os elementos em colunas de cima para baixo. column-reverse: Posiciona os elementos no sentido inverso do column. row: Valor padrão, posiciona os elementos na horizontal da esquerda para a direita, row-reverse posiciona os elementos na horizontal no sentido inverso, ao row </em></strong>
A sintaxe da propriedade `flex-direction` é a seguinte:

```css
flex-direction: valor;
```

Os valores possíveis para a propriedade `flex-direction` são:

 `row`: O valor padrão. Os itens flexíveis são colocados na direção horizontal, da esquerda para a direita.

 `row-reverse`: Os itens flexíveis são colocados na direção horizontal, da direita para a esquerda.

 `column`: Os itens flexíveis são colocados na direção vertical, de cima para baixo.

 `column-reverse`: Os itens flexíveis são colocados na direção vertical, de baixo para cima.

Aqui está um exemplo de uso da propriedade `flex-direction`:

```css
.container {
  display: flex;
  flex-direction: row; /* ou column, row-reverse, column-reverse */
}
```
___
3. <strong><code>justify-content</code></strong> Objetivo:</em></strong>Gerar um espaçamento entre os elementos de uma container e também definir seus posicionamentos. seus valores são <strong><em>flex-start:</em></strong> Elementos alinhados a esquerda do container: valor padrão. flex-end:</em></strong> Elementos alinhados a direita do container. <strong><em>center:</em></strong> Elementos alinhados ao centro do container. <strong><em>space-between:</em></strong> Distribui os elementos no container sem margem. <strong><em>apace-around:</em></strong> Distribui os elementos no container adicionando uma pequena margem. <strong><em>space-evenly:</em></strong> Distribui os elementos com espaço igual, incluindo a margem
<hr/>

4. <strong><code>flex-wrap:</code></strong> Quebra linha do container quando a largura da tela diminui.

A sintaxe da propriedade `flex-wrap` é a seguinte:

```css
flex-wrap: valor;
```

Os valores possíveis para a propriedade `flex-wrap` são:

 `nowrap`: O valor padrão. Os itens flexíveis são colocados em uma única linha (ou coluna) e podem ser redimensionados para caber na linha.

 `wrap`: Os itens flexíveis são quebrados em várias linhas (ou colunas) se não couberem em uma única linha (ou coluna).

 `wrap-reverse`: Os itens flexíveis são quebrados em várias linhas (ou colunas) se não couberem em uma única linha (ou coluna), mas a ordem é invertida.

Aqui está um exemplo de uso da propriedade `flex-wrap`:

```css
.container {
  display: flex;
  flex-wrap: wrap; /* ou nowrap, wrap-reverse */
}
```

<strong><code>flex-flow:</code></strong>
Funciona como uma forma abreviada das propriedades `flex-direction` e `flex-wrap`

A sintaxe da propriedade `flex-flow` é a seguinte:

```css
flex-flow: <flex-direction> <flex-wrap>;
```

Você deve especificar um valor para a direção (como `row`, `column`, etc.) e um valor para a quebra (como `nowrap`, `wrap`, etc.).

Aqui estão alguns exemplos de uso da propriedade `flex-flow`:

```css
.container {
  display: flex;
  flex-flow: row wrap; /* Direção: Horizontal, Quebra: Várias linhas */
}

.container {
  display: flex;
  flex-flow: column nowrap; /* Direção: Vertical, Quebra: Sem quebra */
}
```

5. <strong><code>Align-items</code></strong> Define como os elementos serão posicionados dentro do container


A sintaxe da propriedade `align-items` é a seguinte:

```css
align-items: valor;
```

Os valores possíveis para a propriedade `align-items` são:

`flex-start`: Alinha os itens flexíveis no início do contêiner.

`flex-end`: Alinha os itens flexíveis no final do contêiner.

`center`: Alinha os itens flexíveis no centro vertical do contêiner.

`baseline`: Alinha os itens flexíveis com a linha-base (linha de base) do texto.

`stretch`: Valor padrão. Os itens flexíveis são esticados para preencher a altura do contêiner.

Aqui está um exemplo de uso da propriedade `align-items` para alinhamento vertical:

```css
.container {
  display: flex;
  align-items: center; /* Ou flex-start, flex-end, baseline, stretch */
}
```
`OBSERVAÇão` O align-itens só tera efeito se o container tiver uma altura definida (Para cards posicionados em linha) 
### Propriedades exclusivas para elementos filhos ###

Essa propriedades são de uso exclusivo dos elementos filhos, ou seja, elas deven ser aplicadas no código CSS dos card (ou no CSS do conteúdo dos cards)

6. <strong><code>flex-grow</code></strong> Usada para evitar buracos no container, quando a quebra de linha, e definir o tamanho que um elemento filho tera em relação aos outros elementos filhos quando queremos que um card seja maior que outros


A sintaxe da propriedade `flex-grow` é a seguinte:

```css
flex-grow: valor;
```

O valor é um número que representa a proporção de espaço extra que o item flexível ocupará em relação aos outros itens flexíveis dentro do mesmo contêiner. Quanto maior o valor, mais espaço extra o item flexível ocupará em relação aos outros.

Aqui está um exemplo de uso da propriedade `flex-grow`:

```css
.item {
  flex-grow: 1; /* ou qualquer outro valor numérico */
}
```
<strong><code>flex-shrink</code></strong> Indica como um elemento filho terá seu tamanho reduzido para continuar a caber em um container 

A sintaxe da propriedade `flex-shrink` é a seguinte:

```css
flex-shrink: valor;
```


Aqui está um exemplo de uso da propriedade `flex-shrink`:

```css
.item {
  flex-shrink: 0.5; /* ou qualquer outro valor numérico */
}
```
7. <strong><code>flex-basis</code></strong> 
5. <strong><code>text-transform</code></strong> muda o formato das letras entre maiúsculas, minusculas etc.

6. <strong><code>letter-spacing</code></strong> espaço entre as letras

___
7. <strong><code>accent-color</code></strong>: Especifica cor de destaque de elementos de usuário , exemplo: input:checkbox
___
8. <strong><em><code>align-content</code></em></strong>: 
___
9. <strong><em><code>list-style</code></em></strong>: Remove sinalização da lista. bolinhas, números...
___
10. <strong><em><code>display: block</code></em></strong> :
___
11.  <strong><em><code>box-sizing</code></em></strong>:
___
12.  <strong><em><code>transform</code></em></strong>: Aplica uma transformação ao elemento 2D ou 3D. Permitindo girar, dimensionar, mover, desvia, etc.,

Referência do <strong><a href="https://www.w3schools.com/csSref/playdemo.asp?filename=playcss_transform" style="color:#389;"><em>transform</em></a></strong>. 
___
13. <strong><em><code>visibility</code></em></strong>:Determina a visibilidade do elemento escolhido 
___
14. <strong><em><code>opacity</code></em></strong>:
___
15. <strong><em><code>flex-direction</code></em></strong>:  
___
16. <strong><em><code>align-items</code></em></strong>: 
___
17. <strong><em><code>text-transform</code></em></strong>: 
___
18. <strong><em><code>letter-spacing</code></em></strong>: Espaço entre as letras.
___
19. <strong><em><code>text-decoration</code></em></strong>: Remove ou adiciona decoração do texto, usado principalmente para remover decoração de links valores: underline, overline, line-through, underline overline
___
20. <strong><em><code>min-width</code></em></strong>: Tamanho mínimo
____
21. <strong><em><code>animation</code></em></strong>: Animação recebe: name: nome da animação, quando criar o @keyframes.| duration: duração da animação, quanto tempo deve levar para completar um ciclo | timing-function: tempo que vai ocorrer as curvas de animação| delay: tempo antes de começar a animação|, iteration-count: quantas vezes irá repetir| , direction: onde vai ocorrer|, fill-mod: define o estilo antes e depois da operação
___

22. <strong><em><code>animation-timing-function</code></em></strong>: 

referência: <a href="https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp">animation-timing-function</a>
___
23. <strong><em><code>line-height</code></em></strong>: Altura da linha
24. <strong><em><code>font-family</code></em></strong>: Fonte a ser usada
25. <strong><em><code>font-weight</code></em></strong>: largura da fonte, letras...
26. <strong><em><code>position</code></em></strong>:  Defide a posicao dos elementos na tela além dos tipos de position que veremos a baixo, existe quatro valores possíveis para definir a posição do elemento position, que são top, right, left e bottom, que representa respectivamente topo, direita, esquerda e fundo tomando como referência a posição do elemento pai,  tipos de position: static, valor padrão, representa que não tem nehum position informado, relative: o elemento se posiciona em relação ao pai, absolute: o elemento sai da relação entre um elemento pai, não tendo referência, pode ficar em qualquer lugar da página. fixed: o elemento parece com o absolute, com a diferença quê o elemento ficará sempre na posição definida, independente de como a página é submentida a Scrolls. Ou seja mesmo movimentado a tela, o elemento ficará a vista.
27. <strong><em><code>display:grid ou -ms-grade <a href="https://www.devmedia.com.br/entendendo-o-gridsystem-em-css3/27721">Referencia</a></code></em></strong>: 
28. <strong><em><code>outline</code></em></strong>: 
29. <strong><em><code>font</code></em></strong>: 
30. <strong><em><code>padding-inline</code></em></strong>: 
31. <strong><em><code>outline-color</code></em></strong>: 
32. <strong><em><code>cursor</code></em></strong>: 
33. <strong><em><code>filter</code></em></strong>: Para acessibilidade por, contraste, opacidade...
34. <strong><em><code>text-decoration</code></em></strong>: Tracejado da fonte 

35. <strong><em><code>background-image</code></em></strong>: Define uma imagem de fundo.
36. <strong><em><code>background-repeat</code></em></strong>: Define como a imagem de fundo deve ser repetida.

37. <strong><em><code>background-position</code></em></strong>: Define a posição inicial da imagem de fundo.

38. <strong><em><code>background-size</code></em></strong>: Define o tamanho da imagem de fundo.

39. <strong><em><code>background-origin</code></em></strong>: Define a origem do posicionamento da imagem de fundo.

40. <strong><em><code>background-clip</code></em></strong>: Define a área em que a imagem de fundo será exibida.

41. <strong><em><code>background-attachment</code></em></strong>: Define se a imagem de fundo deve rolar com o conteúdo ou permanecer fixa.

42. <strong><em><code>background-blend-mode</code></em></strong>: Define o modo de mesclagem de várias imagens de fundo.

43. <strong><em><code>background-repeat-x</code></em></strong>: Define como a imagem de fundo deve ser repetida horizontalmente.

44. <strong><em><code>background-repeat-y</code></em></strong>: Define como a imagem de fundo deve ser repetida verticalmente.

45. <strong><em><code>background-position-x</code></em></strong>: Define a posição horizontal da imagem de fundo.

46. <strong><em><code>background-position-y</code></em></strong>: Define a posição vertical da imagem de fundo.

47. <strong><em><code>background-clip-text</code></em></strong>: Define a área de recorte do plano de fundo para o texto.

48. <strong><em><code>background-clip-padding</code></em></strong>: Define a área de recorte do plano de fundo para o preenchimento.

49. <strong><em><code>background-clip-content</code></em></strong>: Define a área de recorte do plano de fundo para o conteúdo.

50. <strong><em><code>background-origin-text</code></em></strong>: Define a origem do posicionamento do plano de fundo em relação ao texto.

51. <strong><em><code>background-origin-padding</code></em></strong>: Define a origem do posicionamento do plano de fundo em relação ao preenchimento.

52. <strong><em><code>background-origin-content</code></em></strong>: Define a origem do posicionamento do plano de fundo em relação ao conteúdo.

35. <strong><em><code>min-width</code></em></strong>: 
36. <strong><em><code>min-width</code></em></strong>: 
37. <strong><em><code>min-width</code></em></strong>: 
38. <strong><em><code>min-width</code></em></strong>: 
39. <strong><em><code>min-width</code></em></strong>: 
40. <strong><em><code>min-width</code></em></strong>: 
41. <strong><em><code>min-width</code></em></strong>: 
42. <strong><em><code>min-width</code></em></strong>: 
43. <strong><em><code>min-width</code></em></strong>: 
44. <strong><em><code>min-width</code></em></strong>: 
45. <strong><em><code>min-width</code></em></strong>: 
46. <strong><em><code>min-width</code></em></strong>: 
47. <strong><em><code>min-width</code></em></strong>: 
48. <strong><em><code>min-width</code></em></strong>: 
49. <strong><em><code>min-width</code></em></strong>: 








# importante
<div style=" padding:10px;
border:solid 4px #5c6790 ">


1. <strong><em><code>for =""</code></em></strong> serve para indicar que aquela tag, ou item pertence a outra, utilizando como valor o nome da classe da tag que ele pertence.

2.  <strong><em><code>:nth-child()</code></em></strong>: Em ocasiões onde tem tem mais de um filho, é possível escolher o necessário, sem a necessidade de referenciar especificamente. Adicionando uma numeração

3. o simbolo de <code>adição(+)</code>, é um seletor que significa o que está dentro do elemento principal(elemento Pai)no css.

4. <strong><em><code>liner-gradient()</code></em></strong>:valor da propriedade background. Usado para adicionar varias imagens que si conectam umas com as outras degradé 

5. <strong><em><code>cubic-bezier()</code></em></strong>: Define a mão as curvas da animação, com se move no inicio, no final ou no meio

</div>

## VALORES
1. <strong><em><code>translate()</code></em></strong>
2. <strong><em><code>rotate()</code></em></strong>
3. <strong><em><code>acale()</code></em></strong>
1. <strong><em><code>translateY()</code></em></strong>
1. <strong><em><code>translateX()</code></em></strong>
1. <strong><em><code>ease</code></em></strong>
1. <strong><em><code>ease-in-out</code></em></strong>
1. <strong><em><code>ease-in</code></em></strong>
1. <strong><em><code>ease-out</code></em></strong>
1. <strong><em><code>translate()</code></em></strong>
1. <strong><em><code>translate()</code></em></strong>
1. <strong><em><code>translate()</code></em></strong>
1. <strong><em><code>translate()</code></em></strong>




## Sub-Propriedades
<ol>
<li><strong><em><code>:hover</code></em></strong></li>
<li><strong><em><code>:focus</code></em></strong></li>
<li><strong><em><code>:valid</code></em></strong></li>
<li><strong><em><code>::after</code></em></strong></li>
<li><strong><em><code>::before</code></em></strong></li>
<li><strong><em><code>:is(outras :sub-props, :sub-props)</code></em></strong></li>
<li><strong><em><code>:hover</code></em></strong></li>
<li><strong><em><code>:hover</code></em></strong></li>
<li><strong><em><code>:hover</code></em></strong></li>

</ol>

<h2>Unidades de valores</h2>
<ol>
<li><strong><em><code>:cm</code></em></strong></li> centímetros. 
<li><strong><em><code>:mm</code></em></strong></li> milímetros. 
<li><strong><em><code>:in(1in = 96px = 2.54cm)</code></em></strong></li>inches(cm, mm, in, pt e pc) medias absolutas, não recomendada seu uso, pois essas medidas, apresenta tamanho exatamente o que é, não são recomendadas porque os tamanhos de telas variam muito.  
<li><strong><em><code>:pixels (px = 1/72 de in)(px)</code></em></strong></li>.Os pixels (px) são relativos ao dispositivos de visualização. Para dispositivos low-dpi, 1 px é um pixel de dispositivo(ponto) do display. Para impressoras e telas de alta resolução, 1px implica vários pixels de dispositivo.O px, portanto, não é definido como uma medida constante, mas algo que depende do tipo de dispositivo e o uso típico deste.
<li><strong><em><code>:points (1pt - 1/72 de in)(pt)</code></em></strong></li> centímetros. 
<li><strong><em><code>:picas(1pc = 12pt)(pc)</code></em></strong></li> centímetros. 
<li><strong><em><code>:em</code></em></strong></li> Simplesmente o tamanho da fonte. Em um elemento com a fonte de 2in, 1em será, portanto, 2in. Empresando tamanhos, como margins e paddings, com em significa que eles são relativos ao tamanho da fonte e se o usuário tem uma fonte grande (ex. uma tela grande) ou uma fonte pequena (ex. dispositivo handheld) , os tamanhos serão proporcionais. Declarações como 'text-indent: 1.5em' e 'margin: 1em' são extremamente comuns em CSS. 
<li><strong><em><code>:ex</code></em></strong></li> Seu propósito é expressar tamanhos relacionados à "altura do x" de uma fonte. A altura do x é, grosso modo, a altura de letras em minúsculo como a, c, m, ou o. Fontes que têm o mesmo tamanho (e, portanto, o mesmo em) podem variar muito o tamanho de suas letras em minúsculo, e, quando é importante que alguma imagem, por exemplo, se iguale à altura do x, a unidade ex está disponível. 
<li><strong><em><code>:rem (root em)</code></em></strong></li> É o tamanho de fonte do elemento raiz do documento. Diferentemente da (em), que pode ser diferente para cada elemento no <strong>rem</strong> é constante em todo elemento.
<li><strong><em><code>:vw</code></em></strong></li> Tamanho relativo à janela do leitor. <strong>vw</strong> é 1/100 da largura da janela. 
<li><strong><em><code>:vh</code></em></strong></li><strong>vh</strong> é 1/100 da altura da janela. 

</ol>
