"use strict";
/// <reference path="typings/tsd.d.ts" />
var http = require('http');
var Cliente = require('./Cliente');
var Funcionario = require('./Funcionario');
var cliente = new Cliente();
cliente.nome = "Robson 4";
var funcionario = new Funcionario();
funcionario.nome = "Funcionario 1";
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write("Cliente Aprovado: " + cliente.nome + " - Funcionario: " + funcionario.nome);
    response.end();
}).listen(8000);
