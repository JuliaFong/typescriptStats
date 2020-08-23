import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
//fs stands for file system

// create object for 'DataReader' interface
const csvFileReader = new CsvFileReader("Football.csv")

//create an instance of MatchReader and pass in something
//for the 'DataReader' interface
const MatchReader = new MatchReader(csvFileReader)

let manUnitedWins = 0;

for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++
    }
}

console.log(`Man United won ${manUnitedWins} game`)
