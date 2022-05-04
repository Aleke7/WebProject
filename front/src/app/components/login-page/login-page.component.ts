import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import {UserData, Token} from 'src/app/models/token.model'

import { AuthorizationService } from '../../services/authorization/authorization.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username: any
  password: any

  constructor(private service: AuthorizationService) { }

  ngOnInit(): void {
  }
  getToken(){
    console.log(this.username, this.password)
    let tok!: Token;
    this.service.login(this.username, this.password).subscribe(
      token=>{
        tok = token;
        if(tok){
          this.service.setSession(tok);
          location.href = "."
        }
      }
    )
    // console.log(this.service.login(this.username, this.password))
  }
}
