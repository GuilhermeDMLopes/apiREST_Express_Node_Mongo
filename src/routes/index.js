import express from "express";
import livros from "./livrosRoutes.js";
//Adicionando rotas de autores
import autores from "./autoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"})
    })

    app.use(
        express.json(),
        livros,
        //adicionando autores
        autores
    )
}

export default routes;