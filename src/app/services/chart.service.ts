import { EventEmitter, Injectable } from '@angular/core';
import { OptionsService } from "./options.service";

@Injectable()
export class ChartService {
  stuffyMarksChanged: EventEmitter<number[]> = new EventEmitter<number[]>();
  roomMoodChanged$: EventEmitter<number> = new EventEmitter<number>();

  users: string[] = [];
  private stuffyMarks: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  moods: string[] = [];

  arrOfMoods: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  CheckedInPeople: string[] = [];
  sumOfMoods: number = 0;
  roomMood: number = 0;
  countOfCheckedInPeople: number = 0;

  constructor(private optionService: OptionsService) { }

  getUsers(): string[] {
    return this.users = this.optionService.getUsers();
  }

  getStuffyMarks(): number[] {
    return this.stuffyMarks;
  }

  setStuffyMark(stuffyMark: number, index: number): void {
    this.stuffyMarks.splice(index, 1, stuffyMark);
    this.stuffyMarksChanged.emit(this.stuffyMarks);
  }

  addMood(mood: string): void {
    this.moods.push(mood);
  }

  getSumOfMoods(): number {
    return this.sumOfMoods = this.arrOfMoods.reduce((a, b) => a + b, 0);
  }

  increasePeopleCounter(): number {
    return ++this.countOfCheckedInPeople;
  }

  addUserToCountedPeople(user: string): void {
    if(!this.CheckedInPeople.includes(user)) {
      this.CheckedInPeople.push(user);
      this.increasePeopleCounter();
    }
  }

  calcRoomMoods(mood: string, index: number): void {
    let currentRoomMood: number = 0;
    switch (mood) {
      case 'Не беспокоить!':
        this.arrOfMoods.splice(index, 1, 1);
        currentRoomMood = this.getSumOfMoods() / this.countOfCheckedInPeople;
        break;
      case 'На троечку':
        this.arrOfMoods.splice(index, 1, 2);
        currentRoomMood = this.getSumOfMoods() / this.countOfCheckedInPeople;
        break;
      case 'Солнце улыбается мне, а я ему':
        this.arrOfMoods.splice(index, 1, 3);
        currentRoomMood = this.getSumOfMoods() / this.countOfCheckedInPeople;
        break;
      case 'Я счастлив(-a), как никто!':
        this.arrOfMoods.splice(index, 1, 4);
        currentRoomMood = this.getSumOfMoods() / this.countOfCheckedInPeople;
        break;
    }

    this.roomMood = currentRoomMood;
    this.roomMoodChanged$.emit(this.roomMood);
  }
}
