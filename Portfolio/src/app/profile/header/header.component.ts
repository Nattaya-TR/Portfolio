import { Component, OnInit } from '@angular/core';
import { faEnvelopeOpenText, faMobileAlt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  LogoImage = './assets/img/NT.png';
  email = faEnvelopeOpenText;
  phone = faMobileAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
