import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './panel/profile/profile.component';
import { LoginGuardGuard } from 'src/shared/guards/login-guard.guard';
import { BasketComponent } from './layout/basket/basket.component';
import { LayoutComponent } from './layout/layout.component';


export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,

        children: [
            { path: '', component: HomeComponent },
            { path: 'products', component: ProductComponent },
            { path: 'profile', component: ProfileComponent, canActivate: [LoginGuardGuard] },
            { path: 'basket', component: BasketComponent },

        ]
    },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
];
