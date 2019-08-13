var car={
    collor:'yellow'
};

function getCarCollor(mycar){
    return mycar.collor;
}


function showOtherFunction(func){
    return func();

}

function returdedFunction(){
    return 'Returned function';
}

console.log(showOtherFunction(returdedFunction));



console.log('passando objeto como paramentro e retornando um valor :'+getCarCollor(car))


