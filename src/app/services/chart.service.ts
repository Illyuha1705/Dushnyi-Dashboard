import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ChartService {
    stuffyMarksChanged$: EventEmitter<number[]> = new EventEmitter<number[]>();
    roomMoodChanged$: EventEmitter<number> = new EventEmitter<number>();

    moods: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    CheckedInPeople: string[] = [];
    sumOfMoods = 0;

    private stuffyMarks: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    getStuffyMarks(): number[] {
        return this.stuffyMarks;
    }

    setStuffyMark(stuffyMark: number, index: number): void {
        this.stuffyMarks.splice(index, 1, stuffyMark);
        this.stuffyMarksChanged$.emit(this.stuffyMarks);
    }

    calcSumOfMoods(): number {
        return this.sumOfMoods = this.moods.reduce((a, b) => a + b, 0);
    }

    addUserToCheckedInPeople(user: string): void {
        if (!this.CheckedInPeople.includes(user)) {
            this.CheckedInPeople.push(user);
        }
    }

    calcRoomMoods(mood: string, index: number): void {
        let roomMood = 0;

        switch (mood) {
            case 'Не беспокоить!':
                this.moods.splice(index, 1, 1);
                roomMood = this.calcSumOfMoods() / this.CheckedInPeople.length;
                break;
            case 'На троечку':
                this.moods.splice(index, 1, 2);
                roomMood = this.calcSumOfMoods() / this.CheckedInPeople.length;
                break;
            case 'Солнце улыбается мне, а я ему':
                this.moods.splice(index, 1, 3);
                roomMood = this.calcSumOfMoods() / this.CheckedInPeople.length;
                break;
            case 'Я счастлив(-a), как никто!':
                this.moods.splice(index, 1, 4);
                roomMood = this.calcSumOfMoods() / this.CheckedInPeople.length;
                break;
        }
        this.roomMoodChanged$.emit(roomMood);
    }
}
