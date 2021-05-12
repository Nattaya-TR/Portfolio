import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faFlickr} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
 /*faGithub = faGithub;
 faLinkedIn = faLinkedin;
 faFlickr = faFlickr;*/
  constructor() { }

  ngOnInit(): void {
  }

}
