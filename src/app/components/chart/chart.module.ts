import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartService } from '../../services/chart.service';
import { OptionsService } from '../../services/options.service';
import { ChartComponent } from './chart.component';
import { ChartModule as AngularHighChartModule }  from 'angular-highcharts';

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    AngularHighChartModule
  ],
  exports: [ChartComponent],
  providers: [ChartService, OptionsService],
})
export class ChartModule {
}
