function imc (altura, peso){
    return peso / (altura * altura);
}

var pessoas = [
    {
        nome: 'Pedro',
        altura: 1.83,
        peso: 80,
    },
    {
        nome: 'Maria',
        altura: 1.90,
        peso: 90,
    },
    {
        nome: 'Joao',
        altura:2.00,
        peso: 100,
    }
]

/* funcao com o for tradicional
for(var i=0; i<pessoas.length; i++){
    var resultado = imc(pessoas[i].altura, pessoas[i].peso);
    console.log("O IMC de", pessoas[i].nome, " = ", resultado);
}
*/

//for each no javascript
for(var pessoa of pessoas){
    var resultado = imc(pessoa.altura, pessoa.peso);
    console.log("O IMC de", pessoa.nome, " = ", resultado);
}