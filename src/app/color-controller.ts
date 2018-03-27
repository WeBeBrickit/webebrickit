import { CssColor } from './css-color';

export class ColorController {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    public randomRotate(cssColor: CssColor):string {
        // fuck it
        let rgb: any;
        rgb = cssColor;
        
        let r:number = rgb.getRed();
        let g:number = rgb.getGreen();
        let b:number = rgb.getBlue();


        if (this.r > r){
            r += 1;
        } else if (this.r < r){
            r -= 1;
        }

        if (this.g > g){
            g += 1;
        }else if (this.g < g){
            g -= 1;
        }

        if (this.b > b){
            b += 1;
        }else if (this.b < b){
            b -= 1;
        }


        if (this.r == r){
            this.r = Math.floor(Math.random() * 256);
        }
        if (this.g == g){
            this.g = Math.floor(Math.random() * 256);
        }
        if (this.b == b){
            this.b = Math.floor(Math.random() * 256);
        }

        return 'rgb(' + r + ',' + g + ',' + b + ')';    
    }
}
