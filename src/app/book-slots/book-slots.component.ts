import { Component, OnInit } from '@angular/core';
import { VeggieHiveService } from 'src/services/veggie-hive.service';
import { OwnerInfo } from '../owner-info';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-book-slots',
  templateUrl: './book-slots.component.html',
  styleUrls: ['./book-slots.component.css']
})
export class BookSlotsComponent implements OnInit {

  private slotBooked: boolean;
  public slots: any[] = []
  public slotsAvailable: any;
  private slotColor = 'honeydew';
  public ownerInfo =[];

  constructor(private veggieHiveService: VeggieHiveService,
    private notificationService : NotificationService) {

  }

  ngOnInit() {
    //To retrive all available slots
    this.veggieHiveService.getAllSlotsAvailable().subscribe(data => {
      this.slotsAvailable = data;
    }, error => console.log(error));
  }


  /**
   * Method to Retrive Owner information who books the slot
   * @param slotData slot information
   */
  retriveOwnerInfo(slotData):any{
    const ownerInfo = new OwnerInfo();
    let userName = localStorage.getItem('userName');
    let userId = localStorage.getItem('userId')
    localStorage.setItem('slotId',slotData.id)
    ownerInfo.ownerName = userName;
    ownerInfo.email = userId;
    return ownerInfo;
  }

/**
 * Method to backend api to book particular slot
 * @param slotData slot information
 */
  bookSlot(slotData) {
    this.veggieHiveService.bookSlot(this.retriveOwnerInfo(slotData), slotData.id).subscribe(slot => {
      this.notificationService.showSlotSuccessToaster(slotData.id);
    }, error => console.log(error));

  }


}
