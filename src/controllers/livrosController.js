import { exec } from "child_process";
import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (req, res) => {
        livros.find()
            //Vai popular o campo autor
            .populate('autor')        
            .exec((err, livros) => {
            res.status(200).json(livros);
        })    
    }

    static listarLivroPorId = ((req, res) => {
        const id = req.params.id;

        livros.findById(id)
            //Aqui ele faz a mesma listagem, porém mostra apenas o nome do autor
            //Se remover o 'nome' ele mostra o livro passado como parametro completamente
            .populate('autor', 'nome')        
            .exec((err, livros) => {
            if(err) {
                res.status(400).send({message: `${err.message} - livro não encontrado`})
            } else {
                res.status(200).send(livros)
            }
            })

    })

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'livro atualizado com sucesso'})
            } else {
                res.status(500).send({message: `${err.message}- falha ao atualizar`})
            }
        })
        
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro removido com sucesso'})
            } else {
                res.status(500).send({message: `${err.message} - erro ao deletar livro`})
            }
        })
    }

    static listarLivrosPorEditora = (req, res) => {
        //Recebe a editora que vem como query param (pode ser mais de um parametro)
        const editora = req.query.editora

        //Verifica se tem a editora no banco
        livros.find({'editora': editora}, {}, (err, livros) => {
            if(!err) {
                res.status(200).send(livros)
            } else {
                res.status(500).send({message: `${err.message} - erro ao encontrar editora`})
            }
        })
    }
    
}

export default LivroController;

/*
AO fazer o PUT mudando o nome do autor do livro. No postman:
fomos em Alterar livro, colocamos o id do livro na URL e no body colocamos o autor e seu id.
*/