import {PuppeteerService} from "./services/Puppeteer";
import {ColorThiefService} from "./services/ColorThief";

const pageUrl = 'https://google.com'
const imageName = 'imageName'

async function main() {
    await PuppeteerService.downloadImage(pageUrl, imageName)
    const colorThiefService = new ColorThiefService(imageName)
    const dominantColor = await colorThiefService.dominantColor
    const colorPalette = await colorThiefService.colors

    console.log(dominantColor)
    console.log(colorPalette)
}
main()


