var CountryData = [];
var IndividualDataTest = [12, 15, 20, 29, 80, 70, 90, 10, 22, 03, 30, 40, 55, 56, 12, 07];

d3.json('CountryData.json', function(error, data) {
    if (error) throw error;

    CountryData.push(data);
    console.log(CountryData);
    
    var svg = d3.select('#viz1')
    .append('svg')
    .style('width', window.innerWidth*0.75)
    .style('height', window.innerHeight-10);
    
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
        .style('opacity', 0.2)
        .on('mouseover', function (){ 
            d3.select(this)
            .style('opacity', 1);
        })
        .on('mouseout', function (){ 
            d3.select(this)
            .style('opacity', 0.2) });
    
        g.append('line')
                .attr("class", 'first')
                .attr("x1", 30)
                .attr("y1", function (d) {return yScale2(d.GDP_change_2016)})
                .attr("x2", window.innerWidth*0.31)
                .attr("y2", function (d) {return yScale1(d.eci_value)})
                .attr("stroke-width", 1);

        g.append('line')
                .attr("class", 'second')
                .attr("x1", window.innerWidth*0.36)
                .attr("y1", function (d) {return yScale1(d.eci_value)})
                .attr("x2", window.innerWidth*0.70)
                .attr("y2", function (d) {return yScale3(d.Gini)})
                .attr("stroke-width", 1);

        var middleLabel = g.append('g');

        middleLabel
            .append('rect')
            .attr('x', window.innerWidth*0.31)
            .attr("y", function (d) {return yScale1(d.eci_value)})
            .attr('height', 12)
            .attr('width', window.innerWidth*0.36-window.innerWidth*0.31)
            .attr('fill', 'lightgrey')
            .attr('stroke', 'white');
        
        middleLabel
            .append('text')
                .attr("class", "labels")
                .text(function (d) {return d.country_eci})
                .attr("x", window.innerWidth*0.335)
                .attr("y", function (d) {return yScale1(d.eci_value)+9})
                .attr('text-anchor', 'middle')
                .attr("visibility", "visible");

   });
    
// d3.json('_Assets/CountryData.json', function(error, data) {
//     if (error) throw error;

//     CountryData.push(data);
//     console.log(CountryData);
    
//     var svg = d3.select('#viz1')
//     .append('svg')
//     .style('width', window.innerWidth*0.75)
//     .style('height', window.innerHeight-10);
    
//     var yScale1 = d3.scaleLinear()
//     .domain([d3.min(data, function (d) { return d.eci_value}), d3.max(data, function(d) { return d.eci_value; })])
//     .range([window.innerHeight-10, 0]);
    
//     var yScale2 = d3.scaleLinear()
//     .domain([d3.min(data, function (d) { return d.GDP_change_2016}), d3.max(data, function(d) { return d.GDP_change_2016; })])
//     .range([window.innerHeight-10, 0]);
    
//     var yScale3 = d3.scaleLinear()
//     .domain([d3.min(data, function (d) { return d.Gini}), d3.max(data, function(d) { return d.Gini; })])
//     .range([window.innerHeight-10, 0]);
    
//         svg.selectAll('line#first')
//         .data(data)
//             .enter()
//             .append("line")
//                 .attr("x1", 0)
//                 .attr("id", '#first')
//                 .attr("y1", function (d) {return yScale2(d.GDP_change_2016)})
//                 .attr("x2", window.innerWidth*0.31)
//                 .attr("y2", function (d) {return yScale1(d.eci_value)})
//                 .attr("stroke-width", 1)
//                 .attr("stroke", "black");

//         svg.selectAll("line#second")
//         .data(data)
//             .enter()
//             .append("line")
//                 .attr("x1", window.innerWidth*0.36)
//                 .attr("id", '#second')
//                 .attr("y1", function (d) {return yScale1(d.eci_value)})
//                 .attr("x2", window.innerWidth*0.75)
//                 .attr("y2", function (d) {return yScale3(d.Gini)})
//                 .attr("stroke-width", 1)
//                 .attr("stroke", "black");

//         svg.selectAll("text.labels")
//         .data(data)
//             .enter()
//             .append('rect')
//             .attr('x', window.innerWidth*0.31)
//             .attr("y", function (d) {return yScale1(d.eci_value)})
//             .attr('height', 12)
//             .attr('width', window.innerWidth*0.36-window.innerWidth*0.31)
//             .attr('fill', 'black')
//             .attr('stroke', 'white')
//             .append("text")
//                 .attr("class", "labels")
//                 .text(function (d) {return d.country_eci})
//                 .attr("x", window.innerWidth*0.335)
//                 .attr("y", function (d) {return yScale1(d.eci_value)+7})
//                 .attr('text-anchor', 'middle')
//                 .attr("visibility", "visible");

//   });

var svg2 = d3.select('#viz2');
    // .append('svg')
    // .style('width', window.innerWidth*0.25)
    // .style('height', window.innerHeight-10);
    
svg2.selectAll('div')
    .data(IndividualDataTest)
    .enter()
    .append('div')
    .style('display', 'inline-block')
    .style('width', '5px')
    .style('height', function (d) {return d*3 + 'px'})
    .style('background-color', 'black')
    .style('margin', '2px');
    
    console.log(IndividualDataTest);