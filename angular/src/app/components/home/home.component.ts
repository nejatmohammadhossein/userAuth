import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'فرادرس';
  constructor(public dilog: MatDialog){}
  
  openDialogLogin(){
    this.dilog.open(LoginComponent,{height:"60%",width: "70%"});
  }
  openDialogRegister(){
    this.dilog.open(RegisterComponent,{height:"80%",width: "70%"});
  }

  ngOnInit(): void {
  }

}
