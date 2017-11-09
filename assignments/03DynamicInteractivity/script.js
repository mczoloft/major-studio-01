var CountryData = [];

d3.json('_Assets/CountryData.json', function(error, data) {
    if (error) throw error;

    CountryData.push(data);
    console.log(CountryData);
    
    var svg = d3.select('#viz1')
    .append('svg')
    .attr('width', 450)
    .attr('height', 820);
    
    var yScale1 = d3.scaleLinear()
    .domain([d3.min(data, function (d) { return d.eci_value}), d3.max(data, function(d) { return d.eci_value; })])
    .range([820, 0]);
    
    var yScale2 = d3.scaleLinear()
    .domain([d3.min(data, function (d) { return d.GDP_change_2016}), d3.max(data, function(d) { return d.GDP_change_2016; })])
    .range([820, 0]);
    
    var yScale3 = d3.scaleLinear()
    .domain([d3.min(data, function (d) { return d.Gini}), d3.max(data, function(d) { return d.Gini; })])
    .range([820, 0]);

        svg.selectAll('line#first')
        .data(data)
            .enter()
            .append("line")
                .attr("x1", 0)
                .attr("id", '#first')
                .attr("y1", function (d) {return yScale1(d.eci_value)})
                .attr("x2", 250)
                .attr("y2", function (d) {return yScale2(d.GDP_change_2016)})
                .attr("stroke-width", 1)
                // .style('opacity', 0.3)
                .attr("stroke", "black");

        svg.selectAll("line#second")
        .data(data)
            .enter()
            .append("line")
                .attr("x1", 250)
                .attr("id", '#second')
                .attr("y1", function (d) {return yScale2(d.GDP_change_2016)})
                .attr("x2", 500)
                .attr("y2", function (d) {return yScale3(d.Gini)})
                .attr("stroke-width", 1)
                .attr("stroke", "violet");
                // .style('opacity', 0.3);
                
                
        svg.selectAll("text")
        .data(data)
            .enter()
            .append("text")
                .attr("class", "labels")
                .text(function (d) {return d.country_eci})
                .attr("x", 2)
                .attr("y", function (d) {return yScale1(d.eci_value)})
                // .style('opacity', 0.3)
                .attr("visibility", "visible");
                
        // svg.selectAll("#first, #second, .labels")
        // .on('mouseon', function() {
        //           d3.select(this).attr("visibility", "visible").style('opacity', 1); 
        //         })
        //         .on('mouseover', function() {
        //           d3.select(this).style('opacity', 0.3).attr('visibility', "inherit"); 
        //         });


    
    });
    
   
