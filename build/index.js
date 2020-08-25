"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
//fs stands for file system
// create object for 'DataReader' interface
// const csvFileReader = new CsvFileReader("Football.csv")
//create an instance of MatchReader and pass in something
//for the 'DataReader' interface
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
//matchReader.matches
