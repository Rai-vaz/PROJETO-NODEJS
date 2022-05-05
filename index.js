const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("seja bem vindo ao meu site");
})

app.get("/sobre", function(req, res){ 
    res.sendFile(__dirname+"/html/index.html");
})

app.get("/ola/:nome/:cargo", function(req, res){
    res.send(`Ola `+ req.params.nome+" seu cargo é e vove e o cara  "+ req.params.cargo );
})

app.listen(8081, function(){
    console.log("servidor rodando");
})