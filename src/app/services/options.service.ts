import { Injectable } from '@angular/core';

@Injectable()
export class OptionsService {
  private users: string[] = ['Ilia', 'Victoria', 'Anton', 'Ann', 'Sasha', 'Rita', 'Genia', 'Dima', 'Rita2', 'Ira', 'Sergiy', 'Julia', 'Kulak'];
  private stuffyMarks: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private moods: string[] = ['Не беспокоить!', 'На троечку', 'Солнце улыбается мне, а я ему', 'Я счастлив(-a), как никто!'];

  usersListHeader: string = '-- Пользователь --';
  stuffyListHeader: string = '-- Оценка --';
  moodListHeader: string = '-- Настроение --'
  usersListIsActive = false;
  stuffyListIsActive = false;
  moodListIsActive = false;

  getUsers(): string[] {
    return this.users;
  }

  getStuffyMarks(): number[] {
    return this.stuffyMarks;
  }

  getMoods(): string[] {
    return this.moods;
  }

  getUsersHeader(): string {
    return this.usersListHeader;
  }

  getStuffyHeader(): string {
    return this.stuffyListHeader;
  }

  getMoodsHeader(): string {
    return this.moodListHeader;
  }

  getUsersListIsActive(): boolean {
    return this.usersListIsActive;
  }

  getStuffyListIsActive(): boolean {
    return this.usersListIsActive;
  }

  getMoodListIsActive(): boolean {
    return this.usersListIsActive;
  }



  toggleUserList(): void {
    this.usersListIsActive = !this.usersListIsActive;
  }

  toggleStuffyList(): void {
    this.stuffyListIsActive = !this.stuffyListIsActive;
  }

  toggleMoodsList(): void {
    this.moodListIsActive = !this.moodListIsActive;
  }
}
