/* function comparaNumeros(num1, num2) {
    const saoIguais = num1 === num2 ;
    const soma = num1 + num2;

    return saoIguais ? "São iguais" : "não são iguais"; (if ternário)

}*/

/* A atividade  é composta do seguinte exeercício.
    Criar uma função que recebe dois numeros como parametro
    Conferir se  os numeros são iguais
    Verificar se a soma é maior do que 10 ou menor do que 20
    Apresentar uma saida  na forma de string informando se os numeros são iguais ou não.
    Apresentar uma saida na forma de string informando se a soma dos numeros é maior do que
    10 ou menor do que 20*/

function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return '${primeiraFrase} ${segundaFrase}';
}

function criaPrimeiraFrase(num1, num2)  {
    let saoIguais = '';

    if(num1 !== num2){
        saoIguais = 'não';
    }

    return 'Os números ${num1} e $num2} ${sãoIguais} são iguais.'
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        resultado20 = 'maior';
    }

    return 'Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20';
}

console.log(comparaNumeros(1, 2));