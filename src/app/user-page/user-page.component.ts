import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  NamVar : string = ""
  MblVar : number = 0
  OTPVar:number = 0

  constructor(public LocVap : Location, public UrlVap: ActivatedRoute) {
    let state:any = LocVap.getState()
    this.OTPVar = state.OTPVak
  }

  ngOnInit() {
    let params = this.UrlVap.snapshot.params
    this.NamVar = params.NamVak;
    this.MblVar = params.MblVak;

  }

}

