import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NamSvcService } from '../nam-svc.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

  constructor(public NamServices: NamSvcService, public NavVap: Router, public UrlVap: ActivatedRoute) {
     
  }

}
