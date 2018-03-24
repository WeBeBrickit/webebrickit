import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { YoutubeService } from './youtube.service';
import { WebeVideoComponent } from './webe-video/webe-video.component';


@NgModule({
  declarations: [
    AppComponent,
    WebeVideoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
