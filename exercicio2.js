/*3 - Crie um metodo que calcule e retorne quanto vc terá direito de sacar o seu FGTS, as regras para valor de saque são: 

Se o valor do FGTS for menor ou igual a 2.000, o saque permitido sera de 50%;

Se o valor do FGTS for maior que 2.000 e menor que 5.000, o valor do saque sera de 40%.

Se o valor do FGTS for maior que 5.000 e menor que 10.000, o valor do saque sera de 25%.

Se o valor do FGTS for maior que 10.000 o valor do saque sera de 10%. 

Faça o calculo do valor do saque e retorne o valor na função. Execute a função e mostre a saída no console. */

function calcularValorSaqueFGTS(valorFGTS){

    if(valorFGTS <=2.000){

        valorSaque=valorFGTS*0.50

        return valorSaque
    }

    if(valorFGTS>2.000 && valorFGTS<5.000){

        valorSaque=valorFGTS*0.40

        return valorSaque

    }
    if(valorFGTS>5.000 && valorFGTS<10.000){

        valorSaque=valorFGTS*0.25

        return valorSaque
    }

    if(valorFGTS>10.000){

        valorSaque=valorFGTS*0.010

        return valorSaque
    }
    
}


var valorSaqueFGTS=calcularValorSaqueFGTS(2.000)
console.log(valorSaqueFGTS)


