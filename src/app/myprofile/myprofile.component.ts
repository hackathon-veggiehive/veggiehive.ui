import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';
import { VeggieHiveService } from 'src/services/veggie-hive.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  slotsAvailable: {};
  userName: string;
  userId: string;
  slotId: string;
  phoneNumber: string
  constructor(private authenticationService: AuthenticationService,
    private veggieHiveService: VeggieHiveService) { }

  ngOnInit() {
    this.userName = localStorage.getItem('userName')
    this.userId = localStorage.getItem('userId');
    this.phoneNumber = localStorage.getItem('phoneNumber')
    this.veggieHiveService.getAllSlotsAvailable().subscribe(data => {
      this.slotsAvailable = data;
      let keys = Object.keys(this.slotsAvailable);
      let len = keys.length;
      for (let i = 0; i < len ; i++){
        // if(this.slotsAvailable[i].owner){
      if (this.slotsAvailable[i].owner.ownerName == this.userName) {
          localStorage.setItem('slotId', this.slotsAvailable[i].id)
          this.slotId = localStorage.getItem('slotId');
        }
      
    }
    })

  }

}
