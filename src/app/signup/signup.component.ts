import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnDestroy {
   
  passwordmessage:boolean =false;
  public passmessage="repeat password doesn't match";
  public userdata={
    fullname:"",
    email:"",
    phone:"",
    password:""

  }



  public dataLoading: boolean =false;
  private querySubscription;
  error: boolean = false;
  errorMessage: String = "";
  savedChanges: boolean = false;



  constructor(private _backendService: BackendService, private _route: Router) { }

  ngOnInit(): void {
  }
  
  usersignup(value){
    // console.log(value);
    if(value.password===value.repeatpassword){
      this.dataLoading=true;
      this.passwordmessage=false;
      this.userdata.fullname=value.fullname;
      this.userdata.email=value.email;
      this.userdata.phone=value.phone;
      this.userdata.password=value.password;
      // console.log("this is",this.userdata);
       this.querySubscription = this._backendService.signup(this.userdata).subscribe((res) => {
        // console.log(res);
       if (res["status"]) {
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.savedChanges = true;
        setTimeout(()=>{this._route.navigate(["/login"])},3000);
        } else {
        this.error = true;
      
        this.errorMessage =res["errorMessage"];
        this.dataLoading = false;
        }
         },
         (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
         },
          () => {
          this.dataLoading = false;
          });
    }
    else
    {this.passwordmessage=true;
      this.error = false;
    }
  }

ngOnDestroy(){
  if (this.querySubscription) {
    this.querySubscription.unsubscribe();
}
}

}
