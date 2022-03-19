const colorThief = require('colorthief');

export class ColorThiefService {
    private readonly imageName: string;
    constructor(imageName: string) {
        this.imageName = `${process.cwd()}/${imageName}.png`
    }

    get colors(): Promise<number[][]> {
        return colorThief.getPalette(this.imageName, 5)
    }

    get dominantColor(): Promise<number[]> {
        return colorThief.getColor(this.imageName)
    }
}



