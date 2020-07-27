const express = require('express')
const nunjucks = require ('nunjucks')

const server = express()
const cartoes = require("./data")
server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) { 

    const about = {
        image_url:"https://rocketseat.com.br/static/images/update/melhores-tecnologias.svg",
        title: "As melhores tecnologias em programação, direto ao ponto certo e do jeito certo.",
        description: "No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
        button: "Quero embarcar nesse foguete"

    }


    return res.render("about", {about})
    server.use(function(req, res) {
        res.status(404).render("not-found");
      });
})

server.get("/conteudos", function(req, res) { 
    return res.render("conteudos", {items: cartoes})
    server.use(function(req, res) {
        res.status(404).render("not-found");
      });
})

server.get("/sobre", function(req, res) { 
    return res.render("sobre")
    server.use(function(req, res) {
        res.status(404).render("not-found");
      });
})

server.listen(5000, function(){
    console.log("server is running")
    server.use(function(req, res) {
        res.status(404).render("not-found");
      });
})

