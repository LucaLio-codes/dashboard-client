import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StompConfig, StompService} from "@stomp/ng2-stompjs";
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import {stompConfig} from "./stompconfig";

@NgModule({
  declarations: [
    AppComponent,
    WeatherContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StompService,

    {


      provide: StompConfig,


      useValue: stompConfig


    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
