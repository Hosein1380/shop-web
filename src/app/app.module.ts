import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { BaseComponent } from './base/base.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './panel/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    BaseComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
