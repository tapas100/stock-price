import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() data: any
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {
    title: {
      text: "Stock Price"
    },
  };
  // chartCallback: Highcharts.ChartCallbackFunction = function (chart) { ... } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue) {
      this.chartOptions = Highcharts.setOptions({
        title: {
          text: "Stock Price"
        },

        legend: {
          enabled: true
        },

        plotOptions: {
          series: {
            showInLegend: true
          }
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: 'Price'
          }
        }
        ,
        series: [
          {
            type: "line",
            id: "aapl",
            name: "Price Through Event",
            data: changes.data.currentValue
          }
        ]

      });
    }
    this.updateFlag = true
    console.log(this.chartOptions);
  }
}
