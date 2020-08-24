import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

//fs stands for file system

// create object for 'DataReader' interface
const csvFileReader = new CsvFileReader("Football.csv")

//create an instance of MatchReader and pass in something
//for the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load();
//matchReader.matches

const summary = new Summary (
    new WinsAnalysis('Man United'),
    new HtmlReport(),
);

summary.buildAndPrintReport(matchReader.matches)



