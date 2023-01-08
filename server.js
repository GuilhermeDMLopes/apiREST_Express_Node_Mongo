//A partir da branch server_local_nodemon
//Começaremos com os conceitos do framework express
//Framework rapido, minimalista e nao opnativo(ele deixa o usuario a usar diversos padrões).
//Mais usada
//npm install express

//Como o express ja foi importado no arquivo app.js, não precisamos importa-lo novamente
import app from './src/app.js'
//Muitas vezes vamos subir a aplicação para um servidor e a porta será diferente
//ou a porta será a da constante que estara sendo escutada que o servidor subiu ou a 3000(local)
const port = process.env.PORT || 3000;

//Trocando server por app
app.listen(port, () => {
    console.log(`Servidor escutando na porta em http://localhost:${port}`)
})

/*
existe uma ferramenta chamada Express Application Generator que já cria um “esqueleto” para aplicações Express. 
A instalação é realizada via NPM (Node Package Manager ou seja, o Gerenciador de Pacotes do Node). Pode-se usar 
o parâmetro -g para instalar o pacote globalmente, ou seja, você pode acessá-lo de qualquer lugar do computador.

npm install express-generator -g

Depois da instalação, vá até o local/pasta onde você deseja desenvolver o projeto e escreva a seguinte linha de 
comando abaixo, indicando express <nome do projeto a ser criado>:

express olamundo

No caso do exemplo, estou criando um projeto chamado olamundo. Observe que já será criada a pasta olamundo com uma 
estrutura padrão de subpastas:

No terminal, já terá a orientação para navegar até a pasta criada e instalar os pacotes com npm install.

Vamos fazer esses dois passos e depois iremos usar o comando npm start para iniciar a aplicação. Observe que ao digitar 
o endereço http://localhost:3000 no navegador, ele já vai exibir uma mensagem:

Ao digitar o endereço http://localhost:3000/users também podemos observar que já existe uma rota padrão cadastrada.

Essa implementação pode ser vista nos arquivos index.js e users.js dentro da pasta routes. Abaixo um exemplo de como está 
implementado o arquivo users.js.
*/
