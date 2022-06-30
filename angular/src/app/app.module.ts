import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxCaptchaModule} from 'ngx-captcha';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { AppService } from './services/app.service';
import {HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component'



var routes : Routes =[
{
  path:'',
  component: HomeComponent
},
{
  path: 'admin',
  component:AdminComponent,
  canActivate:[AdminGuard]
},
{
  path: 'user',
  component:UserComponent,
  canActivate:[UserGuard]
},
{
  path: '404',
  component: NotFoundComponent
},
{
  path: '**',
  redirectTo: '/404'
}
]



@NgModule({
  declarations: [

    AppComponent,
     HeaderComponent,
     LoginComponent,
     RegisterComponent,
     HomeComponent,
     AdminComponent,
     UserComponent,
     NotFoundComponent,
     SidebarComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    NgxCaptchaModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    
  
  ],

  
  providers: [AdminGuard,UserGuard,AppService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
