import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invite-form',
  templateUrl: './invite-form.component.html',
  styleUrls: ['./invite-form.component.scss']
})
export class InviteFormComponent implements OnInit {
  rsvpForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.rsvpForm = this.fb.group({
      name: ['', Validators.required],
      guests: [1, Validators.required],
      isAttending: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.rsvpForm?.valid) {
      this.http.post('/api/rsvp', this.rsvpForm?.value).subscribe(
        (res) => {
          console.log('RSVP saved successfully!');
        },
        (error) => {
          console.error('Failed to save RSVP', error);
        }
      );
    }
  }
}
