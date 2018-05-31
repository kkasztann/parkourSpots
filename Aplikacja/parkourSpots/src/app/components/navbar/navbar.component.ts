import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public name: string;
  public email: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.name = auth.displayName;
        this.email = auth.email;
      } else {
        this.isLogin = false;
      }
    });
  }

  onClickLogout() {
    this.authService.logout();
  }

}
