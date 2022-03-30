import { Injectable } from '@angular/core';
import {StompService, StompState} from "@stomp/ng2-stompjs";
import {map, Observable} from "rxjs";
import { Message } from '@stomp/stompjs';
import {WebSocketConfig} from "./web-socket-config";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public message!: Observable<Message>;
  public wsstate!: Observable<string>;

  constructor(private stompService: StompService) { }

  public connect(){
    this.wsstate = this.stompService.state.pipe(map((state: number) => StompState[state]));
    this.message = this.stompService.subscribe(WebSocketConfig.topic);
  }

  public getSocketData(): Observable<Message>{
    return this.message
  }
  public getSocketState(): Observable<string>{
    return this.wsstate
  }
}

