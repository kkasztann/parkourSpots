import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MapPageComponent } from './components/map-page/map-page.component';
import { ListOfSpotsPageComponent } from './components/list-of-spots-page/list-of-spots-page.component';
import { ParkourPageComponent } from './components/parkour-page/parkour-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UserSettingsPageComponent } from './components/user-settings-page/user-settings-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'map', component: MapPageComponent},
  {path: 'listOfSpots', component: ListOfSpotsPageComponent},
  {path: 'parkour', component: ParkourPageComponent},
  {path: 'faq', component: FaqPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'userSettings', component: UserSettingsPageComponent},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
