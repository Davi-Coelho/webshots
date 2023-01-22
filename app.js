import app from './config/server.js'
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
