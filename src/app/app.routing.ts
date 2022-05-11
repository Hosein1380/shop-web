import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';



export const routes: Routes = [
{path:'',component:HomeComponent},
{path:'products',component:ProductComponent},
];
