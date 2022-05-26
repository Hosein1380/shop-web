import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Client from 'src/shared/dto/Client';
import users from '../../shared/database/users.json';
import User from '../../shared/dto/User';
import { writeJsonFile } from 'write-json-file';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  loginform: FormGroup;


  constructor() { }

  ngOnInit(): void {

    this.loginform = new FormGroup({

      username: new FormControl(''),

      password: new FormControl('')


    });





  }

  login() {

    console.log(`**********  login  *********`);

    console.log(users);

    const stringUsers = JSON.stringify(users);

    const castedUsers: Client[] = JSON.parse(stringUsers);

    const foundedUser: Client | undefined = castedUsers.find(element => element.name === this.loginform.controls['username'].value)

    castedUsers.push(
      new User(
        "arash",
        "123",
        "arash.mros@gmail.com",
      )
    );

    this.updateClients(castedUsers);

    if (foundedUser) {

      if (foundedUser.pass === this.loginform.value.password) {
        console.log('login succesfull!');
        return
      }

    }

    alert('username or password is incorrect!');


  }

  async updateClients(clients: Client[]) {

    await writeJsonFile('../../shared/database/users.json', clients);

  }


}
