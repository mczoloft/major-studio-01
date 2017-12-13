var CountryData = [];

d3.json('finalformatArray.json', function(error, data) {
    if (error) throw error;

    CountryData.push(data);
    
    var svg = d3.select('#viz1')
    .append('svg')
    .attr('width', '800')
    .attr('height', '100%');
    
    console.log(CountryData);
    
    var yScale1 = d3.scaleLinear()
    // .domain([d3.min(data, function (d) { return d.LastECI}), d3.max(data, function(d) { return d.LastECI; })])
    .domain([-2.3,0.2])
    .range([700, 30]);
    
    console.log('maior ECI: ' + d3.max(data, function(d) { return d.LastECI}));
    console.log('menor ECI: ' + d3.min(data, function(d) { return d.LastECI}));
    console.log('maior GINI: ' + d3.max(data, function(d) { return d.LastGINI}));
    console.log('menor GINI: ' + d3.min(data, function(d) { return d.LastGINI}));
    
    var yScale2 = d3.scaleLog()
    // .domain([d3.min(data, function (d) { return d.LastGDP}), d3.max(data, function(d) { return d.LastGDP; })])
    .domain([100, 10000])
    .range([700, 30]);
    
    var yScale3 = d3.scaleLinear()
    .domain([65, 30])
    .range([700, 30]);
    
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
                        .style('background-color', '#eae8de')
                        .html('<h2>' + d.Country_Name + '</h2>')
                        .append('svg')
                        .attr('width', 200)
                        .attr('height', 200)
                        .append('g')
                        .attr('class', 'barchart')
                        .each(function (){
                            console.log(d);
                            var chartvalue = [];
                            chartvalue.push(d.GDP);
                            
                            
                                
                            d3.select(this)
                            .selectAll('circle')
                            .data(chartvalue)
                            .enter()
                            .append('circle')
                            .attr('x', function (datum, k){return (k*20)+20})
                            .attr('y', 100)
                            .attr('r', function (d){return d[k]})
                            .attr('fill', 'white');
                                
                            
                            
                        });
                        
                    
                });

        g.append('line')
            .attr('class', 'first')
            .attr("x1", 50)
            .attr("y1", function (d) {return yScale2(d.LastGDP)})
            .attr("x2", 350)
            .attr("y2", function (d) {return yScale1(d.LastECI)});

        g.append('line')
            .attr("class", 'second')
            .attr("x1", 450)
            .attr("y1", function (d) {return yScale1(d.LastECI)})
            .attr("x2", 750)
            .attr("y2", function (d) {return yScale3(d.LastGINI)});

        g.append('rect')
            .attr('x', 345)
            .attr("y", function (d) {return yScale1(d.LastECI)})
            .attr('height', 12)
            .attr('width', 28)
            .attr('fill', 'white')
            .attr('stroke', 'white')
            .style('opacity', 0);

        g.append('text')
            .attr("class", "labels")
            .text(function (d) {return d.Country_Name})
            .attr("x", 400)
            .attr("y", function (d) {return yScale1(d.LastECI)+9})
            .attr('text-anchor', 'middle');
            
        var YAxisGDP = d3.axisLeft()
            .scale(yScale2)
            .ticks(5, '$')
            .tickValues([100, 500, 1000, 5000, 10000]);

        var YAxisGINI = d3.axisRight()
            .scale(yScale3)
            .ticks(5);
            
        var padding = 50;
        
        svg.append('g')
        	.attr('class', 'axis')
        	.attr('transform', 'translate(' + padding + ', 0)')
        	.call(YAxisGDP);
        	
        svg.append('g')
            .attr('class', 'axis')
        	.attr('transform', 'translate(750, 0)')
            .call(YAxisGINI);
            
            g.append('line')
            .attr("x1", 20)
            .attr("y1", function (d) {return yScale2(d.LastGDP)})
            .attr("x2", 270)
            .attr("y2", function (d) {return yScale1(d.LastECI)});

   });
    
var Countries = [];

console.log(Countries);

d3.json('finalformatArray.json', function(error, newdata) {
if (error) throw error;
console.log(newdata[0].ECI);

})

// function loglast(){
    
//     for (var i = newdata.length; i--; ) {
//         Things[i];
//     }
    
    
//     if (true) {
        
//     }
// }