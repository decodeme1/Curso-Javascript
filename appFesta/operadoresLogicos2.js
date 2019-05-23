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

for(var i = 0; i<convidados.length; i++){
    if(convidados[i].bebeCerveja){
        comprarCerveja = true;
    }
}

console.log(comprarCerveja)