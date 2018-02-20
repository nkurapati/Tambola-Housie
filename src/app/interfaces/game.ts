import {WiningType} from './wining-type';

export interface Game {
    id:string,
    lastNumber: number,
    completedNumbers: number[],
    firstFive: WiningType,
    firstRow: WiningType,
    secondRow: WiningType
    thirdRow: WiningType,
    fullHouse: WiningType,
    completed:boolean,
}
