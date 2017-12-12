var fs = require('fs');
var cheerio = require('cheerio');
var d3 = require('d3');
var csv = require('csv-parser');
var country_json = {};


        
       
fs.createReadStream('https://raw.githubusercontent.com/mczoloft/major-studio-01/master/assignments/04UserCases/FINAL.csv')
  .pipe(csv())
  .on('data', function (data) {
    console.log(data.Country_Name);
  })