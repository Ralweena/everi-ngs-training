import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'news-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})

export class NewsPageComponent {
  @Input('title') titleVar = ""
  @Input('detail') detailVar = ""
  @Input('commentAry') commmentAryVar:string[] = []
  @Output() SelectMe = new EventEmitter();
  SelectMeFnc(){
    this.SelectMe.emit(this.titleVar)
  }
 
}
 