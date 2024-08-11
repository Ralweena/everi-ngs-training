import { Component } from '@angular/core';
import { NamSvcService } from '../nam-svc.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})

export class ContactPageComponent {
  constructor(public NamServices: NamSvcService, public NavVap: Router, public UrlVap: ActivatedRoute) {
     
  }

  LogoutFnc(){
    this.NamServices.isLoggedIn=false
    this.NamServices.userName=""
    this.NavVap.navigate(["/"])
  }
}
