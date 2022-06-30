import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  innerWidth: any;
  constructor() {
    this.innerWidth = (window.screen.width);
   }

  ngOnInit(): void {
  }
  openNav() {
    (<HTMLInputElement>document.getElementById("mySidebar")).style.width = "250px";
    // (<HTMLInputElement>document.getElementById("mySidebar")).style.marginLeft = "250px";
  }
  
  closeNav() {
    (<HTMLInputElement>document.getElementById("mySidebar")).style.width = "0px";
    // (<HTMLInputElement>document.getElementById("mySidebar")).style.marginLeft = "0px";
  }

}
