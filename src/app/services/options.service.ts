import { Injectable } from '@angular/core';

export interface DropdownOption{
    id:number;
    userName:string;
    stuffyMarks: number;
    mood: number;
}

@Injectable()
export class OptionsService {
    private users: string[] = ['Ilia', 'Victoria', 'Anton', 'Ann', 'Sasha', 'Rita', 'Genia', 'Dima', 'Rita2', 'Ira', 'Sergiy', 'Julia', 'Kulak'];
    private stuffyMarks: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    private moods: string[] = ['Не беспокоить!', 'На троечку', 'Солнце улыбается мне, а я ему', 'Я счастлив(-a), как никто!'];

    getUsers(): string[] {
        return this.users;
    }

    getStuffyMarks(): string[] {
        return this.stuffyMarks;
    }

    getMoods(): string[] {
        return this.moods;
    }
}
