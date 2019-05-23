//pequena aplicacao com fim de treinamento dos operadores logicos

//declaracao das variaveis
var comprarRefrigerante = false;
var comprarCerveja = false;
var comprarSucoNatural = false;

//declaracao do objeto
var convidado = {
    nome: 'Pedro',
    idade: 18,
    bebeCerveja: true,
    bebeRefrigerante: true
}

//condicoes para comprar a bebida correta
if(convidado.bebeRefrigerante){
    comprarRefrigerante = true;
} else if(convidado.bebeCerveja && convidado.idade>=18){
    comprarCerveja = true;
} else{
    comprarSucoNatural = true;
}
