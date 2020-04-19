import { Component, OnInit ,OnDestroy} from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit ,OnDestroy{

  constructor(private _backendService: BackendService,private _route: Router) { }
  error: boolean = false;
  update:boolean=false;
  error1: boolean = false;
  update1:boolean=false;
  updateMessage1: String = "";
  updateMessage: String = "";
  errorMessage: String = "";
  private querySubscription;
  username=this._backendService.username;
  email=this._backendService.email;
  phone=this._backendService.phone;
   college=this._backendService.college;
  department=this._backendService.department;
  degree=this._backendService.degree;
  address=this._backendService.address;
  joiningyear=this._backendService.joiningyear;
  ngOnInit(): void {
    if(localStorage.getItem('token')) {
      this.querySubscription=this._backendService.viewprofile().subscribe((res)=>{
        if (res["status"] ) {
          this.error1 = false;
          this.username=res["fullname"];
          this.email=res["email"];
          this.phone=res["phone"];
          this.college=res["college"];
          this.department=res["department"];
          this.degree=res["degree"];
          this.address=res["address"];
          this.joiningyear=res["joiningyear"];
         
          // console.log(res["result"][0].id)
        } else {
          this._route.navigate(['/login']);
       }
    
      },
      (error)=>{
        this.error1 = true;
        this.errorMessage = "something is wrong";
      },
      ()=>{
    
      });
      
      
   }
  }

  updateuser(value){
  console.log(value);
  this.querySubscription=this._backendService.updateuserprofile(value).subscribe((res)=>{
    if (res["status"] ) {
      this.error1 = false;
      this.update1=true;
      this.updateMessage1="profile update successfully"
      this._backendService.username=res["fullname"];
      this._backendService.email=res["email"];
      this._backendService.phone=res["phone"];
      this._backendService.college=res["college"];
      this._backendService.department=res["department"];
      this._backendService.degree=res["degree"];
      this._backendService.address=res["address"];
      this._backendService.joiningyear=res["joiningyear"];
     
      // console.log(res["result"][0].id)
    } else {
      this._route.navigate(['/login']);
   }

  },
  (error)=>{
    this.error1 = true;
    this.errorMessage = "something is wrong";
  },
  ()=>{
    setTimeout(()=>{ location.reload(true);},1000);
   
  });
  }





  changeuserpassword(value){
    console.log(value);
    
    if(value.password===value.repeatpassword){
      this.error=false;
    this.querySubscription=this._backendService.changepassword(value).subscribe((res)=>{
      if (res["status"] ) {
        
        this.update=true;
        this.updateMessage="password update successfully"

        // console.log(res["result"][0].id)
      } else {
        this._route.navigate(['/login']);
     }

    },
    (error)=>{
      this.error = true;
      this.errorMessage = "something is wrong";
    },
    ()=>{

    });
  }
  else{
    this.update=false;
    this.error=true;
    this.errorMessage="repeat password doesnot match"

  }
}

  ngOnDestroy(){
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
  }
  }

}
