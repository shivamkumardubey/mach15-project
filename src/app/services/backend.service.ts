import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http: HttpClient) { }
// user info
 username=""
 loginstatus=false;
 email="";
 phone="";
 college:string="";
  department:string=""
  degree:string="";
  address:string="";
  joiningyear:string="";
  
  signup(data){
    
    
    return this._http.post("http://localhost:5000/register/signup", data, );
  }

  login(data){
  
    return this._http.post("http://localhost:5000/login", data, );
  }
  changepassword(data){
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
    return this._http.post("http://localhost:5000/changepassword", data, httpOptions);
  }
  updateuserprofile(data){
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
    return this._http.post("http://localhost:5000/updateprofile", data, httpOptions);

  }
  viewprofile(){
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
    return this._http.get("http://localhost:5000/viewprofile", httpOptions);
  }
  userproject(data){
    return this._http.post("http://localhost:5000/userproject", data );
  }
}
