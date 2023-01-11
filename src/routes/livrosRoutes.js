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
    .get("/livros/:id", LivroController.listarLivroPorId)
    //Retorna no postman um id automatico e um parametro de versionamento (__v)
    //o versionamento controla a evolução dos modelos. Se o modelo mudar, o versionamento irá mudar
    .post("/livros", LivroController.cadastrarLivro) 
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

export default router;

/*
Erros de cannot GET são erros de rota
*/