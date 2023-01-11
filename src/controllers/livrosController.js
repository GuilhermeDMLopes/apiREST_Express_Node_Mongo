//Utilizando um padrão de projeto controllers 
//serve de intermediário entre o que vem de requisição (view), pode ser do front end, outra api, postman e o BD
//Recebe as requisições e devolve as respostas
//importação do modelo livro
import livros from "../models/Livro.js";

//classe com os métodos HTTP.
//Métodos do tipo staticos para não precisar instanciar a classe
class LivroController {
    //Define que método que tem que chegar dada a rota pedida no endpoint
    //A idéia é remover as rotas do app e fazer a mesma função.
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros);
        })    
    }

    static listarLivroPorId = ((req, res) => {
        //Pegando id passado por parametro
        const id = req.params.id;

        //Verifica se o id existe no banco
        livros.findById(id, (err, livros) => {
            //Se houver erro
            if(err) {
                //Não encontrado
                res.status(400).send({message: `${err.message} - livro não encontrado`})
            } else {
                //encontrado
                res.status(200).send(livros)
            }
        })

    })

    static cadastrarLivro = (req, res) => {
        //criando variavel que vai criar um novo modelo de livro de acordo com o que veio no corpo da requisição
        let livro = new livros(req.body);
        //Persistindo o livro no banco. Salvando ele no banco
        livro.save((err) => {
            //checando se foi salvo corretamente
            if(err) {
                //Se der erro ele vai dar erro 500 e a mensagem de falha
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
            } else {
                //Retornando sucesso e convertendo os dados em JSON para serem enviados
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        //Variavel que vai receber o id como parametro na requisição
        const id = req.params.id;

        //Verificar se o id existe no banco e atualizar com o que queremos que seja substituido
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            //se nao houver erro e se houver
            if(!err) {
                res.status(200).send({message: 'livro atualizado com sucesso'})
            } else {
                res.status(500).send({message: `${err.message}- falha ao atualizar`})
            }
        })
        
    }

    static excluirLivro = (req, res) => {
        //Variavel que recebe o id como parametro da requisição
        const id = req.params.id

        //Verifica se existe o id no banco e se encontrar o exlcui
        livros.findByIdAndDelete(id, (err) => {
            //Se encontrar, deleta
            if(!err) {
                res.status(200).send({message: 'Livro removido com sucesso'})
            } else {
                res.status(500).send({message: `${err.message} - erro ao deletar livro`})
            }
        })
    }
    
}

export default LivroController;