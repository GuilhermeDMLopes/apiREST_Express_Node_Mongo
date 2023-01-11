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
}

export default LivroController;

