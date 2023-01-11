//A partir da branch projeto_livraria
//Inicio da implementação da comunicação com o banco de dados seguindo as boas praticas

import app from './src/app.js'
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando na porta em http://localhost:${port}`)
})