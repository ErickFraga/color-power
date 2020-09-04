import { HexPower } from './hexPower/index';
import {RGB, HSV} from './hexPower/types'

var hexPower = new HexPower()

let rgb = new RGB({r:255, g:58, b:127})
 

testHsv(testRgb(rgb))

hexPower.paletts.complementary(rgb);


function testRgb(rgb:RGB){
    console.log('-------------------------');
    console.log(rgb.toString())
    console.log(hexPower.converter.rgb2hsv(rgb).toString())
    return hexPower.converter.rgb2hsv(rgb)
}

function testHsv(hsv:HSV){
    console.log(hsv.toString())
    console.log(hexPower.converter.hsv2rgb(hsv).toString())
    console.log('-------------------------');
    console.log('\n')
}





