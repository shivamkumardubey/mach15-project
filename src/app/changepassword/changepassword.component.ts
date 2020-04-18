import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  error: boolean = false;
  errorMessage: String = "";
  private querySubscription;
  update:boolean=false;
  updateMessage: String = "";
  constructor(private _backendService: BackendService,private _route: Router) { }

  ngOnInit(): void {
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
      setTimeout(()=>{this._route.navigate(["/"])},1500);
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
