import puppeteer from 'puppeteer'

export class PuppeteerService {
    private imageName: string | undefined;

    async downloadImage(pageUrl: string): Promise<void> {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage()

        await page.goto(pageUrl, {waitUntil: "networkidle2"})
        await page.screenshot({path: `${this.imageName === undefined ? Date.now() : this.imageName}.png`, type: 'png', fullPage: true});

        await browser.close()
    }
    setImageName(name?: string): void {
        if(name) {
            this.imageName = name
        }else {
            this.imageName = `${Date.now()}`
        }
    }
}
