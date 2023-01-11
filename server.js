//A partir da branch schemasBD
//Inicio da implementação de controllers usando boas praticas
import app from './src/app.js'
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando na porta em http://localhost:${port}`)
})