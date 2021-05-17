import { Component, OnInit } from '@angular/core';
import { faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  github = faGithub;

  constructor() {}


  ngOnInit(): void {
  }

}
