const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadecadastro','root','root',{
    host:'localhost',
    dialect:'mysql'
})
/*
const postagem = sequelize.define('postagem',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
});

postagem.create({
    titulo:"um titulo qualque",
    conteudo:"hfdfdhfdhfdfh"
})

//postagem.sync({force:true}); 

sequelize.authenticate().then(function(){
    console.log("banco de dados conectado");
}).catch(function(erro){
    console.log("falha ao se conectar ao banco de dados "+erro)
});*/

