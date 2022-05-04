const express = require("express");
const routes = express.Router();
//GET: buscar uma informação 
//POST: criar uma informsção
//PUT: editar uma informação  por completo
// PATCH: MODIFICAR UMA INFORMAÇÃO
// DELETE: DELETAR UMA INFORMAÇÃO

routes.get("/",(request, response) => response.send("hello world"));
module.exports = routes;
