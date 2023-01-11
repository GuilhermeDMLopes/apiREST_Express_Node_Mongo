//Para não ter que ficar importando varios arquivos referente a rotas
//Arquivo onde serão concentradas todas as rotas, sejam de livros, editoras, autor, etc.

import express from "express";
//Devemos importar todas as routes
import livros from "./livrosRoutes.js"

//Criando as rotas, conjunto de todas as rotas que vamos usar
//Quando formos usar no app, passamos a aplicação como parametro para usar o que tiver de rotas
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"})
    })

    //Usar as outras routas
    app.use(
        //Para usar JSON
        express.json(),
        livros
    )
}

export default routes;