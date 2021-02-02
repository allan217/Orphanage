// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciando o express
const server = express()
server
// utilizae body do request
.use(express.urlencoded({extended: true}))
//utilizando os arquivos estaticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//criar rotas da aplicacao
.get('/', pages.index)
.get('/index', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// ligar o servidor
server.listen(5500)