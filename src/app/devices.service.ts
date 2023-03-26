import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private screenWidth!: number;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  isMobile(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return this.screenWidth <= 1024;
    }
    return false;
  }

  isDesktop(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return this.screenWidth > 1024;
    }
    return false;
  }
}
