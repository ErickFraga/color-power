/*class Color {
    readonly colorType: string;
    toString(){
        let a: string[] = Object.keys(this)
        `${this.colorType}(${Object.ke}, ${this.s}, ${this.v})`
    }
}
*/
export class HSV {
    h: number
    s: number
    v: number

    readonly colorType: string = 'hsv'

    constructor(params:Partial<HSV>){
        this.h = params.h
        this.s = params.s
        this.v = params.v
    }
    toString = () => `hsv(${this.h}, ${this.s}, ${this.v})`
}

export class RGB {
    r: number
    g: number
    b: number

    readonly colorType: string = 'rgb'

    constructor(params:Partial<RGB>){
        this.r = params.r
        this.g = params.g
        this.b = params.b
    }
    toString = () => `rgb(${this.r}, ${this.g}, ${this.b})`
}
