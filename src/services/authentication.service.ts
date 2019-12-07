import { Injectable, ɵConsole } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(loginData:any) {
    if (loginData) {
      localStorage.setItem('token', loginData.token);
      localStorage.setItem('userId',loginData.userId)
      localStorage.setItem('userName',loginData.userName)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('userId')
    return !(user === null)
  }

  logOut() {
    localStorage.clear();
  }

}
