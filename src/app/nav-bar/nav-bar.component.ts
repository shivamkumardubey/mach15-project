import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _backendService: BackendService, private _route: Router) { }
public username;
public loginstatus;
  ngOnInit(): void {
     this.username=this._backendService.username;
    this.loginstatus=this._backendService.loginstatus;
  }
  public nav="topnav";
  public myFunction() {
    if(this.nav==="topnav"){
      this.nav="topnav responsive";    }
      else{
        this.nav="topnav"
      }
  
  }
   public logout(){
      localStorage.removeItem("token");
      this._backendService.loginstatus=false;
      this._route.navigate(["/"]);

    }


  }