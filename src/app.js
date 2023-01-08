//Utilizando as boas práticas, criamos um arquivo app.js com as rotas do projeto
//Não esquecer de colocar "type":"module" no package.json
import express from "express";
//Cria uma instancia do express
const app = express();

//Variavel guardando nossos livros
const livros = [
    {id:1, "titulo": "senhor dos aneis"},
    {id:2, "titulo": "O hobbit"}
]

//criando a requisição get para rota vazia
app.get('/', (req,res) => {
    //Resposta envia o status e o conteúdo
    res.status(200).send('Curso de Node');
})

//Requisição para retornar os livros
app.get('/livros', (req,res) => {
    //Resposta envia o status e um json contendo os livros
    res.status(200).json(livros);
})

//Exportando as rotas para serem usadas em outras partes do codigo
export default app;