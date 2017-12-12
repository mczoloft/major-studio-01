var fs = require('fs');
var cheerio = require('cheerio');
var d3 = require('d3');

var country_json = {};

// d3.csv ('/assignments/04UserCases/FINAL.csv', function(data, error){
//     if (error) throw error;
    
//     country_json.push(data);
//     console.log(country_json);
// })

    // var content = fs.readFileSync(FINAL.csv);

    // // load `content` into a cheerio object
    // var $ = cheerio.load(content);
    
    // // get all the rows on the main table
    // var ROWS = $('div > table > tbody > tr');
    // var Reunioes;
    
    // $(ROWS).each(function (i, elem) {
        
       
fs.readFile('/assignments/04UserCases/FINAL.csv', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
  var dataArray = data.split(/\r?\n/);  //Be careful if you are in a \r\n world...
  // Your array contains ['ID', 'D11', ... ]
})