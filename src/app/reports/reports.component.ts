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

  constructor(private veggieHiveService: VeggieHiveService) { }

  ngOnInit() {
    let slotId = localStorage.getItem('slotId')
    this.veggieHiveService.retrieveImage(slotId).subscribe(data=>{
      console.log(data)
    })
  }

  humidity = this.veggieHiveService.getHumdityData();
  temperture = this.veggieHiveService.getTemperatureData();
  lineChartData: ChartDataSets[] = [

    { data: [0,this.humidity.environmentData.humidity.value], label: 'Series A' },
  ];
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      // backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartPlugins = [];

  lineChartTempData: ChartDataSets[] = [

    { data: [0,this.temperture.environmentData.temperature.value], label: 'Series A' },
  ];
  lineChartTempLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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

  // constructor() {}

  // public initViz(): void {
  //   const containerDiv = document.getElementById('vizContainer');
  //   const vizUrl = 'https://public.tableau.com/views/WorldIndicators/GDPpercapita';
  //   const options = {
  //     width: containerDiv.offsetWidth,
  //     height: 700
  //   };

  //   const viz = new Tableau.Viz(containerDiv, vizUrl, options);
  // }

  // public ngOnInit(): void {
  //   this.initViz();
  // }

}
