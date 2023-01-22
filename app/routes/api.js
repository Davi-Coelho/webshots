export default function(application) {
    application.get('/api', (req, res) => {
        application.getWebshots(application, req, res)
    })

    application.post('/api/website', (req, res) => {
        application.insertWebshot(application, req, res)
    })
}