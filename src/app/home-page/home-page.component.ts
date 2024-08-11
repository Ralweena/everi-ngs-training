import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsPageComponent } from '../news-page/news-page.component';
import { FormsModule, NgModel } from '@angular/forms';
import { NamSvcService } from '../nam-svc.service';
import { NamDtvDirective } from '../nam-dtv.directive';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NewsPageComponent, FormsModule, NamDtvDirective],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {
  commentVar:string = ""
  commentAryVar:any = {}

  selectedNews = ""
 

  constructor(public NamServices: NamSvcService, public NavVap: Router, public UrlVap: ActivatedRoute) {
     
    }
 
  GotoPageFnc()
  {
    this.NavVap.navigate(["User/Sujan/Mobile/876543876"],
 
      {
        replaceUrl: true,
        state: { OTPVak: 7654 }
      });
  }

  SelectMeFnc(EvtRsgVar:string)
  {
    this.selectedNews = EvtRsgVar
  }

  addCommentFnc(commentVav:NgModel){
    //   this.commentAryVar.push(this.commentVar)
    //   commentVav.reset()
    if(this.commentAryVar[this.selectedNews])
      this.commentAryVar[this.selectedNews].push(this.commentVar)
    else
      this.commentAryVar[this.selectedNews] = [this.commentVar]

      commentVav.reset()
  }

}
 