import puppeteer from 'puppeteer'

export class PuppeteerService {
    async downloadImage(pageUrl: string, imageName?: string): Promise<void> {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage()

        await page.goto(pageUrl, {waitUntil: "networkidle2"})
        await page.screenshot({path: `${imageName === undefined ? Date.now() : imageName}.png`, type: 'png', fullPage: true});

        await browser.close()
    }
}
