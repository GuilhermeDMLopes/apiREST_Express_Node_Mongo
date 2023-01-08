//Criar um servidor local usando htpp e não com express por enquanto

//usaremos o require e não o import com o htpp
const http = require("http")
//definindo uma porta para a requisição
const port = 3000;
//Criar o servidor e o que ele vai escutar, etc
//req representa requisição e o res a resposta
const server = http.createServer((req, res) => {
    //Cabeçalho da resposta que devolve um status e o tipo de conteudo que esta mandando
    res.writeHead(200, {'Content-Type':'text/plain'});
    //Finalizar a resposta mandando o desejado
    res.end('Curso de Node');    
})

//Definir a porta que o servidor vai escutar e mandar a reposta
//Conexao cliente-servidor
server.listen(port, () => {
    console.log(`Servidor escutando na porta em http://localhost:3000`)
})
