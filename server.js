//A partir da branch conectandoBanco
//Inicio da implementação de schemas do BD usando boas praticas
import app from './src/app.js'
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando na porta em http://localhost:${port}`)
})