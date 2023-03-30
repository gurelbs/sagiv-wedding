import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Invite } from '../../../models/rsvp';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {  }
  userData: Invite | null = null;
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)){
      const {userData} = JSON.parse(localStorage.getItem('rsvp') ?? '');
      this.userData = userData;
    }
  }
}
