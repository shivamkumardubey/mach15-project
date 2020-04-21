import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor( private _backendService: BackendService,private _route: Router) { }

  ngOnInit(): void {
  }
  error: boolean = false;
  errorMessage: String = "";
  formstatus:boolean=true;
  private querySubscription;
  userproject(data){
    console.log(data)
    this.querySubscription=this._backendService.userproject(data).subscribe((res)=>{
      if (res["status"] ) {
       this.error=false
       this.formstatus=false;
        // console.log(res["result"][0].id)
      } else {
   
     }
  
    },
    (error)=>{
      this.error = true;
      this.errorMessage = "something is wrong";
    },
    ()=>{
  
    });
  }

}
