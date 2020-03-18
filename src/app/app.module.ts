import { LoginService } from "./services/login.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxListModule } from 'igniteui-angular';
import { TododetailComponent } from './tododetail/tododetail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    TododetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule,IgxListModule, HttpClientModule,],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
