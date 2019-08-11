 var pessoa= {
   idade:31,
   nome:'Juliana',
   filhos:["joao","maria","antonio",{ teste:{att1:123} } ],
   naturalidade: { cidade:"belem" ,estado:"para",regiao:"norte" , clima:{temperatura:30, rarefeito:false }}
}

//console.log(pessoa)


console.log(pessoa.filhos[3].teste.att1)

