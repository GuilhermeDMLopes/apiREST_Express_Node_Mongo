import express from "express";
import db from "./config/dbConnect.js"
//Fazendo importação do schema
import livros from "./models/Livro.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express();

app.use(express.json());

/*const livros = [
    {id:1, "titulo": "senhor dos aneis"},
    {id:2, "titulo": "O hobbit"}
]*/

app.get('/', (req,res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req,res) => {
    //Encontrando livros no BD
    //Se houver um erro, mostrar erro. Se encontrar os livros, mostrar os livros
    livros.find((err, livros) => {
        res.status(200).json(livros);
    })    
})

app.get('/livros/:id', (req, res) => {    
    let index = buscaLivros(req.params.id);    
    res.json(livros[index]);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso');
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {   
    let {id} = req.params 
    let index = buscaLivros(id);
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`);
})
function buscaLivros(id) {
    return livros.findIndex(livro => livro.id == id)
}
export default app;