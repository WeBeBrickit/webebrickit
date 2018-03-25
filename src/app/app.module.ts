import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { YoutubeService } from './youtube.service';
import { WebeVideoComponent } from './webe-video/webe-video.component';
import { SouthpawLogoComponent } from './southpaw-logo/southpaw-logo.component';
import { CssColor } from './css-color';


@NgModule({
  declarations: [
    AppComponent,
    WebeVideoComponent,
    SouthpawLogoComponent,
    CssColor
  ],
  imports: [
    BrowserModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
