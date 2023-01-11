//Classe de modelo para autores
//Mesmo conceito de Lvro.js
import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String}
    },
    {
        //Apenas para exemplificar que é pessivel esconder o versionamento (__v)
        //É recomendavel manter o versionamento para quando houver alteração, sabermos como era o modelo anterior
        versionKey: false
    }
)

const autores = mongoose.model("autores", autorSchema)

export default autores;