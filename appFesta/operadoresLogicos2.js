var comprarCerveja = false;

var convidados = [
    {
        nome: 'Pedro',
        idade: 20,
        bebeRefrigerante: false,
        bebeCerveja: true
    },
    {
        nome: 'Maria',
        idade: 17,
        bebeRefrigerante: true,
        bebeCerveja: false
    },    
    {
        nome: 'Joao',
        idade: 19,
        bebeRefrigerante: true,
        bebeCerveja: true
    }
]

//Condicao: se qualquer pessoa beber cerveja, entao comprarCerveja tem que ser true

for(var i = 0; i<convidados.length; i++){
    console.log(convidados[i].nome, convidados[i].bebeCerveja)
    if(convidados[i].bebeCerveja){
        comprarCerveja = true;
        break;
    }
}

console.log(comprarCerveja)