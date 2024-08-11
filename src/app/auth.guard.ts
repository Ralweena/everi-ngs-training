import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { NamSvcService } from './nam-svc.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardCls implements CanActivate
{
  constructor(
    private service:NamSvcService){}

  canActivate()
  {
    return this.service.isLoggedIn
  }
}