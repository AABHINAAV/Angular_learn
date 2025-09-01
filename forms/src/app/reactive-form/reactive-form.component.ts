import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  loginform!: FormGroup;

  constructor(private formBuilderObj: FormBuilder) {}

  ngOnInit(): void {
    this.loginform = this.formBuilderObj.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  login() {
    console.log(this.loginform.value);
  }
}
