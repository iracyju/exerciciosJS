var arr=[1,2,3,4]


function myFunction(arg){
    return "Retorna o array" +arg;
}

function myFunction2(arg){
    return "Retorna o indice passado como argumento : "+arg[4]
}



var func=myFunction(['fernando',1,true,34])
console.log(func)



var func2=myFunction2([1,2,3,4,5])
console.log(func2)


