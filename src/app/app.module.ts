import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ComputerscienceComponent } from './computerscience/computerscience.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import{FormsModule,ReactiveFormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import{ AuthGaurdService} from './services/auth-gaurd.service'
import{ BackendService} from './services/backend.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { from } from 'rxjs';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { PostideaComponent } from './postidea/postidea.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    RoutingComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    ComputerscienceComponent,
    ElectronicsComponent,
    ViewprofileComponent,
    ProjectlistComponent,
    ChangepasswordComponent,
    DashboardComponent,
    ProjectComponent,
    ForgetpasswordComponent,
    PostideaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,MatTabsModule, BrowserAnimationsModule,MatStepperModule, ReactiveFormsModule,MatInputModule,MatButtonModule
  ],
  providers: [AuthGaurdService,BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
