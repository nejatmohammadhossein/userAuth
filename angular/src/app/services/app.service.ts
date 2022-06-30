
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseURL = "http://127.0.0.1:3000";
  public invalid: boolean =false;
 
 
  constructor(private http:HttpClient, private route:Router,public dialog:MatDialog) { }
  get name(){
    var y = JSON.stringify(localStorage.getItem('token'));
    var y2 = JSON.parse(y);
    y2 = "["+ y2 + "]";
    y2 = JSON.parse(y2);
    return y2[0].name;
  }
  get isAuthenticated(){
    var y = JSON.stringify(localStorage.getItem('token'));
    if(y == 'null'){
      
      return false;
    }
    var y2 = JSON.parse(y);
    y2 = "["+ y2 + "]";
    y2 = JSON.parse(y2);
    return !!y2[0].token;
    
  }

  get isRoleAdmin (){
    var y = JSON.stringify(localStorage.getItem('token'));
    if(y == 'null'){
      window.alert('خطای 403: امکان دسترسی به این آدرس وجود ندارد');
      this.route.navigate(['/']);
      return false;
    }
    var y2 = JSON.parse(y);
    y2 = "["+ y2 + "]";
    y2 = JSON.parse(y2);
    if(y2[0].role == '1'){
      return true;
    }else{
      window.alert('خطای 403: امکان دسترسی به این آدرس وجود ندارد');
      this.route.navigate(['/']);
      return false;
    }
    
    return false;

  }
  get isRoleUser (){
    var y = JSON.stringify(localStorage.getItem('token'));
    if(y == 'null'){
      window.alert('خطای 403: امکان دسترسی به این آدرس وجود ندارد');
      this.route.navigate(['/']);
      return false;
    }
    var y2 = JSON.parse(y);
    y2 = "["+ y2 + "]";
    y2 = JSON.parse(y2);
    if(y2[0].role == '0'){
      return true;
    }else{
      window.alert('خطای 403: امکان دسترسی به این آدرس وجود ندارد');
      this.route.navigate(['/']);
      return false;
    }
    
    return false;
  }

  register(data: any){
    this.http.post(this.baseURL+'/register',data).subscribe((result)=>{
      
    });
  }
  login(data: any){
    this.http.post(this.baseURL+'/login',data).subscribe(
      result=>{
     
        console.log(result);
       var y = JSON.stringify(result);
       y= "["+y+"]";
       var y2 = JSON.parse(y);
       console.log(y2[0].name);
       if(y2[0].name == 'false' || !y2[0].token){
         this.invalid = true;
         return;
       }
       if(y2[0].role == '0'){
         localStorage.setItem('token',JSON.stringify(result));
        this.dialog.closeAll();
        this.route.navigate(['/user']);
       }
       if(y2[0].role == '1'){
        localStorage.setItem('token',JSON.stringify(result));
        this.dialog.closeAll();
        this.route.navigate(['/admin']);
       }
       

    });
  }
  logOut(){
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  }

 
  
}
