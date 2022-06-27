import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/shared/services/db.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  datas: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbsservice: DbService,
    private router: Router
  ) { }

  ngOnInit(): void {

    let userid = localStorage.getItem('userName');

    // console.log(userid);


    if (userid) {
      this.dbsservice.getprofile(userid).subscribe(item => {
        this.datas = item;
        // console.log(item);
        // console.log(this.datas);



      })
    }

  }

  logout() {
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }


}
