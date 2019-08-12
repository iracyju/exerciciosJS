/*4 - Faça um método que calcule o valor do Imposto de renda de um funcionário. */

/**
 * JavaScript, por algum motivo, nao identifica valores decimais com virgula, e nao separa casa de milhar com ponto. 
 * ou seja o numero um Mil e quinhentos, tem q ser escrito da seguinte forma : 1500
 * o numero "dois  e meio" tem q ser escrito da segunte forma : 2.5 
 */
function calcularIR(salarioFuncionario){

if(salarioFuncionario>=1903 && salarioFuncionario<=2826){
    valorDesconto=salarioFuncionario *7.5
    var isTrue =( salarioFuncionario>=1.903,99 );
    console.log("entrou primeiro if ",isTrue)
    return valorDesconto
}

if(salarioFuncionario>=2826.66 && salarioFuncionario<=3751.05){
    valorDesconto=salarioFuncionario *0.15
    console.log("entrou segundo if ")
    return valorDesconto
}

if(salarioFuncionario>=3751.06 && salarioFuncionario<=4664.68){
    valorDesconto=salarioFuncionario *0.22,5
    console.log("entrou terceiro if ")
    return valorDesconto
    
}
if(salarioFuncionario>=4664.68){
    valorDesconto=salarioFuncionario *0.27
    console.log("entrou quarto if ")
    return valorDesconto
}

    return "insento de IR"


}

valorDescontoIR=calcularIR(1501)
console.log(valorDescontoIR)