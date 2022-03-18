import {ColorThiefService} from "./services/ColorThief";

const imagePath = `${process.cwd()}/New name.png`
const colorThiefService = new ColorThiefService(imagePath)
colorThiefService.getColors()



/*
import {PuppeteerService} from "./services/Puppeteer";


const puppeteerService = new PuppeteerService()

puppeteerService.downloadImage('https://firebase.google.com/', 'New name')
    .then(() => console.log('Image downloaded successfully.'))
    .catch(e => console.log(e))

 */

