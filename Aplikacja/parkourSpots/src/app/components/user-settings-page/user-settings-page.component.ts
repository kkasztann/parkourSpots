import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-page',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.scss']
})
export class UserSettingsPageComponent implements OnInit {

  private today = new Date();
  year: number = this.today.getFullYear();


  name = '';
  email = '';
  password = '';
  ID = '';
  yearSWT = '';
  sex = '';

  constructor() { console.log(this.year); }

  ngOnInit() {
  }

  updateUser() {

  }

  deleteUser() {

  }

}
