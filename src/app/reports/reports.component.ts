import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
// import * as Tableau from 'tableau-api-js'
import { VeggieHiveService } from 'src/services/veggie-hive.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  panelOpenState = false;
  private environmentData: any;
  private humidityData: any;
  imagUrl: any;
  url: any;
  analysedData: any;
  selected = 'option2';

  
  constructor(private veggieHiveService: VeggieHiveService) { }

  ngOnInit() {

    let slotId = localStorage.getItem('slotId')
    this.veggieHiveService.retrieveImage(slotId).subscribe(data => {
      this.imagUrl = data;
      this.url = this.imagUrl.imageUrl;
    })
    // this.veggieHiveService.retriveImageAnalysedData(slotId).subscribe(imageData => {
    //   this.analysedData = imageData;
    //   console.log(this.analysedData)
    // })
  }
imageData = this.veggieHiveService.getAnalysedData();
  humidity = this.veggieHiveService.getHumdityData();
  temperture = this.veggieHiveService.getTemperatureData();

  ttemperature = this.temperture.environmentData.temperature.value;
  hhumidity = this.temperture.environmentData.humidity.value;


  lineChartAnalysedData: ChartDataSets[] = [

    { data: [this.imageData[0].red,this.imageData[1].red,this.imageData[2].red,this.imageData[3].red], label: 'Red' },
    { data: [this.imageData[0].green,this.imageData[1].green,this.imageData[2].green,this.imageData[3].green], label: 'Green' },
    { data: [this.imageData[0].blue,this.imageData[1].blue,this.imageData[2].blue,this.imageData[3].blue], label: 'Blue' }
  ];
  lineChartAnalysedLabels: Label[] = [this.imageData[0].creationTimestamp,this.imageData[1].creationTimestamp,this.imageData[3].creationTimestamp,this.imageData[3].creationTimestamp];
  lineChartAnalysedOptions: (ChartOptions) = {
    responsive: true,
  };
  lineChartAnalysedColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  lineChartAnalysedLegend = true;
  lineChartAnalysedType = 'line';
  lineChartAnalysedPlugins = [];

  lineChartData: ChartDataSets[] = [

    { data: [60, 68.5, 57, 72, 80, 66, 53], label: 'Humidity' },
  ];
  lineChartLabels: Label[] = ["02-12-19", "03-12-19", "04-12-19", "05-12-19", "06-12-19", "07-12-19", "08-12-19"];
  lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartPlugins = [];

  lineChartTempData: ChartDataSets[] = [

    { data: [15, 17, 16, 19, 21, 17, 20], label: 'Temperature' },
  ];
  lineChartTempLabels: Label[] = ["02-12-19", "03-12-19", "04-12-19", "05-12-19", "06-12-19", "07-12-19", "08-12-19"];
  lineChartTempOptions: (ChartOptions) = {
    responsive: true,
  };
  lineChartTempColors: Color[] = [
    {
      borderColor: 'black',
      // backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  lineChartTempLegend = true;
  lineChartTempType = 'line';
  lineChartTempPlugins = [];


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [this.humidity.creationTimestamp];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [this.humidity.environmentData.humidity.value], label: 'Humidity' },
    { data: [this.temperture.environmentData.temperature.value], label: 'Temperature' }
  ];

  barChartAnalysedOptions: ChartOptions = {
    responsive: true,
  };
  public barChartAnalysedLabels: Label[] = [this.imageData[0].creationTimestamp,this.imageData[1].creationTimestamp,this.imageData[3].creationTimestamp,this.imageData[3].creationTimestamp];
  public barChartAnalysedType: ChartType = 'bar';
  public barChartAnalysedLegend = true;
  public barChartAnalysedPlugins = [];

  public barChartAnalysedData: ChartDataSets[] = [
    { data: [this.imageData[0].red,this.imageData[1].red,this.imageData[2].red,this.imageData[3].red], label: 'Red' },
    { data: [this.imageData[0].blue,this.imageData[1].blue,this.imageData[2].blue,this.imageData[3].blue], label: 'Blue' },
    { data: [this.imageData[0].green,this.imageData[1].green,this.imageData[2].green,this.imageData[3].green], label: 'Green' },
  ];


  
}
