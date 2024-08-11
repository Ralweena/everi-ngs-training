import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NamSvcService {

  isLoggedIn = false
  userName = ""

  constructor(public NavVap:Router) { 
    
    let data = localStorage.getItem("login")  
    if(data)
      this.isLoggedIn = !!data
  }

  onInit() {}


  loginFnc() {
    this.isLoggedIn = true
    this.userName = "Ralweena"
    localStorage.setItem("login", this.isLoggedIn+"")
    this.NavVap.navigate(["/About"])
  }

  logoutFnc() {
    this.isLoggedIn = false
    this.userName = ""
    localStorage.setItem("login", "")
    this.NavVap.navigate(["/"])
  }
}
