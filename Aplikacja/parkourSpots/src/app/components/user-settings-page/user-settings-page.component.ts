import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings-page',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.scss']
})
export class UserSettingsPageComponent implements OnInit {

  email = '';
  password = '';
  name = '';
  ID = '';

  user: any;

  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.user = auth;
        this.ID = auth.uid;
        this.name = auth.displayName;
        this.email = auth.email;
      }
    });
  }

  updateUser() {
      this.authService.updateUser(this.name, this.email, this.password);
      location.reload();
  }

  deleteUser() {
    this.authService.deleteUser();
    this.router.navigate(['/login']);
  }
}
