import { Converter } from './converter';
import { RGB, HSV } from './types';
export class Palettes {
    complementary(color:RGB){
        let converter = new Converter()

        let hsv = converter.rgb2hsv(color)
        
        console.log(hsv.toString);
        
    }

    //?monochromatic(){}
    
    //?analogous(){}
    
    //?triadic(){}   
    
    //?tetraedric(){}
}