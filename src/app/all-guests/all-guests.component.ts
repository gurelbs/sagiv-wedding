import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { downloadExcel } from './export-excel';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-guests',
  templateUrl: './all-guests.component.html',
  styleUrls: ['./all-guests.component.scss']
})
export class AllGuestsComponent implements OnInit, OnDestroy {
  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object){}
  private httpSubscription!: Subscription;
  allGuests: any;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.httpSubscription = this.http.get('/all-guests').subscribe({
        next: (data: any) => {
          this.allGuests = data.allGuests;
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => {
          console.log('HTTP request completed.');
        }
      })
    }
  }

  ngOnDestroy() {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }
  }

  downloadExcel(){
    downloadExcel(this.allGuests);
  }
}
