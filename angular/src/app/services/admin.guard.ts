import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private appS: AppService){}
  canActivate( ){
    if(this.appS.isRoleAdmin){
      return true;
    }else{
      window.alert("403");
      return false;
    }
    
  }
  
}
