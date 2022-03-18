import {PuppeteerService} from "./services/Puppeteer";

const puppeteerService = new PuppeteerService()

puppeteerService.downloadImage('https://firebase.google.com/', 'New name')
    .then(() => console.log('Image downloaded successfully.'))
    .catch(e => console.log(e))



