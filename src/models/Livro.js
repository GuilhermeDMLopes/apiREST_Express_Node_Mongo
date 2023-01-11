//Criação do diretório Modules que vai conter todos os modelos que representam a coleção no banco
//Arquivo Livro.js que representa um livro.
//importar o mongoose para mostrar que este arquivo é um schema
import mongoose from "mongoose";

//criação do schema
const livroSchema = new mongoose.Schema( 
    //parametros e atributos de Livro e se ele é obrigatório
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        editora: {type: String, required: true},
        numeroPagina: {type: Number}
    }      
);

//Criando variavel para exportar o schema
//Estou dizendo que a minha coleção se chama livros e seguirão o schema como modelo
//OBS: Se não houver nenhuma, ele cria com o mesmo nome do parametro
const livros = mongoose.model('livros', livroSchema)

export default livros;