class SiteDAO {
    constructor(SiteModel) {
        this._SiteModel = SiteModel
    }

    insertNewSite = async (siteName, base64) => {
        await this._SiteModel.create({
            name: siteName,
            base64: base64
        })
    }

    getSite = async (siteName) => {
        return await this._SiteModel.find({siteName: siteName})
    }

    getAllSites = async () => {
        return await this._SiteModel.find({})
    }
}

export default SiteDAO
