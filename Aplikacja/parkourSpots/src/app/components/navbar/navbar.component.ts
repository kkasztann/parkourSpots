import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public userName = 'Bezimienny';
  public userEmail: string;
  public userPhoto: string;

  constructor(
    public authService: AuthService,
    public flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        if (auth.displayName === null) {
          this.userName = 'Bezimienny';
        } else {
          this.userName = auth.displayName;
        }
        this.userEmail = auth.email;
        if (auth.photoURL === null) {
          this.userPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFX73rkB1nvKSoPeeKaijsaisKRaRPv4HDw8-9ElYqJQhSWlH';
        } else {
          this.userPhoto = auth.photoURL;
        }
      } else {
        this.isLogin = false;
      }
    });
  }

  onClickLogout() {
    this.flashMessages.show('Użytkownik wylogowany!',
      { cssClass: 'alert-success', timeout: 4000 });
    this.authService.logout();

  }

}
