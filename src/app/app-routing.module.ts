import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ComputerscienceComponent } from './computerscience/computerscience.component';


const routes: Routes = [ 
  {path:"",component:MainComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"computerscience",component:ComputerscienceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[SignupComponent,MainComponent,LoginComponent,ComputerscienceComponent]