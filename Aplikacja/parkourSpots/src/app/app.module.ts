import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MapPageComponent } from './components/map-page/map-page.component';
import { ListOfSpotsPageComponent } from './components/list-of-spots-page/list-of-spots-page.component';
import { ParkourPageComponent } from './components/parkour-page/parkour-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { UserSettingsPageComponent } from './components/user-settings-page/user-settings-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MapPageComponent,
    ListOfSpotsPageComponent,
    ParkourPageComponent,
    FaqPageComponent,
    AboutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    UserSettingsPageComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
