import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   
  passwordmessage:boolean =false;
  public passmessage="repeat password doesn't match";
  public userdata={
    fullname:"",
    email:"",
    phone:"",
    password:""

  }
  constructor() { }

  ngOnInit(): void {
  }
  usersignup(value){
    // console.log(value);
    if(value.password===value.repeatpassword){
      this.passwordmessage=false;
      this.userdata.fullname=value.fullname;
      this.userdata.email=value.email;
      this.userdata.phone=value.phone;
      this.userdata.password=value.password;
  console.log("this is",this.userdata);
    }
    else
    {this.passwordmessage=true;}
  }


}
