import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../devices.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(private deviceService: DeviceService) { }
  devices!: { isMobile: boolean, isDesktop: boolean};
  
  ngOnInit() {
    this.devices = {
      isMobile: this.deviceService.isMobile(),
      isDesktop: this.deviceService.isDesktop(),
    }
  }
}
