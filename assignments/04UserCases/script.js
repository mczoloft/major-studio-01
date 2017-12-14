var CountryData = [];
var GDP = new BarChart();
var ECI = new BarChart();
var GINI = new BarChart();
GDP.setup();
ECI.setup();
GINI.setup();

d3.json('finalformatValues.json', function(error, data) {
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
    .range([750, 100]);
    
    // console.log('maior ECI: ' + d3.max(data, function(d) { return d.LastECI}));
    // console.log('menor ECI: ' + d3.min(data, function(d) { return d.LastECI}));
    // console.log('maior GINI: ' + d3.max(data, function(d) { return d.LastGINI}));
    // console.log('menor GINI: ' + d3.min(data, function(d) { return d.LastGINI}));
    
    var yScale2 = d3.scaleLog()
    // .domain([d3.min(data, function (d) { return d.LastGDP}), d3.max(data, function(d) { return d.LastGDP; })])
    .domain([100, 10000])
    .range([750, 100]);
    
    var yScale3 = d3.scaleLinear()
    .domain([65, 30])
    .range([750, 100]);
    
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

                    // Atualiza dado dos 3 BarCharts
                    GDP.update(d.GDP, true, 'GDP', '#FFA57E');
                    ECI.update(d.ECI, false, 'ECI', 'black');                    
                    GINI.update(d.GINI, false, 'GINI', '#1C5FF0');

                    // Função pra apagar todos e ativar só o clicado
                    g.each(function(datum, j) {
                        d3.select(this)
                        .classed('active', i === j ? true : false);
                        
                    d3
                    .select('#viz3')
                    // .style('background-color', 'red')
                    .html(d.Country_Name + '<br><small>latest data</small><br><span class="labelgdp">GDP: US$ ' + d.LastGDP + ' </span>   <span class="labeleci">ECI: ' + d.LastECI + '   </span> <span class="labelgini">GINI: ' + d.LastGINI + '</span>')
                    ;
                        
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
        
        g.append('text')
            .attr('class', 'biglabels')
            .text(function (d) {return d.LastGDP;})
            .attr("x", 60)
            .attr("y", function (d) {return yScale2(d.LastGDP)-9})
            .attr('text-anchor', 'left')
            .style('visibility', 'hidden')
            ;
            
            svg.append('text')
            .attr('class', 'biglabels')
            .text('GINI (most recent year)')
            .attr("x", 750)
            .attr("y", 35)
            .style('text-anchor', 'end')
            ;
            
            svg.append('text')
            .attr('class', 'biglabels')
            .text('ECI (2016)')
            .attr("x", 400)
            .attr("y", 35)
            .style('text-anchor', 'middle')
            ;
            
            svg.append('text')
            .attr('class', 'biglabels')
            .text('GDP per Capita, US$ dollars (in 2016)')
            .attr("x", 50)
            .attr("y", 35)
            .attr('text-anchor', 'left')
            ;
            
        var YAxisGDP = d3.axisLeft()
            .scale(yScale2)
            .ticks(5, '$')
            .tickValues([100, 500, 1000, 5000, 10000]);

        var YAxisGINI = d3.axisRight()
            .scale(yScale3)
            .ticks(5);
            
        var YAxisECI = d3.axisRight()
            .scale(yScale1)
            .ticks(3);
            
        var YAxisECI2 = d3.axisLeft()
            .scale(yScale1)
            .ticks(3);
            
        var padding = 50;
        
        svg.append('g')
        	.attr('class', 'axis')
        	.attr('transform', 'translate(' + padding + ', 0)')
        	.call(YAxisGDP);
        	
        svg.append('g')
        	.attr('class', 'axis')
        	.attr('transform', 'translate(350, 0)')
        	.call(YAxisECI);
        	
    	svg.append('g')
        	.attr('class', 'axis')
        	.attr('transform', 'translate(450, 0)')
        	.call(YAxisECI2);
        	
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
   
   