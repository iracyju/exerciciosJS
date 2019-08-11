/*1- Criar um metodo que receba dois numeros,  e retorne a mensagem dizendo se o primeiro numero e o maior, ou se o segundo numero e o maior. 
Mostre o resultado da operação no console. */

function doisValores(x,y){

    if(x>y){

        return "primeiro numero é maior"

    }else if(y>x){
        return "segundo numero é maior"
    }
}

var resultado = doisValores(10,15)

console.log( "Resultado da funcao doisValores é : ======" +resultado+ "======")


/*2 - Criar um metodo faça a soma de dois numeros, se os dois forem pares, ou faça a subtração, caso um dos números seja impar, e retorne o resultado da operação. 
Mostre o resultado da operação no console. 
*/

function  NumeroParOuImpar(a,b){

    if(a %2==0){

        return "numero é par"

    }else{
        return "numero é impar"
    }

    }

var resultoParOuImpar=NumeroParOuImpar(12,15)
console.log("Resultado da funcao NumeroParOuImpar é : ======" +resultoParOuImpar+ "=======")


function calcularValorSaqueFGTS(valorFGTS){

    if(valorFGTS <=2.000){

        valorSaque=valorFGTS*50.0/100

        return valorSaque
    }

    if(valorFGTS>2.000 && valorFGTS<5.000){

        valorSaque=valorFGTS*40.0/100

        return valorSaque

    }

}

var valorSaqueFGTS=calcularValorSaqueFGTS(4.500)
console.log(valorSaqueFGTS)


