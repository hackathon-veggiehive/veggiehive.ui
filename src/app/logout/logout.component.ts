import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private authentocationService: AuthenticationService,
    private router: Router,
    private notificationService : NotificationService) { }

  ngOnInit() {
    this.authentocationService.logOut();
    this.router.navigate(['login']);
    this.notificationService.showLogoutToaster();
  }

}
