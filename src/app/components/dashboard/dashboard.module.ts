import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormComponent } from '../form/form.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from '../chart/chart.module';

@NgModule({
  declarations: [DashboardComponent, FormComponent, DropdownComponent],
  imports: [
    CommonModule,
    ChartModule,
    ReactiveFormsModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {
}
