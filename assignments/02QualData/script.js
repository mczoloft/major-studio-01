var rawdata = [];
var rawdata2 = [];
var rawdata3 = [];
var rawdata4 = [];
var rawdata5 = [];
var dictionary1 = [];
var dictionary2 = [];
var dictionary3 = [];
var dictionary4 = [];
var dictionary5 = [];
var wordCount;
var wordCount2;
var wordCount3;
var wordCount4;
var wordCount5;

d3.text('assets/5_1_Intro.txt', function(error, data) {
    if (error) throw error;
    
    // analyze(data);
    
    rawdata.push(data);
    analyze(rawdata);
    //console.log(rawdata);
    
    d3.select('#viz1')
        .selectAll('div')
        .data(dictionary1.filter(function(d){ return d.count >= 5; }))
            .enter()
            .append('div')
                .attr('class', 'words')
                .text(function (d) {if (d.count >=5) return d.word + '  '})
                .style('font-size', function (d) {return d.count*2 + 'px'})
                .style('line-height', function (d) {return (d.count+d.count/3)*2 + 'px'})
                .style('opacity', function (d) {if (d.count>=50) return 1; if (d.count < 50 && d.count >=25) return 0.75; if (d.count < 25 && d.count >=10) return 0.5; if (d.count < 10 && d.count >=5) return 0.25})
                .style('padding-left', function (d) {return d.count*0.85 + 'px'})
                .style('padding-right', function (d) {return d.count*0.85 + 'px'});
    });
d3.text('assets/5_2.txt', function(error, data) {
    if (error) throw error;
    
    // analyze(data);
    
    rawdata2.push(data);
    analyze2(rawdata2);
    //console.log(rawdata2);
    
    d3.select('#viz2')
        .selectAll('div')
        .data(dictionary2.filter(function(d){ return d.count >= 5; }))
            .enter()
            .append('div')
                .attr('class', 'words')
                .text(function (d) {if (d.count >= 5) return d.word + '  '})
                .style('font-size', function (d) {return d.count*2 + 'px'})
                .style('line-height', function (d) {return (d.count+d.count/3)*2 + 'px'})
                .style('opacity', function (d) {if (d.count>=50) return 1; if (d.count < 50 && d.count >=25) return 0.75; if (d.count < 25 && d.count >=10) return 0.5; if (d.count < 10 && d.count >=5) return 0.25})
                .style('padding-left', function (d) {return d.count*0.85 + 'px'})
                .style('padding-right', function (d) {return d.count*0.85 + 'px'});
    });
d3.text('assets/5_3.txt', function(error, data) {
    if (error) throw error;
    
    // analyze(data);
    
    rawdata3.push(data);
    analyze3(rawdata3);
    //console.log(rawdata3);
    
    d3.select('#viz3')
        .selectAll('div')
        .data(dictionary3.filter(function(d){ return d.count >= 5; }))
            .enter()
            .append('div')
                .attr('class', 'words')
                .text(function (d) {if (d.count >=5) return d.word + '  '})
                .style('font-size', function (d) {return d.count*2 + 'px'})
                .style('line-height', function (d) {return (d.count+d.count/3)*2 + 'px'})
                .style('opacity', function (d) {if (d.count>=50) return 1; if (d.count < 50 && d.count >=25) return 0.75; if (d.count < 25 && d.count >=10) return 0.5; if (d.count < 10 && d.count >=5) return 0.25})
                .style('padding-left', function (d) {return d.count*0.85 + 'px'})
                .style('padding-right', function (d) {return d.count*0.85 + 'px'});
    });
d3.text('assets/5_4.txt', function(error, data) {
    if (error) throw error;
    
    // analyze(data);
    
    rawdata4.push(data);
    analyze4(rawdata4);
    //console.log(rawdata4);
    
    d3.select('#viz4')
        .selectAll('div')
        .data(dictionary4.filter(function(d){ return d.count >= 5; }))
            .enter()
            .append('div')
                .attr('class', 'words')
                .text(function (d) {if (d.count >=5) return d.word + '  '})
                .style('font-size', function (d) {return d.count*2 + 'px'})
                .style('line-height', function (d) {return (d.count+d.count/3)*2 + 'px'})
                .style('opacity', function (d) {if (d.count>=50) return 1; if (d.count < 50 && d.count >=25) return 0.75; if (d.count < 25 && d.count >=10) return 0.5; if (d.count < 10 && d.count >=5) return 0.25})
                .style('padding-left', function (d) {return d.count*0.85 + 'px'})
                .style('padding-right', function (d) {return d.count*0.85 + 'px'});
    });
d3.text('assets/5_5.txt', function(error, data) {
    if (error) throw error;
    
    // analyze(data);
    
    rawdata5.push(data);
    analyze5(rawdata5);
    //console.log(rawdata5);
    
    d3.select('#viz5')
        .selectAll('div')
        .data(dictionary5.filter(function(d){ return d.count >= 5; }))
            .enter()
            .append('div')
                .attr('class', 'words')
                .text(function (d) {if (d.count >=5) return d.word + '  '})
                .style('font-size', function (d) {return d.count*2 + 'px'})
                .style('line-height', function (d) {return (d.count+d.count/3)*2 + 'px'})
                .style('opacity', function (d) {if (d.count>=50) return 1; if (d.count < 50 && d.count >=25) return 0.75; if (d.count < 25 && d.count >=10) return 0.5; if (d.count < 10 && d.count >=5) return 0.25})
                .style('padding-left', function (d) {return d.count*0.85 + 'px'})
                .style('padding-right', function (d) {return d.count*0.85 + 'px'});
    });

function analyze(data) {
    
              data.forEach(function(phrases){
                console.log(phrases);
                // RegEx https://regexr.com/
                phrases = phrases.replace(/(\ba\b|\bable\b|\babout\b|\bacross\b|\bafter\b|\bal\b|\ball\b|\balmost\b|\balso\b|\bam\b|\bamong\b|\ban\b|\band\b|\bany\b|\bare\b|\bas\b|\bat\b|\bbe\b|\bbecause\b|\bbeen\b|\bbut\b|\bby\b|\bcan\b|\bcannot\b|\bcould\b|\bdear\b|\bdid\b|\bdo\b|\bdoes\b|\beither\b|\belse\b|\bever\b|\bevery\b|\bet\b|\bfor\b|\bfrom\b|\bget\b|\bgot\b|\bhad\b|\bhas\b|\bhave\b|\bhe\b|\bher\b|\bhers\b|\bhim\b|\bhis\b|\bhow\b|\bhowever\b|\bi\b|\bif\b|\bin\b|\binto\b|\bis\b|\bit\b|\bits\b|\bjust\b|\bleast\b|\blet\b|\blike\b|\blikely\b|\bmay\b|\bme\b|\bmight\b|\bmost\b|\bmust\b|\bmy\b|\bneither\b|\bno\b|\bnor\b|\bnot\b|\bof\b|\boff\b|\boften\b|\bon\b|\bonly\b|\bor\b|\bother\b|\bour\b|\bown\b|\bper\b|\brather\b|\bsaid\b|\bsay\b|\bsays\b|\bshe\b|\bshould\b|\bsince\b|\bso\b|\bsome\b|\bthan\b|\bthat\b|\bthe\b|\btheir\b|\bthem\b|\bthen\b|\bthere\b|\bthese\b|\bthey\b|\bthis\b|\btis\b|\bto\b|\btoo\b|\btwas\b|\bus\b|\bwants\b|\bwas\b|\bwe\b|\bwere\b|\bwhat\b|\bwhen\b|\bwhere\b|\bwhich\b|\bwhile\b|\bwho\b|\bwhom\b|\bwhy\b|\bwill\b|\bwith\b|\bwould\b|\byet\b|\byou\b|\byour\b|\bain’t\b|\baren’t\b|\bcan’t\b|\bcould’ve\b|\bcouldn’t\b|\bdidn’t\b|\bdoesn’t\b|\bdon’t\b|\bhasn’t\b|\bhe’d\b|\bhe’ll\b|\bhe’s\b|\bhow’d\b|\bhow’ll\b|\bhow’s\b|\bi’d\b|\bi’ll\b|\bi’m\b|\bi’ve\b|\bisn’t\b|\bit’s\b|\bmight’ve\b|\bmightn’t\b|\bmust’ve\b|\bmustn’t\b|\bshan’t\b|\bshe’d\b|\bshe’ll\b|\bshe’s\b|\bshould’ve\b|\bshouldn’t\b|\bthat’ll\b|\bthat’s\b|\bthere’s\b|\bthey’d\b|\bthey’ll\b|\bthey’re\b|\bthey’ve\b|\bwasn’t\b|\bwe’d\b|\bwe’ll\b|\bwe’re\b|\bweren’t\b|\bwhat’d\b|\bwhat’s\b|\bwhen’d\b|\bwhen’ll\b|\bwhen’s\b|\bwhere’d\b|\bwhere’ll\b|\bwhere’s\b|\bwho’d\b|\bwho’ll\b|\bwho’s\b|\bwhy’d\b|\bwhy’ll\b|\bwhy’s\b|\bwon’t\b|\bwould’ve\b|\bwouldn’t\b|\byou’d\b|\byou’ll\b|\byou’re\b|\byou’ve\b|\d{1,4})/gi, '').replace(/[^\w\s]/gi, '');  // The caret (^) character is the negation of the set [...], gi is global and case-insensitive and the safelist in this example is digits, word characters (\w), and whitespace (\s).

                var words = phrases.split(' ');
                
                words.forEach(function(word) {

                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
                    wordCount = dictionary1.filter(function(element) {
                        return element.word == word;
                    })
                    
                    if (wordCount.length)
                        wordCount[0].count++;
                    else
                        dictionary1.push({word: word, count: 1});
                });
                
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
                dictionary1.sort(function(a, b) {
                    return b.count - a.count;
                });
                dictionary1.shift();

            });
            
            // console.log(dictionary1);
        };
function analyze2(data) {
    
              data.forEach(function(phrases){
                console.log(phrases);
                // RegEx https://regexr.com/
                phrases = phrases.replace(/(\ba\b|\bable\b|\babout\b|\bacross\b|\bafter\b|\bal\b|\ball\b|\balmost\b|\balso\b|\bam\b|\bamong\b|\ban\b|\band\b|\bany\b|\bare\b|\bas\b|\bat\b|\bbe\b|\bbecause\b|\bbeen\b|\bbut\b|\bby\b|\bcan\b|\bcannot\b|\bcould\b|\bdear\b|\bdid\b|\bdo\b|\bdoes\b|\beither\b|\belse\b|\bever\b|\bevery\b|\bet\b|\bfor\b|\bfrom\b|\bget\b|\bgot\b|\bhad\b|\bhas\b|\bhave\b|\bhe\b|\bher\b|\bhers\b|\bhim\b|\bhis\b|\bhow\b|\bhowever\b|\bi\b|\bif\b|\bin\b|\binto\b|\bis\b|\bit\b|\bits\b|\bjust\b|\bleast\b|\blet\b|\blike\b|\blikely\b|\bmay\b|\bme\b|\bmight\b|\bmost\b|\bmust\b|\bmy\b|\bneither\b|\bno\b|\bnor\b|\bnot\b|\bof\b|\boff\b|\boften\b|\bon\b|\bonly\b|\bor\b|\bother\b|\bour\b|\bown\b|\bper\b|\brather\b|\bsaid\b|\bsay\b|\bsays\b|\bshe\b|\bshould\b|\bsince\b|\bso\b|\bsome\b|\bthan\b|\bthat\b|\bthe\b|\btheir\b|\bthem\b|\bthen\b|\bthere\b|\bthese\b|\bthey\b|\bthis\b|\btis\b|\bto\b|\btoo\b|\btwas\b|\bus\b|\bwants\b|\bwas\b|\bwe\b|\bwere\b|\bwhat\b|\bwhen\b|\bwhere\b|\bwhich\b|\bwhile\b|\bwho\b|\bwhom\b|\bwhy\b|\bwill\b|\bwith\b|\bwould\b|\byet\b|\byou\b|\byour\b|\bain’t\b|\baren’t\b|\bcan’t\b|\bcould’ve\b|\bcouldn’t\b|\bdidn’t\b|\bdoesn’t\b|\bdon’t\b|\bhasn’t\b|\bhe’d\b|\bhe’ll\b|\bhe’s\b|\bhow’d\b|\bhow’ll\b|\bhow’s\b|\bi’d\b|\bi’ll\b|\bi’m\b|\bi’ve\b|\bisn’t\b|\bit’s\b|\bmight’ve\b|\bmightn’t\b|\bmust’ve\b|\bmustn’t\b|\bshan’t\b|\bshe’d\b|\bshe’ll\b|\bshe’s\b|\bshould’ve\b|\bshouldn’t\b|\bthat’ll\b|\bthat’s\b|\bthere’s\b|\bthey’d\b|\bthey’ll\b|\bthey’re\b|\bthey’ve\b|\bwasn’t\b|\bwe’d\b|\bwe’ll\b|\bwe’re\b|\bweren’t\b|\bwhat’d\b|\bwhat’s\b|\bwhen’d\b|\bwhen’ll\b|\bwhen’s\b|\bwhere’d\b|\bwhere’ll\b|\bwhere’s\b|\bwho’d\b|\bwho’ll\b|\bwho’s\b|\bwhy’d\b|\bwhy’ll\b|\bwhy’s\b|\bwon’t\b|\bwould’ve\b|\bwouldn’t\b|\byou’d\b|\byou’ll\b|\byou’re\b|\byou’ve\b|\d{1,4})/gi, '').replace(/[^\w\s]/gi, '');  // The caret (^) character is the negation of the set [...], gi is global and case-insensitive and the safelist in this example is digits, word characters (\w), and whitespace (\s).

                var words = phrases.split(' ');
                
                words.forEach(function(word) {

                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
                    wordCount2 = dictionary2.filter(function(element) {
                        return element.word == word;
                    })
                    
                    if (wordCount2.length)
                        wordCount2[0].count++;
                    else
                        dictionary2.push({word: word, count: 1});
                })
                
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
                dictionary2.sort(function(a, b) {
                    return b.count - a.count;
                });
                dictionary2.shift();

            });
            
            // console.log(words);
        };
function analyze3(data) {
    
              data.forEach(function(phrases){
                console.log(phrases);
                // RegEx https://regexr.com/
                phrases = phrases.replace(/(\ba\b|\bable\b|\babout\b|\bacross\b|\bafter\b|\bal\b|\ball\b|\balmost\b|\balso\b|\bam\b|\bamong\b|\ban\b|\band\b|\bany\b|\bare\b|\bas\b|\bat\b|\bbe\b|\bbecause\b|\bbeen\b|\bbut\b|\bby\b|\bcan\b|\bcannot\b|\bcould\b|\bdear\b|\bdid\b|\bdo\b|\bdoes\b|\beither\b|\belse\b|\bever\b|\bevery\b|\bet\b|\bfor\b|\bfrom\b|\bget\b|\bgot\b|\bhad\b|\bhas\b|\bhave\b|\bhe\b|\bher\b|\bhers\b|\bhim\b|\bhis\b|\bhow\b|\bhowever\b|\bi\b|\bif\b|\bin\b|\binto\b|\bis\b|\bit\b|\bits\b|\bjust\b|\bleast\b|\blet\b|\blike\b|\blikely\b|\bmay\b|\bme\b|\bmight\b|\bmost\b|\bmust\b|\bmy\b|\bneither\b|\bno\b|\bnor\b|\bnot\b|\bof\b|\boff\b|\boften\b|\bon\b|\bonly\b|\bor\b|\bother\b|\bour\b|\bown\b|\bper\b|\brather\b|\bsaid\b|\bsay\b|\bsays\b|\bshe\b|\bshould\b|\bsince\b|\bso\b|\bsome\b|\bthan\b|\bthat\b|\bthe\b|\btheir\b|\bthem\b|\bthen\b|\bthere\b|\bthese\b|\bthey\b|\bthis\b|\btis\b|\bto\b|\btoo\b|\btwas\b|\bus\b|\bwants\b|\bwas\b|\bwe\b|\bwere\b|\bwhat\b|\bwhen\b|\bwhere\b|\bwhich\b|\bwhile\b|\bwho\b|\bwhom\b|\bwhy\b|\bwill\b|\bwith\b|\bwould\b|\byet\b|\byou\b|\byour\b|\bain’t\b|\baren’t\b|\bcan’t\b|\bcould’ve\b|\bcouldn’t\b|\bdidn’t\b|\bdoesn’t\b|\bdon’t\b|\bhasn’t\b|\bhe’d\b|\bhe’ll\b|\bhe’s\b|\bhow’d\b|\bhow’ll\b|\bhow’s\b|\bi’d\b|\bi’ll\b|\bi’m\b|\bi’ve\b|\bisn’t\b|\bit’s\b|\bmight’ve\b|\bmightn’t\b|\bmust’ve\b|\bmustn’t\b|\bshan’t\b|\bshe’d\b|\bshe’ll\b|\bshe’s\b|\bshould’ve\b|\bshouldn’t\b|\bthat’ll\b|\bthat’s\b|\bthere’s\b|\bthey’d\b|\bthey’ll\b|\bthey’re\b|\bthey’ve\b|\bwasn’t\b|\bwe’d\b|\bwe’ll\b|\bwe’re\b|\bweren’t\b|\bwhat’d\b|\bwhat’s\b|\bwhen’d\b|\bwhen’ll\b|\bwhen’s\b|\bwhere’d\b|\bwhere’ll\b|\bwhere’s\b|\bwho’d\b|\bwho’ll\b|\bwho’s\b|\bwhy’d\b|\bwhy’ll\b|\bwhy’s\b|\bwon’t\b|\bwould’ve\b|\bwouldn’t\b|\byou’d\b|\byou’ll\b|\byou’re\b|\byou’ve\b|\d{1,4})/gi, '').replace(/[^\w\s]/gi, '');  // The caret (^) character is the negation of the set [...], gi is global and case-insensitive and the safelist in this example is digits, word characters (\w), and whitespace (\s).

                var words = phrases.split(' ');
                
                words.forEach(function(word) {

                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
                    wordCount3 = dictionary3.filter(function(element) {
                        return element.word == word;
                    })
                    
                    if (wordCount3.length)
                        wordCount3[0].count++;
                    else
                        dictionary3.push({word: word, count: 1});
                })
                
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
                dictionary3.sort(function(a, b) {
                    return b.count - a.count;
                });
                dictionary3.shift();

            });
            
            // console.log(words);
        };
function analyze4(data) {
    
              data.forEach(function(phrases){
                console.log(phrases);
                // RegEx https://regexr.com/
                phrases = phrases.replace(/(\ba\b|\bable\b|\babout\b|\bacross\b|\bafter\b|\bal\b|\ball\b|\balmost\b|\balso\b|\bam\b|\bamong\b|\ban\b|\band\b|\bany\b|\bare\b|\bas\b|\bat\b|\bbe\b|\bbecause\b|\bbeen\b|\bbut\b|\bby\b|\bcan\b|\bcannot\b|\bcould\b|\bdear\b|\bdid\b|\bdo\b|\bdoes\b|\beither\b|\belse\b|\bever\b|\bevery\b|\bet\b|\bfor\b|\bfrom\b|\bget\b|\bgot\b|\bhad\b|\bhas\b|\bhave\b|\bhe\b|\bher\b|\bhers\b|\bhim\b|\bhis\b|\bhow\b|\bhowever\b|\bi\b|\bif\b|\bin\b|\binto\b|\bis\b|\bit\b|\bits\b|\bjust\b|\bleast\b|\blet\b|\blike\b|\blikely\b|\bmay\b|\bme\b|\bmight\b|\bmost\b|\bmust\b|\bmy\b|\bneither\b|\bno\b|\bnor\b|\bnot\b|\bof\b|\boff\b|\boften\b|\bon\b|\bonly\b|\bor\b|\bother\b|\bour\b|\bown\b|\bper\b|\brather\b|\bsaid\b|\bsay\b|\bsays\b|\bshe\b|\bshould\b|\bsince\b|\bso\b|\bsome\b|\bthan\b|\bthat\b|\bthe\b|\btheir\b|\bthem\b|\bthen\b|\bthere\b|\bthese\b|\bthey\b|\bthis\b|\btis\b|\bto\b|\btoo\b|\btwas\b|\bus\b|\bwants\b|\bwas\b|\bwe\b|\bwere\b|\bwhat\b|\bwhen\b|\bwhere\b|\bwhich\b|\bwhile\b|\bwho\b|\bwhom\b|\bwhy\b|\bwill\b|\bwith\b|\bwould\b|\byet\b|\byou\b|\byour\b|\bain’t\b|\baren’t\b|\bcan’t\b|\bcould’ve\b|\bcouldn’t\b|\bdidn’t\b|\bdoesn’t\b|\bdon’t\b|\bhasn’t\b|\bhe’d\b|\bhe’ll\b|\bhe’s\b|\bhow’d\b|\bhow’ll\b|\bhow’s\b|\bi’d\b|\bi’ll\b|\bi’m\b|\bi’ve\b|\bisn’t\b|\bit’s\b|\bmight’ve\b|\bmightn’t\b|\bmust’ve\b|\bmustn’t\b|\bshan’t\b|\bshe’d\b|\bshe’ll\b|\bshe’s\b|\bshould’ve\b|\bshouldn’t\b|\bthat’ll\b|\bthat’s\b|\bthere’s\b|\bthey’d\b|\bthey’ll\b|\bthey’re\b|\bthey’ve\b|\bwasn’t\b|\bwe’d\b|\bwe’ll\b|\bwe’re\b|\bweren’t\b|\bwhat’d\b|\bwhat’s\b|\bwhen’d\b|\bwhen’ll\b|\bwhen’s\b|\bwhere’d\b|\bwhere’ll\b|\bwhere’s\b|\bwho’d\b|\bwho’ll\b|\bwho’s\b|\bwhy’d\b|\bwhy’ll\b|\bwhy’s\b|\bwon’t\b|\bwould’ve\b|\bwouldn’t\b|\byou’d\b|\byou’ll\b|\byou’re\b|\byou’ve\b|\d{1,4})/gi, '').replace(/[^\w\s]/gi, '');  // The caret (^) character is the negation of the set [...], gi is global and case-insensitive and the safelist in this example is digits, word characters (\w), and whitespace (\s).

                var words = phrases.split(' ');
                
                words.forEach(function(word) {

                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
                    wordCount4 = dictionary4.filter(function(element) {
                        return element.word == word;
                    })
                    
                    if (wordCount4.length)
                        wordCount4[0].count++;
                    else
                        dictionary4.push({word: word, count: 1});
                })
                
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
                dictionary4.sort(function(a, b) {
                    return b.count - a.count;
                });
                dictionary4.shift();

            });
            
            // console.log(words);
        };
function analyze5(data) {
    
              data.forEach(function(phrases){
                console.log(phrases);
                // RegEx https://regexr.com/
                phrases = phrases.replace(/(\ba\b|\bable\b|\babout\b|\bacross\b|\bafter\b|\bal\b|\ball\b|\balmost\b|\balso\b|\bam\b|\bamong\b|\ban\b|\band\b|\bany\b|\bare\b|\bas\b|\bat\b|\bbe\b|\bbecause\b|\bbeen\b|\bbut\b|\bby\b|\bcan\b|\bcannot\b|\bcould\b|\bdear\b|\bdid\b|\bdo\b|\bdoes\b|\beither\b|\belse\b|\bever\b|\bevery\b|\bet\b|\bfor\b|\bfrom\b|\bget\b|\bgot\b|\bhad\b|\bhas\b|\bhave\b|\bhe\b|\bher\b|\bhers\b|\bhim\b|\bhis\b|\bhow\b|\bhowever\b|\bi\b|\bif\b|\bin\b|\binto\b|\bis\b|\bit\b|\bits\b|\bjust\b|\bleast\b|\blet\b|\blike\b|\blikely\b|\bmay\b|\bme\b|\bmight\b|\bmost\b|\bmust\b|\bmy\b|\bneither\b|\bno\b|\bnor\b|\bnot\b|\bof\b|\boff\b|\boften\b|\bon\b|\bonly\b|\bor\b|\bother\b|\bour\b|\bown\b|\bper\b|\brather\b|\bsaid\b|\bsay\b|\bsays\b|\bshe\b|\bshould\b|\bsince\b|\bso\b|\bsome\b|\bthan\b|\bthat\b|\bthe\b|\btheir\b|\bthem\b|\bthen\b|\bthere\b|\bthese\b|\bthey\b|\bthis\b|\btis\b|\bto\b|\btoo\b|\btwas\b|\bus\b|\bwants\b|\bwas\b|\bwe\b|\bwere\b|\bwhat\b|\bwhen\b|\bwhere\b|\bwhich\b|\bwhile\b|\bwho\b|\bwhom\b|\bwhy\b|\bwill\b|\bwith\b|\bwould\b|\byet\b|\byou\b|\byour\b|\bain’t\b|\baren’t\b|\bcan’t\b|\bcould’ve\b|\bcouldn’t\b|\bdidn’t\b|\bdoesn’t\b|\bdon’t\b|\bhasn’t\b|\bhe’d\b|\bhe’ll\b|\bhe’s\b|\bhow’d\b|\bhow’ll\b|\bhow’s\b|\bi’d\b|\bi’ll\b|\bi’m\b|\bi’ve\b|\bisn’t\b|\bit’s\b|\bmight’ve\b|\bmightn’t\b|\bmust’ve\b|\bmustn’t\b|\bshan’t\b|\bshe’d\b|\bshe’ll\b|\bshe’s\b|\bshould’ve\b|\bshouldn’t\b|\bthat’ll\b|\bthat’s\b|\bthere’s\b|\bthey’d\b|\bthey’ll\b|\bthey’re\b|\bthey’ve\b|\bwasn’t\b|\bwe’d\b|\bwe’ll\b|\bwe’re\b|\bweren’t\b|\bwhat’d\b|\bwhat’s\b|\bwhen’d\b|\bwhen’ll\b|\bwhen’s\b|\bwhere’d\b|\bwhere’ll\b|\bwhere’s\b|\bwho’d\b|\bwho’ll\b|\bwho’s\b|\bwhy’d\b|\bwhy’ll\b|\bwhy’s\b|\bwon’t\b|\bwould’ve\b|\bwouldn’t\b|\byou’d\b|\byou’ll\b|\byou’re\b|\byou’ve\b|\d{1,4})/gi, '').replace(/[^\w\s]/gi, '');  // The caret (^) character is the negation of the set [...], gi is global and case-insensitive and the safelist in this example is digits, word characters (\w), and whitespace (\s).

                var words = phrases.split(' ');
                
                words.forEach(function(word) {

                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
                    wordCount5 = dictionary5.filter(function(element) {
                        return element.word == word;
                    })
                    
                    if (wordCount5.length)
                        wordCount5[0].count++;
                    else
                        dictionary5.push({word: word, count: 1});
                })
                
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
                dictionary5.sort(function(a, b) {
                    return b.count - a.count;
                });
                dictionary5.shift();

            });
            
            // console.log(words);
        };