function myFunction(){
    return{
        prop1:1,
        prop2:"Fernando",
        prop3:function(){
            return 'prop3';
        }
    };
}


  var func=myFunction()
  console.log(func)

 var func2= myFunction().prop3
 console.log(func2)
 