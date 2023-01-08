//A partir da branch main
//Começaremos com os conceitos de rotas usando nodemon
//Nodemon é um biblioteca que nos permite visualizar alterações do código em tempo real
//Ex: Se quisermos adicionar uma rota em tempo de execução
//npm install nodemon -D (o -D mostra que é pra desenvolvimento e não precisa ir pra produção)
//Foi criado um script no package.json "dev": "nodemon server.js" para facilitar a execução

const http = require("http")
const port = 3000;

//objeto com rotas
const rotas = {
    //Conceito de chave:valor
    //Se a rota basica for chamada, sera exibida tal mensagem
    //Ex: Se for chamado a rota "/", será exibido a mensagem "Curso de Node"
    '/': 'Curso de Node',
    '/livros': 'Entrei na pagina de livros',
    '/autores': 'Listagem de autores',
    //Se durante a execução eu adicionar uma nova rota, ela não será atualizada em tempo real
    '/editora': 'Pag de editora',
    //Teste de edição durante execução
    '/sobre': 'Info sobre projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    //Pega o valor que está em rotas
    res.end(rotas[req.url]);    
})

server.listen(port, () => {
    console.log(`Servidor escutando na porta em http://localhost:${port}`)
})
