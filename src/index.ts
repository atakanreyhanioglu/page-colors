import {PuppeteerService} from "./services/Puppeteer";
import {ColorThiefService} from "./services/ColorThief";

const pageUrl = 'https://google.com'
const imageName = 'imageName'

const colorThiefService = new ColorThiefService(imageName)
PuppeteerService.downloadImage(pageUrl, imageName).then(() => {
    colorThiefService.dominantColor.then(c => console.log(c))
    colorThiefService.colors.then(c => console.log(c))
})


