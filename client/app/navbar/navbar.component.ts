import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent  {

    constructor(
        private authService:AuthenticationService,
        private router:Router
    ){}

    onLogoutClick(){
    this.authService.logout();
    // this.flashMessage.show('You are logged out', {
    //   cssClass:'alert-success',
    //   timeout: 3000
    // });
    this.router.navigate(['/']);
    return false;
  }
}