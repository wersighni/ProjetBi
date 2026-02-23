import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent {

  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirm: new FormControl('', Validators.required)
  });

}