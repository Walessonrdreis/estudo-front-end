Entendendo como funciona o eixo Z

EIxo <HORIZONTAL (X) EIxo VERTICAL (Y)>

A propriedade z-index trabalha com um eixo que não é muito conhecido e tampouco usado pela maioria dos desenvolvedores, o eixo Z. O eixo Z é o responsável pelo cálculo e posicionamento da profundidade de algum elemento estará mais próximo ou afastado da tela. Ceenario de prédio:                       X= Equivale a quantidade de metros da parte da frente do prédio                        Z= Equivale a quantidade de metros da porta da frente ao fundo do prédio                        Y= Wquivale a altura do prédio;

Forçando com que o box verde fique na frente de todos os outros, usando o z-index  

/*#posiciona1{
background-color: #F00;
width: 50px;
height: 50px;
position: absolute;
top:40px;

}

#posiciona2{
background-color: #0F0;
width: 50px;
height: 50px;
position: absolute;
top:65px;
z-index:4;
}

#posiciona3{
background-color: #00F;
width: 50px;
height: 50px;
position: absolute;
top:100px;
} */        
caso quira que a caixa vermelha seja a amaior, basta aplicar um z-index maior nele por exemplo z-index:5


