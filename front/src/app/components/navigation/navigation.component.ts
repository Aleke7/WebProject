import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from 'src/app/services/authorization/authorization.service'
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private service: AuthorizationService) { }

  ngOnInit(): void {
  }
  isLogged(){
    return this.service.isLoggedIn();
  }
  logout(){
    this.service.logout();
  }
}
