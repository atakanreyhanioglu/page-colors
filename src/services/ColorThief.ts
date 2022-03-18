const colorThief = require('colorthief');


export class ColorThiefService {
    private readonly imagePath: string;
    constructor(imagePath: string) {
        this.imagePath = imagePath
    }

    getColors(): number[] {
        console.log(this.imagePath)
        return [1,2]
        // return colorThief.getPalette('ata', 5)
    }

    getDominantColor(): number[][] {
        return colorThief.getColor('ata')
    }
}


