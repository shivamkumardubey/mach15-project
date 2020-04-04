import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  public nav="topnav";
  public myFunction() {
    if(this.nav==="topnav"){
      this.nav="topnav responsive";    }
      else{
        this.nav="topnav"
      }
  
  }
     


  }