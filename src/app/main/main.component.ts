import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import config from './main.config';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private sanitizer: DomSanitizer) { }

  config = config;

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
