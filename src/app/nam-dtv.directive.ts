import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[change-color]',
  standalone: true
})
export class NamDtvDirective {
  NamElement! : HTMLElement

  constructor(private psgElement: ElementRef) { 
    this.NamElement = psgElement.nativeElement
  }

  ngOnInit() {
    this.NamElement.innerHTML = "This is from Directive"
    this.NamElement.style.color = "skyBlue"
    this.NamElement.style.background = "blue"
    this.NamElement.style.padding = "20px"
  }

}
