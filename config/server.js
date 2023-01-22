import express from 'express'
import { getWebshots, insertWebshot } from '../app/controllers/api.js'
import apiRoute from '../app/routes/api.js'
const app = express()

app.getWebshots = getWebshots
app.insertWebshot = insertWebshot
app.apiRoute = apiRoute(app)

export default app
