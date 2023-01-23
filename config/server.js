import express from 'express'
import { getWebshots, insertWebshot } from '../app/controllers/api.js'
import apiRoute from '../app/routes/api.js'
import SiteDAO from "../app/models/siteDAO.js";
import { siteModel } from './dbConnection'
const app = express()

app.getWebshots = getWebshots
app.insertWebshot = insertWebshot
app.apiRoute = apiRoute(app)
app.siteModel = siteModel
app.SiteDAO = SiteDAO

export default app
