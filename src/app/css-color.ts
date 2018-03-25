export class CssColor {
    colorStr:string;
    redVal:number;
    greenVal:number;
    blueVal:number;

    setRed(redVal:number){
        this.redVal = redVal;
    }

    setBlue(blueVal:number){
        this.blueVal = blueVal;
    }

    setGreen(greenVal:number){
        this.greenVal = greenVal;
    }

    setColor(redVal:number, greenVal:number, blueVal:number){
        this.redVal = redVal;
        this.greenVal = greenVal;
        this.blueVal = blueVal;
        this.setColorStr();
    }

    setColorStr(){
        this.colorStr = 'rgb('+ this.redVal +', '+ this.greenVal +', '+ this.blueVal +')';
    }
}
