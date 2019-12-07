import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toaster: ToastrService) { }

  //login
  /**
 * Method to siaplay toaster after successful login
 */
  showLoginToaster() {
    this.toaster.success("Logged In successfully");
  }

  /**
   * Method to display error toaster when email and password doesnot match 
   */
  showLoginErrorToaster() {
    this.toaster.error("Email and Password did not match");
  }

  //Register
  showRegisterToaster(email) {
    this.toaster.success("Registered Successfully")
  }

  //slot booking
  showSlotSuccessToaster(slotId: any) {
    this.toaster.success("Slot with ID " + slotId + " Booked Successfully")
  }
}


