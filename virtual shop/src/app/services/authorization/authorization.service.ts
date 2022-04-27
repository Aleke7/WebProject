import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public loggedIn: boolean = false;
  url: string = ''

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    this.logout();
    let postData: FormData = new FormData();
    postData.append('username', username);
    postData.append('password', password);

    return this.http.post<any>(this.url, postData);
  }

  public setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expires_at, 'second');
    localStorage.setItem('id_token', authResult.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    let reload = localStorage.getItem('id_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('activeUser');
    this.loggedIn = false;
    if (reload) window.location.reload();
  }

  public isLoggedIn(): boolean {
    if (
      !localStorage.getItem('id_token') ||
      !localStorage.getItem('expires_at')
    )
      return false;
    return moment().isBefore(this.getExpiration());
  }

  private getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration || '{}');
    return moment(expiresAt);
  }


}
