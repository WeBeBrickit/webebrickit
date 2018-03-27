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
        this.setRed(redVal);
        this.setGreen(greenVal);
        this.setBlue(blueVal);
        this.setColorStr();
        return this.colorStr;
    }

    setColorStr(){
        this.colorStr = 'rgb('+ this.redVal +', '+ this.greenVal +', '+ this.blueVal +')';
    }

    setColorWithStr(colorStr:string){
        let rgb:any = colorStr.slice(4, colorStr.length - 1).split(',');

        this.redVal = parseInt(rgb[0].trim());
        this.greenVal = parseInt(rgb[1].trim());
        this.blueVal = parseInt(rgb[2].trim());
        this.colorStr = colorStr;
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
