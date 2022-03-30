import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";
import {Subscription} from "rxjs";
import {Message} from "@stomp/stompjs";

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainerComponent implements OnInit, OnDestroy {

  private datasubscription!: Subscription;
  private statesubscription!: Subscription;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.connect()
    this.datasubscription = this.weatherService.getSocketData().subscribe(WeatherContainerComponent.onData)
    this.statesubscription = this.weatherService.getSocketState().subscribe(WeatherContainerComponent.onState)
  }

  private static onData(message: Message) {
    console.log(message.body)
    console.log(JSON.parse(message.body))
  }

  private static onState(state: String) {
    console.log(state)
  }

  ngOnDestroy() {
    this.datasubscription.unsubscribe();
    this.statesubscription.unsubscribe();
  }
}
