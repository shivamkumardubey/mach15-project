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
  updateMessage: String = "";
  errorMessage: String = "";
  private querySubscription;
  public username;
  public email;
  public phone;
  college:string="";
  department:string=""
  degree:string="";
  address:string="";
  joiningyear:string="";
  ngOnInit(): void {
    this.username=this._backendService.username;
    this.email=this._backendService.email;
    this.phone=this._backendService.phone;
  }

  updateuser(value){
  console.log(value);
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

    },
    ()=>{

    });
  }
  else{
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
