import captureWebsite from 'capture-website'

export async function getWebshots (application, req, res) {
    const SiteDAO = new application.SiteDAO(application.SiteModel)
    const sites = await SiteDAO.getAllSites()
    let html = ''
    sites.forEach(el => {
        html += `<a href="${el.name}"><img src='data:image/png;base64,${el.base64}'  alt=${el.name}/></a>\n`
    })
    res.send(sites)
}

export async function insertWebshot (application, req, res) {
    const siteName = req.query.siteName
    const SiteDAO = new application.SiteDAO(application.SiteModel)

    const base64 = await captureWebsite.base64(siteName, {
        type: "png",
        scaleFactor: 0.2
    })

    await SiteDAO.insertNewSite(siteName, base64)
    res.sendStatus(200)
}
