//Diretório com o objetivo de conter todas as rotas da nossa aplicação
//Arquivo contém as rotas dos livros
//Express faz a conexão com as rotas
import express from "express";
//Onde enviaremos as rotas
import LivroController from "../controllers/livrosController.js";

//Onde sera usado o roteamento do express
const router = express.Router();

//Definindo as rotas
router
    //Define o método(get), a rota ("/livros") e o que deve acontecer "LivroController.listarLivros"
    .get("/livros", LivroController.listarLivros)

export default router;