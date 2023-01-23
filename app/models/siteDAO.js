class SiteDAO {
    constructor(siteModel) {
        this._siteModel = siteModel
    }

    insertNewSite = async (siteName, base64) => {
        await this._siteModel.create({
            name: siteName,
            base64: base64
        })
    }

    getSite = async (siteName) => {
        return await this._siteModel.find({siteName: siteName})
    }

    getAllSites = async () => {
        return await this._siteModel.find({})
    }
}

export default SiteDAO
