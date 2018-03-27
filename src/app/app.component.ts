import { Component, OnInit } from '@angular/core';
import { ColorScroll } from './color-scroll';
import { CssColor } from './css-color';
import { ColorController } from './color-controller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'WeBeBrickit';
  msRefresh = 50;
  logoColor = new CssColor;
  bgColor = new CssColor;
  cc1 = new ColorController;
  cc2 = new ColorController;


  ngOnInit() {
    this.logoColor.setColor(255, 255, 255);
    this.bgColor.setColor(255, 255, 255);
    this.timeControl();
  }

  async timeControl() {
    // console.log('timeControl start');
    // console.log(this.bgColor.getRed());
    // console.log(this.bgColor.getGreen());
    // console.log(this.bgColor.getBlue());
    this.bgColor.setColorWithStr(this.cc1.randomRotate(this.bgColor));
    this.logoColor.setColorWithStr(this.cc2.randomRotate(this.logoColor));
    // console.log(this.bgColor.getRed());
    // console.log(this.bgColor.getGreen());
    // console.log(this.bgColor.getBlue());
    let who:any = document.body;
    let stuff:string = this.bgColor.getColorStr();
    // console.log(stuff);
    who.style.backgroundColor = stuff;
    // console.log(who.style.backgroundColor);
    who = document.getElementsByTagName('svg');
    who[0].style.fill = this.logoColor.getColorStr();
    // console.log('timeControl end');
    // console.log(this.bgColor.getRed());
    // console.log(this.bgColor.getGreen());
    // console.log(this.bgColor.getBlue());
    setTimeout(()=>{this.timeControl();}, this.msRefresh);
    
  }
}
