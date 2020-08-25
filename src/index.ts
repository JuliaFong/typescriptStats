import { MatchReader } from './MatchReader';
import { Summary } from './Summary';



//fs stands for file system

// create object for 'DataReader' interface
// const csvFileReader = new CsvFileReader("Football.csv")

//create an instance of MatchReader and pass in something
//for the 'DataReader' interface

const matchReader = MatchReader.fromCsv('football.csv')
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches)
//matchReader.matches



