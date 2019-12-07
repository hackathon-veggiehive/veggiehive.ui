  import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeggieHiveService {
  environmentData:any;
  baseUrl = 'http://ec2-52-77-243-25.ap-southeast-1.compute.amazonaws.com:8080/nec'

  constructor(private httpClient: HttpClient) { }

  getHumdityData():any{
    let slotId = localStorage.getItem('slotId')
    this.getEnvironmentReportForId(slotId).subscribe(data=>{
      this.environmentData= data;
    });
    return this.environmentData;
  }

  getTemperatureData():any{
    let slotId = localStorage.getItem('slotId')
    this.getEnvironmentReportForId(slotId).subscribe(data=>{
      this.environmentData= data;
    });
    return this.environmentData;
  }

  getAllHumdityData():any{
    let slotId = localStorage.getItem('slotId')
    this.getEnvironmentReportForId(slotId).subscribe(data=>{
      this.environmentData= data;
    });
    return this.environmentData.environmentData.humidity.value;
  }

  getAllTemperatureData():any{
    let slotId = localStorage.getItem('slotId')
    this.getEnvironmentReportForId(slotId).subscribe(data=>{
      this.environmentData= data;
    });
    return this.environmentData.environmentData.temperature.value;
  }


  /**
   * Method to return Authorization header(token)
   */
  returnHeader() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' +
      localStorage.getItem('token'));
    let token = {
      headers: headers
    };
    return token;
  }
  /**
   * Method to post the registered users data to backend
   * @param data registered user data
   */
  register(data) {
    return this.httpClient.post(this.baseUrl + '/auth/register', data);
  }

  /**
   * Method to post the logged in user data to backend
   * @param data logged in user data
   */
  login(data) {
    return this.httpClient.post(this.baseUrl + `/auth/login`, data);
  }

  /**
   * Method to display all available slots for user
   */
  getAllSlotsAvailable() {
    const header = this.returnHeader();
    return this.httpClient.get(this.baseUrl + '/slots',
      header)
  }

  /**
   * Method to book a slot
   * @param data  ownerInfo who is booking the slot
   * @param slotID unique slot id for a slot
   */
  bookSlot(ownerInfo: any, slotID: number) {
    const header = this.returnHeader();
    return this.httpClient.put(this.baseUrl + `/book/slots/${slotID}/`, ownerInfo,
      header)
  }
/**
 * Method to retrive present Environment data for a particular slot 
 * @param slotId unique slot id
 */
  getEnvironmentReportForId(slotId: any) {
    const header = this.returnHeader();
    return this.httpClient.get(this.baseUrl + `/environment/report/slots/${slotId}/`, header)
  }

  /**
   * Method to retrive all Environment data for a particular slot
   * @param slotId unique slot id
   */
  getAllEnvironmentReportForId(slotId: any) {
    const header = this.returnHeader();
    return this.httpClient.get(this.baseUrl + `/environment/report/slots/${slotId}/`, header)
  }

  /**
   * @param slotId unique slot id
   */
  retrieveImage(slotId:any){
    const header = this.returnHeader();
    return this.httpClient.get(this.baseUrl + `/image/report/slots/${slotId}` , header)
  }

  retriveImageAnalysedData(slotId:any){
  const header = this.returnHeader();
  return this.httpClient.get(this.baseUrl + `/image/analysis/report/slots/${slotId}` , header)
  }
}