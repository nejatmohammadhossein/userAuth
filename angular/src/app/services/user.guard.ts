import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private appS: AppService){}
  canActivate(){
    if(this.appS.isRoleUser)
    {
      return true;
    }else{
      return false;
    }
    
  }
  
}
