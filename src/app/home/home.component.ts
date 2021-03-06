import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { EventService } from '../services/event.service';
import momentExt from 'fullcalendar/src/moment-ext';
import * as moment from 'moment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  prices: any[];
  priceData: any;
  startDate: any;
  endDate: any;
  maxProfit:any;
  constructor(private eventService: EventService, private dataSaervice: DataService) { }
  ngOnInit(): void {
    this.getPrices();
    this.getEvents();
  }

  getEvents() {
    this.dataSaervice.priceList$.subscribe(res => {
      this.getPrices()
    })

  }
  getPrices() {
    this.eventService.getPrices().subscribe(res => {
      this.formatPricesForCalendar(res.records);
      this.formatPricesForChart(res.records);
    })
  }
  formatPricesForCalendar(prices) {
    this.prices = [];
    prices.forEach(element => {
      this.prices.push({
        title: 'Rs. ' + element.fields.price,
        start: moment(element.fields.date),
        data: {
          id: element.id,
          eventId: element.fields.eventId,
          date: element.fields.date,
          price: element.fields.price
        }
      })
    });
  }

  formatPricesForChart(prices) {
    let temp = []
    this.calculateMaxProfit(prices.map(ele => { return ele.fields.price }));
    prices.forEach(element => {
      temp.push([new Date(element.fields.date).getTime(), Number(element.fields.price)])
    })
    temp.sort()
    this.startDate = moment(temp[0][0]).format('ll');
    this.endDate = moment(temp[temp.length - 1][0]).format('ll');
    this.priceData = temp;
  }

  calculateMaxProfit(prices) {
    prices.sort();
    this.maxProfit = (prices[prices.length - 1] * 10) - (prices[0] * 10);
  }
}

