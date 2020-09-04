import { HSV, RGB } from "./types"

export class Converter {
    rgb2hsv(rgb:RGB)
    {
        let [r, g, b] = [rgb.r / 255.0, rgb.g / 255.0, rgb.b / 255.0]

        let cmax:number = Math.max(r, g, b)
        let cmin:number = Math.min(r, g, b)
        let diff:number = cmax - cmin
        let h:number = -1
        let s: number = -1

        if (cmax == cmin)
            h=0

        else if (cmax == r)
            h = (60 * ((g - b) / diff) + 360) % 360;

        else if (cmax == g)
            h = (60 * ((b - r) / diff) + 120) % 360;

        else if (cmax == b)
            h = (60 * ((r - g) / diff) + 240) % 360;

        
        if (cmax == 0)
            s = 0;
        else
            s = (diff / cmax) * 100;

        let v: number = cmax * 100;

        let hsv:HSV = new HSV({
            h: Number(h.toFixed(2)),
            s: Number(s.toFixed(2)), 
            v: Number(v.toFixed(2))
        })

        return hsv
    }

    hsv2rgb(hsv:HSV){
        let [h, s, v] = [hsv.h, hsv.s, hsv.h]
        h = h/360
        v = v/100;
        s = s/100;

        
        let i = Math.floor(h * 6);
        let f = h * 6 - i;
        let p = v * (1 - s);
        let q = v * (1 - f * s);
        let t = v * (1 - (1 - f) * s);

        let rgb:RGB

        
        switch (i % 6) {
            case 0: rgb = new RGB({r:v, g:t, b:p}); break;
            case 1: rgb = new RGB({r:q, g:v, b:p}); break;
            case 2: rgb = new RGB({r:p, g:v, b:t}); break;
            case 3: rgb = new RGB({r:p, g:q, b:v}); break;
            case 4: rgb = new RGB({r:t, g:p, b:v}); break;
            case 5: rgb = new RGB({r:v, g:p, b:q}); break;
        }
   
        rgb.r = rgb.r * 255;
        rgb.g = rgb.g * 255;
        rgb.b = rgb.b * 255;

        return rgb
    }   
} 
