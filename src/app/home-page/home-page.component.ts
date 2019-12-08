import { Component, OnInit } from '@angular/core';
import { VeggieHiveService } from 'src/services/veggie-hive.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  slotsAvailable: {};
  userName: string;
  userId: string;
  slotId: string;
  phoneNumber: string;
  constructor(private veggieHiveService: VeggieHiveService) { }

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    this.userId = localStorage.getItem('userId');
    this.phoneNumber = localStorage.getItem('phoneNumber');
    this.veggieHiveService.getAllSlotsAvailable().subscribe(data => {
      this.slotsAvailable = data;
      let keys = Object.keys(this.slotsAvailable);
      let len = keys.length;
      for (let i = 0; i < len ; i++){
        // if(this.slotsAvailable[i].owner){
      if (this.slotsAvailable[i].owner.ownerName == this.userName) {
          localStorage.setItem('slotId', this.slotsAvailable[i].id);
          this.slotId = localStorage.getItem('slotId');
        }
    }
    })

  }
  }
