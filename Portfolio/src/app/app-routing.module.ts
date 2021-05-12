import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutMeComponent } from './profile/about-me/about-me.component';
import {HeaderComponent} from './profile/header/header.component';

const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'about', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
