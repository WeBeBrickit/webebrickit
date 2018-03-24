export class ColorScroll {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    public pageScrollHelper(who: any, order) {
        // fuck it
        who = document.body;
        
        let rgb: any;
        rgb = who.style.backgroundColor;
        if (rgb === '') {
            // all[i].style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            // who.style.backgroundColor = 'rgb(50, 80, 109)';
            who.style.backgroundColor = 'rgb(255, 255, 255)';
            rgb = who.style.backgroundColor;
            // console.log(document.body.style.backgroundColor);
        }
        rgb = rgb.slice(4, rgb.length - 1).split(', ');

        if (order === 0) {
            rgb[0] = parseInt(rgb[0]);
            rgb[1] = parseInt(rgb[1]);
            rgb[2] = parseInt(rgb[2]);
        } else {
            const temp = rgb[0];
            rgb[0] = parseInt(rgb[1]);
            rgb[1] = parseInt(rgb[2]);
            rgb[2] = parseInt(temp);
        }
        
        // console.log(rgb);

        if (this.r > rgb[0]){
            rgb[0] += 1;
            // console.log('r', 1, r, rgb[0]);
        } else if (this.r < rgb[0]){
            rgb[0] -= 1;
            // console.log('r', 2, r, rgb[0]);
        }

        if (this.g > rgb[1]){
            rgb[1] += 1;
            //console.log('g', 1, g, rgb[1]);
        }else if (this.g < rgb[1]){
            rgb[1] -= 1;
            //console.log('g', 2, g, rgb[1]);
        }

        if (this.b > rgb[2]){
            rgb[2] += 1;
            //console.log('b', 1, b, rgb[2]);
        }else if (this.b < rgb[2]){
            rgb[2] -= 1;
            //console.log('b', 2, b, rgb[2]);
        }

        if (this.r == rgb[0]){
            this.r = Math.floor(Math.random() * 256);
            //console.log('r', 3, r, rgb[0]);
        }
        if (this.g == rgb[1]){
            this.g = Math.floor(Math.random() * 256);
            //console.log('g', 3, g, rgb[1]);
        }
        if (this.b == rgb[2]){
            this.b = Math.floor(Math.random() * 256);
            //console.log('b', 3, b, rgb[2]);
        }

        ////console.log(rgb)
        if (order == 0){
            who.style.backgroundColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
        }else{
            who.style.backgroundColor = 'rgb(' + rgb[2] + ',' + rgb[0] + ',' + rgb[1] + ')';
        }
            
    }

    public pageScrollHelper2(who: any, order) {

        let rgb: any;
        rgb = who.style.fill;
        if (rgb === '') {
            who.style.fill = 'rgb(255, 255, 255)';
            rgb = who.style.fill;
        }
        rgb = rgb.slice(4, rgb.length - 1).split(', ');

        if (order === 0) {
            rgb[0] = parseInt(rgb[0]);
            rgb[1] = parseInt(rgb[1]);
            rgb[2] = parseInt(rgb[2]);
        } else {
            const temp = rgb[0];
            rgb[0] = parseInt(rgb[1]);
            rgb[1] = parseInt(rgb[2]);
            rgb[2] = parseInt(temp);
        }

        if (this.r > rgb[0]){
            rgb[0] += 1;
        } else if (this.r < rgb[0]){
            rgb[0] -= 1;
        }

        if (this.g > rgb[1]){
            rgb[1] += 1;
        }else if (this.g < rgb[1]){
            rgb[1] -= 1;
        }

        if (this.b > rgb[2]){
            rgb[2] += 1;
        }else if (this.b < rgb[2]){
            rgb[2] -= 1;
        }

        if (this.r == rgb[0]){
            this.r = Math.floor(Math.random() * 256);
        }
        if (this.g == rgb[1]){
            this.g = Math.floor(Math.random() * 256);
        }
        if (this.b == rgb[2]){
            this.b = Math.floor(Math.random() * 256);
        }

        if (order == 0){
            who.style.fill = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
        }else{
            who.style.fill = 'rgb(' + rgb[2] + ',' + rgb[0] + ',' + rgb[1] + ')';
        }
            
    }

    async pageScroll(tagName:string) {
        //window.scrollBy(0,1);
        
        let all = document.getElementsByTagName(tagName);

        for (var i = 0; i < 1; i++){
            let me = this;
            if (tagName == "svg"){
                me.pageScrollHelper2(all[i], 0);
            }else{
                me.pageScrollHelper(all[i], 0);
            }
        }

        setTimeout(()=>{this.pageScroll(tagName);}, 50);
        
    }
}
