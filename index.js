
//reuisitando o express
const express  = require('express');

//criando uma instancia do express
const app = express();


//usando a função listern que recebe o numero da por ta 4000
// o segundparamentro é uma função que diz oque acontece se o servidor for ligado 

app.listen(4000, function(erro){

    if(erro){
        console.log('aconteceu um erro');
    }else{
        console.log('servidor rodando na porta 4000')
    }
    
});