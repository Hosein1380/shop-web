import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import Client from 'src/shared/dto/Client';
// import users from '../../shared/database/users.json';
// import User from '../../shared/dto/User';
// import writeJsonFile from 'write-json-file';
import { Router } from '@angular/router';
import { DbService } from 'src/shared/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  loginform: FormGroup;


  constructor(
    private router: Router,
    private dbService: DbService
  ) { }

  ngOnInit(): void {

    this.loginform = new FormGroup({

      username: new FormControl(''),

      password: new FormControl('')


    });





  }

  login() {

    this.dbService.getAllUsers().subscribe(res => {
      let users: any;
      users = res;
      console.log(users);
      let user = users.find(user => user.login == this.loginform.value.username);
      if (user !== undefined) {
        localStorage.removeItem('userName');
        localStorage.setItem('userName', user.login);
        this.router.navigate(['profile']);

      }
      else {

        alert('username or password is incorrect!');

      }
    });




    // if (DbService.username === this.loginform.value.username) {
    //   console.log('ok');

    // }





    // console.log(`**********  login  *********`);

    // console.log(users);

    // const stringUsers = JSON.stringify(users);

    // const castedUsers: Client[] = JSON.parse(stringUsers);

    // const foundedUser: Client | undefined = castedUsers.find(element => element.name === this.loginform.controls['username'].value);


    // if (foundedUser?.pass === this.loginform.value.password) {
    //   console.log('login succesfull!');





    //   if (foundedUser?.role == 'admin') {
    //     this.router.navigate(['profile']);
    //     console.log('admin');
    //   }

    // }
    // if (foundedUser?.role == 'user') {
    //   this.router.navigate(['profile']);
    //   console.log('user');
    // }

    // if (foundedUser?.role == 'seller') {
    //   this.router.navigate(['profile']);
    //   console.log('seller');
    // }
    // else {

    //   alert('username or password is incorrect!');
    // }

  }



}








  // async updateClients(clients: Client[]) {

    // await writeJsonFile.writeJsonFile('../../shared/database/users.json', clients,'utf8');

  // }




// }
