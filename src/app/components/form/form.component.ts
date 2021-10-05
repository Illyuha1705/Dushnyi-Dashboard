import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      'username': new FormControl(null),
      'stuffy': new FormControl(null),
      'mood': new FormControl(null),
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

/*import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OptionsService } from '../../services/options.service';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  chooseUserForm: FormGroup;

  users: string[] = [];
  stuffyMarks: number[] = [];
  moods: string[] = [];

  usersListHeader: string;
  stuffyListHeader: string;
  moodListHeader: string;

  usersListIsActive: boolean;
  stuffyListIsActive: boolean;
  moodListIsActive: boolean;

  constructor(private optionService: OptionsService,
              private chartService: ChartService) {
  }

  ngOnInit(): void {
    this.users = this.optionService.getUsers();
    this.stuffyMarks = this.optionService.getStuffyMarks();
    this.moods = this.optionService.getMoods();

    this.usersListHeader = this.optionService.getUsersHeader();
    this.stuffyListHeader = this.optionService.getStuffyHeader();
    this.moodListHeader = this.optionService.getMoodsHeader();

    this.usersListIsActive = this.optionService.getUsersListIsActive();
    this.stuffyListIsActive = this.optionService.getStuffyListIsActive();
    this.moodListIsActive = this.optionService.getMoodListIsActive();

    this.chooseUserForm = new FormGroup({
      'username': new FormControl(null),
      'stuffy': new FormControl(null),
      'mood': new FormControl(null),
    });
  }

  onToggleUser(): void {
    this.usersListIsActive = !this.usersListIsActive;
  }

  onToggleStuffyMark(): void {
    this.stuffyListIsActive = !this.stuffyListIsActive;
  }

  onToggleMood(): void {
    this.moodListIsActive = !this.moodListIsActive;
  }

  setUser(user: string): void {
    this.chooseUserForm.get('username').setValue(user);
    this.usersListHeader = user;
    this.onToggleUser();
  }

  setStuffyMark(stuffyMark: number): void {
    this.chooseUserForm.get('stuffy').setValue(stuffyMark);
    this.stuffyListHeader = String(stuffyMark);
    this.onToggleStuffyMark();
  }

  setMood(mood: string): void {
    this.chooseUserForm.get('mood').setValue(mood);
    this.moodListHeader = mood;
    this.onToggleMood();
  }

  onSubmit(): void {
    let index = this.users.indexOf(this.chooseUserForm.value.username);
    this.chartService.addUserToCountedPeople(this.chooseUserForm.value.username);

    this.chartService.setStuffyMark(this.chooseUserForm.value.stuffy, index);
    this.chartService.addMood(this.chooseUserForm.value.mood);
    this.chartService.calcRoomMoods(this.chooseUserForm.value.mood, index);
  }
}*/
