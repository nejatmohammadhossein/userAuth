import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  protected aFormGroup!: FormGroup;
  siteKey: string;
  lang: string;
  public ex: boolean = true;
  event: string ="";
  showSave:boolean=false;
  
  constructor(public formBuilder: FormBuilder, 
    public appService:AppService,
    public dialog:MatDialog) {
    this.siteKey = environment.siteKey;
    this.lang = environment.lang;
   }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  
public registerData ={
    name : '',
    userName: '',
    password: '',
    rePassword: ''
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
  register(){
    //console.log(this.registerData);
    if(!this.ex && this.registerData.password == this.registerData.rePassword){
      console.log(this.ex);
      this.appService.register(this.registerData);
      this.showSave=true;
      this.registerData.name="";
      this.registerData.userName="";
      this.registerData.password="";
      this.registerData.rePassword="";
      
    }
    
    
  };
  close(){
    this.dialog.closeAll();
  };

}
