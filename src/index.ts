import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
//fs stands for file system

// create object for 'DataReader' interface
const csvFileReader = new CsvFileReader("Football.csv")

//create an instance of MatchReader and pass in something
//for the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load();
//matchReader.matches



console.log(`Man United won ${WinsAnalysis} game`)
