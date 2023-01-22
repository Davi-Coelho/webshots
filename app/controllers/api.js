import captureWebsite from 'capture-website'

export async function getWebshots (application, req, res) {
    const base64 = await captureWebsite.base64('https://www.google.com')
    console.log(base64)
    res.send(base64)
}

export async function insertWebshot (application, req, res) {

}
