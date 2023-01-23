import mongoose from 'mongoose'

const {
    DB,
    DB_USER,
    DB_PASS
} = process.env

const siteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    base64: {
        type: String,
        required: true
    }
})

const siteModel = mongoose.model('sites', siteSchema)

async function initDatabase() {
    try {
        await mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@mongo:27017/${DB}?authSource=admin`)
        console.log('Conectado ao banco de dados!')
    } catch (err) {
        console.log(`mongoConnectError: ${err}`)
    }
}

initDatabase()

export { siteModel }
