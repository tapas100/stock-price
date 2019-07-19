import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnInit {

  input: any;
  eventData: any = {};
  isCreate: boolean = false;
  ngOnInit() {
    if (!this.data.id) {
      this.eventData = {
          eventId:'event001',
          date:this.data.date,
          price:0
      }
    }
    else {
      console.log(this.data);
      this.input = this.data.price;
      this.eventData = Object.assign(this.eventData, this.data);
    }

  }

  constructor(
    public dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  submit(): void {
    this.eventData.price = this.input;
    delete this.eventData.id
    this.dialogRef.close(this.eventData);
  }

  isInvalid(){
    return this.input == undefined ? true :false;
  }
}
