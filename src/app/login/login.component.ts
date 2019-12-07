import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';
import { NgForm } from '@angular/forms';
import { VeggieHiveService } from 'src/services/veggie-hive.service';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private submitted = false;
  private loginData: any;
  private hide = true;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private veggieHiveService: VeggieHiveService,
    private notificationService : NotificationService) { }

  ngOnInit() {
  }

  /**
   * Method to call backend api to check authentication
   * @param loginForm user login data(email,password)
   */
  login(loginForm) {
    let invalidLogin = false;
    this.veggieHiveService.login(loginForm.value).toPromise().then(data => {
      this.loginData = data;
      if (this.authenticationService.authenticate(this.loginData)) {
        this.router.navigate(['/home'])
        invalidLogin = false
        console.log(this.loginData)
        this.resetForm(loginForm);
        this.notificationService.showLoginToaster();
      } else {
        invalidLogin = true
        this.notificationService.showLoginErrorToaster();
        this.resetForm(loginForm);
      }
    }).catch(err => {
      this.submitted = true;
      this.notificationService.showLoginErrorToaster();
      console.log(err);
    })
  }

  /**
   * 
   * @param form Method to reset Form data
   */
  resetForm(form: NgForm) {
    if (form) {
      form.resetForm();
    }
  }
}
