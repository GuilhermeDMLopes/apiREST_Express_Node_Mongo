//Diretório e arquivo relacionados ao banco de dados
//Seguindo boas praticas
import mongoose from "mongoose";

//Fazendo conexão com o banco
//String de conexão retirada no Mongo Atlas na aba Connect da nossa Cluster
//removemos a string retryWrites em diante e adicionamos o nome do nosso banco no lugar
mongoose.connect("mongodb+srv://alura:alura123@alura.r4glodr.mongodb.net/alura-node")

//variavel para exportarmos e outra parte do nosso código poder usar e fazer a conexão
let db = mongoose.connection;

export default db;