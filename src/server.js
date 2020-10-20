//importar dependência
const express = require('express');
const path = require('path');
const pages = require('./pages.js');//chama o que está dentro do pages.js e está dentro do module.exports lá

//iniciando o express
const server = express()
server
    //utilizar body do req
    .use(express.urlencoded({extended: true}))
    //utilizando os arquivos estáticos
    .use(express.static('public'))//informando onde estão os arquivos estáticos (arquivos que nunca são alterados em tempo de execução) - com esta linha o express vai criar todas as rotas necessárias para estes arquivos!

    //configurar template engine
    .set('views',path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //rotas da aplicação
    .get('/', pages.index)//o index está dentro da pages.js, no module.exports (é uma propriedade deste objeto) - esta é uma forma de deixar o código mais limpo, colocando em outros arquivo o conteúdo do que será executado nas rotas
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)


//ligar o servidor
server.listen(5500)