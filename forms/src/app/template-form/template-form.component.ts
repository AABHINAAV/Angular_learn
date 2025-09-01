import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  username!: string;
  password!: string;
  successMsg!: string;
  failMsg!: string;

  constructor() {}

  ngOnInit(): void {}

  login() {
    console.log(this.username + ' === ' + this.password);
  }
}
