import { Component, OnInit } from '@angular/core';
import { ColorScroll } from './color-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'WeBeBrickit';
  colorScroll = new ColorScroll;
  

  ngOnInit() {
    this.colorScroll.pageScroll();
    
  }
}
