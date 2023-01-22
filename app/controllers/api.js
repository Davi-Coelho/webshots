import captureWebsite from 'capture-website'

export async function getWebshots (application, req, res) {
    const base64 = await captureWebsite.base64('https://ongaku.davicoelho.com', {
        type: "png",
        scaleFactor: 0.2
    })
    // console.log(base64)
    res.send(`<img src='data:image/png;base64,${base64}'  alt="site"/>`)
}

export async function insertWebshot (application, req, res) {

}
