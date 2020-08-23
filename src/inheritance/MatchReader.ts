// import { dateStringToDate } from './utils';
// import { MatchResult } from './MatchResult';

// interface DataReader {
//     read(): void
//     data: string [][]
// }

// class MatchReader {
//     constructor(public reader: DataReader) {}
// }

// import { dateStringToDate } from './utils';
// import { MatchResult } from './MatchResult';

// type MatchData = [
//     Date, 
//     string,
//     string,
//     number,
//     number,
//     MatchResult,
//     string
// ]

// export class MatchReader  {
//     matches: MatchData[] = [];

//     constructor(public reader: DataReader) {}
//     load(): void {
//         this.reader.read()
//         this.matches = this.reader.data.map(
//             (row: string[]): MatchData => {
//             return [
//                 dateStringToDate(row[0]),
//                 row[1],
//                 row[2],
//                 parseInt(row[3]),
//                 parseInt(row[4]),
//                 row[5] as MatchResult, // "H" "A" "D"
//                 row[6]
//             ];
//         })
//     }
// }

