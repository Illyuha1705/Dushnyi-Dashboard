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

    calcSumOfMoods(index,item): number {
        this.moods.splice(index, 1, item);
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
                roomMood = this.calcSumOfMoods(index,1) / this.CheckedInPeople.length;
                break;
            case 'На троечку':
                roomMood = this.calcSumOfMoods(index,2) / this.CheckedInPeople.length;
                break;
            case 'Солнце улыбается мне, а я ему':
                roomMood = this.calcSumOfMoods(index,3) / this.CheckedInPeople.length;
                break;
            case 'Я счастлив(-a), как никто!':
                roomMood = this.calcSumOfMoods(index,4) / this.CheckedInPeople.length;
                break;
        }
        this.roomMoodChanged$.emit(roomMood);
    }
}
