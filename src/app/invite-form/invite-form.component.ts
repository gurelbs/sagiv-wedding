import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invite-form',
  templateUrl: './invite-form.component.html',
  styleUrls: ['./invite-form.component.scss']
})
export class InviteFormComponent implements OnInit {
  rsvpForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.rsvpForm = this.fb.group({
      name: ['', Validators.required],
      familyName: ['', Validators.required],
      guestsNumber: [Number, Validators.required],
      isAttending: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.rsvpForm.valid) {
      this.http.post('/api/rsvp', this.rsvpForm.value).subscribe(
        (res) => {
          console.log('Success:', res);
          localStorage.setItem('rsvp', JSON.stringify(res));
          this.router.navigate(['/save']);
        },
        (error) => {
          console.error('Failed to save RSVP', error);
          this.router.navigate(['/save']);
        }
      );
    }
  }
}
