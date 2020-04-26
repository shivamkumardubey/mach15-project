import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ComputerscienceComponent } from './computerscience/computerscience.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import{ AuthGaurdService} from './services/auth-gaurd.service'
import{ViewprofileComponent} from'./viewprofile/viewprofile.component'
import{ProjectlistComponent} from'./projectlist/projectlist.component'
import{ChangepasswordComponent}from'./changepassword/changepassword.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { from } from 'rxjs';
import { ProjectComponent } from './project/project.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { PostideaComponent } from './postidea/postidea.component';

const routes: Routes = [ 
  {path:"",component:MainComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"computerscience",component:ComputerscienceComponent},
  {path:"viewprofile",component:ViewprofileComponent,canActivate:[AuthGaurdService]},
  {path:"projectlist",component:ProjectlistComponent},
  {path:"changepassword",component:ChangepasswordComponent,canActivate:[AuthGaurdService]},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGaurdService]},
  {path:"project",component:ProjectComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent,canActivate:[AuthGaurdService]},
  {path:"postidea",component:PostideaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[SignupComponent,MainComponent,LoginComponent,ComputerscienceComponent,ElectronicsComponent,ProjectlistComponent,ChangepasswordComponent,DashboardComponent,ProjectComponent,ForgetpasswordComponent,PostideaComponent]