//Adicionando rotas e informações do projeto livraria
import express from "express";
const app = express();

//Interpreta o que chega via POST e via PUT e transformar em um objeto JSON
//Para visualizar, armazenar e manipular
app.use(express.json());

const livros = [
    {id:1, "titulo": "senhor dos aneis"},
    {id:2, "titulo": "O hobbit"}
]

app.get('/', (req,res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req,res) => {
    res.status(200).json(livros);
    //Sem acrescentar o express.use, o metodo GET nao consegue interpretar o que vem do
    //metodo POST, retornando null.
    //Como a aplicação ocorre em tempo real, ele não salva esse valor. Precisamos fazer o POST novamente
    //Isso acontece porque a cada alteração, o nodemon derruba e sobe o servidor novamente, voltando as configurações originais do arquivo
})

//Utilizando o método GET para retornar um livro específico
app.get('/livros/:id', (req, res) => {    
    //Utilizamos o mesmo conceito do método PUT. porém sem alterar nada dos dados
    let index = buscaLivros(req.params.id);    
    res.json(livros[index]);
})

//Adicionando livros
//Para testar o método, usaremos o Postman
//Como nossa aplicação está sendo executada pelo nodemon e no nosso localhost na porta 3000
//Quando acessamos o postman e enviamos requisições nessa url, ele executa normalmente
//Postman é um ótimo IDE para testarmos nossa aplicação
app.post('/livros', (req, res) => {
    //Adicionando livro no array com base na requisição
    livros.push(req.body);
    //retorna o status de que foi criado
    res.status(201).send('Livro cadastrado com sucesso');
})

//Metodo para atualizar informações dos livros
//Indicamos que chegará um id para ele saber qual livro alterar
app.put('/livros/:id', (req, res) => {
    //localizar a posição do array com o livro de id do parametro
    //Como não estamos trabalhando com banco ainda, criaremos uma função
    //Confirma se o id passado como parametro (req.params.id) está no array de livros
    let index = buscaLivros(req.params.id);
    //substituindo o que veio no corpo da requisição com nome de titulo no livro
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

//Deletando livro
app.delete('/livros/:id', (req, res) => {   
    //Atribuição via desestruturação
    //Consigo salvar em um objeto o valor do parametro
    let {id} = req.params 
    let index = buscaLivros(id);
    //Apagando elemento
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`);
})
//Função para encontrar livro
function buscaLivros(id) {
    //Se o o id do livro for realmente o id passado como parametro, ele retorna a posição dentro do array
    return livros.findIndex(livro => livro.id == id)
}
export default app;