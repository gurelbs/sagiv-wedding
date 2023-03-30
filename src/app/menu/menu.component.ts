import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../devices.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(private deviceService: DeviceService) { }
  devices!: { isMobile: boolean, isDesktop: boolean};
  
  ngOnInit() {
    this.devices = {
      isMobile: this.deviceService.isMobile(),
      isDesktop: this.deviceService.isDesktop(),
    }
  }
}
