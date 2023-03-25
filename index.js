
//reuisitando o express
const express  = require('express');

//criando uma instancia do express
const app = express();



// criando uma rota

app.get('/',function(req,res){

 //em absolutamente todos os casos uma rota tem que ter uma resposta para o usuario
 //se não a requisição entra em loop e a pagina trava 

    res.send('essa e a rota home');

});

app.get('/perfil',function(req,res){

    res.send('essa e a rota perfil');
});


//usando a função listern que recebe o numero da por ta 4000
// o segundo paramentro é uma função que diz oque acontece se o servidor for ligado 

app.listen(4000, function(erro){

    if(erro){
        console.log('aconteceu um erro');
    }else{
        console.log('servidor rodando na porta 4000')
    }
    
});