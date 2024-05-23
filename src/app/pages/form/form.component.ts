import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required,Validators.email]);
  phone_number = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);


  errorMessage = '';

  constructor() { }

  updateErrorMessage() {
    if (this.name.hasError('required')) {
      this.errorMessage = 'Please enter your full name.';
    }
    if (this.email.hasError('required')) {
      this.errorMessage = 'Please enter your valid email.';
    }
    if (this.phone_number.hasError('required')) {
      this.errorMessage = 'Please enter your mobile number.';
    }
    if (this.message.hasError('required')) {
      this.errorMessage = 'Please enter your message.';
    }
  }
}

