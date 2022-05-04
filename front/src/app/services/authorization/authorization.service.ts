import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import {UserData, Token} from 'src/app/models/token.model'

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public loggedIn: boolean = false;
  url: string = 'http://127.0.0.1:8000/api/login/'

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Token> {
    let logData: UserData = {
      username:username,
      password:password
    }
    // this.logout();
    console.log(logData)
    // console.log(k)
    // this.setSession(k.token)
    return this.http.post<Token>(this.url, logData);
  }

  public setSession(authResult: Token) {
    localStorage.setItem('token', authResult.token);
  }

  logout() {
    let reload = localStorage.removeItem('token');
    console.log(reload)
    // if (reload) window.location.reload();
  }

  public isLoggedIn(): boolean {
    if (localStorage.getItem('token'))
      return false;
    return true
  }

  private getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration || '{}');
    return moment(expiresAt);
  }


}
