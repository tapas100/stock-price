import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';
import { MatDialog } from '@angular/material';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';
import { EventService } from '../../services/event.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss']
})
export class FullCalendarComponent implements OnInit {

  @Input() eventData: any;

  defaultConfigurations: any;

  constructor(private dialog: MatDialog, private eventService: EventService, private dataService: DataService) {

  }

  dayClick(date, jsEvent, activeView) {
    if (jsEvent.target.innerText != "") return;
    const dialogRef = this.dialog.open(EventDialogComponent, {
      data: {
        date: moment(date).format('L'),
      }
    })
    dialogRef.afterClosed().subscribe(
      res => {
        if (res) {
          this.eventService.createPrice(res).subscribe(response => {
            this.dataService.handlepriceList();
          })
        }
      }
    )
  }
  eventClick(calEvent, jsEvent, activeView) {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      data: calEvent.data
    })
    dialogRef.afterClosed().subscribe(
      res => {
        if (res) {
          this.eventService.updatePriceById(calEvent.data.id, res).subscribe(response => {
            this.dataService.handlepriceList();
          })
        }
      }
    )
  }


  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.updateCalendar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.eventData.currentValue) {
      this.eventData = changes.eventData.currentValue;
      this.defaultConfigurations.events = this.eventData;
      $('#full-calendar').fullCalendar('destroy');
      $('#full-calendar').fullCalendar(this.defaultConfigurations);
    }

  }

  updateCalendar() {
    this.defaultConfigurations = {
      eventLimit: true,
      titleFormat: 'MMM D YYYY',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month'
      },
      buttonText: {
        today: 'Today',
        month: 'Month'
      },
      views: {
        agenda: {
          eventLimit: 2
        }
      },
      allDaySlot: false,
      slotDuration: moment.duration('00:15:00'),
      slotLabelInterval: moment.duration('01:00:00'),
      firstDay: 1,
      selectable: true,
      selectHelper: true,
      events: null,
      displayEventTime: false,
      dayClick: (date, jsEvent, activeView) => {
        this.dayClick(date, jsEvent, activeView);
      },
      eventClick: (calEvent, jsEvent, activeView) => {
        this.eventClick(calEvent, jsEvent, activeView)
      },
      editable: true

    }
    $('#full-calendar').fullCalendar(this.defaultConfigurations);

  }

}
