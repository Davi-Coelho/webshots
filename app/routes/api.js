module.exports = (application) => {
    application.get('/api', (req, res) => {
        application.app.controllers.api.getWebshots(application, req, res)
    })

    application.post('/api/website', (req, res) => {
        application.app.controllers.api.insertWebshot(application, req, res)
    })
}