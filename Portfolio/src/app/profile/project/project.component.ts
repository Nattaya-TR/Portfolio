import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource } from "@ng-bootstrap/ng-bootstrap";
import { faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  github = faGithub;

  slideActive(ngbSlideEvent: NgbSlideEvent) {
    console.log(ngbSlideEvent.source);
    console.log(ngbSlideEvent.paused);
    console.log(NgbSlideEventSource.INDICATOR);
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(NgbSlideEventSource.ARROW_RIGHT)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
