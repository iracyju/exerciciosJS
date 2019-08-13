var arr =['Dack',null,true,{bola:'azul'},function(){}];

console.log(arr)
console.log(arr.length)
console.log('Retorna o indice do array especificado e a propriedade do objeto : '+arr[3].bola)/*indicce do objeto*/

/*metodo push*/

var meuArr=[1,2,3,"Deck",{bola:'azul'},['la','la2','la3']];
meuArr.push({carro:'BMW'});
meuArr.push(function soma(x,y){return x+y});/*adiconando uma funçao no array*/


console.log(meuArr.length)
console.log(meuArr)
console.log(meuArr[6].carro)
console.log(meuArr[5][2])/*retorna indice de um array dentro de outro array*/
console.log('Retorna funçao add no array : '+meuArr[7])
console.log('chamada da funçao : '+meuArr[7]()) 
console.log('resultada da soma : '+meuArr[7](3,5)) 
