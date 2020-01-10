'use strict';

var cp = require("child_process");
let fs = require('fs')
let textLine = fs.readFileSync('cfg.txt',"utf8").split("\n")
const ELASTIC_LOCATION = textLine[1]

module.exports = {
    PORT: textLine[0],
    startElastic : startElasticSearch
}

function startElasticSearch(){
    console.log(ELASTIC_LOCATION + '\\bin\\elasticsearch.bat')
    cp.spawn(ELASTIC_LOCATION + '\\bin\\elasticsearch.bat'); 
}