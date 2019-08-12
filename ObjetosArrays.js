var obj={
    propriedade:"Fernando",
    curso:"js-ninja",
    ninja:true


}
function myFunction(argumento){
    return '========== ' +argumento;
}
function myFunction2(obj){
    return '========== ' +obj;
}



 var myFunc= myFunction2(obj.propriedade)
console.log(myFunc)