import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    //Faz a busca por editora em query param
    //Como esse router realiza as operações em ordem descrescente de prioridade
    //Ele vai tentar ver a rota de busca antes da de :id
    //Se estiverem invertidas, a query param não iria funcionar
    .get("/livros/busca", LivroController.listarLivrosPorEditora)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro) 
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

export default router;