/*4 - Faça um método que calcule o valor do Imposto de renda de um funcionário. */

function calcularIR(salarioFuncionario){

if(salarioFuncionario>=1.903,99 && salarioFuncionario<=2.826,65){
    valorDesconto=salarioFuncionario *7.5

    return valorDesconto
}

if(salarioFuncionario>=2.826,66 && salarioFuncionario<=3.751,05){
    valorDesconto=salarioFuncionario *0.15
    return valorDesconto
}

if(salarioFuncionario>=3.751,06 && salarioFuncionario<=4.664,68){
    valorDesconto=salarioFuncionario *0.22,5
    return valorDesconto
    
}
if(salarioFuncionario>=4.664,68){
    valorDesconto=salarioFuncionario *0.27
    return valorDesconto
}
else {
    return "insento de IR"
}

}

valorDescontoIR=calcularIR(1.500)
console.log(valorDescontoIR)