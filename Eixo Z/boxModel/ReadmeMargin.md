Margin 
 A prorpiedade margin é muito utillzada para criar distância entre os elementos de uma página. A maioria dos elementos possui uma valor padrão para essa propriedade.Até mesmo body possui uma margem padrão, assim como algumas propriedades, ela recebe um valor numérico em uma das unidades de medidadas do css, como pixel, entre outras. como todo elemento de caixa ela possui quatro margens: que é respectivamente Topo, Fundo Esquerda e Direita(top, right, bottom e left  ) esse valores são representados dessa forma : <p {
     margin-top:16px;
     margin-bottom:16px
     margin-right: 40px;
     margin-left:40px;
 }>
 se quisermos remover uma margem, basta atribuir o valor igual a zero <p{margin-left:0;}> dessa forma a margem esquerda será removida do elemento
  A propriedade margin possui um shorthand que facilita a sua escrita, pois com ele podemos passar valores para quatro margens de uma caixa de uma só vez que seria: margin : top right bottom e left; ou mais simplificado margin:top/bottom right/left;