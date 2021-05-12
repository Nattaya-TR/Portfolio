import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutMeComponent } from './profile/about-me/about-me.component';
import {ProjectComponent} from './profile/project/project.component';
import {SkillComponent} from './profile/skill/skill.component';

const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'skill', component: SkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
