
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



//rota com parametro
//se essa rota for chamada assim: "localhost:4000/ola " o navegador vai dizer que ela não existe 
// porque se ela recebe um parametro e esse parametro ela tem que ser chamada asssim  "localhost:4000/ola/algumacoisa"


app.get('/ola/:nome/:empresa', function(req,res){

    //REQ => dados que o usuario envia para o servidor 
    //RES => reposta que o usuario recebe do servidor 
    //pegando o nome que o usuario enviou para o servidor 
    var nome = req.params.nome; 
    var empresa = req.params.empresa;  

    res.send('<h1>Ola  ' + nome + ' do ' + empresa +'</h1>');
});



//rota comparametro opcional essa rota funciona mesmo que o ususarios não informe qual eo artigo  

app.get('/blog/:artigo?',function(req,res){

    var artigo = req.params.artigo;

    if(artigo){

          res.send('<h2>' + artigo + '</h2');

    }else{

          res.send('Bem vindo do blog: Guia do programador');
    }

});


//Query params 
// Esse tipo de parametro é totalmente opcional ele não esta sendo definido na rota, ele não é exigido
// esse tipo de paramentro e passado pela url por exemplo eu posso acessar a rota /yutube, mas se eu quiser
//eu posso especificar um canal por exemplo '/yutube?canal=guiadoprogramador' 
//a rota abaixo tem um tratamento pra esse tipo de paramentro mas se ele não vier ela não vai falhar 

app.get('/yutube',function(req,res){


 // se o cliente mandar um query param ele recebe e mostra na tela 
 //se ele não mandar ele mostra nenhum canal solicitado , ou seja a rota não vai falhar
   
    var canal = req.query['canal'];
    
    if(canal){

        res.send('<h1>' + canal + '</h1>');

    }else{

        res.send('Nenhum canal solicitado');

    }
});





//usando a função listen que recebe o numero da por ta 4000
// o segundo paramentro é uma função que diz oque acontece se o servidor for ligado 

app.listen(4000, function(erro){

    if(erro){
        console.log('aconteceu um erro');
    }else{
        console.log('servidor rodando na porta 4000')
    }
    
});