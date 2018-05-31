import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.flashMessages.show('Użytkownik zarejerstrowany - wszystko przebiegło poprawnie!',
          { cssClass: 'alert-succes', timeout: 4000 });
        this.router.navigate(['/userSettings']);
      }).catch((err) => {
        this.flashMessages.show('Użytkownik NIEzarejerstrowany - coś poszło nie tak!',
        { cssClass: 'alert-danger', timeout: 4000 });
        console.log(err);
      });
  }

}
