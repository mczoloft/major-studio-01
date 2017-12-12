var CountryData = [];
var IndividualDataTest = [12, 15, 20, 29, 80, 70, 90, 10, 22, 03, 30, 40, 55, 56, 12, 07];

d3.json('final.json', function(error, data) {
    if (error) throw error;

    CountryData.push(data);
    
    
    var svg = d3.select('#viz1')
    .append('svg')
    .attr('width', window.innerWidth*0.75)
    .attr('height', window.innerHeight-10);
    
    for (var i = CountryData.length; i++; ) {
        CountryData[i].lastIndex = 10;
    }
    
    console.log(CountryData);
    
    var yScale1 = d3.scaleLinear()
    .domain([d3.min(data, function (d) { return d.eci_value}), d3.max(data, function(d) { return d.eci_value; })])
    .range([window.innerHeight-30, 30]);
    
    var yScale2 = d3.scaleLinear()
    .domain([d3.min(data, function (d) { return d.GDP_change_2016}), d3.max(data, function(d) { return d.GDP_change_2016; })])
    .range([window.innerHeight-30, 30]);
    
    var yScale3 = d3.scaleLinear()
    .domain([d3.min(data, function (d) { return d.Gini}), d3.max(data, function(d) { return d.Gini; })])
    .range([window.innerHeight-30, 30]);
    
    var g =  svg.selectAll('g')
            .data(data)
                .enter()
                .append('g')
                .on('mouseover', function (){ 
                    d3.select(this)
                    .classed('hover', true);
                })
                .on('mouseout', function (){ 
                    d3.select(this)
                    .classed('hover', false);
                })

                .on('click', function (d, i){ 
                    g.each(function(d, j) {
                        d3.select(this)
                        .classed('active', i === j ? true : false);
                        
                });
                        console.log(d); 
                        
                        d3
                        .select('#viz2')
                        .style('background-color', 'red')
                        .html('<h2>' + d.country_eci + '</h2>')
                        .append('svg')
                        .attr('width', 100)
                        .attr('height', 100)
                        .append('circle')
                        .attr('x', 50)
                        .attr('y', 50)
                        .attr('r', function (){return d.Gini})
                        .attr('fill', 'white');
                        
                    
                });

        g.append('line')
            .attr('class', 'first')
            .attr("x1", 30)
            .attr("y1", function (d) {return yScale2(d.GDP_change_2016)})
            .attr("x2", window.innerWidth*0.25+30)
            .attr("y2", function (d) {return yScale1(d.eci_value)});

        g.append('line')
            .attr("class", 'second')
            .attr("x1", window.innerWidth*0.36)
            .attr("y1", function (d) {return yScale1(d.eci_value)})
            .attr("x2", window.innerWidth*0.70)
            .attr("y2", function (d) {return yScale3(d.Gini)});

        g.append('rect')
            .attr('x', window.innerWidth*0.31)
            .attr("y", function (d) {return yScale1(d.eci_value)})
            .attr('height', 12)
            .attr('width', window.innerWidth*0.36-window.innerWidth*0.31)
            .attr('fill', 'white')
            .attr('stroke', 'white')
            .style('opacity', 0);

        g.append('text')
            .attr("class", "labels")
            .text(function (d) {return d.country_eci})
            .attr("x", window.innerWidth*0.335)
            .attr("y", function (d) {return yScale1(d.eci_value)+9})
            .attr('text-anchor', 'middle');

   });
    
// var svg2 = d3.select('#viz2');
    
// svg2.selectAll('div')
//     .data(IndividualDataTest)
//     .enter()
//     .append('div')
//     .style('display', 'inline-block')
//     .style('width', '5px')
//     .style('height', function (d) {return d*3 + 'px'})
//     .style('background-color', 'black')
//     .style('margin', '2px');
    
    console.log(IndividualDataTest)
    
var Countries = [];

console.log(Countries);
