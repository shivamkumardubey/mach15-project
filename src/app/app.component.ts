import { Component } from '@angular/core';
import { BackendService } from './services/backend.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mach15-new';


  constructor(private _backendService: BackendService) { }


  ngOnInit(){

    if(localStorage.getItem('token')) {
      this._backendService.username=localStorage.getItem('name');
      this._backendService.loginstatus=true;
   }
  }
     
}
