import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: String = '';
  password: String = '';
  authFailed: Boolean = false;

  constructor(private router: Router, private commmonService: CommonService) { }

  ngOnInit() {

  }

  login() {
    if (this.username == "admin" && this.password == "admin") {
      this.router.navigate(["/app/home"]);
    }
    else {
      this.authFailed = true;
      setTimeout(() => {
        this.authFailed = false;
      }, 3000)
    }
  }

  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.login();
    }
  }

}
