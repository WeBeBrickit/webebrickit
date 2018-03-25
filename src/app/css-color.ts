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

    setColor(redVal:number, greenVal:number, blueVal:number):string {
        this.redVal = redVal;
        this.greenVal = greenVal;
        this.blueVal = blueVal;
        this.setColorStr();
        return this.colorStr;
    }

    setColorStr(){
        this.colorStr = 'rgb('+ this.redVal +', '+ this.greenVal +', '+ this.blueVal +')';
    }

    getColorStr():string {
        return this.colorStr;
    }

    getRed():number {
        return this.redVal;
    }

    getGreen():number {
        return this.greenVal;
    }

    getBlue():number {
        return this.blueVal;
    }

    getColorList():number[] {
        return [this.redVal, this.blueVal, this.greenVal]
    }
}
