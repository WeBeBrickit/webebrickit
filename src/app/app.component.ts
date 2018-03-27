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
    this.bgColor.setColorWithStr(this.cc1.randomRotate(this.bgColor));
    this.logoColor.setColorWithStr(this.cc2.randomRotate(this.logoColor));
    document.body.style.backgroundColor = this.bgColor.colorStr;
    document.getElementsByTagName('svg')[0].style.fill = this.logoColor.colorStr;
    setTimeout(()=>{this.timeControl();}, this.msRefresh);
    
  }
}
