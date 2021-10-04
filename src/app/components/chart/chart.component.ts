import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartService } from '../../services/chart.service';
import { DomSanitizer } from '@angular/platform-browser';
import { takeUntil } from 'rxjs/operators';
import { areaChartOptions } from '../../helpers/areaChartOptions';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, OnDestroy {
  areaChart: Chart;
  imageUrl = '';

  private destroy$: Subject<void> = new Subject();

  constructor(private chartService: ChartService, private sanitized: DomSanitizer) {
  }

  ngOnInit(): void {
    this.chartService.roomMoodChanged$.pipe(takeUntil(this.destroy$)).subscribe(
      {
        next: (currentRoomMood: number) =>
          this.handleRoomChange(currentRoomMood),
      },
    );

    this.areaChart = new Chart(areaChartOptions(this.chartService.getUsers(), this.chartService.getStuffyMarks(), this.imageUrl));

    this.chartService.stuffyMarksChanged.subscribe(
      (currentStuffyMarks: number[]) =>
        this.updateChart(this.imageUrl, currentStuffyMarks),
    );

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private handleRoomChange(currentMood: number): void {
    const moodDependsOnRoomMood = ['https://cdn.icon-icons.com/icons2/1017/PNG/128/biaoqing_017_icon-icons.com_75863.png',
      'https://icons8.com/iconizer/files/classic_smileys_set/thumb/128/sad.png',
      'https://icons8.com/iconizer/files/classic_smileys_set/thumb/128/enjoying.png',
      'https://icons8.com/iconizer/files/Fugue_Icons/orig/smiley-lol.png'];

    this.imageUrl = this.sanitized.bypassSecurityTrustResourceUrl(moodDependsOnRoomMood[Math.round(currentMood)] || 'https://icons8.com/iconizer/files/Fugue_Icons/orig/smiley-lol.png')['changingThisBreaksApplicationSecurity'];

    this.updateChart(this.imageUrl);
  }

  private updateChart(imgUrl: string, stuffyMarks?: number[], users?: string[]): void {
    const usersForUpdate: string[] = users ? users : this.chartService.getUsers();
    const usersStuffyMarksForUpdate: number[] = stuffyMarks ? stuffyMarks : this.chartService.getStuffyMarks();

    this.areaChart.ref.update(areaChartOptions(usersForUpdate, usersStuffyMarksForUpdate, imgUrl));
  }

}
