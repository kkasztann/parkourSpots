import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
      .then((res) => {
        this.flashMessages.show('Użytkownik zalogowany - wszystko przebiegło poprawnie!',
          { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/userSettings']);
      }).catch((err) => {
        this.flashMessages.show('Użytkownik NIEzalogowany - coś poszło nie tak!',
          { cssClass: 'alert-danger', timeout: 4000 });
        this.flashMessages.show(err, { cssClass: 'alert-danger', timeout: 6000 });
        this.router.navigate(['/login']);
      });
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
      .then((res) => {
        this.flashMessages.show('Użytkownik zalogowany - wszystko przebiegło poprawnie!',
          { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/userSettings']);
      }).catch(err => {
        this.flashMessages.show('Użytkownik NIEzalogowany - coś poszło nie tak!',
          { cssClass: 'alert-danger', timeout: 4000 });
        this.flashMessages.show(err, { cssClass: 'alert-danger', timeout: 6000 });
      });
  }

  onClickFacebookLogin() {
    this.authService.loginFacebook()
      .then((res) => {
        this.flashMessages.show('Użytkownik zalogowany - wszystko przebiegło poprawnie!',
          { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/userSettings']);
      }).catch(err => {
        this.flashMessages.show('Użytkownik NIEzalogowany - coś poszło nie tak!',
          { cssClass: 'alert-danger', timeout: 4000 });
        this.flashMessages.show(err, { cssClass: 'alert-danger', timeout: 6000 });
      });
  }
}
