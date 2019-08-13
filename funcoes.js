/*programacao funcional*/
/*objetos de primeira classe*/


/*==========objeto literal==============*/
var car = {
    brand:'chevrolet',
    model:'silverado',
};

/*============funcoes literais*================*/
function sum(x,y){
    return x+y;
}

/*=========nomeando funcoes==================*/
var func = function func(){};

/*========objeto============*/
function person(){
    return{
        
        name:'Juliana',
        lastName:'Silva',
        idade:32
      
    }
}

/*========objeto dentro da funcao======*/
function person(){

    var informacoes={
        name:'Iracy',
        lastName:'Silva',
        profissao:'Analista de sistemas'
    };
    return informacoes;
    
}

/*=======funcao retornando funcao=======*/

function adder(x){
    return function(y){
        return x+y;
    };
}

var add2=adder(2);
console.log('============',add2(3),'==============');
console.log('+++++++++++++',adder(2)(2),'+++++++++++')


console.log(car.model)

var funcSum=sum(5,6)
console.log('Retorno da funcao :',funcSum)

console.log('Retorna o objeto',person())

console.log(person().profissao)