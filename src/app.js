import express from "express";
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"
//Importando o arquivo com as rotas
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express();

app.use(express.json());

//Usar a rota passando o app instanciado como parametro
routes(app);

/*
Depois de completado os arquivos livrosCOntroller e livrosROutes, todas as rotas foram apagadas.
A classe app tem que se manter limpa
Arquivo app.js serve para conectar ao banco e passar ao arquivo de rotas a instancia do express para utilizarmos as rotas
*/

export default app;