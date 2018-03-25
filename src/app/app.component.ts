import { Component, OnInit } from '@angular/core';
import { ColorScroll } from './color-scroll';
import { CssColor } from './css-color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'WeBeBrickit';
  // colorScroll = new ColorScroll;
  // colorScroll2 = new ColorScroll;
  msRefresh = 50;
  logoColor = new CssColor;
  bgColor = new CssColor;

  ngOnInit() {
    this.logoColor.setColor(255, 255, 255);
    this.bgColor.setColor(255, 255, 255);
    // this.colorScroll.pageScroll("div");
    // this.colorScroll2.pageScroll("svg");
  }

  async timeControl(tagName:string) {

    setTimeout(()=>{this.pageScroll(tagName);}, this.msRefresh);
    
  }
}
