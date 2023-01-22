const app = require('./config/server')
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
