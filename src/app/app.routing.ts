import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './panel/profile/profile.component';




export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent }
];
