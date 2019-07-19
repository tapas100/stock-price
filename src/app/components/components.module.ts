import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { MaterialModule } from '../material.module';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { DigitOnlyDirective } from '../directives/digitOnly.directive';
@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    HighchartsChartModule,
    MaterialModule
  ],
  declarations: [
  FullCalendarComponent,
  LineChartComponent,
  DigitOnlyDirective,
  EventDialogComponent],
  exports:[FullCalendarComponent,LineChartComponent],
  providers:[DataService],
  entryComponents:[EventDialogComponent]
})
export class ComponentsModule { }
