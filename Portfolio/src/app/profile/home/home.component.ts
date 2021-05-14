import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profileImage = './assets/img/profile-Natta.JPG';

  @Input('ratio') parallaxRatio : number = 1
  initialTop : number = 0

  @ViewChild('parallax', { static : true }) parallax !: ElementRef;

  @HostListener("window: scroll", ["$event"])
  onWindowScroll()  {
    this.parallax.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
