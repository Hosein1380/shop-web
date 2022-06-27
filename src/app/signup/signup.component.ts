import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Admin from 'src/shared/dto/Admin';
import Client from 'src/shared/dto/Client';
import { ClientRole } from 'src/shared/dto/enums';
import Seller from 'src/shared/dto/Seller';
import User from 'src/shared/dto/User';
import { DbService } from 'src/shared/services/db.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  signupform: FormGroup;

  constructor(
    private dbService: DbService,
  ) { }

  ngOnInit(): void {

    this.signupform = new FormGroup({

      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', Validators.required)
    });

  }

  signupButtonClickHandler() {

    switch (this.signupform.value.role) {
      case ClientRole.USER:
        const user: User = new User(
          this.signupform.value.username,
          this.signupform.value.password,
          this.signupform.value.email,
        );
        this.addClient(user);
        break;
      case ClientRole.SELLER:
        const seller: Seller = new Seller(
          this.signupform.value.username,
          this.signupform.value.password,
          this.signupform.value.email,
        );
        this.addClient(seller);
        break;
      case ClientRole.ADMIN:
        const admin: Admin = new Admin(
          this.signupform.value.username,
          this.signupform.value.password,
          this.signupform.value.email,
        );
        this.addClient(admin);
        break;

      default:
        alert("System Error");
        break;
    }

  }

  private addClient(client: Client) {
    // this.readTextFile('../../shared/app-database/app-database.txt')
    // users.push(client);
    // this.dbService.getUsers().subscribe(data => {
    //   console.log(`data`, data);
    // })
  }



  // private readTextFile(file: string) {
  //   var rawFile = new XMLHttpRequest();
  //   rawFile.open("GET", file, false);
  //   console.log(`raw`, rawFile);

  //   rawFile.onreadystatechange = function () {
  //     if (rawFile.readyState === 4) {
  //       if (rawFile.status === 200 || rawFile.status == 0) {
  //         var allText = rawFile.responseText;
  //         console.log(`text:`, allText);
  //         // alert(allText);
  //       }
  //     }
  //   }
  //   rawFile.send(null);
  // }

}
