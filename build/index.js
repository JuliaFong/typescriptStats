"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
//fs stands for file system
// create object for 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader("Football.csv");
//create an instance of MatchReader and pass in something
//for the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//matchReader.matches
console.log("Man United won " + WinsAnalysis_1.WinsAnalysis + " game");
