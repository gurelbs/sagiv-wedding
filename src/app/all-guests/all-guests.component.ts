import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { downloadExcel } from './export-excel';

@Component({
  selector: 'app-all-guests',
  templateUrl: './all-guests.component.html',
  styleUrls: ['./all-guests.component.scss']
})
export class AllGuestsComponent implements OnInit {
  constructor(private http: HttpClient){}
  allGuests: any;
  ngOnInit(): void {
    this.http.get('/all-guests').subscribe(
      (res: any) => {
        this.allGuests = res.allGuests;
      },
      (error) => {
        console.error('Failed to save RSVP', error);
      }
    );  
  }

  downloadExcel(){
    downloadExcel(this.allGuests);
  }
}
