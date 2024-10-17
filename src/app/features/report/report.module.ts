import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule // Importing the routing module for reports
  ]
})
export class ReportModule { }
