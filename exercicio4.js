/*5 - Faça um método que receba o peso e altura e o sexo de  uma pessoa, calcule o IMC e mostre no console o IMC da pessoa. */

function calcularIMC(peso,altura,sexo){
    
    Imc=peso/altura

    return Imc

}

var Imc=calcularIMC(67,1.60,"feminino")
console.log("Calculo IMC - Seu IMC é :======== "+Imc+ "======== e")

/*6 - Faça um metodo que receba o peso , a altura e o sexo  de uma pessoa e mostre no console se essa pessoa esta acima do peso. 
Para saber se a pessoa esta acima do peso  */


function calcularPesoIdeal(peso,altura,sexo){
    
  
    Imc=peso/altura
    sexo

    if(Imc<17){

        return "IMC : " + Imc + " Situação - Muito abaixo de peso, sexo : " +sexo
    }
    if(Imc>=17 && Imc<=18.49){
        return "IMC : " +Imc+ " Situação - Abaixo de peso, sexo : "+sexo
    }
    if(Imc>=18.5 && Imc<=24.99){
        return  "IMC : " +Imc+ " Situação - Peso normal, sexo :"+sexo
    }
    if(Imc<=18.5 && Imc<=24.99){
        return "IMC : " +Imc+ " Situação - Acima do peso, sexo : "+sexo
    }
    if(Imc<=30 && Imc<=34.99){
        return "IMC : " +Imc+ " Situação -Obesidade 1, sexo : " +sexo
    }
    if(Imc<=35 && Imc<=39.99){
        return "IMC : " +Imc+ " Situação - Obesidade 2 (Severa), sexo : "+sexo
    }
    if(Imc>40){
        return "IMC : " +Imc+ " Situação -Obesidade 3 (Morbida), sexo : "+sexo
    }
}


var Imc=calcularPesoIdeal(90,1.60,'feminino')
console.log(Imc)
