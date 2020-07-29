const express = require('express')
const nunjucks = require ('nunjucks')

const server = express()
const courses = require("./data")
server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,                  //impede que o nunjucks mostre o codigo html em variaveis
    noCache: true   
})

server.get("/", function(req, res) { 

    const about = {
        image_url:"https://rocketseat.com.br/static/images/update/melhores-tecnologias.svg",
        title: "As melhores tecnologias em programação, direto ao ponto certo e do jeito certo.",
        description: "No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
        button: "Quero embarcar nesse foguete"

    }


    return res.render("about", {about}) 
})


server.get("/sobre", function(req, res) { 
    return res.render("sobre")
})

server.get("/courses", function(req, res){
    return res.render("courses", {items: courses})      
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
    const course = courses.find(course => course.id === id);
  
    if (!course) {
      return res.status(404).render("not-found");
    }
    
    return res.redirect(`https://rocketseat.com.br/${course.id}`);
    
  });

server.listen(5000, function(){
    console.log("server is running")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });