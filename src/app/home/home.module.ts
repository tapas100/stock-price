import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ComponentsModule,
    MaterialModule
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent],
})
export class HomeModule { }
