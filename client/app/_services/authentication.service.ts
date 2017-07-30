import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthenticationService {
   
   user: any;
   authToken: any;
   isLoggedIn: boolean;
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post('/users/authenticate', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('id_token', user.token);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.isLoggedIn = true;
                }

                return user;
            });
    }

    logout(){
        this.authToken=localStorage.getItem('id_token');
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }

    loggedIn(){
        console.log(tokenNotExpired('id_token'));
        return tokenNotExpired('id_token');
  }
}