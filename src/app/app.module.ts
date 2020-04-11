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
import{FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import{ AuthGaurdService} from './services/auth-gaurd.service'
import{ BackendService} from './services/backend.service'
import { from } from 'rxjs';
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
    ElectronicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
  ],
  providers: [AuthGaurdService,BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
