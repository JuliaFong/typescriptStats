import { CsvFileReader } from './CsvFileReader'
//fs stands for file system

const reader = new CsvFileReader("football.csv")
reader.read();

console.log(reader)


//enum - enumeration - just signaling to other engineers
//this is a collection of closely related values

enum matchResult  {
    HomeWin = "H",
    AwayWin = "A",
    Draw = "D"
}


let manUnitedWins = 0;

for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === matchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === "Man United" && match[5] === matchResult.AwayWin) {
        manUnitedWins++
    }
}

console.log(`Man United won ${manUnitedWins} games`)
