import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Client from '../dto/Client';
import { ClientRole } from '../dto/enums';
// import users from '../../shared/database/users.json';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  loginform: any;
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // const stringUsers = JSON.stringify(users);

    // const castedUsers: Client[] = JSON.parse(stringUsers);

    // const foundedUser: Client | undefined = castedUsers.find(element => element.role === this.loginform.controls['role'].value)


    // if (foundedUser?.role == ClientRole.USER) {

    //   return true;
    // }
    // else {
    //   if (foundedUser?.role == ClientRole.ADMIN) {

    //     return true;


    //   }
    //   else {
    //     if (foundedUser?.role == ClientRole.SELLER) {

    //       return true;

    //     }

    //   }
    if (localStorage.getItem('userName')) {
      return true;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
  }
}


// function users(users: any) {
//   throw new Error('Function not implemented.');
// }


