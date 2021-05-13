import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './profile/about-me/about-me.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './profile/header/header.component';
import { FooterComponent } from './profile/footer/footer.component';
import { HomeComponent } from './profile/home/home.component';
import { ProjectComponent } from './profile/project/project.component';
import { SkillComponent } from './profile/skill/skill.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { library} from '@fortawesome/fontawesome-svg-core';
import {NgbCarouselModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgbCarouselModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
