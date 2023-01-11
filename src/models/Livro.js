import mongoose from "mongoose";

const livroSchema = new mongoose.Schema( 
   {
        id: {type: String},
        titulo: {type: String, required: true},
        //Associando com Schema Autor
        //A referencia do esquema autor dentro de livro será o id de autor.
        autor: {type: mongoose.Schema.Types.ObjectId, ref:'autores', required: true},
        editora: {type: String, required: true},
        numeroPagina: {type: Number}
    }      
);

const livros = mongoose.model('livros', livroSchema)

export default livros;