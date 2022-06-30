import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  protected aFormGroup!: FormGroup;
  siteKey: string;
  lang: string;
  public ex: boolean = true;
  event: string ="";
  showInvalidWarn: boolean = false;
 
  
  constructor(public formBuilder: FormBuilder, public appService:AppService, private dialog:MatDialog) {
    this.siteKey = environment.siteKey;
    this.lang = environment.lang;
   }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  public loginData ={
    
    userName: '',
    password: '',
    
  }
  
  handleExpire(){
    this.ex = true;
    return false;
  }
  handleSuccess(event: string){
    this.event = event;
    this.ex = false;
    return true;
  }

  close(){
    this.dialog.closeAll();
  }
  
  login(){
    //console.log(this.registerData);
    if(!this.ex ){
      console.log(this.ex);
      this.appService.login(this.loginData);
      this.showInvalidWarn = this.appService.invalid;
      
      
    }
  }

}
