import { Component, OnInit } from '@angular/core';
import config from './main.config';
import { DeviceService } from '../devices.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private deviceService: DeviceService){}
  config = config;
  googleEventLink!: string;
  sizes = this.deviceService;

  ngOnInit() {
    this.googleEventLink = this.createGoogleEvent();
  }

  createGoogleEvent(){
    const { name, date, endDate, details } = config.googleEvent;
    return `http://www.google.com/calendar/event?action=TEMPLATE&text=${name}&dates=${date}/${endDate}&details=${details}&location=${config.location.google}&trp=false&sprop=&sprop=name:`
  }
}
