import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  constructor(private _backendService: BackendService, private _route: Router) { }

  ngOnInit(): void {
  }
  public dataLoading: boolean =false;
  private querySubscription;
  error: boolean = false;
  errorMessage: String = "";
  savedChanges: boolean = false;



  userlogin(value){
    this.dataLoading = true;
    this.querySubscription=this._backendService.login(value).subscribe((res)=>{
      if (res["status"] ) {
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        window.localStorage.setItem('token', res["token"]);
        window.localStorage.setItem('name', res["username"]);
        this._backendService.loginstatus=true;
        this._backendService.username=res["username"]
        this._route.navigate(['/']);
    } else {
        this.error = true;
        this.errorMessage = res["errorMessage"];
        this.dataLoading = false;
    }
    },
    (error)=>{
      this.error = true;
      this.errorMessage = error.message;
      this.dataLoading = false;
    },
    ()=>{this.dataLoading = false;})

  }
  
  ngOnDestroy(){
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
  }
  }

}
