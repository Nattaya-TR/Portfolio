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
  projectVideo = '/assets/img/project.MP4'

  constructor() {}


  ngOnInit(): void {
  }

}
