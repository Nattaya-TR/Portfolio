import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faFlickr} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faGithub = faGithub;
  faLinkedIn = faLinkedin;
  faFlickr = faFlickr;

  constructor() { }

  ngOnInit(): void {
  }

}
