import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionsService } from '../../services/options.service';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  stuffyForm: FormGroup;

  users: string[] = [];
  stuffyMarks: string[] = [];
  moods: string[] = [];

  usersListHeader = '-- Пользователь --';
  stuffyListHeader = '-- Оценка --';
  moodListHeader = '-- Настроение --'

  constructor(private optionService: OptionsService,
              private chartService: ChartService) {
  }

  ngOnInit(): void {
    this.getMainData();

    this.stuffyForm = new FormGroup({
      'username': new FormControl('',[Validators.required]),
      'stuffy': new FormControl('',[Validators.required]),
      'mood': new FormControl('',[Validators.required]),
    });
  }

  getMainData(): void {
    this.users = this.optionService.getUsers();
    this.stuffyMarks = this.optionService.getStuffyMarks();
    this.moods = this.optionService.getMoods();
  }

  setUser(user: string): void {
    this.stuffyForm.get('username').setValue(user);
    this.usersListHeader = this.stuffyForm.controls['username'].value;
  }

  setStuffyMark(stuffyMark: string): void {
    this.stuffyForm.get('stuffy').setValue(stuffyMark);
    this.stuffyListHeader = this.stuffyForm.controls['stuffy'].value;
  }

  setMood(mood: string): void {
    this.stuffyForm.get('mood').setValue(mood);
    this.moodListHeader = this.stuffyForm.controls['mood'].value;;
  }

  onSubmit(): void {
    let index = this.users.indexOf(this.stuffyForm.value.username);

    this.chartService.addUserToCheckedInPeople(this.stuffyForm.value.username);
    this.chartService.setStuffyMark(Number(this.stuffyForm.value.stuffy), index);
    this.chartService.calcRoomMoods(this.stuffyForm.value.mood, index);
  }
}

