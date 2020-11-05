const express = require('express')
const router = express.Router()

router.route('/')
    .get((req,res)=>{
        res.send("Hello readers! My name is Amanda Andrade")
})

module.exports = router;

//Criar uma lista de endpoints para users:
// listar usuários(get)
// criar usuários (post)
// modificar usuário(put)
// remover usuário(delete)

//Criar uma lista de endpoints para books:
// listar livros(get)
// criar livros (post)
// modificar livro(put)
// remover livro(delete)

//parei em: 
// https://web.digitalinnovation.one/course/introducao-ao-nodejs-com-expresses/learning/27442f3b-5df3-44f4-9d40-04a9ed7284c7
// 8 min