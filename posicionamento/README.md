Posicionamento da página usando css
Dentro das propriedade position, temos as opçoes <fixed>, <relative> e <abasolute>, também aceita o valor static, que representa o valor padrão, mas ele não indeca posicionamento algum, os seja o valor é para nenhum posicionamento espcifico do elemento
opção <relative>, indica uma posição relativa do elemento pai
A posição é definida através de quatro propriedade:<top, bottom, left e right> que idicam a distancia entre o topo, base, esquerda e direita, sempre tomando como referência o posicionamento pai segue o exemplo a baixo:
.relatice-parent{background:#156236;}
.relative {
    background: #af8542;
    height: 100px;
    width: 300px;
    position: relative;
    top: 20px;
    left: 45px;
}
<RELATIVE>
<linha6> declaração da classe, e define o estilo para o elemento filho<linha 7> declaração da cor de fundo para elementos da classe relative <linha8> propridade de altura (height)  para o elemento <linha9> largura(width) para o elemento em pixels; <linha10 > indecia a posicão com a ´propriedade <position> para nossa classe, com o valor relative; <linha11> indica as distâncias com relção ao topo(top) e esquerda(left) em relação ao elemento pai, nesse caso em pixels, mas poderia ser usado em porcentagem ou <em> , uma medida relativa empregada no css. É imporante ressaltar que valores podem ser negativos.   

<ABSOLUTE>
Absoluto <absolute >.Ela faz com que o elemento da página saia da hierarquia estabelecida pelo html, na prática ele é dilho da página e não de um elemento qualquer no html definido. Assim, é possível posicionarmos esse elemento em qualquer lugar da página, independente do que temos lá. Isso pode ser útil em casos que precisamos posicionar um alerta em nossa página, por exemplo, e não queremos quebrar o layout. Apesar da posibilidade, é impotante utilizar o layout absoluto de forma responsável, uma vez que ele, por não fazer parte da hierarquia da página,Assim o funcionamento em dispositivos com resoluções menores, como tablets e smartfones, pode ser prejudcado.

absolute {
    background: #c590f5;
    height: 50px;
    width: 120px;
    position: absolute;
    top: 35px;
    right: 32px;

}

Elemento <FIXED> Com o elemnto fixed, ele corresponde, em termos de layout, ao navegador. isso significa que, mesmi que navegadores napágina para cima e para baixo, o elemento ficará na mesma posição sempre. Esse tipo de posicionamento é especialmente útil em casos de menu, para que o usuário não perca o contato com o navegador enquanto lê uma notícia, por exemplo.Sites com conteúdo extenso costumam adotar essa opção para melhorar a experiêcia do usuário 

