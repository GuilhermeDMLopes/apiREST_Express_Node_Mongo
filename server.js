//A partir da branch evoluindoAPI
//Inicio da implementação de outro schema integrado
//Incluindo dados para autores e quando pedir algum livro, ele estará associado aos dados do autor
import app from './src/app.js'
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando na porta em http://localhost:${port}`)
})
