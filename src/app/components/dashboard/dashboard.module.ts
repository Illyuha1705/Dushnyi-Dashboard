import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormComponent } from '../form/form.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from '../chart/chart.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent, FormComponent, DropdownComponent],
  imports: [
    CommonModule,
    ChartModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {
}
