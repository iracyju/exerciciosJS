var arr =['Dack',null,true,{bola:'azul'},function(){}];
arr.length
console.log(arr.length)

/*loop
var num=0;
while(num <10){
    console.log(num++);
}
*/
arr[0];
'dack'
arr[1];
null
arr[2];
true
arr[3];
{bola:'azul'}
arr[4];
[Function]
arr[5]

var qtd=arr.length;
console.log(qtd)


while(qtd>0){
    console.log(arr[qtd--]);
}


while(qtd>=0){
    console.log(arr[--qtd]);
}

qtd=arr.length
console.log(qtd)

while(qtd>0){
    console.log(arr[--qtd]);
}

console.log(arr)

/*aula 07-41 - Rever essa aula*/
while(qtd>0){
    console.log(arr[--qtd]);
        if (qtd===3){
            console.log(arr[qtd].bola);
        }
}

