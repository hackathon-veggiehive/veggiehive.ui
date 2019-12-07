import { Component, OnInit } from '@angular/core';
import { VeggieHiveService } from 'src/services/veggie-hive.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-slot-registration-form',
  templateUrl: './slot-registration-form.component.html',
  styleUrls: ['./slot-registration-form.component.css']
})
export class SlotRegistrationFormComponent implements OnInit {
  
  private submitted: boolean;
  hide = true;

  constructor(private veggieHiveService: VeggieHiveService,
    private router: Router,
    private notificationService : NotificationService) { }

  ngOnInit() {
  }

  registerUser(userData: any) {
    console.log(userData.value)
    this.veggieHiveService.register(userData.value).toPromise().then(data => {
      console.log(data);
      this.submitted = true;
      this.notificationService.showRegisterToaster(userData.email)
      localStorage.setItem('userName', userData.value.fullname)
      localStorage.setItem('phoneNumber', userData.value.phonenumber)
      this.resetForm(userData)
      this.router.navigate(['/login'])
    }).catch(err => {
      console.log("Error" + err);
      this.resetForm(userData)
    });
  }

  resetForm(form: NgForm) {
    if (form) {
      form.resetForm();
    }
  }
}
