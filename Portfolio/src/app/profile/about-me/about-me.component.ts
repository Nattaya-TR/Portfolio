import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faFlickr} from '@fortawesome/free-brands-svg-icons';
import { faSignature, faBirthdayCake, faAddressCard, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
 faGithub = faGithub;
 faLinkedIn = faLinkedin;
 faFlickr = faFlickr;
  name = faSignature;
  birthday = faBirthdayCake;
  address = faAddressCard;
  email = faEnvelopeOpenText;
  constructor() { }

  ngOnInit(): void {
  }

}
